<template>
  <main>
    <div class="main__ankieta">
      <transition name="fade" mode="out-in">
        <div v-if="state==0" class="main__elem" key="state0">
          <p class="main__elem__p">Ankiety uwzględniający najpopularniejsze typy pytań.</p>
          <p class="main__elem__p">Pytania oznaczone * są obowiązkowe</p>
          <div class="main__elem__movie">
            <div v-if="preloader" class="header__popup__preloader"></div>
            <iframe
              v-on:load="preloader = false"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lPOyaHAItAw?controls=0&amp;start=13"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="main__elem__img"></div>
          <button @click="state++, time(0)">Przejdż do ankiety</button>
        </div>
        <div v-else-if="state==1" class="main__elem" key="state2">
          <p class="main__elem__p">1. Czy posiadasz telefon komórkowy? *</p>
          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              tak
              <input type="radio" id="one" value="tak" v-model="an1">
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie
              <input type="radio" id="two" value="nie" v-model="an1">
              <span class="checkmark"></span>
            </label>
          </div>

          <p class="main_elem__p">2. Jakie masz uwagi co do telefonu komórkowego? *</p>
          <div class="text-arria">
            <textarea v-model="an2" placeholder="Tu wpisz swoje uwagi"></textarea>
          </div>

          <p
            class="main__elem__p"
          >3. Oceń w skali 1-5 na ile ta postać wydaje Ci się sympatyczna (1 - bardzo niesympatyczna, 5 - bardzo sympatyczna).</p>
          <div class="main__elem__circle_buttons">
            <button
              v-for="(button, index) in 5"
              :key="button"
              class="circle_button"
              :class="{circle_button_clicked: index+1 == an3}"
              @click="clicked(index+1)"
            >{{index+1}}</button>
          </div>

          <p class="main_elem__p">4. Jakie masz uwagi co do tej postaci?*</p>
          <div class="text-arria">
            <textarea v-model="an4" placeholder="Tu wpisz swoje uwagi"></textarea>
          </div>

          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 2</p>
            <button @click="nextState">Dalej</button>
          </div>
        </div>
        <div v-else-if="state==2" class="main__elem" key="state3">
          <p class="main_elem__p">5. Z czym Ci się kojarzy ta postać?</p>
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
          </div>

          <div class="navigate">
            <button @click="state--">Wstecz</button>
            <p class="main__p">Strona {{state}} z 2</p>
            <button @click="state++">Dalej</button>
          </div>
        </div>
        <div v-else-if="state==3" class="main__elem" key="state4">
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
          <button @click="popup=false">Zamkni</button>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  props: {
    loginedUser: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      state: 0,
      preloader: true,
      popup: false,
      an1: null,
      an2: null,
      an3: null,
      an4: null,
      an5: null,
      an6: null,
      an7: null,
      startTime: null,
      endTime: null
      // ankieta1: {},
      // ankieta2: {},
      // ankieta3: {}
    };
  },
  methods: {
    clicked(index) {
      if (this.state == 1) {
        this.an3 = index;
      } else {
        this.an7 = index;
      }
    },
    nextState() {
      if (this.an1 && this.an2 && this.an4) {
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
        db.collection("ankiet").add({
          answer1: this.an1,
          answer2: this.an2,
          answer3: this.an3,
          answer4: this.an4,
          answer5: this.an5,
          answer6: this.an6,
          answer7: this.an7,
          startTime: this.startTime,
          endTime: this.endTime,
          ankiet: "B",
          user_email: this.loginedUser,
          user: fb.auth().currentUser.uid
        });
      }
    }
  }
};
</script>

<style scoped>
.main__elem__movie {
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.main__elem__radio {
  width: 8%;
}
</style>