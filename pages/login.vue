<template>
  <main>
    <div class="main__login__img">
      <img src="/login_door.png" alt />
    </div>
    <div class="main__login__form">
      <h1 class="main__h">Miło Cię widzieć!</h1>
      <div v-if="!logined" key="signin" class="main__login__form__signin">
        <div class="main__login__form__signin__input">
          <input type="email" v-model="email" placeholder="e-mail" />
          <p v-if="errorCode === 'auth/user-not-found'">Błędny e-mail</p>
        </div>
        <div class="main__login__form__signin__input">
          <input type="password" v-model="password" placeholder="hasło" />
          <p v-if="errorCode === 'auth/wrong-password'">Błędne hasło</p>
        </div>
        <button
          class="main__login__form__signin__submit blue-button"
          :disabled="!password"
          @click="signin"
        >Zaloguj się</button>
      </div>
      <p class="main__p">
        Zapomniałeś hasła?
        <br />Napisz na
        <b>badania@atilabs.pl</b>
      </p>
      <div v-if="logined" key="logined" class="main__login__form__logined">
        <p>Zalogowany: {{email}}</p>
        <button @click="logout">Wyloguj</button>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="showPreloader || succssesfuly == 0" key="loading" class="header__popup">
          <div class="header__popup__info">
            <div class="header__popup__preloader" v-if="showPreloader"></div>
            <p v-else>{{message}}</p>
            <transition name="fade">
              <button
                v-if="!showPreloader"
                @click="succssesfuly = null"
                header__popup__button
              >Zamknij</button>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
import { fb } from "../assets/firebase";
import { error } from "util";
export default {
  
  data() {
    return {
      email: null,
      password: null,
      succssesfuly: null,
      logined: null,
      loading: false,
      errorCode: ""
    };
  },
  methods: {
    signin() {
      this.loading = true;
      this.succssesfuly = null;

      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.succssesfuly = 1;
          this.loading = false;
          this.$router.replace("/logined");
        })
        .catch(error => {
          this.loading = false;
          this.succssesfuly = null;
          this.errorCode = error.code;
          var errorMessage = error.message;
          console.log(this.errorCode);
        });
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.succssesfuly = null;
          this.$router.replace("/");
        })
        .catch(error => {});
    },
    answers() {
      if (this.logined) {
        if (this.$router.currentRoute.path == "/logined") {
          this.$emit("clickHome");
        } else {
          this.$router.replace("/logined");
        }
      } else {
        this.$router.replace("/");
      }
    }
  },
  computed: {
    showPreloader() {
      if (this.loading) {
        return true;
      } else if (this.logined) {
        return false;
      }
    }
  },
  created() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$emit("logined", this.email);
        this.logined = true;
        this.email = user.email;
        this.$router.replace("/logined");
      } else {
        this.logined = false;
      }
    });
  }
};
</script>
<style scoped>
.main__h {
  font-family: "Montserrat";
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.059rem;
}
</style>