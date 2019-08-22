<template>
  <main :class="{surveyBG:state>2,}">
    <div class="main__survey__nav">
      <p @click="state=1" :class="{'main__survey__nav__p-active':state==1}">1. Opis przypadku</p>
      <p @click="state=2" :class="{'main__survey__nav__p-active':state==2}">2. Psychoedukacja</p>
      <p @click="state=3" :class="{'main__survey__nav__p-active':state==3}">3. Ankieta</p>
    </div>

    <div class="main__survey__content">
      <div v-if="state==1" class="main__survey__content1">
        <div class="main__survey__content1__block1">
          <div class="main__survey__content1__block1__img">
            <img src="/main__survey__content1__block1.png" alt />
            <img src="/surveyDmobile/main__survey__content1__block1-mobile.svg" alt />
            <div>
              <img src="/surveyDmobile/main__survey__content1__block1-mobileBG.svg" alt />
            </div>
          </div>
          <h2 class="main__survey__content__h">Karolina od 3 lat zmaga się z alergią.</h2>
          <div class="main__survey__content1__block1__p">
            <p>Leki pomagają tylko na chwilę, a drapanie powoduje, że na jej ciele widoczne są strupy i blizny. Wstydzi się ich przez co unika spotkań ze znajomymi.</p>
          </div>
          <h2 class="main__survey__content__h">W biurze ogranicza kontakty do minimum.</h2>
          <div class="main__survey__content1__block1__p">
            <p>Coraz częściej bierze zwolnienia i myśli o rezygnacji z pracy. Chcąc ukryć objawy alergii, niezależnie od pogody, ubiera się w długie spodnie, bluzki z długim rękawem, a szyję okrywa szalem. Jest przekonana, że wszyscy się jej brzydzą i boją się przebywać blisko niej, żeby się nie zarazić.</p>
          </div>
          <button
            class="button-arrow main__survey__content1__block1__arrow"
            v-scroll-to="'.main__survey__content1__block2'"
          ></button>
        </div>
        <div class="main__survey__content1__block2">
          <div class="main__survey__content1__block2__img">
            <h2
              class="main__survey__content__h"
            >Kilka dni temu siostra Karoliny wyciągnęła ją na spacer po parku.</h2>
          </div>
          <div class="main__survey__content1__block2__img">
            <img src="/main__survey__content1__block2.png" alt />
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block3'"></button>
        </div>
        <div class="main__survey__content1__block3">
          <h2
            class="main__survey__content__h"
          >Gdy siostry odpoczywały na ławce, Karolina zauważyła w oddali swoją znajomą.</h2>
          <div class="main__survey__content1__block3__p">
            <p>
              <span class="bold">- O cześć, fajnie Cię widzieć! Co słychać?</span> - Ania zwróciła się do Karoliny z uśmiechem.
            </p>
            <p>
              <br />“Patrzy na mnie, żeby zobaczyć czy mam rany”. Karolina poczuła, że robi jej się gorąco, a serce zaczyna walić.
            </p>
            <p>
              <br />
              <span class="bold">- Bez zmian</span>- odpowiedziała na głos, a chcąc jak najszybciej zakończyć to spotkanie, dodała:
              <span
                class="bold"
              >- właśnie wracamy powoli do domu.</span>
              <br />
              <span
                class="bold"
              >- Ostatnio straszne upały. W pracy to aż nie mogę wytrzymać z tego gorąca</span> - powiedziała Ania.
            </p>
          </div>
          <div class="main__survey__content1__block3__img">
            <img src="/main__survey__content1__block3.png" alt />
            <img src="/surveyDmobile/main__survey__content1__block3.svg" alt />
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block4'"></button>
        </div>
        <div class="main__survey__content1__block4">
          <h2 class="main__survey__content__h">Karolina znowu poczuła, że serce jej mocniej zabiło.</h2>
          <div class="main__survey__content1__block4__p">
            <p>
              <br />”Pewnie uważa, że jestem idiotką, bo tak się ubrałam mimo upału. Śmieje się ze mnie“.
              <br />
              <br />Dziewczyna objęła Karolinę spojrzeniem, po czym zwróciła się do jej siostry z uśmiechem:
              <br />
              <span class="bold">- Cześć, jestem Ania. Znamy się z Karoliną ze studiów.</span>
              <br />
              <br />“Odwróciła wzrok, nie może na mnie patrzeć” — pomyślała Karolina.
              <br />“Na pewno widzi jak wyglądam i się brzydzi" — w głowie Karoliny wciąż kłębiły się domysły.
              <br />
              <br />
              <span class="bold">- Na mnie już czas dzieci czekają na lody</span> - rzekła Ania, po czym dodała:
              <span
                class="bold"
              >- Musimy się kiedyś umówić na kawę, co ty na to? Tylko żenie za bardzo nie wiem kiedy. Ostatnio sporo pracuję, ale od wakacji będę już wolniejsza. Także zadzwonię do ciebie za parę dni, OK?</span>
              <br />
              <span class="bold">- Tak, chętnie</span> - odpowiedziała Karolina.
              <br />
              <br />Myśli jednak nie dawały jej spokoju: “Ucieka, ucieka ode mnie, żeby się nie zarazić.
              <br />Obiecuje, a i tak nie zadzwoni. Zobaczyła, jak wyglądam i woli się trzymać z daleka.
              <br />Wszyscy mnie zostawili, brzydzą się mnie. Muszę się stąd wydostać, muszę się schować w domu.
              <br />Nikt nie powinien oglądać kogoś takiego jak ja”.
            </p>
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block5'"></button>
        </div>
        <div class="main__survey__content1__block5">
          <div class="main__survey__content1__block5__h">
            <h2 class="main__survey__content__h">
              Karolina poczuła się opuszczona przez wszystkich.
              <br />Postanowiła jak najszybciej wrócić do domu.
            </h2>
          </div>
          <div class="main__survey__content1__block5__img">
            <img src="/main__survey__content1__block5.png" alt />
          </div>
          <button @click="scrollStateTo2" class="main__survey__button">Dalej</button>
        </div>
      </div>
      <div v-else-if="state==2" class="main__survey__content2">
        <div class="main__survey__content2__block1">
          <div class="main__survey__content2__block1__img">
            <img src="/main__survey__content2__block1.png" alt />
            <img src="/surveyDmobile/main__survey__content2__block1-mobile.png" alt />
            <div>
              <img src="/surveyDmobile/main__survey__content1__block1-mobileBG.svg" alt />
            </div>
          </div>
          <div class="main__survey__content2__block1__p">
            <h2
              class="main__survey__content__h"
            >Sposób postrzegania sytuacji ma bardzo duże znaczenie dla tego, jak reagujemy i jak się czujemy.</h2>
            <p>Spostrzeganie jest zawsze subiektywne, co oznacza, że wpływ na nie mają nasze doświadczenia i przekonania</p>
            <p>Osoby w depresji postrzegają świat przez “czarne okulary”, dlatego wiele sytuacji odbierają i interpretują w negatywny sposób.</p>
            <p>Aby trafnie ocenić sytuację, w której się znaleźliśmy, należy nauczyć się odróżniać fakty od interpretacji i zadbać o równowagę między uczuciami a zdrowym rozsądkiem.</p>
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content2__block2'"></button>
        </div>
        <div class="main__survey__content2__block2">
          <div class="main__survey__content2__block2__p-left">
            <p
              class="main__survey__content__h"
            >Fakty to wydarzenia i elementy sytuacji, które zaistniały w określonym miejscu i czasie. Fakty można zweryfikować oraz udowodnić. Mogą być jednak odmiennie interpretowane przez różnych ludzi.</p>
          </div>
          <div class="main__survey__content2__block2__img">
            <img src="main__survey__content2__block2.svg" alt />
          </div>
          <div
            class="main__survey__content2__block2__img-mobile main__survey__content1__block3__img"
          >
            <img src="/surveyDmobile/main__survey__content2__block2.svg" alt />
          </div>
          <div class="main__survey__content2__block2__p-right">
            <p
              class="main__survey__content__h"
            >Interpretacje są naznaczone emocjami, przekonaniami i wcześniejszymi doświadczeniami, są indywidualną oceną. Interpretacje mogą być zgodne z rzeczywistością lub nie.</p>
          </div>
        </div>
        <div class="main__survey__content2__block3">
          <div class="main__survey__content2__block3__p">
            <p>Karolina zinterpretowała słowa Ani zgodnie ze swoim nastrojem (depresją, lękiem) oraz własnymi przekonaniami na temat choroby i wyglądu. Przyjacielskie powitanie ze strony Ani odebrała jako udawanie i chęć sprawdzenia, czy nadal ma alergię.</p>
          </div>
          <h2
            class="main__survey__content__h"
          >Dla Karoliny korzystna byłaby praca nad umiejętnością odróżniania faktów od interpretacji.</h2>
        </div>
        <button @click="scrollStateTo3" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==3" class="main__survey__content4">
        <h1
          v-if="survey4state <= 2"
          class="main__survey__content__h"
        >Proszę przeczytać stwierdzenia dotyczące zaprezentowanego w tej części badania materiału i wskazanie na ile zgadzasz lub nie zgadzasz się z poszczególnymi zdaniami:</h1>
        <!-- <h1
          v-if="survey4state == 3"
          class="main__survey__content__h"
        >Zaprezentowany materiał jest według mnie</h1>-->
        <p
          v-if="survey4state <= 2"
          class="main__survey__content__p2"
        >(1 - zdecydowanie nie; 2 - raczej nie; 3 - nie wiem; 4- raczej tak; 5-zdecydowanie tak)</p>
        <!-- <p
          v-if="survey4state == 3"
          class="main__survey__content__p2"
        >(1 - bardzo zły; 5 - bardzo dobry)</p>-->
        <div v-if="survey4state==1" class="main__survey__content4__block">
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
            >5.Czy taka forma przekazu pomogłaby Ci zapoznać się z materiałami w aplikacji?</p>
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
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >6.Czy przedstawiona historia dobrze ilustruje problem poruszany w załączonej psychoedukacji?</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an6}"
                @click="an6=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an6 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <!-- <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">7. Materiał wywołał we mnie dyskomfort</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an7}"
                @click="an7=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an7 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>-->
        </div>
        <!-- <div v-if="survey4state==2" class="main__survey__content4__block">
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">8. Z zainteresowaniem obejrzałem/am materiał</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an8}"
                @click="an8=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an8 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">9. Z uwagą zapoznałem/am się z materiałem</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an9}"
                @click="an9=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an9 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >10. Identyfikuję się z bohaterem, który pojawił się w materiale</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an10}"
                @click="an10=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an10 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >11. Potrafiłem/am wczuć się w przedstawioną sytuację</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an11}"
                @click="an11=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an11 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">12. Opisana sytuacja była mi obca</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an12}"
                @click="an12=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an12 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">13. Starannie wykonałem/am przygotowane zadanie</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an13}"
                @click="an13=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an13 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >14. Wykonałbym/wykonałabym takie zadanie, gdyby było ono zaprezentowane w produkcie do komputerowej psychoterapii depresji.</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an14}"
                @click="an14=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an14 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
        </div>
        <div v-if="survey4state==3" class="main__survey__content4__block block2">
          <div class="main__survey__content4__block__elem">
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an15}"
                @click="an15=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an15 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <h2 class="main__survey__content__h">Dodatkowe uwagi</h2>
          <div class="main__contact__form__text-area">
            <textarea v-model="an16" placeholder="Maksymalnie 250 znaków"></textarea>
          </div>
        </div>-->
        <!-- <div class="main__survey__content3__block1__circle content4">
          <div
            v-for="(n,index) in 3"
            :key="n.index"
            :class="{main__survey__content3__block1__circle__elem__viewed: index < survey4state}"
            class="main__survey__content3__block1__circle__elem content3__block2__circle__elem"
          ></div>
        </div>-->
        <!-- <button v-if="survey4state <= 2" @click="nextState4" class="main__survey__button">Dalej</button> -->
        <button @click="nextState4" class="main__survey__button">Zakończ</button>
        <div v-if="showPopUpLastState" class="survay-save-success-background">
          <div class="survay-save-success success2">
            <img src="/ico-survey-success.png" alt />
            <h3 class="main__survey__content__h">
              Gratulecje!
              <br />Zadanie ukończone!
            </h3>
            <download-excel
              style="color: blue"
              :data="json_data"
              :fields="json_fields"
              worksheet="My Worksheet"
              type="csv"
              name="filename.xls"
            >Download CSV</download-excel>
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
  components: { "download-excel": JsonExcel },
  data() {
    return {
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ],
      json_fields: {
        id: "user",
        mail: "user_email",
        survey: "survey",
        fakty_atrakcyjnosc_tabela: "Zadanie1_atrakcyjnosc_tabela",
        fakty_skutecznosc_cwiczenie1: "Zadanie2_skutecznosc_fakty0",
        fakty_skutecznosc_cwiczenie2: "Zadanie2_skutecznosc_fakty1",
        fakty_skutecznosc_cwiczenie3: "Zadanie2_skutecznosc_fakty2",
        fakty_skutecznosc_cwiczenie4: "Zadanie2_skutecznosc_fakty3",
        fakty_skutecznosc_cwiczenie5: "Zadanie2_skutecznosc_fakty4",
        fakty_skutecznosc_cwiczenie6: "Zadanie2_skutecznosc_fakty5",
        fakty_skutecznosc_cwiczenie7: "Zadanie2_skutecznosc_fakty6",
        fakty_skutecznosc_cwiczenie8: "Zadanie2_skutecznosc_fakty7",
        fakty_skutecznosc_cwiczenie9: "Zadanie2_skutecznosc_fakty8",
        fakty_skutecznosc_cwiczenie10: "Zadanie2_skutecznosc_fakty9",
        fakty_skutecznosc_cwiczenie11: "Zadanie2_skutecznosc_fakty10",
        fakty_skutecznosc_cwiczenie12: "Zadanie2_skutecznosc_fakty11",
        fakty_skutecznosc_cwiczenie13: "Zadanie2_skutecznosc_fakty12",
        fakty_skutecznosc_cwiczenie14: "Zadanie2_skutecznosc_fakty13",
        fakty_skutecznosc_cwiczenie15: "Zadanie2_skutecznosc_fakty14",
        fakty_skutecznosc_cwiczenie16: "Zadanie2_skutecznosc_fakty15",
        fakty_skutecznosc_cwiczenie17: "Zadanie2_skutecznosc_fakty16",
        fakty_skutecznosc_cwiczenie18: "Zadanie2_skutecznosc_fakty17",
        fakty_skutecznosc_test1: "Zadanie3_skutecznosc_testy0",
        fakty_skutecznosc_test2: "Zadanie3_skutecznosc_testy1",
        fakty_skutecznosc_test3: "Zadanie3_skutecznosc_testy2",
        fakty_skutecznosc_test4: "Zadanie3_skutecznosc_testy3",
        fakty_skutecznosc_test5: "Zadanie3_skutecznosc_testy4",
        fakty_skutecznosc_test6: "Zadanie3_skutecznosc_testy5",
        fakty_skutecznosc_test7: "Zadanie3_skutecznosc_testy6",
        fakty_skutecznosc_test8: "Zadanie3_skutecznosc_testy7",
        fakty_skutecznosc_test9: "Zadanie3_skutecznosc_testy8",
        fakty_skutecznosc_test10: "Zadanie3_skutecznosc_testy9",
        fakty_skutecznosc_test11: "Zadanie3_skutecznosc_testy10",
        fakty_skutecznosc_test12: "Zadanie3_skutecznosc_testy11",
        fakty_atrakcyjnosc_ankieta1: "an1",
        fakty_atrakcyjnosc_ankieta2: "an2",
        fakty_atrakcyjnosc_ankieta3: "an3",
        fakty_atrakcyjnosc_ankieta4: "an4",
        fakty_atrakcyjnosc_ankieta5: "an5",
        fakty_atrakcyjnosc_ankieta6: "an6",
        fakty_atrakcyjnosc_ankieta7: "an7",
        fakty_atrakcyjnosc_ankieta8: "an8",
        fakty_atrakcyjnosc_ankieta9: "an9",
        fakty_atrakcyjnosc_ankieta10: "an10",
        fakty_atrakcyjnosc_ankieta11: "an11",
        fakty_atrakcyjnosc_ankieta12: "an12",
        fakty_atrakcyjnosc_ankieta13: "an13",
        fakty_atrakcyjnosc_ankieta14: "an14",
        fakty_atrakcyjnosc_ankieta15: "an15",
        fakty_atrakcyjnosc_ankieta16: "an16"
      },
      json_data: [],
      state: 1,
      subState: 1,
      surveyInfo: {
        1: {
          name: "Zauważam Anię",
          thought: "To Ania, moja koleżanka ze studiów",
          option: "Fakt"
        },
        2: {
          name: "Ania wita się ze mną.",
          thought:
            "Udaje, że się cieszy, a tak naprawdę chce wiedzieć, czy wciąż mam tę alergię.",
          option: "Interpretacja"
        },
        3: {
          name: "Ania patrzy na mnie.",
          thought: "Patrzy na mnie, żeby zobaczyć, czy mam strupy.",
          option: "Interpretacja"
        },
        4: {
          name: "Ania mówi o upale",
          thought: "Ania mówi, że jest gorąco ",
          option: "Fakt"
        },
        5: {
          name: "Ania mówi o upale",
          thought:
            "Pewnie myśli, że jestem idiotką, bo tak się ubrałam mimo upału. Wyśmiewa się ze mnie.",
          option: "Interpretacja"
        },
        6: {
          name: "Ania patrzy na mnie po czym wita się z moją siostrą.",
          thought:
            "Odwróciła wzrok, bo nie może na mnie patrzeć. Widzi moje rany i się brzydzi.",
          option: "Interpretacja"
        },
        7: {
          name: "Ania żegna się",
          thought:
            "Ucieka ode mnie, żeby się nie zarazić. Obiecuje, a i tak nie zadzwoni. Zobaczyła, jak wyglądam i woli się trzymać z daleka.",
          option: "Interpretacja"
        }
      },
      surveyInfoNum: 1,
      userThought: [
        {
          name: null,
          thought: null,
          option: null
        },
        {
          name: null,
          thought: null,
          option: null
        },
        {
          name: null,
          thought: null,
          option: null
        },
        {
          name: null,
          thought: null,
          option: null
        },
        {
          name: null,
          thought: null,
          option: null
        },
        {
          name: null,
          thought: null,
          option: null
        }
      ],
      surveyInfoChoose: [
        {
          name: "Chłopak nie zadzwonił, chociaż obiecał.",
          thought: "Nie zależy mu na mnie",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Znajoma ma inny kolor włosów niż wczoraj.",
          thought: "Przefarbowała włosy",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name: "Szef chce ze mną porozmawiać.",
          thought: "Na pewno nie podoba mu się, jak pracuję.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name:
            "Koleżanka nie podeszła do mnie, aby porozmawiać, gdy się spotkałyśmy w sklepie.",
          thought: "Unika mnie.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Dziecko ma wysoką gorączkę",
          thought: "Jest chore.",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name:
            "Znajomi na przyjęciu rozmawiają o czymś przy osobnym stole i wybuchają śmiechem.",
          thought: "Rozmawiają o mnie i mnie wyśmiewają.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Kasjerka w sklepie wbiła złą cenę produktu.",
          thought: "To jest zła cena.",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name: "Koleżanka nie patrzy na mnie, kiedy do niej mówię.",
          thought: "Nie jest zainteresowana rozmową ze mną.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Kierowca autobusu zamknął przede mną drzwi i odjechał.",
          thought: "Nie zdążyłem na autobus.",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name: "Mąż został do wieczora w pracy",
          thought: "On za dużo pracuje.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Kamila nie przygotowała mojej ulubionej kawy.",
          thought: "Nie wypiłem ulubionej kawy.",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name: "Tomek krzyczy do swojej żony.",
          thought: "Jest agresywny.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Od tygodnia czekam na telefon z pracy.",
          thought: "Jeszcze do mnie nie zadzwonili.",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name: "Ania się do mnie nie odzywa.",
          thought: "Jest na mnie zła.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Marek nie zjadł obiadu.",
          thought: "Nie jest głodny.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Monika dotyka swoich włosów podczas rozmowy.",
          thought: "Jest zdenerwowana.",
          option: "Interpretacja",
          choosedOption: ""
        },
        {
          name: "Pracownik kolejny dzień nie przychodzi na czas.",
          thought: "Znowu się spóźnia.",
          option: "Fakt",
          choosedOption: ""
        },
        {
          name: "Andrzej się do mnie uśmiecha.",
          thought: "Lubi mnie.",
          option: "Interpretacja",
          choosedOption: ""
        }
      ],
      surveyInfoChooseNum: 0,
      surveyInfoChooseRandomNum: [],
      surveyInfoChooseAnswer: null,
      surveyCNum: 1,
      surveyC: [],
      showPopUp: false,
      an1: null,
      an2: null,
      an3: null,
      an4: null,
      an5: null,
      an6: null,
      an7: null,
      an8: null,
      an9: null,
      an10: null,
      an11: null,
      an12: null,
      an13: null,
      an14: null,
      an15: null,
      an16: null,
      checkAn: false,
      survey4state: 1,
      userTextAnswer: 0,
      showPopUpLastState: false,
      loginedUser: null,
      saved: false
    };
  },
  methods: {
    home() {
      this.$router.replace("/logined");
    },
    nextSurveyInfo() {
      if (this.surveyInfoNum < 7) {
        this.surveyInfoNum++;
      }
    },
    prevSurveyInfo() {
      if (this.surveyInfoNum > 1) {
        this.surveyInfoNum--;
      }
    },
    scrollStateTo2() {
      this.state++;
      firstScrollTo("main");
    },
    scrollStateTo3() {
      this.state++;
      firstScrollTo("main");
    },
    saveAnswersB(answer) {
      this.surveyInfoChooseAnswer = answer;
      if (
        this.surveyInfoChoose[
          this.surveyInfoChooseRandomNum[this.surveyInfoChooseNum]
        ].option === answer
      ) {
        this.surveyInfoChoose[
          this.surveyInfoChooseRandomNum[this.surveyInfoChooseNum]
        ].choosedOption = 1;
      } else {
        this.surveyInfoChoose[
          this.surveyInfoChooseRandomNum[this.surveyInfoChooseNum]
        ].choosedOption = 0;
      }
      setTimeout(() => {
        if (this.surveyInfoChooseNum < 17) {
          this.surveyInfoChooseAnswer = null;
          this.surveyInfoChooseNum++;
        } else {
          this.surveyInfoChooseAnswer = "done";
        }
      }, 500);
    },
    saveAll() {
      let state;
      for (var i = 0; i < 12; i++) {
        if (this.surveyC[i] == null && i < 7 && this.surveyCNum == 1)
          state = true;
        else if (
          this.surveyC[i] == null &&
          i < 12 &&
          i > 7 &&
          this.surveyCNum == 2
        ) {
          state = true;
        }
      }
      if (state) {
        this.checkAn = true;
      } else {
        if (this.surveyCNum == 1) {
          this.surveyCNum++;
          this.checkAn = false;
        } else {
          this.state++;
          this.checkAn = false;
        }
      }
      firstScrollTo("main");
    },
    generateArrayRandomNumber(min, max) {
      var totalNumbers = max - min + 1,
        arrayTotalNumbers = [],
        arrayRandomNumbers = [],
        tempRandomNumber;
      while (totalNumbers--) {
        arrayTotalNumbers.push(totalNumbers + min);
      }
      while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(
          Math.random() * (arrayTotalNumbers.length - 1)
        );
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
      }
      return arrayRandomNumbers;
    },
    saveAnswersD() {
      this.showPopUp = true;
      this.surveyInfoChooseRandomNum = this.generateArrayRandomNumber(0, 17);
      this.userThought.forEach(element => {
        if ((element.name || element.thought || element.option) != null) {
          this.userTextAnswer = 1;
        }
      });
      setTimeout(() => {
        this.showPopUp = false;
        this.subState++;
      }, 1000);
    },
    nextState4() {
      if (this.survey4state == 3) {
        if (this.an15 == null) {
          this.checkAn = true;
        } else {
        }
      }
      if (
        (this.an1 &&
          this.an2 &&
          this.an3 &&
          this.an4 &&
          this.an5 &&
          this.an6) != null
      ) {
        firstScrollTo("main");
        this.showPopUpLastState = true;
        this.saveData();
        setTimeout(() => {
          if (this.saved) {
            // this.$router.replace("/logined");
          }
        }, 1500);
        this.checkAn = false;
      } else {
        this.checkAn = true;
      }
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
    saveData() {
      for (let index = 0; index < this.surveyC.length; index++) {
        if (this.surveyC[index] != true) {
          this.surveyC[index] = 0;
        } else {
          this.surveyC[index] = 1;
        }
      }
      for (let index = 0; index < this.surveyInfoChoose.length; index++) {
        if (this.surveyInfoChoose[index].choosedOption != true) {
          this.surveyInfoChoose[index] = 0;
        } else {
          this.surveyInfoChoose[index] = 1;
        }
      }
      this.json_data = [
        {
          user: fb.auth().currentUser.uid,
          user_email: fb.auth().currentUser.email,
          survey: "Fakty i interpretacje",
          Zadanie1_atrakcyjnosc_tabela: this.userTextAnswer,
          Zadanie2_skutecznosc_fakty0: this.surveyInfoChoose[0],
          Zadanie2_skutecznosc_fakty1: this.surveyInfoChoose[1],
          Zadanie2_skutecznosc_fakty2: this.surveyInfoChoose[2],
          Zadanie2_skutecznosc_fakty3: this.surveyInfoChoose[3],
          Zadanie2_skutecznosc_fakty4: this.surveyInfoChoose[4],
          Zadanie2_skutecznosc_fakty5: this.surveyInfoChoose[5],
          Zadanie2_skutecznosc_fakty6: this.surveyInfoChoose[6],
          Zadanie2_skutecznosc_fakty7: this.surveyInfoChoose[7],
          Zadanie2_skutecznosc_fakty8: this.surveyInfoChoose[8],
          Zadanie2_skutecznosc_fakty9: this.surveyInfoChoose[9],
          Zadanie2_skutecznosc_fakty10: this.surveyInfoChoose[10],
          Zadanie2_skutecznosc_fakty11: this.surveyInfoChoose[11],
          Zadanie2_skutecznosc_fakty12: this.surveyInfoChoose[12],
          Zadanie2_skutecznosc_fakty13: this.surveyInfoChoose[13],
          Zadanie2_skutecznosc_fakty14: this.surveyInfoChoose[14],
          Zadanie2_skutecznosc_fakty15: this.surveyInfoChoose[15],
          Zadanie2_skutecznosc_fakty16: this.surveyInfoChoose[16],
          Zadanie2_skutecznosc_fakty17: this.surveyInfoChoose[17],
          Zadanie3_skutecznosc_testy0: this.surveyC[0],
          Zadanie3_skutecznosc_testy1: this.surveyC[1],
          Zadanie3_skutecznosc_testy2: this.surveyC[2],
          Zadanie3_skutecznosc_testy3: this.surveyC[3],
          Zadanie3_skutecznosc_testy4: this.surveyC[4],
          Zadanie3_skutecznosc_testy5: this.surveyC[5],
          Zadanie3_skutecznosc_testy6: this.surveyC[6],
          Zadanie3_skutecznosc_testy7: this.surveyC[7],
          Zadanie3_skutecznosc_testy8: this.surveyC[8],
          Zadanie3_skutecznosc_testy9: this.surveyC[9],
          Zadanie3_skutecznosc_testy10: this.surveyC[10],
          Zadanie3_skutecznosc_testy11: this.surveyC[11],
          an1: this.an1,
          an2: this.an2,
          an3: this.an3,
          an4: this.an4,
          an5: this.an5,
          an6: this.an6,
          an7: this.an7,
          an8: this.an8,
          an9: this.an9,
          an10: this.an10,
          an11: this.an11,
          an12: this.an12,
          an13: this.an13,
          an14: this.an14,
          an15: this.an15,
          an16: this.an16
        }
      ];
      // if (fb.auth().currentUser.uid) {
      //   db.collection("survey")
      //     .add({
      //       user: fb.auth().currentUser.uid,
      //       user_email: fb.auth().currentUser.email,
      //       survey: "Fakty i interpretacje",
      //       Zadanie1_atrakcyjnosc_tabela: this.userTextAnswer,
      //       Zadanie2_skutecznosc_fakty: this.surveyInfoChoose,
      //       Zadanie3_skutecznosc_testy: this.surveyC,
      //       an1: this.an1,
      //       an2: this.an2,
      //       an3: this.an3,
      //       an4: this.an4,
      //       an5: this.an5,
      //       an6: this.an6,
      //       an7: this.an7,
      //       an8: this.an8,
      //       an9: this.an9,
      //       an10: this.an10,
      //       an11: this.an11,
      //       an12: this.an12,
      //       an13: this.an13,
      //       an14: this.an14,
      //       an15: this.an15,
      //       an16: this.an16
      //     })
      //     .then((this.saved = true));
      // }
    }
  },
  created() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.loginedUser = fb.auth().currentUser.email;
      } else {
        this.loginedUser = "Error";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.header__form {
  width: 20.0525%;
  right: 9.33%;
  top: 5.7vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__logined {
  width: 67.68%;
  display: flex;
  align-items: center;
  border: 1px solid #5690ff;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 50px 10px 10px;
  position: relative;
}
.header__logined p {
  letter-spacing: 0em;
  margin-left: 10px;
  font: 0.9375rem/1 "Montserrat", century gothic, sans-serif;
}
.header__logined button {
  width: 36px;
  height: 36px;
  padding: 0;
  position: absolute;
  top: 0;
  right: -22%;
  border: none;
  border-radius: unset;
  background-color: unset;
  background-image: url(/ico-logout.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  outline: none;
  cursor: pointer;
}
html {
  @media (max-width: 1440px) {
    .main__survey__content2__block3__p {
      margin-top: 19.259259vh;
    }
    .subnav {
      margin-bottom: 5.648148vh;
    }
    .main__survey__content2__block2 {
      padding-top: 15.666667vh;
    }
  }
  .main__survey__content1__block4 {
    width: 87.520833%;
  }
  @media (max-width: 1367px) {
    .main__survey__content1__block1__p {
      margin-left: 48.583333%;
      width: 49.15625%;
    }

    .main__survey__content1__block2__img {
      margin: 1.444444vh auto 1.277778vh;
    }
    .main__survey__content1__block4__p {
      width: 68.072917%;
      margin-bottom: 7.814815vh;
    }
    .main__survey__content2__block1 {
      margin-top: 15.833333vh;
    }
    .main__survey__content2__block1__p {
      width: 45.145833%;
      margin-bottom: 13vh;
    }
    .main__survey__content2__block3__p {
      width: 86.739583%;
    }
    .main__survey__content__p {
      width: 59.875%;
    }
  }
  @media (max-width: 1280px) {
    .main__survey__nav {
      width: 55.9795%;
    }
    .main__survey__content1__block1__p {
      width: 43.15625%;
    }
    .main__survey__content1__block4__p {
      width: 62.072917%;
      margin-bottom: 7.814815vh;
    }
    .main__survey__content2__block1 {
      margin-top: 7.833333vh;
    }
    .main__survey__content2__block1__p {
      margin-bottom: 14vh;
    }
    .main__survey__content2__block3__p {
      margin-top: 2.259259vh;
    }
    .main__survey__content2__block2__img {
      top: 3.962963vh;
    }
    .main__survey__content__p {
      width: 57.875%;
    }
  }
  @media (max-width: 1024px) {
    p {
      font-size: 0.9375rem;
    }
    .button-arrow {
      display: none;
    }
    .main__survey__content__h {
      // width: 80%;
      font-size: 0.9375rem;
    }
    .main__survey__nav {
      position: absolute;
      width: 100%;
      padding: 0 7.866666666666665%;
      box-sizing: border-box;
      display: flex;
      p {
        margin-top: 1vh;
        background-color: unset;
        font-size: 0.75rem;
      }
    }
    .main__survey__content1__block1__img {
      width: 100%;
      max-width: unset;
      margin: 0;
      padding: 10.94452773613193vh 0 3.598200899550225vh;
      position: relative;

      background-position: left top;
      background-size: cover;
      &:after {
        content: "";
        bottom: 0vh;
        width: 97px;
        min-height: 102px;
        position: absolute;
        display: block;
        background-repeat: no-repeat;
        background-position: 0 -40px;
        background-image: url("/surveyDmobile/state-top-flowers-bg.svg");
      }
      img:last-of-type {
        display: block;
      }
      img {
        width: 84.26666666666667%;
        // max-height: 26.83658170914543vh;
        margin: 0 auto;
        display: block;
      }
      div {
        top: 0;
        width: 100%;
        position: absolute;
        z-index: -1;
      }
      div img {
        // display: block !important;
        width: 100%;
        display: block;
        margin: 0;
        max-height: unset;
      }
      > img:first-of-type {
        display: none;
      }
    }
    .main__survey__content1__block1__p p:first-of-type {
      margin-bottom: 0.6rem;
    }
    .main__survey__content1__block1__p {
      width: 80%;
      margin: 1vh auto;
    }
    .main__survey__content1__block1 {
      margin-top: 0;
      h2 {
        width: 80%;
        margin: 1.5vh auto;
      }
    }
    .main__survey__content1__block1__arrow {
      margin-top: 3vh;
    }
    .main__survey__content1__block2 {
      height: unset;
      padding-top: 0;
    }
    .main__survey__content1__block2__img {
      width: unset;
      margin: 0;
      h2 {
        width: 80%;
        margin: 0 auto;
        text-align: left;
      }
    }
    .main__survey__content1__block3 {
      padding: 0;
      height: unset;
      flex-wrap: wrap;
      button {
        margin: 0 auto;
        position: unset;
      }
      h2 {
        width: 80%;
        text-align: left;
        order: -1;
      }
    }
    .main__survey__content1__block3__p {
      width: 80%;
      margin: 0 auto;
      position: unset;
    }
    .main__survey__content1__block3__img {
      width: 80%;
      margin: 5vh auto;
      position: relative;
      order: -1;
      top: unset;
      right: unset;
      img:first-of-type {
        display: none;
      }
      img:last-of-type {
        display: block;
      }
      img {
        display: block;
      }
      &:before {
        content: "";
        width: 22.66464343264317%;
        min-width: 76px;
        height: 8.695652173913043vh;
        min-height: 57px;
        left: -6.2%;
        bottom: -1.3vh;
        position: absolute;
        display: block;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        background-image: url("/surveyDmobile/main__survey__content1__block3__flowers1.svg");
      }
      &:after {
        content: "";
        width: 26%;
        min-width: 78px;
        height: 10.79460269865067vh;
        min-height: 72px;
        right: -3%;
        bottom: -1.61637vh;
        position: absolute;
        display: block;
        background-repeat: no-repeat;
        background-position: 0px 0px;
        background-image: url("/surveyDmobile/main__survey__content1__block3__flowers2.svg");
      }
    }
    .main__survey__content1__block4 {
      width: 100%;
      height: unset;
      padding-top: 6.011111vh;
      h2 {
        width: 80%;
      }
    }
    .main__survey__button {
      width: 80%;
    }
    .main__survey__content1__block4__p {
      width: 80%;
      margin-bottom: 5.997vh;
    }
    .main__survey__content1__block5 {
      padding-top: 0;
      padding-bottom: 11.796296vh;
    }
    .main__survey__content1__block5__h {
      width: 80%;
      margin-bottom: 2.1vh;
      h2 {
        text-align: left;
        br {
          display: none;
        }
      }
    }
    .main__survey__content1__block5__img {
      width: 94%;
    }

    .main__survey__content2__block1 {
      margin-top: 0;
    }
    .main__survey__content2__block1__img {
      width: 100%;
      max-width: unset;
      margin: 0;
      padding: 10.94452773613193vh 0 3.598200899550225vh;
      position: relative;

      background-position: left top;
      background-size: cover;
      &:after {
        content: "";
        bottom: 0vh;
        width: 97px;
        min-height: 102px;
        position: absolute;
        display: block;
        background-repeat: no-repeat;
        background-position: 0 -40px;
        background-image: url("/surveyDmobile/state-top-flowers-bg.svg");
      }
      img:last-of-type {
        display: block;
      }
      img {
        width: 84.26666666666667%;
        // max-height: 26.83658170914543vh;
        margin: 0 auto;
        display: block;
      }
      div {
        top: 0;
        width: 100%;
        position: absolute;
        z-index: -1;
      }
      div img {
        // display: block !important;
        width: 100%;
        display: block;
        margin: 0;
        max-height: unset;
      }
      > img:first-of-type {
        display: none;
      }
    }
    .main__survey__content2__block1__p {
      width: 80%;
      margin: 3.448275862068966vh auto 0;
      p {
        margin: 0;
      }
    }
    .main__survey__content2__block2__img {
      top: 11.962963vh;
      width: 100%;
    }
    .main__survey__content2__block2 {
      display: flex;
      flex-wrap: wrap;
      padding-top: 6.896551724137931vh;
    }
    .main__survey__content2__block2__img {
      position: unset;
      display: none;
      order: -1;
    }
    .main__survey__content2__block2__p-left,
    .main__survey__content2__block2__p-right {
      width: 80%;
      margin: 0 auto;
      p {
        text-align: left;
        color: #1a1b1e;
        font-family: "Montserrat";
        line-height: 1.725;
      }
    }
    .main__survey__content2__block3 {
      h2 {
        width: 80%;
        margin: 0 auto;
        text-align: left;
      }
    }
    .main__survey__content2__block3__p {
      width: 80%;
      p {
        text-align: left;
      }
    }
    .main__survey__content4 {
      width: 80%;
      h1,
      p {
        font-size: 0.9375rem !important;
        text-align: left;
      }
    }
    .main__survey__content4__block {
      width: 100%;
    }
    .main__elem__circle_buttons {
      margin-left: 0;
      button {
        margin-right: 9%;
      }
    }

    .main__survey__content4__block__elem-error {
      top: -21.6vh;
      right: 50%;
      margin-right: -100px;
      &:after {
        content: "";
        position: absolute;
        left: 81px;
        bottom: -57px;
        border: 23px solid transparent;
        border-top: 35px solid white;
        // border-right: none;
      }
    }
  }
}
//mobile
.main__survey__content1__block1__img,
.main__survey__content2__block1__img {
  img:last-of-type {
    display: none;
  }
}
.main__survey__content1__block3__img {
  img:last-of-type {
    display: none;
  }
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
  background-image: url("/bg_top.png"), url("/bg_bottom-survey.png");
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh,
    30.83333333333333% 30.70092592592593vh;
}
.surveyBG2 {
  background-image: url("/bg_top.png"), url("/bg_top2.png"),
    url("/bg_bottom-survey.png");
  background-position: left top, left 38.51851851851852vh, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh, 33.125% 98.7037037037037vh,
    30.83333333333333% 30.70092592592593vh;
}
.main__survey__button {
  width: 11.82291666666667%;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
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
.main__survey__nav__p-active {
  opacity: 1 !important;
}
.main__survey__nav {
  width: 51.9795%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  p {
    cursor: default;
    text-align: center;
  }
}
.main__survey__nav p {
  width: 22.345491%;
  padding: 0.9259259259259259vh 0;
  background-color: #5690ff;
  border-radius: 50px;
  font: 1rem/1 "Montserrat-bold", century gothic, sans-serif;
  opacity: 0.3;
  color: #ffffff;
}
.subnav {
  width: 30%;
  margin: 2.314814814814815vh auto 10.64814814814815vh;
  p {
    width: 19.79166666666667%;
    font-size: 0.875rem;
    color: #5690ff;
    border: 2px solid #5690ff;
    border-radius: 50px;
    background-color: unset;
    padding: 5px 0;
  }
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
  width: 41.875%;
  margin: 2.777777777777778vh auto 0;
  font: 1.063rem/1.875 "Montserrat", century gothic, sans-serif;
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
.main__survey__content1__block1 {
  margin-top: 6.859259vh;
  // height: 96.2962962962963vh;
  h2 {
    margin-left: 49.58333333333333%;
    width: 35.15625%;
    text-align: left;
  }
}
.main__survey__content1__block1__img {
  width: 46.14583333333333%;
  max-width: 886px;
  position: absolute;
  top: 0%;
  z-index: -1;
  img {
    width: 100%;
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
  height: 100vh;
  padding-top: 4.791666666666667vh;
  p {
    text-align: center;
  }
}
.main__survey__content1__block2__img {
  width: 61.9799%;
  margin: 4.444444444444444vh auto 0;
  img {
    width: 100%;
  }
}
.main__survey__content1__block3 {
  height: 100vh;
  padding-top: 5.555555555555556vh;
  display: flex;
  position: relative;
  h2 {
    width: 100%;
    margin: 0 auto;
  }
}
.main__survey__content1__block3__img {
  width: 53.646%;
  top: 13.14814814814815vh;
  right: 6.354166666666667%;

  position: absolute;
  img {
    width: 100%;
  }
}
.main__survey__content1__block3__p {
  width: 36.084%;
  top: 44.44444444444444vh;
  right: 46.19791666666667%;
  position: absolute;
  z-index: 1;
}
.main__survey__content1__block3 button {
  position: absolute;
  right: 50%;
  margin-right: -30px;
  bottom: 12vh;
}
.main__survey__content1__block4 {
  width: 80.52083333333333%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 3.01111111111111vh;
  background-image: url("/main__survey__content1__block-bg4.png");
  background-size: contain;
  background-position: -3em 12em;
  background-repeat: no-repeat;
  h2 {
    width: 68.072917%;
    margin: 0 auto;
    text-align: left;
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
  button {
    margin-top: 9.259259259259259vh;
  }
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
  position: absolute;
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
    margin-bottom: 8.796296296296296vh;
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
</style>