<template>
  <main id="startView">
    <div
      v-if="showPresentation"
      class="main__presentation"
      :class="{hide_main__presentation: hideAnimPresentation}"
    >
      <h3>U każdego czasem pojawiają się myśli 'że jestem nie szczęśliwy'. Ale nie zawsze lekko jest zrozumieć samego siebie dlatego została stworzona ankieta za pomocą której można sprawdzić swoją skłonność do depresji.</h3>
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
        "Jestem beznadziejna/y, nic mi się nie udaje i nie mam kontroli nad swoim życiem",
        "Brakuje mi energii i siły do wykonywania codziennych obowiązków; jestem zmęczona/y i senna.",
        "Mam trudności ze skupieniem się i logicznym myśleniem; Wolno i nieefektywnie pracuję.",
        "Rzeczy, zajęcia które dawniej sprawiały mi przyjemność – zupełnie przestały mnie interesować.",
        "Miewam problemy z zebraniem myśli, zapominam pojedyncze słowa.",
        "Cierpię na bezsenność lub zbyt długi sen.",
        "Doświadczam napadów gniewu, nad którymi nie jestem w stanie zapanować.",
        "Brakuje mi energii do wykonywania najprostszych, codziennych czynności. Zmuszam się do nich wielkim wysiłkiem, często bezskutecznie.",
        "Mam niskie poczucie własnej wartości. Chciałabym być mądrzejsza, lepsza i szanowana przez innych.",
        "Zaniedbuję swoje obowiązki zawodowe, co jeszcze potęguje poczucie beznadziejności.",
        "Obserwuję u siebie objawy somatyczne takie jak ból głowy, ból brzucha, brak apetytu lub napady obżarstwa, spadek lub przybranie na wadze, kołatanie serca, duszności.",
        "Sięgam po  używki –  alkohol, tabletki uspakajające/nasenne, narkotyki.",
        "Miewam myśli autodestrukcyjne i/bądź samobójcze.",
        "Odczuwam ciągły smutek, nie potrafię cieszyć się życiem, nawet jeśli spotykają mnie obiektywnie dobre rzeczy.",
        "Mam problemy w relacjach z ludźmi – unikam kontaktów towarzyskich , separuję się od otoczenia.",
        "Wydaje mi się, że nigdy tak naprawdę nie odczuwałam/łem szczęścia.",
        "Brakuje mi motywacji, żeby rano wstać z łóżka.",
        "Odczuwam wrażenie wszechogarniającej i dojmującej pustki, której nie jestem w stanie zapełnić."
      ],
      answers: [
        "Nigdy ",
        "Rzadko -  raz lub dwa razy w miesiącu",
        "Kilka razy w miesiącu",
        "Często – wiele razy",
        "Prawie codziennie"
      ],
      ask_number: 1,
      sum: 0,
      result: 0,
      sadResult: 0,
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
            if (this.sum >= 1 && this.sum <= 5 && !this.sadResult) {
              this.result =
                "Każdy z nas miewa gorsze samopoczucie, nikt nie jest permanentnie szczęśliwy. Trudno nawet wyobrazić sobie taki stan ciągłego szczęścia i zadowolenia. Każdy z nas doświadcza smutku, rozczarowań, żalu, bólu i są one jak najbardziej normalne i wręcz potrzebne na drodze życia.  Obniżony nastrój nie od razu oznacza zaburzeń depresyjnych. Wygląda na to, że w Twoim przypadku problemy w domu, pracy  lub inne, obiektywne przeszkody , spowodowały stan, w jakim się znajdujesz.  Porozmawiaj z przyjacielem, zwolnij tempo życia, zrób coś, co sprawia Ci przyjemność. Postaraj się dojść źródła problemów, i zacznij pracować nad ich rozwiązaniem. Pamiętaj, że nie jesteś sam – poproś o wsparcie rodzinę, przyjaciół, znajomych.";
            } else if (this.sum >= 6 && this.sum <= 12 && !this.sadResult) {
              this.result =
                "Twój wynik wskazuje, że możesz mieć zaburzenia depresyjne. Z pewnością od dłuższego czasu z Twoim samopoczuciem nie jest najlepiej, masz obniżony nastrój. Nie można lekceważyć takich objawów, szczególnie jeśli obserwujesz je od dłuższego czasu. Depresja dotyka ludzi w każdym wieku i przeróżnych sytuacjach życiowych. Nawet jeśli wydaje Ci się, że nie jest możliwe, abyś miał zaburzenia depresyjne, warto porozmawiać ze specjalistą – psychologiem lub psychiatrą. Dostępnych jest wiele aplikacji i programów internetowych ułatwiających rozmowę z psychologiem – online lub przez skype’a, gdzie możesz uzyskać pomoc bez wychodzenia z domu.  Być może to tylko przejściowy stan wywołany stresem, problemami lub nawet stanem Twojego zdrowia – ale warto poznać jego źródła i podjąć kroki zapobiegawcze już teraz.";
            } else if (this.sum >= 13 || this.sadResult) {
              this.result =
                "Twój wynik wskazuje na prawdopodobnie cierpisz na poważną depresję. Nic cię nie cieszy, odczuwasz ciągły smutek i pustkę, separujesz się od ludzi. Powinieneś zasięgnąć pomocy specjalisty – psychologa i rozważyć rozpoczęcie terapii.  Pamiętaj, że depresja nie jest powodem do wstydu, dotyka ludzi w każdym wieku i przeróżnych sytuacjach życiowych. Depresja jest chorobą, którą powinno się leczyć – więc nie zwlekaj, jak najszybciej umów się ze specjalistą i rozpocznij prace nad powrotem do zdrowia.";
            } else {
              this.result = "Nie masz żadnych problemów z depresją!";
            }
            if (this.result) {
              this.ask = null;
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

        if (this.ask_number == 13 && id > 0) {
          this.sadResult = 1;
        }

        if (id > 0) {
          this.sum++;
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