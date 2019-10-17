<template>
  <main :class="{surveyBG:state>2}">
    <nav class="main__survey__nav">
      <p
        class="main__survey__nav__p"
        :class="{'main__survey__nav__p-active':state==1}"
      >1. Opis przypadku</p>
      <p class="main__survey__nav__p" :class="{'main__survey__nav__p-active':state==2}">2. Wiedza</p>
      <p class="main__survey__nav__p" :class="{'main__survey__nav__p-active':state==3}">3. Ankieta</p>
    </nav>
    <div class="main__survey__content">
      <div v-if="state==1" class="main__survey__content1">
        <div class="main__survey__content1__block1">
          <div class="main__survey__content1__block1__img">
            <img src="/surveyJ/w/main__survey__content1__block1.png" alt />
            <div>
              <img src="/surveyFiles/main__survey__content1__block1-mobileBG.svg" alt />
            </div>
          </div>
          <h2
            class="main__survey__content__h"
          >Trzy miesiące temu Beata rozpoczęła nową pracę jako dyrektor oddziału ogólnopolskiej szkoły językowej. Stanowisko dostała z polecenia poprzedniej dyrektor i jednocześnie swojej wieloletniej przyjaciółki – Iwony..</h2>
          <div class="main__survey__content1__block1__p">
            <p>Wcześniej Beata pracowała w sprzedaży i obsłudze klienta dużego banku. Nie ma więc żadnego doświadczenia w branży edukacyjnej ani w zarządzaniu. Beata bardzo się ucieszyła z oferty pracy, potrzebowała już nowych wyzwań. Jednocześnie trochę się denerwowała, ponieważ funkcjonowanie szkół językowych było jej całkowicie obce. Nawet nie znała zbyt dobrze żadnego języka obcego. Nie była pewna, czy sobie poradzi, ale Iwona bardzo ją namawiała.</p>
          </div>
          <button
            class="button-arrow main__survey__content1__block1__arrow"
            v-scroll-to="'.main__survey__content1__block2'"
          ></button>
        </div>
        <div class="main__survey__content1__block2">
          <h2
            class="main__survey__content__h"
          >Już od pierwszych dni Beata nie czuła się w nowej pracy dobrze.</h2>
          <p
            class="main__survey__content__p"
          >Nie czuła się wystarczająco kompetentna. Obowiązki dyrektora ją przerastały. Pisanie raportów i podejmowanie decyzji powodowało u niej ogromny stres. Długo o tym rozmyślała i wpadała w dołek: “To moja wina, przecież czułam, że nie dam sobie rady”. Zwykle starała się wcześniej wychodzić z pracy pod pretekstem załatwienia czegoś pilnego. Wracała do domu, objadała się lodami i płakała.</p>
          <div class="main__survey__content1__block2__img">
            <img src="/surveyJ/w/main__survey__content1__block2.jpg" alt />
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block3'"></button>
        </div>
        <div class="main__survey__content1__block3">
          <h2
            class="main__survey__content__h"
          >Pewnego dnia podszedł do niej jeden z nauczycieli i zapytał:</h2>
          <p
            class="main__survey__content__p main__survey__content1__block3__p"
          >– I handed in the invoice for the last month about 2 weeks ago, but I still have not received the payment. Do you know when I can expect the money to be on my account?</p>
          <p
            class="main__survey__content__p main__survey__content1__block3__p"
          >Beata nic nie zrozumiała, więc nie potrafiła udzielić odpowiedzi. Strasznie ją to zdenerwowało i zawstydziło. Zaczęła się jąkać, próbując coś powiedzieć, ale ostatecznie powiedziała tylko “sorry” i odeszła. Przez resztę dnia rozmyślała o tej sytuacji, straciła całą energię, nie mogła się na niczym skupić. Zamknęła się w swoim biurze, patrzyła w okno i unikała kontaktu z pracownikami. Czuła się beznadziejnie.</p>
          <img
            src="/surveyFiles/main__survey__content1__block4__bg.png"
            alt
            class="main__survey__content__bg"
          />
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block4'"></button>
        </div>
        <div class="main__survey__content1__block3 main__survey__content1__block4">
          <h2
            class="main__survey__content__h"
          >Po pracy zadzwoniła do Iwony, żeby się wygadać i wyżalić:</h2>
          <p class="main__survey__content__p left-text main__survey__content1__block3__p">
            – Mam wrażenie, że popadam w depresję przez tę pracę. Z każdym dniem czuję się coraz gorzej, aż mi się nie chce tam chodzić. Myślisz, że mogę iść na zwolnienie? – Rozumiem cię, bo też przez to przechodziłam
            <br />– pocieszyła Beatę przyjaciółka i zaproponowała rozmowę przy kawie. Spotkały się wieczorem. Iwona wyjaśniła Beacie kilka zawodowych kwestii i porozmawiały o tym, jak sobie radzić na stanowisku dyrektora.
          </p>
          <div class="main__survey__content1__block3__img">
            <img src="/surveyJ/w/main__survey__content1__block4.jpg" alt />
          </div>
        </div>
        <button @click="scrollStateTo2" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==2" class="main__survey__content2">
        <div class="main__survey__content1__block1">
          <div class="main__survey__content1__block1__img">
            <img src="/surveyJ/main__survey__content2__block1.jpg" alt />
            <div>
              <img src="/surveyFiles/main__survey__content1__block1-mobileBG.svg" alt />
            </div>
          </div>
          <h2
            class="main__survey__content__h"
          >W radzeniu sobie z depresją, podobnie jak z lękiem czy agresją, szczególnie ważne jest, aby uświadomić sobie, co powoduje u nas pogorszenie nastroju.</h2>
          <div class="main__survey__content1__block1__p">
            <p>Częścią procesu zdrowienia jest zrozumienie, dlaczego czujemy się źle oraz co wyzwala w nas smutek, poczucie winy i inne objawy depresji.</p>
          </div>
          <p
            class="main__survey__content__p left-text"
          >Wyzwalacze to sytuacje, które powodują, że pojawiają się negatywne myśli, uczucia i zachowania. Wyzwalaczem może być śmierć lub choroba bliskiej osoby, kłopoty w związku, ale może to być również sytuacja, gdy szef prosi nas o poprawienie projektu czy udział w przyjęciu, na którym nikogo nie znamy.</p>
          <button
            class="button-arrow main__survey__content1__block1__arrow"
            v-scroll-to="'.main__survey__content1__block3'"
          ></button>
        </div>
        <div class="main__survey__content1__block3 main__survey__content1__block4">
          <h2
            class="main__survey__content__h"
          >Po identyfikacji w jakich sytuacjach obniża się nasz nastrój, należy zastanowić się dlaczego tak się dzieje, a następnie jak wtedy reagujemy.</h2>
          <img
            src="/surveyFiles/main__survey__content1__bg2.png"
            alt
            class="main__survey__content__bg2"
          />
          <div class="main__survey__content__p left-text main__survey__content1__block3__p">
            <p>Rozpoznanie własnych wyzwalaczy oraz przyczyn, dla których powodują one konkretne uczucia i zachowania, pozwala zrozumieć jakie umiejętności radzenia sobie powinniśmy rozwinąć. Dlatego kolejnym – najważniejszym – krokiem jest określenie, co możemy zrobić, aby zachować kontrolę w sytuacjach wyzwalających objawy i nie dopuścić do pogorszenia się nastroju.</p>
          </div>
          <div class="main__survey__content1__block3__img">
            <img src="/surveyJ/w/main__survey__content2__block2.jpg" alt />
          </div>
        </div>
        <button @click="scrollStateTo3" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==3" class="main__survey__content4">
        <img src="/bg_top.png" alt class="bgState3" />
        <img src="/surveyFiles/main__survey__content3bg.svg" alt class="bgState3mobile" />
        <h1
          class="main__survey__content__h"
        >Wskaż na ile zgadzasz lub nie zgadzasz się z poszczególnymi zdaniami:</h1>
        <p
          class="main__survey__content__p2"
        >(1 - zdecydowanie nie; 2 - raczej nie; 3 - nie wiem; 4 - raczej tak; 5 - zdecydowanie tak)</p>
        <div class="main__survey__content4__block">
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >1.Czy przedstawiony materiał jest dla Ciebie atrakcyjny?</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an1}"
                @click="an1=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an1 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">2.Czy przedstawiony materiał jest zrozumiały?</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an2}"
                @click="an2=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an2 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >3.Czy przedstawiony materiał jest dla Ciebie użyteczny/pomocny?</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an3}"
                @click="an3=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an3 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >4.Czy sądzisz, że zdobyta dzięki materiałowi wiedza przyda Ci się w życiu?</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an4}"
                @click="an4=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an4 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >5.Czy przedstawiona historia dobrze ilustruje problem poruszany w załączonej psychoedukacji?</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an5}"
                @click="an5=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an5 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
        </div>
        <button @click="end" class="main__survey__button">Zakończ</button>
        <div v-if="showPopUpLastState" class="survay-save-success-background">
          <div class="survay-save-success success2">
            <img src="/ico-survey-success.png" alt />
            <h3 class="main__survey__content__h">
              Gratulacje!
              <br />Zadanie ukończone!
            </h3>
            <!-- <download-excel
              style="color: blue"
              :data="json_data"
              :fields="json_fields"
              worksheet="My Worksheet"
              type="csv"
              name="filename.xls"
            >Download CSV</download-excel>-->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { fb, db } from "../assets/firebase";

import { setTimeout } from "timers";
var VueScrollTo = require("vue-scrollto");

import { scroller } from "vue-scrollto/src/scrollTo";
const firstScrollTo = scroller();

import JsonExcel from "vue-json-excel";

export default {
  layout: "survey",
  data() {
    return {
      state: 1,
      an1: null,
      an2: null,
      an3: null,
      an4: null,
      an5: null,
      checkAn: false,
      showPopUpLastState: false,
      saved: false
    };
  },
  methods: {
    scrollStateTo2() {
      this.state++;
      firstScrollTo("header");
    },
    scrollStateTo3() {
      this.state++;
      firstScrollTo("header");
    },
    end() {
      if ((this.an1 && this.an2 && this.an3 && this.an4 && this.an5) != null) {
        firstScrollTo("main");
        this.showPopUpLastState = true;
        this.saveData();
        setTimeout(() => {
          this.showPopUpLastState = false;
          if (this.saved) {
            firstScrollTo("header");
            this.$router.replace("/logined");
          }
        }, 1500);
        this.checkAn = false;
      } else {
        this.checkAn = true;
      }
    },
    saveData() {
      if (fb.auth().currentUser.uid) {
        db.collection("survey")
          .add({
            user: fb.auth().currentUser.uid,
            user_email: fb.auth().currentUser.email,
            surveyName: "Personalizacja ze względu na płeć(K)",
            survey: "Z11a",
            an1: this.an1,
            an2: this.an2,
            an3: this.an3,
            an4: this.an4,
            an5: this.an5
          })
          .then((this.saved = true));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
main p {
  margin: 0;
}
p {
  text-align: left;
  font: 1.12rem/1.725 "Montserrat", century gothic, sans-serif;
  letter-spacing: 0.04em;
  color: #000000;
}
.bold {
  font-weight: 600;
}
main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
}
.surveyBG {
  background-image: url("/bg_bottom-survey.png");
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 30.83333333333333% 30.70092592592593vh;
  padding-bottom: 5vh;
}
.bgState3mobile {
  display: none;
}
// .surveyBG2 {
//   background-image: url("/bg_top.png"), url("/bg_top2.png"),
//     url("/bg_bottom-survey.png");
//   background-position: left top, left 38.51851851851852vh, right bottom;
//   background-repeat: no-repeat, no-repeat, no-repeat;
//   background-size: 45.9375% 24.53703703703704vh, 33.125% 98.7037037037037vh,
//     30.83333333333333% 30.70092592592593vh;
// }
.bgState3,
.bgState3mobile {
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: -1;
  position: absolute;
}
.main__survey__button {
  width: 11.82291666666667%;
  display: block;
  box-sizing: border-box;
  margin: 9.259259259259259vh auto 0;
  padding: 20px 0;
  border-radius: 50px;
  text-align: center;
  font: 1.25rem/1.125 "Montserrat", century gothic, sans-serif;
  font-weight: 600;
  color: #ffffff;
  background-color: #3065ec;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.header__logo {
  position: absolute;
  top: 6.203703703703704vh;
  left: 4.322916666666667%;
  z-index: 1;
  width: 9.6875%;
  img {
    display: block;
    width: 100%;
  }
}

.main__survey__nav {
  width: 51.9795%;
  margin: 18.51851851851852vh auto 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  p {
    cursor: default;
    text-align: center;
  }
}
.main__survey__nav__p {
  width: 22.345491%;
  padding: 0.9259259259259259vh 0;
  background-color: #5690ff;
  border-radius: 50px;
  font: 1rem/1 "Montserrat-bold", century gothic, sans-serif;
  opacity: 0.3;
  color: #ffffff;
}
.main__survey__nav__p-active {
  opacity: 1;
}
.main__survey__content {
  width: 100%;
}
.main__survey__content__h {
  font: 1.438rem/1.875rem "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: center;
}
.main__survey__content__h2 {
  width: 20.83333333333333%;
  margin-right: 2.083333333333333%;
  display: inline-block;
  text-align: center;
  font: 1.563rem/1 "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
  &:last-of-type {
    margin-right: 0%;
  }
}
.main__survey__content__h3 {
  font: 1.25rem/1 "Montserrat-bold", century gothic, sans-serif;
  text-align: left;
  letter-spacing: 0.03em;
  color: #000000;
}
// .main__survey__content__p::first-letter {
//   font: 1.063rem/1.875 "Montserrat", century gothic, sans-serif !important;
// }
.main__survey__content__p {
  width: 54.89583333333333%;
  margin: 2.777777777777778vh auto 0;
  font: 1.12rem/1.875 "Montserrat", century gothic, sans-serif;
  letter-spacing: 0.04em;
  text-align: center;
}
// .main__survey__content p::first-letter {
//   font: 1.12rem/1.725 "Montserrat-bold", century gothic, sans-serif;
// }
.main__survey__content__p2 {
  height: 28px;
  font: 1.563rem/1.75 "Montserrat", century gothic, sans-serif;
  margin: 0.9259259259259259vh auto 0;
  text-align: center;
  letter-spacing: 0.03em;
  // &::first-letter {
  //   font: 1.563rem/1.75 "Montserrat", century gothic, sans-serif !important;
  // }
}
.button-arrow {
  margin: 0 auto;
  display: block;
  min-width: 60px;
  min-height: 60px;
  background-repeat: no-repeat;
  background-image: url("/ico-arrow-down.svg");
}
.main__survey__content__bg2 {
  width: 34.65104166666667%;
  left: 30.05208333333333%;
  bottom: -18vh;
  position: absolute;
  z-index: -1;
}
.main__survey__content1 {
  padding-bottom: 7.222222222222222vh;
}
.main__survey__content1__block1 {
  margin-top: 6.859259vh;
  // height: 96.2962962962963vh;
  h2 {
    margin-left: 49.58333333333333%;
    width: 35.15625%;
    text-align: left;
  }
  .main__survey__content__p {
    width: 80%;
    margin: 32vh auto 15vh;
  }
}
.main__survey__content1__block1__img {
  width: 46.14583333333333%;
  max-width: 886px;
  position: absolute;
  top: 0;
  z-index: -1;
  img {
    width: 89.9%;
    margin-top: 28vh;
    margin-left: 16%;
    border-radius: 50px;
  }
  &:before {
    content: "";
    display: block;
    background-image: url("/surveyFiles/main__survey__content1__block1BG.svg");
    width: 100%;
    height: 110.3%;
    top: 0;
    left: 0;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  div {
    display: none;
  }
}

.main__survey__content1__block1__p {
  margin-left: 49.58333333333333%;
  width: 35.15625%;
  p:first-of-type {
    margin-bottom: 2.6rem;
  }
}
.main__survey__content1__block1__arrow {
  margin: 25vh auto 0;
}

.main__survey__content1__block2 {
  padding-top: 4.791666666666667vh;
  p {
    text-align: center;
  }
}
.main__survey__content1__block2__img {
  width: 61.9799%;
  margin: 4.444444444444444vh auto 0;
  position: relative;
  img {
    width: 75%;
    max-width: 800px;
    border-radius: 50px;
    display: block;
    margin: 20vh auto;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 845.51px;
    bottom: -250px;
    left: 25px;
    position: absolute;
    background-image: url("/surveyFiles/main__survey__content1__block2BG.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    z-index: -1;
  }
}
.main__survey__content1__block3 {
  position: relative;
  padding-top: 7.87037037037037vh;
  h2 {
    width: 100%;
    margin: 0 auto;
  }
}
.main__survey__content1__block3__img {
  width: 39.94791666666667%;
  margin: 0 auto 2.5vh;
  position: relative;
  img {
    width: 100%;
    border-radius: 50px 50px 0 0;
  }
  &:before {
    width: 30%;
    height: 321.62px;
    bottom: -121px;
    right: -19.7%;
    background-image: url("/surveyFiles/main__survey__content1__block3__imgBG2.svg");
  }
  &:after {
    width: 25%;
    height: 178px;
    bottom: -60px;
    left: -15.7%;
    background-image: url("/surveyFiles/main__survey__content1__block3__imgBG.svg");
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  }
}
.main__survey__content__bg {
  width: 58.153125%;
  left: 18.923437%;
  bottom: -28.6vh;
  position: absolute;
  z-index: -1;
  top: 0;
}
.main__survey__content1__block3__p {
  width: 54.89583333333333%;
  margin: 4.62962962962963vh auto 11.11111111111111vh;
  text-align: left;
  li {
    margin-bottom: 1.388888888888889vh;
    padding-left: 36px;
    font: 1rem/1.875 Montserrat, century gothic, sans-serif;
    &:before {
      content: "";
      width: 11px;
      height: 11px;
      margin-top: 0.5rem;
      margin-left: -36px;
      background: linear-gradient(91.47deg, #80c0fb -53.64%, #8cdff9 24.74%);
      display: block;
      position: absolute;
      border-radius: 11px;
    }
  }
}
.main__survey__content1__block3 button {
  margin-top: 7.87037037037037vh;
}
.main__survey__content1__block4 {
  padding-top: 3.01111111111111vh;
  background-image: url("/main__survey__content1__block-bg4.png");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  h2 {
    width: 68.072917%;
    margin: 0 auto;
    text-align: center;
  }
}
.main__survey__content1__block4__p {
  width: 68.072917%;
  margin: 0 auto 14.81481481481481vh;
}
.main__survey__content1__block5 {
  padding-top: 10.92592592592593vh;
  padding-bottom: 8.796296296296296vh;
}
.main__survey__content1__block5__h {
  width: 59.79166666666667%;
  margin: 0 auto 9.259259259259259vh;
  h2 {
    text-align: center;
  }
}
.main__survey__content1__block5__img {
  width: 54.06%;
  margin: 0 auto 3.518518518518519vh;
  img {
    width: 100%;
    margin: 0 auto;
  }
}

.main__survey__content2 {
  padding-bottom: 7.222222222222222vh;
}
.main__survey__content2__block1 {
  margin-top: 10.18518518518519vh;
}
.main__survey__content2__block1__img {
  width: 46.14583333333333%;
  max-width: 886px;
  position: absolute;
  top: 0%;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content2__block1__p {
  width: 36.14583333333333%;
  margin-left: 49.58333333333333%;
  margin-bottom: 20vh;
  h2 {
    text-align: left;
    margin-bottom: 0.625rem;
  }
  p {
    margin-bottom: 1.875rem;
  }
  p:last-of-type {
    margin-bottom: 0rem;
  }
}
.main__survey__content2__block2 {
  padding-top: 21.66666666666667vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.main__survey__content2__block2__p-left {
  width: 22.39583333333333%;
  margin-left: -4%;
  margin-right: 36.45833333333333%;
  p {
    text-align: right;
  }
}
.main__survey__content2__block2__img {
  width: 87.44791666666667%;
  position: absolute;
  top: 2.962962962962963vh;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content2__block2__p-right {
  width: 20.9%;
  p {
    text-align: left;
    color: #ffffff;
  }
  // p::first-letter {
  //   font: 1.063rem/1.725 "Montserrat", century gothic, sans-serif;
  // }
}
.main__survey__content2__block3__p {
  width: 44.73958333333333%;
  margin: 19.25925925925926vh auto 7.222222222222222vh;
  p {
    text-align: center;
  }
  p:last-of-type {
    margin-top: 1vh;
  }
}
.main__survey__content3__block1 {
  .main__survey__button {
    margin-bottom: 4.640741vh;
  }
}
.main__survey__content3__block1__section {
  margin-top: 7.222222222222222vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.main__survey__content3__block1__section__elem {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3.796296296296296vh;
  position: relative;
  img:first-of-type,
  img:last-of-type {
    top: 3.796296296296296vh;
    position: absolute;
  }
  img:first-of-type {
    left: 10.57291666666667%;
  }
  img:last-of-type {
    right: 10.57291666666667%;
  }
}
.main__survey__content3__block1__section__elem__box {
  width: 20.83333333333333%;
  height: 13.88888888888889vh;
  margin-right: 2.083333333333333%;
  padding: 20px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  &:last-of-type {
    margin-right: 0%;
  }
}
.main__survey__content3__block1__section__elem__box p {
  font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  margin: 0 auto;
  text-align: center;
  // &::first-letter {
  //   font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  // }
}
.main__survey__content3__block1__section__elem__box:nth-last-of-type(2) p {
  font-style: italic;
  // &::first-letter {
  //   font-style: italic;
  // }
}
.main__survey__content3__block1__section__elem__box_button-true {
  box-shadow: 0px 0px 20px #2bb61f !important;
}
.main__survey__content3__block1__section__elem__box_button-false {
  box-shadow: 0px 0px 20px rgba(254, 46, 46, 0.8) !important;
}
.main__survey__content3__block1__circle {
  width: 8.877551020408163%;
  margin: 3.703703703703704vh auto 4.640741vh;
  display: flex;
  justify-content: space-between;
}
.main__survey__content3__block1__circle__elem {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: #3065ec;
  opacity: 0.3;
}
.main__survey__content3__block1__circle__elem__viewed {
  opacity: 1;
}

.content3__block2__section__elem__box {
  &:last-of-type {
    padding: 0;
    flex-wrap: wrap;
    border: unset;
    button {
      width: 100%;
      height: 40.633333%;
      margin-bottom: 6.666666666666667%;
      font: 1rem/1.25 "Montserrat-bold", century gothic, sans-serif;
      background-color: #ffffff;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
      &:last-of-type {
        margin: 0;
      }
    }
  }
}
.content3__block2__circle {
  width: 15.41666666666667%;
}
.content3__block2__circle__elem {
  width: 7px;
  height: 7px;
}
.main__survey__content3__block3 {
  .main__survey__button {
    margin-bottom: 8.796296296296296vh;
  }
}
.main__survey__content3__block3__elem {
  margin-top: 7.222222222222222vh;
  padding-left: 31.61458333333333%;
  .main__survey__content__h3 {
    margin-top: 6.018518518518519vh;
  }
  .main__survey__content__h3:first-of-type {
    margin-top: 0;
  }
}
.main__elem__radio {
  width: unset;
  position: relative;
  .main__survey__content4__block__elem-error {
    top: 0;
    right: 16%;
  }
}
.content3__block3__circle {
  width: 1.25%;
}
.main__survey__content3__block4 {
  margin-bottom: 4.340741vh;
}
.content3__block4__section h2 {
  width: 26.04166666666667%;
  margin: 0;
}
.main__survey__content3__block4__section__elem__box-input {
  width: 78.125%;
  margin: 0 auto;
  display: flex;
  input {
    width: 33.33333333333333%;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #3065ec;
    border-bottom: none;
  }
  input:first-of-type {
    border-radius: 50px 0 0 50px;
    border-right: none;
  }
  input:nth-of-type(2) {
    border-right: none;
  }
  input:last-of-type {
    border-radius: 0 50px 50px 0;
  }
  input::placeholder {
    font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  }
}
.main__survey__content3__block4__section__elem__box-input:last-of-type {
  input {
    border-bottom: 1px solid #3065ec;
  }
}

.content3__block4__section__elem {
  margin-top: 2.314814814814815vh;
  padding-bottom: 6.018518518518519vh;
  flex-wrap: wrap;
}
.main__survey__content3__block4__button {
  margin-top: 1.388888888888889vh;
  color: #3065ec;
  border: 2px solid #3065ec;
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
}
.survay-save-success-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
}
.survay-save-success {
  position: absolute;
  height: 36.75925925925926vh;
  width: 22.5%;
  top: 36.2962962962963vh;
  left: 38.75%;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    padding-left: 35px;
    background-image: url("/ico-success.png");
    background-repeat: no-repeat;
  }
}
.main__survey__content4 {
  width: 65.3125%;
  margin: 7.87037037037037vh auto 0;
  .main__survey__content__h {
    font: 1.563rem/1.73 "Montserrat", century gothic, sans-serif;
    font-weight: bold;
    letter-spacing: 0.03em;
  }
  .main__survey__content__p2 {
    height: unset;
    font-size: 1.25rem;
    // &::first-letter {
    //   font-size: 1.25rem !important;
    // }
  }
}
.main__survey__content4 {
  .main__survey__button {
    width: 18.10207336523126%;
  }
}
.main__survey__content4__block {
  width: 83.9%;
  margin: 4.907407407407407vh auto 0;
  .main__survey__content__p2 {
    text-align: left;
    font-weight: 600;
    // &::first-letter {
    //   font-weight: 600 !important;
    // }
  }
}
.main__survey__content4__block__elem {
  position: relative;
}
.main__survey__content4__block__elem-error {
  top: 4vh;
  right: -8%;
  position: absolute;
  padding: 36px;
  background: #ffffff;
  box-shadow: -10px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  span {
    text-align: center;
    letter-spacing: 0.03em;
    font: 1rem/1.063 "Montserrat-bold", century gothic, sans-serif;
    color: #d84343;
  }
  &::after {
    content: "";
    position: absolute;
    left: -56px;
    bottom: 21px;
    border: 23px solid transparent;
    border-right: 35px solid white;
  }
}
.main__elem__circle_buttons {
  margin: 3.703703703703704vh 0 3.703703703703704vh 2.232854864433812%;
}
.main__elem__circle_buttons button {
  min-width: 37px;
  min-height: 37px;
  margin-right: 11.9%;
  background: #ffffff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  font: 1.25rem/1 "Montserrat", century gothic, sans-serif;
  &:last-of-type {
    margin-right: 0;
  }
}
.circle_button_clicked {
  color: #ffffff;
  border: none !important;
  background-color: #3065ec !important;
}
.content4 {
  width: 5.263157894736842%;
}
.block2 {
  .main__survey__content4__block__elem {
    .main__survey__content4__block__elem-error {
      top: -25px;
    }
  }
}
.block2 .main__elem__circle_buttons {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6.481481481481481vh;
  justify-content: space-between;
}
.success2 {
  flex-wrap: wrap;
  align-content: center;
  h3 {
    width: 100%;
    margin-top: 3.703703703703704vh;
    padding-left: 0;
    background: none;
  }
}
.main__contact__form__text-area {
  width: 95.1%;
  margin: 1.388888888888889vh auto 0;
  textarea {
    height: 18.51851851851852vh;
  }
}
.left-text {
  text-align: left;
}

@media (max-width: 1024px) {
  html {
    font-size: 14px;
    .main__survey__content__p,
    p {
      font-size: 0.9375rem;
    }
    .main__survey__content__h,
    .main__survey__content__p {
      width: 100%;
      text-align: left;
    }
    .main__survey__content__h {
      font-size: 0.9375rem;
    }
    .button-arrow {
      display: none;
    }
    .main__survey__button {
      width: 80%;
    }
    .main__survey__nav {
      width: 100%;
      position: absolute;
      margin: 0;
      padding: 0 7.866666666666665%;
      box-sizing: border-box;
      display: flex;
      p {
        width: unset;
        margin-top: 1vh;
        background-color: unset;
        font-size: 0.75rem;
        opacity: 1;
      }
    }
    .main__survey__nav__p-active {
      color: #3a5c9d;
    }
    .main__survey__content1__block1 {
      margin: 0;
      .main__survey__content__p {
        margin: 2vh auto;
      }
    }
    .main__survey__content1__block1__img {
      width: 100%;
      max-width: unset;
      margin: 0;
      padding: 10.94452773613193vh 0 3.598200899550225vh;
      position: relative;
      background-position: 0 0;
      background-size: cover;
      div {
        top: 0;
        width: 100%;
        position: absolute;
        z-index: -1;
        display: block;
        img {
          width: 100%;
          border-radius: unset;
        }
        &::before {
          content: unset;
        }
      }
      &:after {
        content: "";
        bottom: 0;
        width: 97px;
        min-height: 102px;
        position: absolute;
        display: block;
        background-repeat: no-repeat;
        background-position: 0 -40px;
        background-image: url(/surveyDmobile/state-top-flowers-bg.svg);
      }
      &::before {
        content: unset;
      }
      img {
        width: 84.26666666666667%;
        margin: 0 auto;
        display: block;
      }
    }
    .main__survey__content1__block1__p {
      width: 80%;
      margin: 1vh auto 0;
    }
    .main__survey__content1__block1 h2 {
      width: 80%;
      margin: 3.448275862068966vh auto 0;
    }
    .main__survey__content1__block2 {
      h2,
      p {
        width: 80%;
        margin: 0 auto;
        text-align: left;
      }
      p {
        margin-top: 1vh;
      }
      .main__survey__content1__block2__img {
        width: 80%;
        img {
          width: 100%;
        }
      }
    }
    .main__survey__content1__block2 {
      padding: 0;
      height: unset;
      flex-wrap: wrap;
    }

    .main__survey__content1__block3__img {
      width: 95%;
    }
    .main__survey__content1__block3,
    .main__survey__content1__block4 {
      width: 80%;
      margin: 0 auto;
    }
    .surveyBG {
      background: unset;
    }
    .bgState3mobile {
      display: block;
      top: 60px;
      width: 100%;
    }
    .bgState3 {
      display: none;
    }
    .main__survey__content4 {
      width: 80%;
      margin: 10.5vh auto 0;
    }
    .main__survey__content4 .main__survey__content__h,
    .main__survey__content4 .main__survey__content__p2 {
      font-size: 0.9375rem;
      text-align: left;
    }
    .main__survey__content4__block {
      width: 100%;
    }
    .main__elem__circle_buttons {
      margin-left: 0;
    }
    .main__elem__circle_buttons button {
      margin-right: 9%;
    }
    .main__survey__content4 .main__survey__button {
      width: 100%;
      margin-bottom: 8.796296296296296vh;
    }
  }
  .survay-save-success {
    position: absolute;
    height: 60vh;
    width: 80%;
    top: 20vh;
    left: 10%;
    h3 {
      text-align: center !important;
    }
  }
}
</style>



