<template>
  <main>
    <button id="back" @click="$router.replace('/logined')">Powrót do wyboru myśli</button>
    <div class="main__survey">
      <transition name="fade" mode="out-in">
        <div v-if="state==0" key="state1" class="main__elem">
          <p
            class="main__elem__p"
          >Poniżej widzisz tą sama sytuację przdstawioną na dwa różne sposoby. Prosimy o ocenę za pomocą krótkiej ankiety.</p>
          <p class="main__elem__p">Pytania oznaczone * są obowiązkowe</p>
          <div class="main__elem__imgs">
            <div class="main__elem__imgs__img">
              <img src="questionnaire_illustration_1.png" alt>
            </div>
            <div class="main__elem__imgs__img" style="width:37%">
              <img src="questionnaire_illustration_2.png" alt>
            </div>
          </div>
          <div class="main__elem__img"></div>
          <button @click="state++, time(0)">Przejdź do ankiety</button>
        </div>
        <div v-if="state==1" key="state2" class="main__elem">
          <div class="main__elem__imgs__img">
            <img class="img__single" src="questionnaire_illustration_1.png" alt>
          </div>
          <p
            class="main__elem__p"
          >1. Oceń w skali 1 - 5 jak bardzo podoba Ci się ta ilustracja (1 - bardzo zła, 5 - wybitna).</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an1}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>

          <p class="main__elem__p">2. Jakie uczucia wywołuje w Tobie ta ilustracja? *</p>
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
            <label class="main__elem__checkbox-button" for="pozytywne">
              pozytywne
              <input type="checkbox" id="pozytywne" value="pozytywne" v-model="an2">
              <span class="checkmark-checkbox"></span>
            </label>
            <label class="main__elem__checkbox-button" for="negatywne">
              negatywne
              <input type="checkbox" id="negatywne" value="negatywne" v-model="an2">
              <span class="checkmark-checkbox"></span>
            </label>
          </div>

          <p
            class="main__elem__p"
          >3. Napisz kilka słów od siebie, co myślisz o powyższej ilustracji. Czy taki styl rysunku jest dla Ciebie odpowiedni? *</p>
          <div class="text-arria">
            <textarea v-model="an3" placeholder="Tu wpisz"></textarea>
          </div>
          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 2</p>
            <button @click="nextState">Dalej</button>
          </div>
        </div>
        <div v-if="state==2" key="state3" class="main__elem">
          <div class="main__elem__imgs__img">
            <img src="questionnaire_illustration_2.png" alt>
          </div>
          <p
            class="main__elem__p"
          >4. Oceń w skali 1 - 5 jak bardzo podoba Ci się ta ilustracja (1 - bardzo zła, 5 - wybitna).</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an4}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>
          <p class="main__elem__p">5. Jakie uczucia wywołuje w Tobie ta ilustracja?</p>
          <!-- <div class="main__elem__radio">
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
          </div>-->
          <div class="main__elem__checkbox">
            <label class="main__elem__checkbox-button" for="pozytywne">
              pozytywne
              <input type="checkbox" id="pozytywne" value="pozytywne" v-model="an5">
              <span class="checkmark-checkbox"></span>
            </label>
            <label class="main__elem__checkbox-button" for="negatywne">
              negatywne
              <input type="checkbox" id="negatywne" value="negatywne" v-model="an5">
              <span class="checkmark-checkbox"></span>
            </label>
          </div>

          <p
            class="main__elem__p"
          >6. Napisz kilka słów od siebie, co myślisz o powyższej ilustracji. Czy taki styl rysunku jest dla Ciebie odpowiedni?</p>
          <div class="text-arria">
            <textarea v-model="an6" placeholder="Tu wpisz"></textarea>
          </div>
          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 2</p>
            <button @click="state++, preloader = true">Dalej</button>
          </div>
        </div>
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
        <div v-if="state==3" key="state3" class="main__elem">
          <h3 class="main__h">Dziękujemy za wypełnienie ankiety!</h3>
          <div class="navigate">
            <button type="submit" @click="state=1">Popraw</button>
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
      an4: null,
      an5: [],
      an6: null,
      an7: null,
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
      if (this.an2.length && this.an3) {
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
            answer4: this.an4,
            answer5: this.an5,
            answer6: this.an6,
            startTime: this.startTime,
            endTime: this.endTime,
            survey: "C",
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
        this.state = 0;
      }
    });
  }
};
</script>

<style scoped>
main {
  overflow: auto;
  padding: 7vh 0;
  box-sizing: border-box;
  display: block;
}
#back {
  top: 1.5vh;
  right: 1%;
  position: absolute;
  color: #053276;
  background-color: #fff;
}
.main__elem__imgs__img {
  width: 25%;
}
.img__single {
  height: auto;
}
</style>