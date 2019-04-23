<template>
  <header>
    <div class="header__imgs">
      <div class="header__img">
        <img @click="answers" src="img/img1.jpg">
      </div>
      <div class="header__img">
        <a href="https://www.ncbr.gov.pl">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/logoNCBR.png?alt=media&token=ea1de03c-9e43-47d8-9960-51c1d8eae94e"
          >
        </a>
      </div>
    </div>
    <div class="header__form">
      <transition name="rotate" mode="out-in">
        <form v-if="!logined" key="signin" @submit="signin">
          <input type="email" v-model="email" class="header__input" placeholder="e-mail">
          <input type="password" v-model="password" class="header__input" placeholder="hasło">
          <button class="button__form__submit" :disabled="!password" type="submit">Zaloguj</button>
        </form>
        <div v-if="logined" key="logined" class="header__logined">
          <p>Zalogowany: {{email}}</p>
          <button @click="logout">Wyloguj</button>
        </div>
      </transition>
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
              >Zamkni</button>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { fb } from "../firebase";
import { error } from "util";
export default {
  data() {
    return {
      email: null,
      password: null,
      succssesfuly: null,
      logined: null,
      loading: false
    };
  },
  methods: {
    signin() {
      this.loading = true;
      this.succssesfuly = null;
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.succssesfuly = 1;
          this.loading = false;
          this.$router.replace("/logined");
        })
        .catch(error => {
          this.loading = false;
          var errorCode = error.code;
          var errorMessage = error.message;
          this.succssesfuly = 0;
        });
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.succssesfuly = null;
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    },
    answers() {
      this.$router.replace("/answers");
    }
  },
  computed: {
    message() {
      if (this.succssesfuly == 0) {
        return "Nieprawidłowy login lub hasło, spróbuj jeszcze raz lub skontaktuj się z nami.";
      } else if (this.succssesfuly == 1) {
        return "Zalogowany: " + this.email;
      } else {
        return null;
      }
    },
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

<style lang="scss">
</style>