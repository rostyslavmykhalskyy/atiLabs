<template>
  <main>
    <transition name="fadeslow">
      <h2 v-if="msg" key="login" class="main__h">Witaj, {{ loginedUser }}</h2>
    </transition>
    <transition name="fadeslow">
      <p v-if="msg" key="msg" class="main__p">{{ msg }}</p>
    </transition>
    <transition name="fadeslow">
      <button v-if="info.ankiet" key="button" @click="goToAnkiet">Start</button>
    </transition>
  </main>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  data() {
    return {
      loginedUser: null,
      info: {
        ankiet: null,
        done: {
          a: "",
          b: ""
        }
      },
      ankiet: null
    };
  },
  methods: {
    goToAnkiet() {
      if (this.ankiet) {
        this.$router.replace(this.ankiet);
      }
    }
  },
  computed: {
    msg() {
      if (this.ankiet) {
        this.info.ankiet = true;
        return "Mamy dla Ciebie pierwsze badanie. Przewidywany czas realizacji: 5 minut. Proponowane wynagrodzenie: 30 złotych brutto. Ankieta dostępna do 26 lutego 2019 do północy. Naciśnij przycisk “Start”, aby rozpocząć badanie.";
      } else {
        this.info.ankiet = false;
        return "Nie masz żadnej ankiety do wypełnienia";
      }
    }
  },
  created() {
    var a;
    var b;

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.loginedUser = fb.auth().currentUser.email;
      } else {
        this.logined = false;
      }
    });

    db.collection("ankiet")
      .get()
      .then(query => {
        query.forEach(user => {
          if (user.data().user === fb.auth().currentUser.uid) {
            if (user.data().ankiet) {
              if (user.data().ankiet === "A") {
                a = user.data().ankiet;
              }
              if (user.data().ankiet === "B") {
                b = user.data().ankiet;
              }
            }
          } else {
            this.info.done = false;
          }
        });
      });
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().user === fb.auth().currentUser.uid) {
            if (doc.data().ankiet == "A") {
              if (doc.data().ankiet != a) {
                this.ankiet = "/ankieta";
              }
            } else if (doc.data().ankiet == "B") {
              if (doc.data().ankiet != b) {
                this.ankiet = "/ankietb";
              }
            }
          }
        });
      });
  }
};
</script>
<style scoped>
.main__p {
  width: 70%;
  margin-bottom: 5vh;
}
button {
  padding: 1vh 4%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2f55d4;
  text-transform: uppercase;
}
</style>