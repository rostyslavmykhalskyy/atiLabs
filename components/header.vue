<template>
  <header id="header">
    <div class="header__imgs">
      <div class="header__img">
        <img
          @click="answers"
          src="/logoATIlabs.png"
        >
      </div>
      <div class="header__img">
        <a href="https://www.ncbr.gov.pl">
          <img
            src="/logoNCBRwhite.png"
          >
        </a>
      </div>
    </div>
    <div class="header__form">
      <nav class="header__form__nav">
        <p @click="answers">Strona główna</p>
        <nuxt-link to="/contact">
          <p>Kontakt</p>
        </nuxt-link>
      </nav>
      <transition name="rotate" mode="out-in">
        <div v-if="!logined" key="signin" class="header__signin">
          <input type="email" v-model="email" class="header__input" placeholder="e-mail">
          <input type="password" v-model="password" class="header__input" placeholder="hasło">
          <button class="button__form__submit" :disabled="!password" @click="signin">Zaloguj</button>
        </div>
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
              >Zamknij</button>
            </transition>
          </div>
        </div>
      </transition>
    </div>
  </header>
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
      loading: false
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
a {
  text-decoration: none;
}
p {
  color: $blue-bg-color2;
}
nav p {
  cursor: pointer;
}
</style>