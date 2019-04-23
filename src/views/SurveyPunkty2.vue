<template>
  <main id="startView">
    <div
      v-if="showPresentation"
      class="main__presentation"
      :class="{hide_main__presentation: hideAnimPresentation}"
    >
      <h3>U każdego czasem pojawiają się myśli 'że jestem nie szczęśliwy'. Ale nie zawsze lekko jest zrozumieć samego siebie dlatego została stworzona ankieta za pomocą której można sprawdzić swoją skłonność do zaburzeń lękowych.</h3>
      <button @click="startSurvey" class="close_presentation">Zacznij</button>
    </div>
    <div v-if="ask && result == 0 && !showPresentation" class="main__survey">
      <div class="main__survey__topblock" :class="{answers_button_clicked : clickedAnswer != null}">
        <h3>{{ask[ask_number-1]}}</h3>
      </div>
      <div class="main__survey__block" :class="{answers_reforce : reforceAnswers}">
        <div class="answers">
          <button
            @click="nextAsk(index)"
            v-for="(answer,index) in answers"
            :key="answer.id"
            class="answer"
            :class="{answers_button_clicked : clickedAnswer == index}"
          >{{answer}}</button>
        </div>
        <div class="progress">{{ask_number}} / {{ask.length}}</div>
      </div>
    </div>
    <transition name="fadeslow">
      <div v-if="result && !showPresentation" class="main__result">
        <h3>{{result}}</h3>
        <router-link to="/">
          <button>Główna strona</button>
        </router-link>
      </div>
    </transition>
  </main>
</template>
<script>

export default {
  data() {
    return {
      showPresentation: true,
      hideAnimPresentation: false,
      ask: [
        "Jak często w ostatnich tygodniach odczuwałeś silne zdenerwowanie lub mocny niepokój?",
        "Jak często w ostatnich tygodniach martwiłaś/łeś się, że nie możesz zapanować nad ciągłym niepokojem?",
        "Jak często w ostatnich tygodniach martwiłaś/łeś się brakiem kontroli nad codziennymi sprawami ?",
        "Jak często w ostatnich tygodniach miałaś/łeś trudności z odpoczynkiem i zrelaksowaniem się ? ",
        "Jak często w ostatnich tygodniach łatwo wpadałaś/łeś w złość?",
        "Jak często w ostatnich tygodniach miałaś/łeś wrażenie, że za chwilę wydarzy się coś strasznego?",
        "Jak często w ostatnich tygodniach miałaś/łeś znaczne problemy z koncentracja i skupieniem uwagi?"
      ],
      answers: [
        "W ogóle",
        "Kilka razy",
        "Prez większość czasu",
        "Prawie codziennie"
      ],
      ask_number: 1,
      sum: 0,
      result: 0,
      clickedAnswer: null,
      reforceAnswers: false
    };
  },
  methods: {
    nextAsk(id) {
      if (this.ask_number <= this.ask.length) {
        this.clickedAnswer = id;
        setTimeout(() => {
          this.clickedAnswer = null;
          if (this.ask_number < this.ask.length) {
            this.ask_number++;
          } else {
            if (this.sum >= 1 && this.sum <= 9) {
              this.result =
                "Twój wynik sugeruje, że bardzo rzadko lub wręcz nigdy nie odczuwasz lęku. Pewien niepokój może być jednak dobry - może pomóc nam reagować na potencjalne zagrożenia, być może przez wyostrzenie naszych refleksów lub skupienie uwagi. Zwykle mija on, gdy zakończy się stresująca sytuacja. W wielu sytuacjach lęk, niepokój lub złość są naturalną reakcją na trudną sytuację.";
            } else if (this.sum >= 10 && this.sum <= 17) {
              this.result =
                "Twój wynik sugeruje, że lęk zaczął przeszkadzać ci w codziennym życiu. Nie jest to jeszcze powód do alarmu, bo każdy odczuwa lęk i jest wiele sposobów na poprawę sytuacji. Istnieją różne poziomy lęku, a twoje mogą się zmieniać z dnia na dzień. Ważne jest jednak, aby wcześnie szukać pomocy. Im szybciej z kimś porozmawiasz, tym szybciej będziesz na drodze do wyzdrowienia.";
            } else if (this.sum >= 18) {
              this.result =
                "Twój wynik mieści się w wysokim przedziale - lęk prawdopodobnie przeszkadza ci w pracy, spotkaniach z przyjaciółmi lub robieniu rzeczy, które są dla ciebie ważne. To nie jest diagnoza, ale wygląda na to, że nadszedł czas, aby uzyskać pomoc.";
            } else {
              this.result = "Nie masz żadnych zaburzeń lękowych!";
            }
            if (this.result) {
              this.ask = null;
            }
          }
        }, 600);
        setTimeout(() => {
          let elmnt = document.getElementById("startView");
          elmnt.scrollIntoView();
          this.reforceAnswers = true;
        }, 300);
        setTimeout(() => {
          this.reforceAnswers = false;
        }, 1000);

        if (id == 1) {
          this.sum++;
        } else if (id == 2) {
          this.sum += 2;
        } else if (id == 3) {
          this.sum += 3;
        }
      }
    },
    startSurvey() {
      this.hideAnimPresentation = true;
      setTimeout(() => {
        this.showPresentation = false;
        let elmnt = document.getElementById("startView");
        elmnt.scrollIntoView();
      }, 500);
    }
  }
}
</script>

<style scoped>
main {
  text-align: center;
  padding: 10vh 5% 10vh 5%;
  box-sizing: border-box;
  overflow: hidden;
}
.main__survey {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main__survey__topblock {
  height: auto;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
}
.main__survey__block {
  margin-top: 1vh;
  display: block;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.22, 0, 0.47, 1.17);
}
.answers {
  margin: 0 auto;
  width: 70%;
  display: block;
  display: flex;
  flex-direction: column;
}
.answers button {
  margin-top: 2vh;
  padding: 2vh 10%;
  background: rgb(48, 184, 82);
  color: rgb(255, 255, 255);
}
.answers_reforce {
  margin-top: 200vh;
  transition: all 0.7s cubic-bezier(0.22, 0, 0.47, 1.17);
}
.answers_button_clicked {
  opacity: 0;
  transform: scale(0);
}
.progress {
  margin-top: 1vh;
}
.main__presentation {
  text-align: left;
  transition: all 0.5s ease-in-out;
}
.hide_main__presentation {
  opacity: 0;
}
.main__presentation h3 {
  text-indent: 1rem;
}
.close_presentation {
  width: 100%;
  margin-top: 5vh;
  padding: 2vh;
  border-radius: 5px;
  color: #ffffff;
  background-color: rgb(19, 211, 67);
}
.main__result {
  text-align: left;
  text-indent: 1.5em;
}
.main__result button {
  padding: 2vh 20px;
  margin-top: 2vh;
  width: 40%;
}

@media (max-width: 786px) {
  main {
    max-height: 150vh;
    overflow: hidden;
  }
  .answers {
    width: 100%;
  }
  .main__survey {
    min-height: 140vh;
    display: block;
    text-align: left;
    text-indent: 1rem;
    overflow: hidden;
  }
  .main__survey__block {
    text-align: center;
  }
}
</style>