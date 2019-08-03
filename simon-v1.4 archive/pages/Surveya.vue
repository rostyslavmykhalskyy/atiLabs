<template>
  <main>
    <button v-if="state != null" id="back" @click="state=null">Powrót do wyboru myśli</button>
    <div class="main__survey">
      <transition name="fade" mode="out-in">
        <div v-if="state==null" key="stateNull" class="main__elem">
          <button id="back" @click="$router.replace('/logined');">Wstecz</button>

          <div class="main__presentation">
            <p class="main__p">
              Odczuwany przez nas stres możemy zmniejszać za pomocą świadomego oddychania. Opanowanie techniki oddychania pomaga również efektywniej się uczyć. Zacznijmy od małego kroku.
              <br>Odtwórz film i postaraj się skoncentrować wyłącznie na oddychaniu tak długo, aż dźwięk całkowicie ucichnie. Bądź tu i teraz. Skieruj swoje myśli do wewnątrz. Oddychaj.
            </p>
            <div class="main__presentation__elem">
              <div class="main__presentation__elem__media">
                <div class="main__presentation__elem__media__movie">
                  <video
                    preload="none"
                    poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveyb_video.jpg?alt=media&token=2149956d-ff9a-41dd-9f07-39d034a8a3e9"
                    controls
                    data-plyr-config="{ 'controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
                  >
                    <source
                      src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveyb_video.mp4?alt=media&token=1f41699c-4b5d-4052-955c-70e1ec38137f"
                      type="video/mp4"
                    >
                  </video>
                </div>
              </div>
            </div>
            <button @click="state=0" class="buttonAction">Dalej</button>
          </div>
        </div>
        <div v-if="state==0" key="state1" class="main__elem">
          <div class="main__elem__imgs">
            <div class="main__elem__imgs__img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveya_page2.jpg?alt=media&token=b44a6576-1c73-48a8-8225-cf20d8a60533"
                alt
              >
            </div>
          </div>
          <p class="main__elem__p">
            Brawo! Za Tobą 30 sekund świadomego oddychania! Powtarzaj tę technikę zawsze, gdy czujesz potrzebę uspokojenia się, skoncentrowania na czymś. Za każdym razem staraj się wydłużać czas.
            <br>
            <br>Odpowiedz teraz na kilka pytań.
            <br>Pytania oznaczone * są obowiązkowe.
          </p>
          <div class="main__elem__img"></div>
          <button @click="state++, time(0)" class="buttonAction">Przejdź do ankiety</button>
        </div>
        <div v-if="state==1" key="state2" class="main__elem">
          <div class="main__elem__imgs__img">
            <img
              class="img__single"
              src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveya_page3_above_survey.jpg?alt=media&token=0c30a1fb-f355-4026-be4c-03bc3242b0e9"
              alt
            >
          </div>
          <p class="main__elem__p">1. Oceń na skali od 1 do 5 jak bardzo podobał Ci się film.</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an1}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>

          <div class="main__elem__imgs__img">
            <img
              class="img__single"
              style="margin-top: 5vh"
              src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveya_page3.jpg?alt=media&token=4692edc5-4481-43fb-86ae-a2ed9739e2e5"
              alt
            >
          </div>
          <p class="main__elem__p">2. Który z poniższych dźwięków wpływa na Ciebie uspokajająco:</p>
          <!-- <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              melancholią
              <input type="radio" id="one" value="melancholią" v-model="an2">
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              zaskoczeniem
              <input type="radio" id="two" value="zaskoczeniem" v-model="an2">
              <span class="checkmark"></span>
            </label>
          </div>-->
          <div class="main__elem__checkbox">
            <label class="main__elem__checkbox-button" for="szum oceanu">
              szum oceanu
              <input type="checkbox" id="szum oceanu" value="szum oceanu" v-model="an2">
              <span class="checkmark-checkbox"></span>
            </label>
            <label class="main__elem__checkbox-button" for="odgłosy lasu">
              odgłosy lasu
              <input
                type="checkbox"
                id="odgłosy lasu"
                value="odgłosy lasu"
                v-model="an2"
              >
              <span class="checkmark-checkbox"></span>
            </label>
          </div>

          <p
            class="main__elem__p"
          >3. Napisz, jaki jest Twój ulubiony sposób na ukojenie nerwów i relaks</p>
          <div class="text-arria">
            <textarea v-model="an3" placeholder="Tu wpisz"></textarea>
          </div>
          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 2</p>
            <button @click="nextState">Dalej</button>
          </div>
        </div>
        <!--<div v-if="state==2" key="state3" class="main__elem">
          <div class="main__elem__imgs__img">
            <img src="img/ankietaimg2.jpg" alt>
          </div>
          <p
            class="main__elem__p"
          >4. Oceń w skali 1-5 na ile ta postać wydaje Ci się sympatyczna (1 - bardzo niesympatyczna, 5 - bardzo sympatyczna).</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an4}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>
          <p class="main__elem__p">5. Z czym Ci się kojarzy ta postać?</p>
           <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              przekorą
              <input type="radio" id="one" value="przekorą" v-model="an5">
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              ironią
              <input type="radio" id="two" value="ironią" v-model="an5">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="main__elem__checkbox">
            <label class="main__elem__checkbox-button" for="przekorą">
              przekorą
              <input type="checkbox" id="przekorą" value="przekorą" v-model="an5">
              <span class="checkmark-checkbox"></span>
            </label>
            <label class="main__elem__checkbox-button" for="ironią">
              ironią
              <input type="checkbox" id="ironią" value="ironią" v-model="an5">
              <span class="checkmark-checkbox"></span>
            </label>
          </div>

          <p class="main__elem__p">6. Jakie masz uwagi co do tej postaci?</p>
          <div class="text-arria">
            <textarea v-model="an6" placeholder="Tu wpisz swoje uwagi"></textarea>
          </div>
          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 3</p>
            <button @click="state++, preloader = true">Dalej</button>
          </div>
        </div>-->
        <!-- <div v-if="state==3" key="state4" class="main__elem">
          <div class="main__elem__movie">
            <video
              preload
              poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/ee8711a76d3373503ceea1f997837751.jpg?alt=media&token=09652034-7206-4b15-9057-27b8f8fa7de5"
              controls
              data-plyr-config="{ 'controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/dd19c4c7ce480a06486f1d38555e58c1.mp4?alt=media&token=ef0b0112-27db-4a1a-b753-572ae6539f15"
                type="video/mp4"
              >
            </video>
          </div>
          <p
            class="main__p"
          >7. A jak oceniasz ten film wideo (1 - bardzo nieciekawy, 5 - bardzo ciekawy)?</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an7}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>
          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 3</p>
            <button @click="state++">Dalej</button>
          </div>
        </div>-->
        <div v-if="state==2" key="state2" class="main__elem">
          <div class="main__elem__imgs__img">
            <img
              class="img__single"
              style="margin-top: 5vh"
              src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveya_thank_you.jpg?alt=media&token=e1ff9411-946c-4918-97fc-0e8384eeab80"
              alt
            >
          </div>
          <p
            class="main__p"
          >To już wszystko! Dziękujemy za poświęcenie Twojego czasu i wypełnienie ankiety. Twoja opinia jest dla nas bardzo ważna.</p>
          <div class="navigate">
            <button type="submit" @click="state=1">Popraw</button>
            <p class="main__p">Strona {{state}} z 2</p>

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
      saved: false,
      state: null,
      preloader: true,
      popup: false,
      an1: null,
      an2: [],
      an3: null,
      startTime: null,
      endTime: null
    };
  },
  methods: {
    clicked(index) {
      if (this.state == 1) {
        this.an1 = index;
      } else if (this.state == 2) {
        this.an4 = index;
      } else {
        this.an7 = index;
      }
    },
    nextState() {
      this.state++;
      // if (this.an2.length && this.an3) {
      //   this.state++;
      // } else {
      //   this.popup = true;
      // }
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
        if (this.saved) {
          this.$router.replace("/logined");
        }
      }
    },
    saveData() {
      if (fb.auth().currentUser.uid) {
        db.collection("survey")
          .add({
            answer1: this.an1,
            answer2: this.an2,
            answer3: this.an3,
            startTime: this.startTime,
            endTime: this.endTime,
            survey: "A",
            user_email: fb.auth().currentUser.email,
            user: fb.auth().currentUser.uid
          })
          .then((this.saved = true));
      }
    }
  },
  created() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.state = null;
      }
    });
  }
};
</script>

<style scoped>
#back {
  top: 1.5vh;
  right: 1%;
  position: absolute;
  color: #053276;
  border: 1px #053276 solid;
  background-color: #fff;
}

.img__single {
  height: auto;
}

main {
  overflow: auto;
  padding: 7vh 0;
  box-sizing: border-box;
  display: block;
}
.main__elem__imgs__img {
  width: 70%;
}
.main__presentation button {
  font-size: 1.5rem;
}
</style>