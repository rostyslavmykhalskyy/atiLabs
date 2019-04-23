<template>
  <main id="startView">
    <div v-if="componentState==1" class="progress_bar" :class="{progress_bar_result: showResult}">
      <div v-if="showResult">
        <p>Błędnych odpowiedzi było: {{falseAnswer}}</p>
        <p>Twoje wyniki zostaną przekazane fachowcom</p>
        <router-link to="/">
          <button>GŁÓWNA STRONA</button>
        </router-link>
      </div>
      <span class="progress" :style="{width: progresTrue + '%'}"></span>
    </div>
    <div v-if="componentState==0" class="main__presentation">
      <h3>Zapraszamy do udziału w krótkich ćwiczeniach</h3>
      <button @click="componentState++">Start</button>
    </div>
    <transition name="fadeslow">
      <div v-if="componentState==1 && !showResult" class="main__tasks">
        <div class="main__tasks__img">
          <img :src="thoughts[stateThought[state]]['img']" alt>
        </div>
        <h3>{{thoughts[stateThought[state]]['title']}}</h3>
        <div class="main__tasks__thoughts">
          <div
            v-for="(elem, index) in thoughtsFiltered"
            :key="elem.id"
            class="main__thoughts__thought"
          >
            <div
              class="thought"
              @click="thoughtClick(index, clickedthoughts.includes(index), elem[1])"
              :class="{thought__clicked__true: clickedthoughts.includes(index) && elem[1], 
          thought__clicked__false: clickedthoughts.includes(index) && !elem[1]}"
            >
              <p class="thought__p">{{elem[0]}}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fadeslow" mode="out-in">
      <div v-if="popup" class="header__popup">
        <div class="header__popup__info">
          <p>Spróbuj jeszcze raz!</p>
        </div>
      </div>
    </transition>
  </main>
</template>

<style scoped>
.main__tasks {
  text-align: center;
}
.progress_bar {
  width: 100%;
  height: 0.7vh;
  position: absolute;
  top: 8vh;
  background: #555;
  align-self: flex-end;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.progress_bar div {
  text-align: center;
}
button {
  margin-top: 1vh;
}
.progress_bar_result {
  height: 80vh;
  background-color: rgb(74, 106, 153);
}
.progress_bar_result .progress {
  display: none;
}
.progress {
  display: block;
  height: 100%;
  background-color: rgb(43, 194, 83);
  transition: all 0.5s ease-in-out;
}
.main__presentation {
  width: 100%;
  text-align: center;
}
.main__presentation button {
  margin: 0 auto;
}
.main__tasks__img {
  width: 20%;
  margin: 0 auto;
}
img {
  width: 100%;
}

.main__tasks__thoughts {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.main__thoughts__thought {
  width: 30%;
  padding: 1.5vh 1%;
  box-sizing: border-box;
}
.thought {
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: rgb(107, 101, 101);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.thought:hover {
  background-color: rgb(104, 93, 93);
  -webkit-box-shadow: inset 0px 0px 0px 4px rgba(63, 67, 161, 1);
  -moz-box-shadow: inset 0px 0px 0px 4px rgba(63, 67, 161, 1);
  box-shadow: inset 0px 0px 0px 4px rgba(63, 67, 161, 1);
}
.thought__clicked__true {
  background-color: rgb(76, 219, 41);
}
.thought__clicked__false {
  background-color: rgb(219, 68, 48);
}
.thought__clicked__true:hover {
  background-color: rgb(76, 219, 41);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.thought__clicked__false:hover {
  background-color: rgb(219, 68, 48);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.thought__p {
  font: 1rem/1 "PoppinsRegular", Arial, sans-serif;
  text-align: left;
  margin-top: 0vh;
}

@media (max-width: 768px) {
  main {
    min-height: 0;
    padding: 0;
  }
  .progress_bar {
    position: unset;
  }
  .main__tasks {
    margin: 20px 0 20px 0;
  }
  .main__thoughts__thought {
    width: 100%;
    padding: 4vh 10%;
  }
  .thought__p {
    margin: 0 auto;
    text-align: center;
  }
  .main__tasks__img {
    width: 40%;
  }
  .thought:hover {
    background-color: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}
</style>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      componentState: 0,
      state: 0,
      popup: 0,
      trueAnswer: { all: 0, thought: 0 },
      falseAnswer: 0,
      showResult: 0,
      clickedthoughts: [],
      thoughts: {
        thoughts1: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts1.png?alt=media&token=68fb0fcb-4f4b-4691-b14e-dd46fa5c4961",
          title: "Zaznacz negatywne myśli osoby na zdjęciu:",
          1: ["Nigdy nie uda mi się zdać tego egzaminu.", true],
          2: ["Nauka przekracza moje siły, nie podołam temu zadaniu.", true],
          3: [
            "Postaram się przyłożyć do nauki i zdać za pierwszym podejściem.",
            false
          ],
          4: [
            "Zapowiada się trudny egzamin,tym razem muszę włożyć więcej wysiłku w naukę.",
            false
          ],
          5: [
            "Za każdym razem to samo, za późno zaczynam naukę, nie zdążę.",
            true
          ],
          6: ["Jest trudno, ale dam radę.", false],
          7: [
            "Myślę, że muszę włożyć więcej pracy niż zazwyczaj, żeby zaliczyć egzamin.",
            false
          ],
          8: [
            "Moje zdolności poznawcze zbyt ograniczone  żeby nauczyć się tego materiału.",
            true
          ],
          9: ["Jestem beznadziejna, nic nie umiem.", true]
        },
        thoughts2: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts1.png?alt=media&token=68fb0fcb-4f4b-4691-b14e-dd46fa5c4961",
          title: "Zaznacz pozytywne myśli osoby na zdjęciu:",
          1: ["Nigdy nie uda mi się zdać tego egzaminu.", false],
          2: ["Nauka przekracza moje siły, nie podołam temu zadaniu.", false],
          3: [
            "Postaram się przyłożyć do nauki i zdać za pierwszym podejściem.",
            true
          ],
          4: [
            "Zapowiada się trudny egzamin,tym razem muszę włożyć więcej wysiłku w naukę.",
            true
          ],
          5: [
            "Za każdym razem to samo, za późno zaczynam naukę, nie zdążę.",
            false
          ],
          6: ["Jest trudno, ale dam radę.", true],
          7: [
            "Myślę, że muszę włożyć więcej pracy niż zazwyczaj, żeby zaliczyć egzamin.",
            true
          ],
          8: [
            "Moje zdolności poznawcze zbyt ograniczone  żeby nauczyć się tego materiału.",
            false
          ],
          9: ["Jestem beznadziejna, nic nie umiem.", false]
        },
        thoughts3: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts4.png?alt=media&token=d9be9746-b29e-4151-b470-0c4453e76970",
          title: "Zaznacz negatywne myśli osoby na zdjęciu:",
          1: ["Jestem beznadziejna, nie potrafię być dobrą matką.", true],
          2: ["Ja już nie daję rady, zaraz zwariuję!", true],
          3: [
            "Spokojnie, zaraz położę małego i jak uśnie, zajrzę do maili. Świat się nie zawali, jak odpowiem na wiadomości później.",
            false
          ],
          4: [
            "Trudno, obiadu dzisiaj nie będzie, ale wyjdę na spacer z dzieckiem - mały potrzebuje świeżego powietrza.",
            false
          ],
          5: [
            "Znów nie zdążę z obiadem, w domu bałagan, czuję że nie sprawdzam się jako matka i żona.",
            true
          ],
          6: [
            "Trochę za dużo wzięłam na swoje barki, muszę dziś porozmawiać z mężem, żeby przejął część moich obowiązków..",
            false
          ],
          7: [
            "Nie zdążę przygotować prezentacji do pracy z dzieckiem na ręku. Szef będzie wściekły, może nawet mnie zwolni.",
            true
          ],
          8: [
            "Trudno, nie jestem superbohaterką, napiszę szefowi, że prezentację dokończę jutro. Dziecko potrzebuje mnie bardziej niż firma..",
            false
          ],
          9: [
            "Znowu to samo - za każdym razem, kiedy próbuję pogodzić pracę z opieką nad dzieckiem wszystko się wali! To przekracza moje możliwości.",
            true
          ]
        },
        thoughts4: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts4.png?alt=media&token=d9be9746-b29e-4151-b470-0c4453e76970",
          title: "Zaznacz pozytywne myśli osoby na zdjęciu:",
          1: ["Jestem beznadziejna, nie potrafię być dobrą matką.", false],
          2: ["Ja już nie daję rady, zaraz zwariuję!", false],
          3: [
            "Spokojnie, zaraz położę małego i jak uśnie, zajrzę do maili. Świat się nie zawali, jak odpowiem na wiadomości później.",
            true
          ],
          4: [
            "Trudno, obiadu dzisiaj nie będzie, ale wyjdę na spacer z dzieckiem - mały potrzebuje świeżego powietrza.",
            true
          ],
          5: [
            "Znów nie zdążę z obiadem, w domu bałagan, czuję że nie sprawdzam się jako matka i żona.",
            false
          ],
          6: [
            "Trochę za dużo wzięłam na swoje barki, muszę dziś porozmawiać z mężem, żeby przejął część moich obowiązków..",
            true
          ],
          7: [
            "Nie zdążę przygotować prezentacji do pracy z dzieckiem na ręku. Szef będzie wściekły, może nawet mnie zwolni.",
            false
          ],
          8: [
            "Trudno, nie jestem superbohaterką, napiszę szefowi, że prezentację dokończę jutro. Dziecko potrzebuje mnie bardziej niż firma..",
            true
          ],
          9: [
            "Znowu to samo - za każdym razem, kiedy próbuję pogodzić pracę z opieką nad dzieckiem wszystko się wali! To przekracza moje możliwości.",
            false
          ]
        },
        thoughts5: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts2.png?alt=media&token=dae7b4cd-3d71-499c-8bbd-5fef18e7b70e",
          title: "Zaznacz negatywne myśli osoby na zdjęciu:",
          1: [
            "On na pewno kogoś ma, nie będę marnować czasu na rozmowy, które nic nie zmienią. ",
            true
          ],
          2: [
            "Nie potrafię już mu wybaczyć, zresztą wszystko to jego wina.",
            true
          ],
          3: [
            "To prawda, oddaliliśmy się ostatnio od siebie, ale to nie powód do rozstania - musimy włożyć więcej wysiłku i pracy w nasz związek.",
            false
          ],
          4: [
            "Musimy szczerze porozmawiać, żeby wyjaśnić sobie wszystkie nieporozumienia",
            false
          ],
          5: [
            "On nigdy mnie nie słucha, więc cokolwiek powiem niczego to nie zmieni.",
            true
          ],
          6: [
            "Mimo przejściowych problemów zależy mi na naszym związku i będę nad nim pracować.",
            false
          ],
          7: [
            "Wszyscy mężczyźni są tacy sami, każdy prędzej czy później zdradza.",
            true
          ],
          8: [
            "Postaram się wysłuchać jego punktu widzenia i powiedzieć o moich odczuciach.",
            false
          ],
          9: ["Czuję złość i rozczarowanie jego postawą.", true]
        },
        thoughts6: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts2.png?alt=media&token=dae7b4cd-3d71-499c-8bbd-5fef18e7b70e",
          title: "Zaznacz pozytywne myśli osoby na zdjęciu:",
          1: [
            "On na pewno kogoś ma, nie będę marnować czasu na rozmowy, które nic nie zmienią. ",
            false
          ],
          2: [
            "Nie potrafię już mu wybaczyć, zresztą wszystko to jego wina.",
            false
          ],
          3: [
            "To prawda, oddaliliśmy się ostatnio od siebie, ale to nie powód do rozstania - musimy włożyć więcej wysiłku i pracy w nasz związek.",
            true
          ],
          4: [
            "Musimy szczerze porozmawiać, żeby wyjaśnić sobie wszystkie nieporozumienia",
            true
          ],
          5: [
            "On nigdy mnie nie słucha, więc cokolwiek powiem niczego to nie zmieni.",
            false
          ],
          6: [
            "Mimo przejściowych problemów zależy mi na naszym związku i będę nad nim pracować.",
            true
          ],
          7: [
            "Wszyscy mężczyźni są tacy sami, każdy prędzej czy później zdradza.",
            false
          ],
          8: [
            "Postaram się wysłuchać jego punktu widzenia i powiedzieć o moich odczuciach.",
            true
          ],
          9: ["Czuję złość i rozczarowanie jego postawą.", false]
        },
        thoughts7: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts3.png?alt=media&token=28ac361d-d54f-4984-a1d4-6c67b2038647",
          title: "Zaznacz negatywne myśli osoby na zdjęciu:",
          1: [
            "Uff, udało się - sporo pracy włożyliśmy w ten projekt ale efekt końcowy jest niesamowity. ",
            false
          ],
          2: ["Zmęczona ale szczęśliwa - cieszę się, że się nam udało.", false],
          3: [
            "Wykonaliśmy kawał świetnej roboty - teraz możemy uczcić nasz sukces.",
            false
          ],
          4: [
            "Nie jesteśmy w stanie skończyć projektu na czas, kolejny raz nie zmieścimy się w terminie, kolejna porażka.",
            true
          ],
          5: [
            "Cały tydzień pracy, po 12 godzin dziennie - czuję, że znów dałam się wykorzystać. Reszta zespołu prawie nic nie zrobiła.",
            true
          ],
          6: [
            "Włożyłam najwięcej pracy w ten projekt, a szef jak zawsze uzna, że sukces jest zasługą koleżanki - wyraźnie ją faworyzuje.",
            true
          ],
          7: ["Zasłużyłam na odpoczynek.", false],
          8: [
            "Nie udało nam się spełnić oczekiwań klienta, kontrakt dostanie ktoś inny - jestem rozczarowana i zła, bo kosztowało nas to tyle pracy.",
            true
          ],
          9: [
            "Mam szczęście pracować w takim zespole - wszyscy przyczynili się do finalnego sukcesu.",
            false
          ]
        },
        thoughts8: {
          img:
            "https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/Thoughts3.png?alt=media&token=28ac361d-d54f-4984-a1d4-6c67b2038647",
          title: "Zaznacz pozytywne myśli osoby na zdjęciu:",
          1: [
            "Uff, udało się - sporo pracy włożyliśmy w ten projekt ale efekt końcowy jest niesamowity. ",
            true
          ],
          2: ["Zmęczona ale szczęśliwa - cieszę się, że się nam udało.", true],
          3: [
            "Wykonaliśmy kawał świetnej roboty - teraz możemy uczcić nasz sukces.",
            true
          ],
          4: [
            "Nie jesteśmy w stanie skończyć projektu na czas, kolejny raz nie zmieścimy się w terminie, kolejna porażka.",
            false
          ],
          5: [
            "Cały tydzień pracy, po 12 godzin dziennie - czuję, że znów dałam się wykorzystać. Reszta zespołu prawie nic nie zrobiła.",
            false
          ],
          6: [
            "Włożyłam najwięcej pracy w ten projekt, a szef jak zawsze uzna, że sukces jest zasługą koleżanki - wyraźnie ją faworyzuje.",
            false
          ],
          7: ["Zasłużyłam na odpoczynek.", true],
          8: [
            "Nie udało nam się spełnić oczekiwań klienta, kontrakt dostanie ktoś inny - jestem rozczarowana i zła, bo kosztowało nas to tyle pracy.",
            false
          ],
          9: [
            "Mam szczęście pracować w takim zespole - wszyscy przyczynili się do finalnego sukcesu.",
            true
          ]
        }
      }
    };
  },
  methods: {
    thoughtClick(index, clickedthought, newClick) {
      if (!this.clickedthoughts.includes(index)) {
        this.clickedthoughts.push(index);
        this.checkAnswer(clickedthought, newClick);
      }

      if (this.trueAnswer["thought"] == this.lengthTrueAnswers) {
        this.nextState();
        this.trueAnswer["thought"] = 0;
      }
    },
    nextState() {
      if (this.lengthAllTrueAnswers != this.trueAnswer["all"]) {
        let elmnt = document.getElementById("startView");
        elmnt.scrollIntoView();
        setTimeout(() => {
          this.state++;
          this.clickedthoughts = [];
        }, 500);
      } else {
        this.showResult = true;
      }
    },
    checkAnswer(clickedthought, newClick) {
      if (clickedthought == newClick) {
        this.showAutoHidePopup();
        this.falseAnswer++;
      } else {
        this.trueAnswer["all"]++;
        this.trueAnswer["thought"]++;
      }
    },
    showAutoHidePopup() {
      this.popup = 1;
      setTimeout(() => {
        this.popup = 0;
      }, 700);
    }
  },
  computed: {
    stateThought() {
      let keys = Object.keys(this.thoughts);
      return keys;
    },
    thoughtsFiltered() {
      let keys = Object.keys(this.thoughts[this.stateThought[this.state]]);
      let showThought = [];

      keys.forEach(element => {
        if (element != "img" && element != "title") {
          showThought.push(
            this.thoughts[this.stateThought[this.state]][element]
          );
        }
      });
      return showThought;
    },
    lengthTrueAnswers() {
      let counter = 0;
      this.thoughtsFiltered.forEach(element => {
        if (element[1] == true) {
          counter++;
        }
      });
      return counter;
    },
    lengthAllTrueAnswers() {
      let keys = Object.keys(this.thoughts[this.stateThought[this.state]]);
      let counter = 0;

      keys.forEach(element => {
        if (element != "img" && element != "title") {
          for (let index = 0; index < this.stateThought.length; index++) {
            if (this.thoughts[this.stateThought[index]][element][1] === true) {
              counter++;
            }
          }
        }
      });
      return counter;
    },
    progresTrue() {
      return (this.trueAnswer["all"] * 100) / this.lengthAllTrueAnswers;
    },
    progresBarScrolling() {
      return window.scroll(function() {
        var scroll = window.scrollTop();

        if (scroll >= 200) {
          console.log("test");
          return true;
        }
      });
    }
  }
};
</script>