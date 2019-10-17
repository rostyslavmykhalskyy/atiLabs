<template>
  <main>
    <nav class="main__nav">
      <button @click="state=1" class="main__button_answers">Odpowiedzi</button>
      <button @click="getUsers" class="main__button_users">Użytkownicy</button>
      <button
        v-if="newMessage"
        @click="state=3"
        class="main__button_users"
        style="background-color: #00800096"
      >Nowa wiadomość</button>
      <button v-else @click="state=3" class="main__button_users">Wiadomości</button>
    </nav>
    <div v-if="state==1" class="main__answers">
      <download-excel
        v-if="typeof json_data !== 'undefined' && json_data.length > 0"
        class="download-excel"
        :data="json_data"
        :fields="json_fields"
        worksheet="My Worksheet"
        type="csv"
        name="filename.xls"
      >Pobierz CSV</download-excel>
      <button
        v-if="surveys.length>0"
        @click="deleteAllAnswers"
        class="button_delete_all"
      >Usunąć wszystkie odpowiedzi</button>
      <p v-else>Nie ma odpowiedzi</p>
      <div class="answer" v-for="(survey,index) in surveys" :key="survey.id">
        <div class="answer__header">
          <div class="answer__header__user">
            <p>Użytkownik: {{ survey.user_email }}</p>
            <button
              v-if="!json_data.includes(survey)"
              @click="json_data.push(survey)"
              class="answer__more"
              style="background-color: #ff7b00ad"
            >Dodać do CSV</button>
            <button v-else disabled>Dodano do CSV</button>
            <button
              @click="answerShowHide(index)"
              class="answer__more"
              style="background-color: #00800096"
            >Pokaż odpowiedzi</button>

            <button
              @click="deleteAnswer(index)"
              class="answer__more"
              style="background-color: #ff0000ad"
            >Usunąć</button>
          </div>
        </div>
        <transition name="fadeAnswers" mode="out-in">
          <div v-if="answerShow && index == clikedAnswer" class="answer__answers">
            <p v-if="survey.an1">
              Odpowiedż №1:
              <span>{{ survey.an1 }}</span>
            </p>
            <p v-if="survey.an2">
              Odpowiedż №2:
              <span>{{ survey.an2 }}</span>
            </p>
            <p v-if="survey.an3">
              Odpowiedż №3:
              <span>{{ survey.an3 }}</span>
            </p>
            <p v-if="survey.an4">
              Odpowiedż №4:
              <span>{{ survey.an4 }}</span>
            </p>
            <p v-if="survey.an5">
              Odpowiedż №5:
              <span>{{ survey.an5 }}</span>
            </p>
            <p v-if="survey.an6">
              Odpowiedż №6:
              <span>{{ survey.an6 }}</span>
            </p>
            <p v-if="survey.an7">
              Odpowiedż №7:
              <span>{{ survey.an7 }}</span>
            </p>
            <p v-if="survey.an8">
              Odpowiedż №8:
              <span>{{ survey.an8 }}</span>
            </p>
            <p v-if="survey.an9">
              Odpowiedż №9:
              <span>{{ survey.an9 }}</span>
            </p>
            <p v-if="survey.an10">
              Odpowiedż №10:
              <span>{{ survey.an10 }}</span>
            </p>
            <p v-if="survey.an11">
              Odpowiedż №11:
              <span>{{ survey.an11 }}</span>
            </p>
            <p v-if="survey.an12">
              Odpowiedż №12:
              <span>{{ survey.an12 }}</span>
            </p>
            <p v-if="survey.an13">
              Odpowiedż №13:
              <span>{{ survey.an13 }}</span>
            </p>
            <p v-if="survey.an14">
              Odpowiedż №14:
              <span>{{ survey.an14 }}</span>
            </p>
            <p v-if="survey.an15">
              Odpowiedż №15:
              <span>{{ survey.an15 }}</span>
            </p>
            <p v-if="survey.an16">
              Odpowiedż №16:
              <span>{{ survey.an16 }}</span>
            </p>
            <p v-if="survey.an17">
              Odpowiedż №17:
              <span>{{ survey.an17 }}</span>
            </p>
            <p v-if="survey.an18">
              Odpowiedż №18:
              <span>{{ survey.an18 }}</span>
            </p>
            <p v-if="survey.an19">
              Odpowiedż №19:
              <span>{{ survey.an19 }}</span>
            </p>
            <p v-if="survey.an20">
              Odpowiedż №20:
              <span>{{ survey.an20 }}</span>
            </p>
            <p v-if="(survey.q1 || !survey.q1) && survey.q1 != null">
              Quiz №1:
              <span>{{ survey.q1 }}</span>
            </p>
            <p v-if="(survey.q2 || !survey.q2) && survey.q2 != null">
              Quiz №2:
              <span>{{ survey.q2 }}</span>
            </p>
            <p v-if="(survey.q3 || !survey.q3) && survey.q3 != null">
              Quiz №3:
              <span>{{ survey.q3 }}</span>
            </p>
            <p v-if="(survey.q4 || !survey.q4) && survey.q4 != null">
              Quiz №4:
              <span>{{ survey.q4 }}</span>
            </p>
            <p v-if="(survey.q5 || !survey.q5) && survey.q5 != null">
              Quiz №5:
              <span>{{ survey.q5 }}</span>
            </p>
            <p v-if="survey.survey">
              Ankieta:
              <span>{{ survey.survey }}</span>
            </p>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="state==2" class="main__users">
      <div class="main__users__elem" v-for="user in usersSDK" :key="user.index">
        <p>
          <span>email:</span>
          {{user.email}}
        </p>
        <p>
          <span>UID:</span>
          {{user.uid}}
        </p>
        <div class="main__users__elem__complited">
          <p>Uzupełnione ankiety:</p>
          <div
            style="color:green;"
            v-if="user.uid == survey.user"
            v-for="survey in surveys"
            :key="survey.index"
          >
            <div v-if="user.uid == survey.user">
              <p>{{survey.survey}}: {{survey.surveyName}}</p>
            </div>
          </div>
        </div>
        <div class="main__users__elem__avaible">
          <p>Udostępnione ankiety:</p>
          <div style="color:#053276;" v-for="userFB in usersFB" :key="userFB.index">
            <p v-if="user.uid == userFB.user">{{userFB.survey}}: {{surveyName[userFB.survey]}}</p>
          </div>
          <br />
          <button
            v-if="!(changeSurveys && user.uid==changeUserSurveys)"
            @click="changeSurvey(user.uid)"
            class="main__users__elem__button"
          >Usunąć / Udostępnić ankietę</button>
          <div
            v-if="changeSurveys && user.uid==changeUserSurveys"
            class="main__users__elem__change_survey"
          >
            <div class="main__elem__checkbox">
              <label class="main__elem__checkbox-button" for="Z0">
                Z0 = Zniekształcenia poznawcze
                <input
                  type="checkbox"
                  id="Z0"
                  value="Z0"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z5a">
                Z5a = Personalizacja ze względu na posiadanie dzieci
                <input
                  type="checkbox"
                  id="Z5a"
                  value="Z5a"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z5b">
                Z5b = Personalizacja ze względu na posiadanie dzieci (bez dzieci)
                <input
                  type="checkbox"
                  id="Z5b"
                  value="Z5b"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z6a">
                Z6a = Personalizacja ze względu na nastawienie do terapii komputerowej(negatywne)
                <input
                  type="checkbox"
                  id="Z6a"
                  value="Z6a"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z6b">
                Z6b = Personalizacja ze względu na nastawienie do terapii komputerowej(pozytywne)
                <input
                  type="checkbox"
                  id="Z6b"
                  value="Z6b"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z7">
                Z7 = Rozkład sesji w czasie
                <input
                  type="checkbox"
                  id="Z7"
                  value="Z7"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z9">
                Z9 = Fakty i interpretacje
                <input
                  type="checkbox"
                  id="Z9"
                  value="Z9"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z11a">
                Z11a = Personalizacja ze względu na płeć(K)
                <input
                  type="checkbox"
                  id="Z11a"
                  value="Z11a"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z11b">
                Z11b = Personalizacja ze względu na płeć(M)
                <input
                  type="checkbox"
                  id="Z11b"
                  value="Z11b"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z12a">
                Z12a = Personalizacja ze względu na wiek
                <input
                  type="checkbox"
                  id="Z12a"
                  value="Z12a"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z12b">
                Z12b = Personalizacja ze względu na wiek > 35
                <input
                  type="checkbox"
                  id="Z12b"
                  value="Z12b"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z13a">
                Z13a = Personalizacja ze względu na status relacji
                <input
                  type="checkbox"
                  id="Z13a"
                  value="Z13a"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="Z13b">
                Z13b = Personalizacja ze względu na status relacji(samotne)
                <input
                  type="checkbox"
                  id="Z13b"
                  value="Z13b"
                  v-model="newChangedUserSurveys"
                />
                <span class="checkmark-checkbox"></span>
              </label>
            </div>
            <button
              @click="saveChanges(changeUserSurveys)"
              class="main__users__elem__change_survey__save"
              style="background-color: green"
            >Zapisz</button>
            <button
              @click="changeSurveys=false"
              class="main__users__elem__change_survey__cancel"
              style="background-color: red"
            >Zamknij</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state==3" class="main__message">
      <div
        class="main__message__element"
        v-for="(element,index) in contactMesaage"
        :key="element.id"
      >
        <div>
          <p>email:</p>
          <p>{{element.email}}</p>
        </div>
        <p>message:</p>
        <p>{{element.message}}</p>
        <button @click="deleteMessage(index)" style="background-color: #ff0000ad">Usunąć</button>
        <button
          v-if="element.read==1"
          @click="readMessage(index)"
          style="background-color: #ff7b00ad"
        >Oznacz jako przeczytane</button>
      </div>
    </div>
  </main>
</template>

<script>
import { db } from "../assets/firebase";
import Axios from "Axios";
import JsonExcel from "vue-json-excel";

export default {
  components: { "download-excel": JsonExcel },
  data() {
    return {
      surveys: [],
      answerShow: false,
      state: 1,
      clikedAnswer: null,
      surveyDoc: null,
      userDoc: null,
      messageDoc: null,
      usersFB: [],
      usersSDK: [],
      contactMesaage: [],
      changeSurveys: false,
      changeUserSurveys: null,
      newChangedUserSurveys: [],
      surveyName: {
        Z0: "Zniekształcenia poznawcze",
        Z5a: "Personalizacja ze względu na posiadanie dzieci",
        Z5b: "Personalizacja ze względu na posiadanie dzieci (bez dzieci)",
        Z6a:
          "Personalizacja ze względu na nastawienie do terapii komputerowej(negatywne)",
        Z6b:
          "Personalizacja ze względu na nastawienie do terapii komputerowej(pozytywne)",
        Z7: "Rozkład sesji w czasie",
        Z9: "Fakty i interpretacje",
        Z11a: "Personalizacja ze względu na płeć(K)",
        Z11b: "Personalizacja ze względu na płeć(M)",
        Z12a: "Personalizacja ze względu na wiek",
        Z12b: "Personalizacja ze względu na wiek > 35",
        Z13a: "Personalizacja ze względu na status relacji",
        Z13b: "Personalizacja ze względu na status relacji (samotne)"
      },
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
        surveyName: "surveyName",
        Zadanie1: "an1",
        Zadanie2: "an2",
        Zadanie3: "an3",
        Zadanie4: "an4",
        Zadanie5: "an5",
        Zadanie6: "an6",
        Zadanie7: "an7",
        Zadanie8: "an8",
        Zadanie9: "an9",
        Zadanie10: "an10",
        Zadanie11: "an11",
        Zadanie12: "an12",
        Zadanie13: "an13",
        Zadanie14: "an14",
        Zadanie15: "an15",
        Zadanie16: "an16",
        Zadanie17: "an17",
        Zadanie18: "an18",
        Zadanie19: "an19",
        Zadanie20: "an20",
        Quiz1: "q1",
        Quiz2: "q2",
        Quiz3: "q3",
        Quiz4: "q4",
        Quiz5: "q5"
      },
      json_data: []
    };
  },
  methods: {
    answerShowHide(id) {
      this.clikedAnswer = id;
      if (!this.answerShow) {
        this.answerShow = !this.answerShow;
      }
    },
    answersShowHide() {
      this.answersShow = !this.answersShow;
    },
    deleteAnswer(id) {
      this.surveyDoc.get().then(function(querySnapshot) {
        querySnapshot.docs[id].ref.delete();
      });
      this.surveys.splice(id, 1);
    },
    deleteAllAnswers() {
      this.surveyDoc.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        });
      });
      this.surveys.splice(0, this.surveys.length);
    },
    getUsers() {
      this.state = 2;
      this.usersSDK = [];
      Axios.get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-ankiety-35c4d.cloudfunctions.net/api"
      ).then(response => {
        response.data.forEach(user => {
          this.usersSDK.push(user);
        });
      });
    },
    changeSurvey(uid) {
      this.changeSurveys = true;
      this.changeUserSurveys = uid;
      this.newChangedUserSurveys = [];
    },
    showUserSurveys(uid) {
      let surveys = [];
      this.usersFB.forEach(element => {
        if (element.user == uid) {
          surveys.push(element.survey);
        }
      });
      return surveys;
    },
    deleteUserSurvey(id) {
      db.collection("user")
        .doc(id)
        .delete();
    },
    saveChanges(uid) {
      let checkSurveys = [];
      db.collection("user")
        .orderBy("survey", "asc")
        .get()
        .then(query => {
          query.forEach(colect => {
            if (uid == colect.data().user) {
              if (
                this.newChangedUserSurveys.indexOf(colect.data().survey) == -1
              ) {
                this.deleteUserSurvey(colect.id);
                this.usersFB.splice(
                  this.usersFB.findIndex(
                    x => x.user === uid && x.survey === colect.data().survey
                  ),
                  1
                );
              }
              checkSurveys[checkSurveys.length] = colect.data().survey;
            }
          });
          this.newChangedUserSurveys.forEach(survey => {
            if (checkSurveys.indexOf(survey) === -1) {
              db.collection("user").add({
                user: uid,
                survey: survey,
                surveyName: this.surveyName[survey]
              });
              this.usersFB.push({
                user: uid,
                survey: survey
              });
            }
          });
        });
    },
    deleteMessage(id) {
      this.messageDoc.get().then(querySnapshot => {
        querySnapshot.docs[id].ref.delete();
      });
      this.contactMesaage.splice(id, 1);
    },
    readMessage(id) {
      this.messageDoc.get().then(querySnapshot => {
        querySnapshot.docs[id].ref.set({
          email: this.contactMesaage[id].email,
          message: this.contactMesaage[id].message,
          read: 0
        });
      });
      this.contactMesaage[id].read = 0;
    }
  },
  computed: {
    newMessage() {
      let message = false;
      this.contactMesaage.forEach(element => {
        if (element.read == 1) {
          message = true;
        }
      });
      return message;
    }
  },
  created() {
    var surveyD = db.collection("survey");
    var userD = db.collection("user");
    var messageD = db.collection("message");
    db.collection("survey")
      .get()
      .then(query => {
        query.forEach(colect => {
          this.surveys.push(colect.data());
        });
        this.surveyDoc = surveyD;
      });
    db.collection("user")
      .orderBy("survey", "asc")
      .get()
      .then(query => {
        query.forEach(colect => {
          this.usersFB.push(colect.data());
        });
        this.userDoc = userD;
      });
    db.collection("message")
      .get()
      .then(query => {
        query.forEach(colect => {
          this.contactMesaage.push(colect.data());
        });
        this.messageDoc = messageD;
      });
  }
};
</script>

<style scoped>
button {
  padding: 15px 25px 15px 25px;
  color: #fff;
  font: 1rem/1 "Montserrat", century gothic, sans-serif;
  background-color: #3065ec;
}
main {
  min-height: 71.3vh;
  height: unset;
  /* height: unset;
  flex-wrap: wrap;
  align-items: unset; */
  display: block;
}
.main__answers {
  width: 85%;
  margin: 12vh auto 0;
}
.answer {
  width: 90%;
  margin-bottom: 3vh;
}
.answer:last-of-type {
  margin-bottom: 0vh;
}
.answer__header__time p {
  text-align: right;
}
.answer__header__user {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.answer__header__user p {
  width: 50%;
  text-align: left;
}
.answer__answers {
  margin: 3vh 0 5vh;
}
.answer__answers p {
  width: 40%;
  margin: 0 auto 1vh auto;
  padding-bottom: 2px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  justify-items: center;
}
.answer__answers p:last-of-type {
  margin-bottom: 0;
}
.answer__answers p span {
  min-width: 1rem;
  border-bottom: 1px #3065ecb8 solid;
  text-align: center;
  font-size: 1.2rem;
}
.main__nav {
  width: 80%;
  margin: 2vh auto;
  display: flex;
  align-items: baseline;
}
.main__nav button {
  margin-right: 10px;
}
.button_delete_all {
  display: block;
  margin: 0 0 5vh auto;
  background-color: rgba(255, 0, 0, 0.68);
  color: white;
}
.main__users {
  width: 90%;
  margin: 5vh auto;
  text-align: left;
}
.main__users p {
  width: 100%;
  text-align: left;
}
.main__users__elem {
  border: 1px #0532762e solid;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 25px;
  background-color: #fbfbfb;
}
.main__users__elem > p {
  width: 47%;
}
.main__users__elem p {
  padding-bottom: 5px;
  margin-bottom: 1vh;
}
.main__users__elem p span {
  font-weight: bold;
}
.main__elem__checkbox {
  width: 100%;
}
.main__users__elem__complited,
.main__users__elem__avaible {
  width: 47%;
}
.main__users__elem__complited > p:first-of-type,
.main__users__elem__avaible > p:first-of-type {
  padding-bottom: 5px;
  font-weight: bold;
  border-bottom: 1px #3065ec solid;
}
.download-excel {
  width: 50%;
  padding: 15px 25px 15px 25px;
  color: #fff;
  font: 2rem/1 "Montserrat", century gothic, sans-serif;
  background-color: rgba(255, 123, 0, 0.68);
  border-radius: 143px;
  margin: 5vh auto;
  text-align: center;
}
.main__message__element {
  border: 1px rgba(5, 50, 118, 0.18039) solid;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  background-color: #fbfbfb;
}
.main__message__element > div {
  display: flex;
  margin-bottom: 1vh;
}
.main__message__element p:first-of-type {
  font-weight: bold;
}
.main__message__element p:last-of-type {
  text-indent: 1em;
}
.main__message__element > p:last-of-type {
  text-indent: 0em;
  margin-bottom: 3vh;
}
@media (max-width: 1919px) {
  main {
    margin: 0 auto;
  }
}
</style>
