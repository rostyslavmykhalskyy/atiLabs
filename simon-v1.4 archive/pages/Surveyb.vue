<template>
  <main>
    <button v-if="state != null" id="back" @click="state=null">Powrót do wyboru myśli</button>
    <div class="main__survey">
      <transition name="fade" mode="out-in">
        <div v-if="state==null" class="main__elem" key="stateNull">
          <button id="back" @click="$router.replace('/logined')">Wstecz</button>

          <div class="main__presentation">
            <p class="main__p">
              Czy zastanawiałeś się kiedyś nad tym, dlaczego te same sytuacje wywołują w nas różne emocje?
              <br>
              <br>To, co czujemy, związane jest z tym, jak oceniamy daną sytuację. O tym, czy dana emocja się pojawi i jak będzie silna, decyduje to, czy uważamy, że poradzimy sobie w zaistniałych okolicznościach oraz czy uważamy, że przyniosą nam negatywne czy pozytywne skutki.
              <br>
              <br>Przeczytaj poniższe oceny sytuacji i zastanów się, jaką emocję mogły wywołać. Kliknięcie w opis pozwoli Ci sprawdzić, czy miałeś/miałaś rację.
            </p>
            <div class="main__presentation__elem">
              <div class="main__presentation__elem__buttons">
                <button
                  class="main__presentation__elem__button"
                  v-for="(item, index) in textThought"
                  :key="item.id"
                  :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
                  @click="clickedThought(index)"
                >{{ item }}</button>
              </div>
              <div class="main__presentation__elem__media">
                <transition name="fade" mode="out-in">
                  <div
                    v-if="!textThoughtClicked"
                    key="start"
                    class="main__presentation__elem__media__picture"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveyb_presentation.png?alt=media&token=ac11125c-be1f-42be-b186-c6a2f6f6aeb1"
                      alt
                    >
                  </div>

                  <div
                    v-if="textThoughtClicked == 'text1'"
                    key="first"
                    class="main__presentation__elem__media__picture"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_i_can_handle_it.jpg?alt=media&token=27570524-40b3-4432-9506-c7e9d397b6d2"
                      alt
                    >
                  </div>

                  <div
                    v-if="textThoughtClicked == 'text2'"
                    key="second"
                    class="main__presentation__elem__media__picture"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_i'm_losing_something.jpg?alt=media&token=d22b06d4-06e9-48bb-bdb9-26c949cd7eb0"
                      alt
                    >
                  </div>
                  <div
                    v-if="textThoughtClicked == 'text3'"
                    key="third"
                    class="main__presentation__elem__media__picture"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_something_threatens_me.jpg?alt=media&token=25b855fc-308e-48de-9e22-cb69f6139b4b"
                      alt
                    >
                  </div>
                  <div
                    v-if="textThoughtClicked == 'text4'"
                    key="fourth"
                    class="main__presentation__elem__media__picture"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_it's_my_fault.jpg?alt=media&token=663ed9d4-e4b0-4463-8977-24203d4c415a"
                      alt
                    >
                  </div>
                </transition>
              </div>
            </div>
            <button v-if="textThoughtClicked" @click="state=0" class="buttonAction">Start</button>
          </div>
        </div>
        <div v-if="state==0" class="main__elem" key="state0">
          <div class="main__elem__img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/questionnaire_b_photo_above_the_text.jpeg?alt=media&token=3e6316d3-f9b4-439c-a8c9-607c39420d74"
              alt
            >
          </div>
          <p
            class="main__elem__p"
          >Emocje pełnią dla nas ważną rolę. Informują nas o tym, jak oceniamy, widzimy daną sytuację. Kiedy w Twoim życiu pojawi się silna emocja, zatrzymaj się w niej chwilę i zadaj sobie pytanie: "Co moje uczucie mówi o tym, jak oceniam tę sytuację?".</p>
          <p class="main__elem__p">
            Odpowiedz teraz na kilka pytań.
            <br>Pytania oznaczone * są obowiązkowe
          </p>
          <button @click="state++, time(0)" class="buttonAction">Przejdź do ankiety</button>
        </div>
        <div v-else-if="state==1" class="main__elem" key="state2">
          <p
            class="main__elem__p"
          >1. Oceń na skali od 1 do 5 jak bardzo podobało Ci się to ćwiczenie. *</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an1}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>
          <div class="main__survey__img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/questionnaire_b_question_2_photograph_above_the_text.jpg?alt=media&token=27172370-b80b-4028-a2df-b50681db617b"
              alt
            >
          </div>

          <p class="main__elem__p">2. Z jaką emocją kojarzy Ci się powyższa fotografia? *</p>
          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              strach
              <input type="radio" id="one" value="strach" v-model="an2">
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              szczęście
              <input type="radio" id="two" value="szczęście" v-model="an2">
              <span class="checkmark"></span>
            </label>
          </div>

          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 3</p>
            <button @click="nextState">Dalej</button>
          </div>
        </div>
        <div v-else-if="state==2" class="main__elem" key="state2">
          <p
            class="main_elem__p"
          >3. Zastanów się, czy Tobie zdarza się w podobnych sytuacjach odczuwać różne emocje? Pomyśl, co ma na to wpływ i podziel się tym z nami:</p>
          <div class="text-arria">
            <textarea v-model="an3" placeholder="Tu wpisz"></textarea>
          </div>
          <!-- <p class="main_elem__p">5. Z czym Ci się kojarzy ta postać?</p>
          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              tak
              <input type="radio" id="one" value="tak" v-model="an5">
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie
              <input type="radio" id="two" value="nie" v-model="an5">
              <span class="checkmark"></span>
            </label>
          </div>

          <p class="main_elem__p">6. Jakie masz uwagi co do tej postaci?</p>
          <div class="text-arria">
            <textarea v-model="an6" placeholder="Tu wpisz swoje uwagi"></textarea>
          </div>

          <p class="main_elem__p">7. Jak bardzo prawdopodobne jest, że polecisz nas znajomemu?</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an7}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>-->

          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 3</p>
            <button @click="state++">Dalej</button>
          </div>
        </div>
        <div v-else-if="state==3" class="main__elem" key="state3">
          <div class="main__elem__img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/questionnaire_b_page_last_photograph_above_the_text.jpg?alt=media&token=082c1ac1-1547-46af-bbbb-ad882d753ebd"
              alt
            >
          </div>
          <h3 class="main__p">
            To już wszystko!
            <br>Dziękujemy za poświęcenie Twojego czasu i wypełnienie ankiety. Twoja opinia jest dla nas bardzo ważna.
          </h3>
          <div class="navigate">
            <button type="submit" @click="state=1">Popraw</button>
            <p class="main__p">Strona {{state}} z 3</p>
            <button type="submit" @click="time(1)">Zakończ</button>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div v-if="popup" class="header__popup">
        <div class="header__popup__info">
          <p>Pytania oznaczone * są obowiązkowe</p>
          <button @click="popup=false">Zamknij</button>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import { fb, db } from "../assets/firebase";

export default {
  props: {
    loginedUser: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      state: null,
      textThought: {
        text1: "Poradzę sobie z tą sytuacją i osiągnę swój cel.",
        text2: "Tracę coś, co było dla mnie ważne.",
        text3: "Coś mi zagraża!",
        text4: "To moja wina, że nie uda mi się osiągnąć celu."
      },
      textThoughtClicked: "",
      preloader: true,
      popup: false,
      an1: null,
      an2: null,
      an3: null,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    clickedThought(index) {
      this.textThoughtClicked = index;
    },
    clicked(index) {
      if (this.state == 1) {
        this.an1 = index;
      }
      // else {
      //   this.an7 = index;
      // }
    },
    nextState() {
      if (this.an1 && this.an2) {
        this.state++;
      } else {
        this.popup = true;
      }
    },
    time(info) {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + " " + time;
      if (info == 0) {
        this.startTime = dateTime;
      } else {
        this.endTime = dateTime;
        this.saveData();
        this.$router.replace("/logined");
      }
    },
    saveData() {
      if (fb.auth().currentUser.uid) {
        db.collection("survey").add({
          answer1: this.an1,
          answer2: this.an2,
          answer3: this.an3,
          startTime: this.startTime,
          endTime: this.endTime,
          survey: "B",
          user_email: fb.auth().currentUser.email,
          user: fb.auth().currentUser.uid
        });
      }
    }
  }
};
</script>

<style scoped>
main {
  overflow: auto;
  box-sizing: border-box;
  display: block;
}
.main__survey {
  padding: 7vh 0;
}
.main__elem {
  width: 90%;
  margin: 0 auto;
}
#back {
  top: 1.5vh;
  right: 1%;
  position: absolute;
  color: #053276;
  border: 1px #053276 solid;
  background-color: #fff;
}
.main__elem__movie {
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.main__elem__radio {
  width: 8%;
}

.main__elem__img {
  width: 70%;
  margin: 0 auto;
}

.main__elem__img img {
  width: 100%;
}

.main__survey__img {
  width: 40%;
  margin: 1.2vh auto;
}
.main__survey__img img {
  width: 100%;
}
main p {
  margin-top: 1.2vh;
}

.main__presentation__elem__buttons button {
  width: 100%;
  margin-bottom: 1vh;
  color: #fff;
  background-color: #4ab6f4;
  /* border: 1px #4ab6f4 solid; */
  font-size: 1.5rem;
  text-transform: uppercase;
}
.main__presentation__elem__buttons button:last-of-type {
  margin-bottom: 0;
}
</style>