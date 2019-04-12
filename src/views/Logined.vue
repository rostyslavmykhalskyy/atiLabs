<template>
  <main>
    <!-- <transition name="fadeslow">
      <h2 v-if="msg" key="login" class="main__h">Witaj, {{ loginedUser }}</h2>
    </transition>-->
    <!-- <transition name="fadeslow">
      <p v-if="msg" key="msg" class="main__p">{{ msg }}</p>
    </transition>-->
    <div class="testowanie" v-if="version == null">
      <button @click="version = 0">Wersja Film</button>
      <button @click="version = 1">Wersja Foto</button>
      <button @click="version = 2">Wersja Ilustracja</button>
    </div>
    <div v-else>
      <div v-if="version == 0" class="main__presentation">
        <p class="main__p">
          O tej samej sytuacji możesz myśleć w różny sposób.
          Zależnie od tego, jak myślisz o danej sytuacji, pojawiają się inne emocje.Sprawdź, jak Adam reaguje na różne myśli dotyczące sesji:
          kliknij na odpowiednią myśl i zobaczysz ilustrację.
          Po obejrzeniu wszystkich ilustracji, wypełnij ankietę.
        </p>
        <div class="main__presentation__elem">
          <div class="main__presentation__elem__buttons">
            <button class="main__presentation__elem__button" v-for="(item, index) in textThought" 
            :key="item.id" 
            :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
            @click="clicked(index)">
              {{ item }}
            </button>
          </div>
          <div class="main__presentation__elem__media">
          <transition name="fade" mode="out-in">
            <div v-if="!textThoughtClicked" key="start" class="main__presentation__elem__media__movie">
                <video preload="none" poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/ee8711a76d3373503ceea1f997837751.jpg?alt=media&token=09652034-7206-4b15-9057-27b8f8fa7de5" controls data-plyr-config='{ "controls" : ["play", "progress", "current-time", "volume", "fullscreen"]}'>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/dd19c4c7ce480a06486f1d38555e58c1.mp4?alt=media&token=ef0b0112-27db-4a1a-b753-572ae6539f15"
                    type="video/mp4"
                  >
                </video>
            </div>

            <div v-if="textThoughtClicked == 'text1'" key="first" class="main__presentation__elem__media__movie">
                <video preload="none" poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/poster1.jpg?alt=media&token=2a4455f2-ec9c-4efd-8032-32e6e1573f2d" controls data-plyr-config='{ "controls" : ["play", "progress", "current-time", "volume", "fullscreen"]}'>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/video1.mp4?alt=media&token=a055c94e-aa31-4378-a3dc-42eebfeea78a"
                    type="video/mp4"
                  >
                </video>
            </div>
            
            <div v-if="textThoughtClicked == 'text2'" key="second" class="main__presentation__elem__media__movie">
                <video preload="none" poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/poster4.jpg?alt=media&token=d6286bad-e641-42fa-9571-d4998ee5e124" controls data-plyr-config='{ "controls" : ["play", "progress", "current-time", "volume", "fullscreen"]}'>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/video4.mp4?alt=media&token=1dbcfe35-6090-47c9-a639-384a79010d70"
                    type="video/mp4"
                  >
                </video>
            </div>
            <div v-if="textThoughtClicked == 'text3'" key="third" class="main__presentation__elem__media__movie">
                <video preload="none" poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/poster3.jpg?alt=media&token=1f8602c8-e8f7-44d7-a1a9-0414b0ce7340" controls data-plyr-config='{ "autoplay": "true","controls" : ["play", "progress", "current-time", "volume", "fullscreen"]}'>
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/video3.mp4?alt=media&token=ee06ffd5-9ba5-40d2-8d88-cd607bc8cfe5"
                    type="video/mp4"
                  >
                </video>
            </div>
            </transition>
          </div>
        </div>
      </div>
      <div v-if="version == 1" class="main__presentation">
        <p class="main__p">
          O tej samej sytuacji możesz myśleć w różny sposób.
          Zależnie od tego, jak myślisz o danej sytuacji, pojawiają się inne emocje.Sprawdź, jak Adam reaguje na różne myśli dotyczące sesji:
          kliknij na odpowiednią myśl i zobaczysz ilustrację.
          Po obejrzeniu wszystkich ilustracji, wypełnij ankietę.
        </p>
        <div class="main__presentation__elem">
          <div class="main__presentation__elem__buttons">
            <button class="main__presentation__elem__button" v-for="(item, index) in textThought" 
            :key="item.id" 
            :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
            @click="clicked(index)">
              {{ item }}
            </button>
          </div>
          <div class="main__presentation__elem__media">
          <transition name="fade" mode="out-in">
            <div v-if="!textThoughtClicked" key="start" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/mysl.jpg?alt=media&token=7e4637c9-e34e-4a1b-ab8b-5957d64cc02a" alt="">
            </div>

            <div v-if="textThoughtClicked == 'text1'" key="first" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/mysl1.jpg?alt=media&token=4b3d4ae6-7286-4d27-8cee-398db6c3dedc" alt="">
            </div>
            
            <div v-if="textThoughtClicked == 'text2'" key="second" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/mysl2.jpg?alt=media&token=ed67861e-825f-4b9a-8a00-a4f69d837459" alt="">
            </div>
            <div v-if="textThoughtClicked == 'text3'" key="third" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/mysl3.jpg?alt=media&token=7627d870-1934-4215-8bdd-79b2226ba49c" alt="">
            </div>
            </transition>
          </div>
        </div>
      </div>
      <div v-if="version == 2" class="main__presentation">
        <p class="main__p">
          O tej samej sytuacji możesz myśleć w różny sposób.
          Zależnie od tego, jak myślisz o danej sytuacji, pojawiają się inne emocje.Sprawdź, jak Adam reaguje na różne myśli dotyczące sesji:
          kliknij na odpowiednią myśl i zobaczysz ilustrację.
          Po obejrzeniu wszystkich ilustracji, wypełnij ankietę.
        </p>
        <div class="main__presentation__elem">
          <div class="main__presentation__elem__buttons">
            <button class="main__presentation__elem__button" v-for="(item, index) in textThought" 
            :key="item.id" 
            :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
            @click="clicked(index)">
              {{ item }}
            </button>
          </div>
          <div class="main__presentation__elem__media">
          <transition name="fade" mode="out-in">
            <div v-if="!textThoughtClicked" key="start" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja.jpg?alt=media&token=c7073427-7838-452e-b959-323342567ab6" alt="">
            </div>

            <div v-if="textThoughtClicked == 'text1'" key="first" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja1.jpg?alt=media&token=56c756d3-542a-4ef2-80cf-13d8d089bdc8" alt="">
            </div>
            
            <div v-if="textThoughtClicked == 'text2'" key="second" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja2.jpg?alt=media&token=c8237937-3b59-4b81-ae9b-eac533a3f2ff" alt="">
            </div>
            <div v-if="textThoughtClicked == 'text3'" key="third" class="main__presentation__elem__media__picture">

                <img src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja3.jpg?alt=media&token=c70cd17f-1088-4003-934f-6fa2f488a1be" alt="">
            </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <transition name="fadeslow">
      <button v-if="info.ankiet && textThoughtClicked" @click="goToAnkiet">Start</button>
    </transition>
  </main>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  data() {
    return {
      version: null,
      textThought:{
          text1:"Myśl 1: Jestem zmęczony.",
          text2:"Myśl 2: Tego jest za dużo.",
          text3:"Myśl 3: Mam już tego dość.",
      },
      textThoughtClicked: "",
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
    clicked(index){
      this.textThoughtClicked = index;
    },
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
                this.info.ankiet = true;
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
  width: 85%;
  margin-bottom: 3vh;
}
button {
  padding: 1vh 4%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2f55d4;
  text-transform: uppercase;
}
.testowanie{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>