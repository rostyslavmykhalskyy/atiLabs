<template>
  <header id="header">
    <div class="header__imgs">
      <div class="header__img">
        <img @click="answers" src="/logoATIlabs.png" />
      </div>
      <div class="header__img">
        <a href="https://www.ncbr.gov.pl">
          <img src="/logoNCBRwhite.png" />
        </a>
      </div>
    </div>
    <div class="header__form">
      <transition name="rotate" mode="out-in">
        <div v-if="!logined" key="signin" class="header__signin">
          <!-- <input type="email" v-model="email" class="header__input" placeholder="e-mail">
          <input type="password" v-model="password" class="header__input" placeholder="hasło">
          <button class="button__form__submit" :disabled="!password" @click="signin">Zaloguj</button>-->
          <nav class="header__form__nav">
            <nuxt-link to="/">
              <p @click="answers">Strona główna</p>
            </nuxt-link>
            <nuxt-link to="/login">
              <p>Zaloguj się</p>
            </nuxt-link>
            <nuxt-link to="/contact">
              <p>Kontakt</p>
            </nuxt-link>
          </nav>
        </div>
        <div v-if="logined" key="logined" class="header__logined">
          <img src="/ico-login.png" alt />
          <p>{{email}}</p>
          <button @click="logout"></button>
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
    <div class="header-top">
      <div class="header__imgs-mobile">
        <div class="header__img">
          <img @click="answers" src="/logoATIlabsBlack.png" />
        </div>
        <div class="header__img">
          <a href="https://www.ncbr.gov.pl">
            <img src="/logoNCBRwhite.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="header__form-mobile">
      <transition name="rotate" mode="out-in">
        <div v-if="!logined" key="signin" class="header__signin">
          <!-- <input type="email" v-model="email" class="header__input" placeholder="e-mail">
          <input type="password" v-model="password" class="header__input" placeholder="hasło">
          <button class="button__form__submit" :disabled="!password" @click="signin">Zaloguj</button>-->
          <button v-if="showMenu==0" @click="showMenu = !showMenu" class="header__form__nav-button"></button>
          <button v-else @click="showMenu = !showMenu" class="header__form__nav-button-cancel"></button>
        </div>
        <div v-if="logined" key="logined" class="header__logined">
          <img @click="loginedUserMenuShow = !loginedUserMenuShow" src="/ico-menu-logined.png" alt />
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
    <nav v-if="showMenu==1" class="header__form__nav" @click="showMenu = !showMenu">
      <nuxt-link to="/">
        <p @click="answers">Strona główna</p>
      </nuxt-link>
      <nuxt-link to="/login">
        <p>Zaloguj się</p>
      </nuxt-link>
      <nuxt-link to="/contact">
        <p>Kontakt</p>
      </nuxt-link>
    </nav>
    <div v-if="loginedUserMenuShow" class="header__logined-mobile">
      <p>Zalogowany jako:</p>
      <p>{{email}}</p>
      <button @click="logout">Wyloguj się</button>
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
      loading: false,
      showMenu: 0,
      loginedUserMenuShow: 0
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
          this.loginedUserMenuShow = 0;
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
        // this.$router.replace("/logined");
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