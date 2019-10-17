<template>
  <main id="logined_main">
    <div class="main__logined__nav">
      <div
        @click="state=1"
        class="main__logined__nav__elem"
        :class="{main__logined__nav__elem__active : state==1}"
      >
        <img src="/ico-done.png" alt />
        <img class="main__logined__nav__elem-mobile" src="/ico-done-mobile.png" alt />
        <p>Wykonane</p>
      </div>
      <div
        @click="state=2"
        class="main__logined__nav__elem"
        :class="{main__logined__nav__elem__active : state==2}"
      >
        <img src="/ico-actual.png" alt />
        <img class="main__logined__nav__elem-mobile" src="/ico-actual-mobile.png" alt />
        <p>Bieżące</p>
      </div>
      <div
        @click="state=3"
        class="main__logined__nav__elem"
        :class="{main__logined__nav__elem__active : state==3}"
      >
        <img src="/ico-unaccessible.png" alt />
        <p>Niedostępne</p>
      </div>
      <div
        @click="state=null"
        class="main__logined__nav__elem"
        :class="{main__logined__nav__elem__active : state==null}"
      >
        <img src="/ico-all.png" alt />
        <p>Wszystkie</p>
      </div>
    </div>
    <div class="main__logined__surveys">
      <div
        v-for="survey in info.doneName"
        :key="survey.id"
        class="main__logined__surveys__elem main__logined__surveys__elem__done"
        v-if="state == 1 || state== null"
      >
        <img src="/ico-done-big.png" alt />
        <p>{{survey.surveyName}}</p>
      </div>

      <div
        v-if="(state == 2 || state==null) && info.unavailableName[0]"
        @click="goToSurvey(info.unavailable[0])"
        class="main__logined__surveys__elem"
      >
        <img src="/ico-actual-big.png" alt />
        <p>{{info.unavailableName[0]}}</p>
      </div>
      <div v-if="!info.unavailableName[0] && state == 2" class="main__logined__surveys__elem">
        <img src="/ico-unaccessible-big.png" alt />
        <p>Nie ma aktualnych ankiet</p>
      </div>

      <div
        v-for="(survey, index) in info.unavailableName"
        v-if="index!=0 && state == 3 || state==null"
        :key="survey.id"
        class="main__logined__surveys__elem main__logined__surveys__elem__done"
      >
        <img src="/ico-unaccessible-big.png" alt />
        <p>{{survey}}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { fb, db } from "../assets/firebase";
export default {
  data() {
    return {
      state: 2,
      version: null,
      loginedUser: null,
      info: {
        survey: null,
        done: [],
        doneName: [],
        unavailable: [],
        unavailableName: []
      },
      survey: null
    };
  },
  methods: {
    clicked(index) {
      this.textThoughtClicked = index;
    },
    goToSurvey(surveyLink) {
      if (surveyLink) {
        this.$router.push("survey" + surveyLink);
      }
    }
  },
  created() {
    db.collection("survey")
      .get()
      .then(query => {
        query.forEach(user => {
          if (user.data().user === fb.auth().currentUser.uid) {
            if (user.data().survey) {
              this.info.done.push(user.data().survey);
              this.info.doneName.push(user.data());
            }
          }
        });
      });
    db.collection("user")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (
            doc.data().user === fb.auth().currentUser.uid &&
            !this.info.done.includes(doc.data().survey)
          ) {
            this.info.unavailable.push(doc.data().survey);
            this.info.unavailableName.push(doc.data().surveyName);
          } else {
            this.info.survey = false;
          }
        });
      });

    //   var a;
    //   var b;
    //   var c;
    //   fb.auth().onAuthStateChanged(user => {
    //     if (user) {
    //       this.loginedUser = fb.auth().currentUser.email;
    //     } else {
    //       this.logined = false;
    //     }
    //   });
    //   db.collection("survey")
    //     .get()
    //     .then(query => {
    //       query.forEach(user => {
    //         if (user.data().user === fb.auth().currentUser.uid) {
    //           if (user.data().survey) {
    //             if (user.data().survey === "G") {
    //               console.log("test");
    //               a = user.data().survey;
    //               this.info.done.a = user.data().survey;
    //               console.log(user.data().survey);
    //             }
    //             if (user.data().survey === "B") {
    //               b = user.data().survey;
    //               this.info.done.b = user.data().survey;
    //               console.log(user.data().survey);
    //             }
    //             if (user.data().survey === "C") {
    //               c = user.data().survey;
    //               this.info.done.b = user.data().survey;
    //               console.log(user.data().survey);
    //             }
    //           }
    //         } else {
    //           // this.info.done = false;
    //         }
    //       });
    //     });
    //   db.collection("user")
    //     .get()
    //     .then(querySnapshot => {
    //       querySnapshot.forEach(doc => {
    //         if (doc.data().user === fb.auth().currentUser.uid) {
    //           if (doc.data().survey == "A") {
    //             if (doc.data().survey != a) {
    //               this.survey = "/surveya";
    //               this.surveyA = "/surveya";
    //               this.info.survey = true;
    //             }
    //           } else if (doc.data().survey == "B") {
    //             if (doc.data().survey != b) {
    //               this.survey = "/surveyb";
    //               this.surveyB = "/surveyb";
    //               this.info.survey = true;
    //             }
    //           } else if (doc.data().survey == "C") {
    //             if (doc.data().survey != c) {
    //               this.survey = "/surveyc";
    //               this.surveyC = "/surveyc";
    //               this.info.survey = true;
    //             }
    //           }
    //         } else {
    //           this.info.survey = false;
    //         }
    //       });
    //     });
  }
};

// <div v-if="info.survey == false && !survey" class="main__nosurvej">
//       <div class="main__left-side">
//         <h2 class="main__h">Witamy serdecznie</h2>
//         <p class="main__p">Aktualnie nie masz żadnych ankiet badawczych do wypełnienia</p>
//         <p
//           class="main__p"
//         >Jeśli masz ochotę, zachęcamy do rozwiązania kilku testów psychologicznych, które znajdziesz poniżej</p>
//       </div>

//       <br>
//       <div class="main__right-side">
//         <div class="main__right-side__elem">
//           <div class="main__right-side__elem__img">
//             <img src="/ico_depression.png" alt>
//           </div>
//           <nuxt-link to="/surveyPoints">
//             <button>Test na depresję</button>
//           </nuxt-link>
//         </div>
//         <div class="main__right-side__elem">
//           <div class="main__right-side__elem__img">
//             <img src="/ico_anxiety.png" alt>
//           </div>
//           <nuxt-link to="/surveyPoints2">
//             <button>Test zaburzeń lękowych</button>
//           </nuxt-link>
//         </div>
//         <div class="main__right-side__elem">
//           <div class="main__right-side__elem__img">
//             <img src="/ico_confusion.png" alt>
//           </div>
//           <nuxt-link to="/exercises">
//             <button>Ćwiczenie poznaj swoje emocje</button>
//           </nuxt-link>
//         </div>
//       </div>
//     </div>
//     <div class="main__thought" v-if="survey">
//       <div class="main__left-side">
//         <h2 class="main__h">Witamy serdecznie!</h2>
//         <p
//           class="main__p"
//         >Celem poniższych ankiet jest poznanie Twojej subiektywnej opinii na temat prezentowanych treści. Twoja ocena pomoże nam rozwijać project SIMON - system do samodzielnej terapii depresji on-line.</p>
//         <p
//           class="main__p"
//         >Samo badanie nie powinno potrwać dłużej niż 10-15 min. Prosimy o odpowiedzi w pełni zgodne z Twoimi odczuciami i przekonaniami.</p>
//         <p class="main__p">Dziękujemy!</p>
//       </div>
//       <div class="main__right-side">
//         <div class="main__thought__buttons">
//           <div v-if="surveyA" class="main__right-side__elem">
//             <div class="main__right-side__elem__img">
//               <img src="/film-strip-with-two-photograms.png" alt>
//             </div>
//             <button @click="goToSurvey(surveyA)">Wersja Film</button>
//           </div>
//           <div v-if="surveyB" class="main__right-side__elem">
//             <div class="main__right-side__elem__img">
//               <img src="/version-photo.png" alt>
//             </div>
//             <button @click="goToSurvey(surveyB)">Wersja Foto</button>
//           </div>
//           <div v-if="surveyC" class="main__right-side__elem">
//             <div class="main__right-side__elem__img">
//               <img src="/paint-palette.png" alt>
//             </div>
//             <button @click="goToSurvey(surveyC)">Wersja Ilustracja</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div v-else>
//       <button class="back" v-if="survey" @click="version = null, textThoughtClicked = null">Wstecz</button>
//       <div v-if="version == 0" class="main__presentation">
//         <p class="main__p">
//           Odczuwany przez nas stres możemy zmniejszać za pomocą świadomego oddychania. Opanowanie techniki oddychania pomaga również efektywniej się uczyć. Zacznijmy od małego kroku.
//           <br>Odtwórz film i postaraj się skoncentrować wyłącznie na oddychaniu tak długo, aż dźwięk całkowicie ucichnie. Bądź tu i teraz. Skieruj swoje myśli do wewnątrz. Oddychaj.
//         </p>
//         <div class="main__presentation__elem">
//           <!-- <div class="main__presentation__elem__buttons">
//             <button
//               class="main__presentation__elem__button"
//               v-for="(item, index) in textThought"
//               :key="item.id"
//               :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
//               @click="clicked(index)"
//             >{{ item }}</button>
//           </div>-->
//           <div class="main__presentation__elem__media">
//             <div class="main__presentation__elem__media__movie">
//               <video
//                 preload="none"
//                 poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveyb_video.jpg?alt=media&token=2149956d-ff9a-41dd-9f07-39d034a8a3e9"
//                 controls
//                 data-plyr-config="{ 'controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
//               >
//                 <source
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveyb_video.mp4?alt=media&token=1f41699c-4b5d-4052-955c-70e1ec38137f"
//                   type="video/mp4"
//                 >
//               </video>
//             </div>
//             <!-- <transition name="fade" mode="out-in">
//               <div
//                 v-if="!textThoughtClicked"
//                 key="start"
//                 class="main__presentation__elem__media__movie"
//                 data-plyr-provider="youtube"
//               >
//                 <video
//                   preload="none"
//                   poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/ee8711a76d3373503ceea1f997837751.jpg?alt=media&token=09652034-7206-4b15-9057-27b8f8fa7de5"
//                   controls
//                   data-plyr-config="{ 'controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
//                 >
//                   <source
//                     src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/dd19c4c7ce480a06486f1d38555e58c1.mp4?alt=media&token=ef0b0112-27db-4a1a-b753-572ae6539f15"
//                     type="video/mp4"
//                   >
//                 </video>
//               </div>

//               <div
//                 v-if="textThoughtClicked == 'text1'"
//                 key="first"
//                 class="main__presentation__elem__media__movie"
//               >
//                 <video
//                   preload="none"
//                   poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/poster1.jpg?alt=media&token=2a4455f2-ec9c-4efd-8032-32e6e1573f2d"
//                   controls
//                   data-plyr-config="{ 'controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
//                 >
//                   <source
//                     src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/video1.mp4?alt=media&token=a055c94e-aa31-4378-a3dc-42eebfeea78a"
//                     type="video/mp4"
//                   >
//                 </video>
//               </div>

//               <div
//                 v-if="textThoughtClicked == 'text2'"
//                 key="second"
//                 class="main__presentation__elem__media__movie"
//               >
//                 <video
//                   preload="none"
//                   poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/poster4.jpg?alt=media&token=d6286bad-e641-42fa-9571-d4998ee5e124"
//                   controls
//                   data-plyr-config="{ 'controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
//                 >
//                   <source
//                     src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/video4.mp4?alt=media&token=1dbcfe35-6090-47c9-a639-384a79010d70"
//                     type="video/mp4"
//                   >
//                 </video>
//               </div>
//               <div
//                 v-if="textThoughtClicked == 'text3'"
//                 key="third"
//                 class="main__presentation__elem__media__movie"
//               >
//                 <video
//                   preload="none"
//                   poster="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/poster3.jpg?alt=media&token=1f8602c8-e8f7-44d7-a1a9-0414b0ce7340"
//                   controls
//                   data-plyr-config="{ 'autoplay': 'true','controls' : ['play', 'progress', 'current-time', 'volume', 'fullscreen']}"
//                 >
//                   <source
//                     src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/video3.mp4?alt=media&token=ee06ffd5-9ba5-40d2-8d88-cd607bc8cfe5"
//                     type="video/mp4"
//                   >
//                 </video>
//               </div>
//             </transition>-->
//           </div>
//         </div>
//         <button @click="goToSurvey(surveyA)" style="width: 100%">Dalej</button>
//       </div>
//       <div v-if="version == 1" class="main__presentation">
//         <p class="main__p">
//           Czy zastanawiałeś się kiedyś nad tym, dlaczego te same sytuacje wywołują w nas różne emocje?
//           <br>
//           <br>To, co czujemy, związane jest z tym, jak oceniamy daną sytuację. O tym, czy dana emocja się pojawi i jak będzie silna, decyduje to, czy uważamy, że poradzimy sobie w zaistniałych okolicznościach oraz czy uważamy, że przyniosą nam negatywne czy pozytywne skutki.
//           <br>
//           <br>Przeczytaj poniższe oceny sytuacji i zastanów się, jaką emocję mogły wywołać. Kliknięcie w opis pozwoli Ci sprawdzić, czy miałeś/miałaś rację.
//         </p>
//         <div class="main__presentation__elem">
//           <div class="main__presentation__elem__buttons">
//             <button
//               class="main__presentation__elem__button"
//               v-for="(item, index) in textThought"
//               :key="item.id"
//               :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
//               @click="clicked(index)"
//             >{{ item }}</button>
//           </div>
//           <div class="main__presentation__elem__media">
//             <transition name="fade" mode="out-in">
//               <div
//                 v-if="!textThoughtClicked"
//                 key="start"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/surveyb_presentation.png?alt=media&token=ac11125c-be1f-42be-b186-c6a2f6f6aeb1"
//                   alt
//                 >
//               </div>

//               <div
//                 v-if="textThoughtClicked == 'text1'"
//                 key="first"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_i_can_handle_it.jpg?alt=media&token=27570524-40b3-4432-9506-c7e9d397b6d2"
//                   alt
//                 >
//               </div>

//               <div
//                 v-if="textThoughtClicked == 'text2'"
//                 key="second"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_i'm_losing_something.jpg?alt=media&token=d22b06d4-06e9-48bb-bdb9-26c949cd7eb0"
//                   alt
//                 >
//               </div>
//               <div
//                 v-if="textThoughtClicked == 'text3'"
//                 key="third"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_something_threatens_me.jpg?alt=media&token=25b855fc-308e-48de-9e22-cb69f6139b4b"
//                   alt
//                 >
//               </div>
//               <div
//                 v-if="textThoughtClicked == 'text4'"
//                 key="fourth"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/thought_it's_my_fault.jpg?alt=media&token=663ed9d4-e4b0-4463-8977-24203d4c415a"
//                   alt
//                 >
//               </div>
//             </transition>
//           </div>
//         </div>
//       </div>
//       <div v-if="version == 2" class="main__presentation">
//         <p class="main__p">
//           O tej samej sytuacji możesz myśleć w różny sposób.
//           Zależnie od tego, jak myślisz o danej sytuacji, pojawiają się inne emocje.Sprawdź, jak Adam reaguje na różne myśli dotyczące sesji:
//           kliknij na odpowiednią myśl i zobaczysz ilustrację.
//           Po obejrzeniu wszystkich ilustracji, wypełnij ankietę.
//         </p>
//         <div class="main__presentation__elem">
//           <div class="main__presentation__elem__buttons">
//             <button
//               class="main__presentation__elem__button"
//               v-for="(item, index) in textThought"
//               :key="item.id"
//               :class="{main__presentation__elem__button__clicked: index == textThoughtClicked}"
//               @click="clicked(index)"
//             >{{ item }}</button>
//           </div>
//           <div class="main__presentation__elem__media">
//             <transition name="fade" mode="out-in">
//               <div
//                 v-if="!textThoughtClicked"
//                 key="start"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja.jpg?alt=media&token=c7073427-7838-452e-b959-323342567ab6"
//                   alt
//                 >
//               </div>

//               <div
//                 v-if="textThoughtClicked == 'text1'"
//                 key="first"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja1.jpg?alt=media&token=56c756d3-542a-4ef2-80cf-13d8d089bdc8"
//                   alt
//                 >
//               </div>

//               <div
//                 v-if="textThoughtClicked == 'text2'"
//                 key="second"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja2.jpg?alt=media&token=c8237937-3b59-4b81-ae9b-eac533a3f2ff"
//                   alt
//                 >
//               </div>
//               <div
//                 v-if="textThoughtClicked == 'text3'"
//                 key="third"
//                 class="main__presentation__elem__media__picture"
//               >
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/myslIlustracja3.jpg?alt=media&token=c70cd17f-1088-4003-934f-6fa2f488a1be"
//                   alt
//                 >
//               </div>
//             </transition>
//           </div>
//         </div>
//       </div>
//     </div>

//     <button v-if="textThoughtClicked" @click="goToSurvey()">Start</button>
</script>
<style scoped>
.main__p {
  width: 100%;
  margin-bottom: 3vh;
}
button {
  width: 100%;
  margin: 0 auto;
  display: block;
  box-shadow: 1px 1px 10px rgba(80, 255, 202, 0.25);
  background: #fbfcfc;
  border-radius: 20px;
  padding: 26px;
  color: #053276;
  font-weight: bold;
  font: 1rem "Montserrat", century gothic, sans-serif;
}
.back {
  position: absolute;
  right: 2%;
  font-size: 0.7rem;
}
main {
  width: 69.16666666666667%;
  height: unset;
  min-height: 78.3vh;
  margin: 0 auto;
  display: block;
}
.main__thought {
  width: 100%;
}
.main__right-side__elem button {
  width: 70%;
}
footer {
  display: none !important;
}
</style>
