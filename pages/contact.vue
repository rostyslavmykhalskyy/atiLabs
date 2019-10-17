<template>
  <main>
    <div class="main__contact__mobile">
      <ul class="main__contact__mobile__menu contact-mobile">
        <li
          @click="contactState=0"
          :class="{'main__contact__mobile__menu__active': !contactState}"
        >Dane</li>
        <li
          @click="contactState=1"
          :class="{'main__contact__mobile__menu__active': contactState}"
        >Wiadomość</li>
      </ul>
      <div v-if="contactState==0" class="main__contact__info contact-mobile">
        <div class="main__contact__info__img">
          <img src="/contact_img.png" />
        </div>
        <h2 class="main__h2">ATI Labs sp. z o.o.</h2>
        <div class="main__contact__info__elems-group1">
          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">siedziba</h3>
            <p>
              ul. Głogowska 31/33,
              <br />60-702 Poznań
            </p>
          </div>

          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">Zarząd</h3>
            <p>Marceli Kubik</p>
          </div>
        </div>
        <div class="main__contact__info__elems-group2">
          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">Biuro</h3>
            <p>
              ul. Zwierzyniecka 18 lok. 2
              <br />(III piętro), 60-814 Poznań
            </p>
          </div>
          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">Prokurenci</h3>
            <p>
              Natalia Wróblewicz
              <br />Wojciech Duchant
            </p>
          </div>
        </div>
        <div class="main__contact__info__elems-group3">
          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">TELEFON</h3>
            <p>
              536 587 587
              <br />(9:00-15:00)
            </p>
          </div>
          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">E-MAIL</h3>
            <p>ati@atilabs.pl</p>
          </div>
          <div class="main__contact__info__elem">
            <h3 class="main__contact__info__elem__h">DANE</h3>
            <p>
              KRS: 0000623743
              <br />REGON: 364730280
              <br />NIP: 7792443589
              <br />Sąd Rejonowy Poznań – Nowe Miasto i Wilda
              <br />w Poznaniu
              Kapitał zakładowy: 5000 PLN
            </p>
          </div>
        </div>
      </div>
      <div v-else class="main__contact__form contact-mobile">
        <h3 class="main__h2">Masz jakieś pytania?</h3>
        <p class="main__p">
          Napisz do nas na
          <span class="text-bold">badania@atilabs.pl</span> lub wypełnij poniższy formularz:
        </p>
        <input
          type="email"
          v-model="email"
          :class="{errorEmail:email==null}"
          class="main__contact__form__input"
          placeholder="Adres e-mail"
        />
        <div class="main__contact__form__text-area">
          <textarea v-model="message" maxlength="200" placeholder="Wiadomość (max. 200 znaków)"></textarea>
        </div>
        <transition name="blur" mode="out-in">
          <p
            v-if="sentInfo && ((this.email || this.message) == '')"
            class="main__contact__form__info"
          >Wiadomość została wysłana</p>
        </transition>
        <button @click="sendMessage" class="main__form__button blue-button">Wyślij</button>
      </div>
    </div>
    <div class="main__contact__info">
      <div class="main__contact__info__img">
        <img src="/contact_img.png" />
      </div>
      <h2 class="main__h2">ATI Labs sp. z o.o.</h2>
      <div class="main__contact__info__elems-group1">
        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">siedziba</h3>
          <p class="main__p">
            ul. Głogowska 31/33,
            <br />60-702 Poznań
          </p>
        </div>

        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">Zarząd</h3>
          <p>Marceli Kubik</p>
        </div>
      </div>
      <div class="main__contact__info__elems-group2">
        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">Biuro</h3>
          <p>
            ul. Zwierzyniecka 18 lok. 2
            <br />(III piętro), 60-814 Poznań
          </p>
        </div>
        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">Prokurenci</h3>
          <p>
            Natalia Wróblewicz
            <br />Wojciech Duchant
          </p>
        </div>
      </div>
      <div class="main__contact__info__elems-group3">
        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">TELEFON</h3>
          <p>
            536 587 587
            <br />(9:00-15:00)
          </p>
        </div>
        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">E-MAIL</h3>
          <p>ati@atilabs.pl</p>
        </div>
        <div class="main__contact__info__elem">
          <h3 class="main__contact__info__elem__h">DANE</h3>
          <p>
            KRS: 0000623743
            <br />REGON: 364730280
            <br />NIP: 7792443589
            <br />Sąd Rejonowy Poznań – Nowe Miasto i Wilda
            <br />w Poznaniu
            Kapitał zakładowy: 5000 PLN
          </p>
        </div>
      </div>
    </div>
    <div class="main__contact__form">
      <h3 class="main__h2">Masz jakieś pytania?</h3>
      <p class="main__p">
        Napisz do nas na
        <span class="text-bold">badania@atilabs.pl</span> lub wypełnij poniższy formularz:
      </p>
      <input
        type="email"
        class="main__contact__form__input"
        placeholder="Adres e-mail"
        v-model="email"
        :class="{errorEmail:email==null}"
      />
      <div class="main__contact__form__text-area">
        <textarea v-model="message" maxlength="200" placeholder="Wiadomość (max. 200 znaków)"></textarea>
      </div>
      <transition name="blur" mode="out-in">
        <p
          v-if="sentInfo && ((this.email || this.message) == '')"
          class="main__contact__form__info"
        >Wiadomość została wysłana</p>
      </transition>
      <button @click="sendMessage" class="main__form__button blue-button">Wyślij</button>
    </div>
  </main>
</template>

<script>
import { db } from "../assets/firebase";
export default {
  data() {
    return {
      contactState: 0,
      answer: null,
      email: "",
      message: "",
      sentInfo: false
    };
  },
  methods: {
    sendMessage() {
      if (this.validEmail(this.email)) {
        db.collection("message")
          .add({
            email: this.email,
            message: this.message,
            read: 1
          })
          .then((this.email = ""), (this.message = ""), (this.sentInfo = true));
      } else {
        this.email = null;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
.main__h2 {
  width: 100%;
  text-align: left;
}
.main__contact__form__h {
  font: 1.125rem/1.2 "Montserrat", century gothic, sans-serif;
  font-weight: bold;
}
.main__contact__form p {
  margin: 0.9259vh auto 2.7777vh;
  letter-spacing: 0;
}

.text-arria {
  border-radius: 10px;
  margin: 0;
}

.main__elem__radio {
  display: flex;
  margin: 2vh -70px;
}
.main__elem__radio-button {
  margin-left: 40px;
}
.checkmark {
  height: 12px;
  width: 12px;
  top: 0px;
  left: 70px;
  background-color: none;
  border: 1px solid #fdfdfd;
}
.main__elem__radio-button .checkmark:after {
  top: 1px;
  left: 1px;
  width: 10px;
  height: 10px;
}
p {
  text-align: left;
  margin: 0;
}
.main__contact__info__elem img {
  margin-right: 5%;
}
.text-bold {
  font-family: "Montserrat-bold";
}
.errorEmail {
  border-color: #ff00006b;
  outline: none;
}
input,
textarea {
  outline: none;
}
.main__contact__form__info {
  position: absolute;
}
</style>