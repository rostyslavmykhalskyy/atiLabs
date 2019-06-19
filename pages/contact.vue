<template>
  <main>
    <div class="main_contact__form">
      <h3 class="main_contact__form__h">Masz jakieś pytania?</h3>
      <p
        class="main_contact__form__p"
      >Napisz do nas na badania@atilabs.pl lub wypełnij poniższy formularz:</p>
      <input type="text" class="main_contact__form__input" placeholder="Imię i nazwisko">
      <input type="email" class="main_contact__form__input" placeholder="Adres e-mail">
      <!-- <input type="text" class="main_contact__form__input" placeholder="Rok urodzenia"> -->
      <!-- <p
        class="main_contact__form__p"
      >Czy Ty lub ktokolwiek z Twoich bliskich cierpi/-ał na depresję?</p>

      <div class="main__elem__radio">
        <label class="main__elem__radio-button">
          Tak
          <input type="radio" id="one" value="Tak" v-model="answer">
          <span class="checkmark"></span>
        </label>
        <label class="main__elem__radio-button">
          Nie
          <input type="radio" id="two" value="Nie" v-model="answer">
          <span class="checkmark"></span>
        </label>
      </div> -->
      <div class="text-arria">
        <textarea
          placeholder="Wiadomość (max. 500 znaków)"
        ></textarea>
      </div>
      <button>Wyślij</button>
    </div>
    <div class="main_contact__info">
      <h2 class="main__h">ATI Labs sp. z o.o.</h2>
      <div class="main_contact__info__elem">
        <img src="/map-pin.png" alt>
        <p>
          Siedziba: ul. Głogowska 31/33,
          <br>60-702 Poznań
          <br>Biuro: ul. Zwierzyniecka 18 lok. 2
          <br>(III piętro), 60-814 Poznań
        </p>
      </div>
      <div class="main_contact__info__elem">
        <img src="/phone.png" alt>
        <p>
          536 587 587
          <br>(9:00-15:00)
        </p>
      </div>
      <div class="main_contact__info__elem">
        <img src="/mail.png" alt>
        <p>ati@atilabs.pl</p>
      </div>
      <div class="main_contact__info__elem">
        <img src="/briefcase.png" alt>
        <p>
          Zarząd: Marceli Kubik
          <br>Prokurenci (pełnomocnicy): Natalia Wróblewicz, Wojciech Duchant
          <br>KRS: 0000623743
          <br>REGON: 364730280
          <br>NIP: 7792443589
          <br>Sąd Rejonowy Poznań – Nowe Miasto i Wilda w Poznaniu
          Kapitał zakładowy: 5000 PLN
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      answer: null
    };
  }
};
</script>

<style scoped>
main {
  padding: 30px;
  box-sizing: border-box;
}
.main_contact__form__h {
  font: 1.125rem/1.2 "Montserrat", century gothic, sans-serif;
  font-weight: bold;
}
.main_contact__form p {
  margin: 2vh auto 2vh;
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
.main_contact__info__elem {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 2vh;
}
p {
  text-align: left;
  margin: 0;
}
.main_contact__info__elem img {
  margin-right: 5%;
}
</style>