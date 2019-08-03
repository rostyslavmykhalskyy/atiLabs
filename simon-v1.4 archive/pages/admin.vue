<template>
  <main>
    <nav class="main__nav">
      <button @click="answersShow=true" class="main__button_answers">Odpowiedzi</button>
      <button @click="getUsers" class="main__button_users">Użytkownicy</button>
    </nav>
    <div v-if="answersShow" class="main__answers">
      <div class="answer" v-for="(survey,index) in surveys" :key="survey.id">
        <div class="answer__header">
          <div class="answer__header__user">
            <p>Użytkownik: {{ survey.user_email }}</p>
            <button
              @click="answerShowHide(index)"
              class="answer__more"
              style="background-color: green; margin:5px 10px 0 0"
            >Pokaż odpowiedzi</button>
            <button
              @click="deleteAnswer(index)"
              class="answer__more"
              style="background-color: red"
            >Usunąć</button>
          </div>
          <div class="answer__header__time">
            <p>Początek: {{ survey.startTime }}</p>
            <p>Koniec: {{ survey.endTime }}</p>
          </div>
        </div>
        <transition name="answers">
          <div v-if="answerShow && index == clikedAnswer" class="answer__answers">
            <p>Odpowiedż 1: {{ survey.answer1 }}</p>
            <p v-for="answer2 in survey.answer2" :key="answer2.id">Odpowiedż 2: {{ answer2 }}</p>
            <p>Odpowiedż 3: {{ survey.answer3 }}</p>
            <p>Odpowiedż 4: {{ survey.answer4 }}</p>
            <p>Odpowiedż 5: {{ survey.answer5 }}</p>
            <p>Odpowiedż 6: {{ survey.answer6 }}</p>
            <p>Odpowiedż 7: {{ survey.answer7 }}</p>
            <p>Ankieta: {{ survey.survey }}</p>
          </div>
        </transition>
      </div>

      <button
        v-if="surveys.length>0"
        @click="deleteAllAnswers"
        class="button_delete_all"
      >Usunąć wszystkie odpowiedzi</button>
      <p v-else>Nie ma odpowiedzi</p>
    </div>
    <div v-else class="main__users">
      <div class="main__users__elem" v-for="user in usersSDK" :key="user.index">
        <p>email: {{user.email}}</p>
        <p>UID: {{user.uid}}</p>
        <div class="main__users__elem__complited">
          <p>Uzupełnione ankiety:</p>
          <div
            style="color:green;"
            v-if="user.uid == survey.user"
            v-for="survey in surveys"
            :key="survey.index"
          >
            <div v-if="user.uid == survey.user">
              <p>{{survey.survey}} zostala wykonana o {{survey.endTime}}</p>
            </div>
          </div>
        </div>
        <div class="main__users__elem__avaible">
          <p>Udostępnione ankiety:</p>
          <div style="color:#053276;" v-for="userFB in usersFB" :key="userFB.index">
            <p v-if="user.uid == userFB.user">{{userFB.survey}}</p>
          </div>
          <br>
          <button
            v-if="!(changeSurveys && user.uid==changeUserSurveys)"
            @click="changeSurvey(user.uid)"
            class="main__users__elem__button"
          >Usunąc / udostępić ankietę</button>
          <div
            v-if="changeSurveys && user.uid==changeUserSurveys"
            class="main__users__elem__change_survey"
          >
            <div class="main__elem__checkbox">
              <label class="main__elem__checkbox-button" for="A">
                A = Wersja Film
                <input
                  type="checkbox"
                  id="A"
                  value="A"
                  v-model="newChangedUserSurveys"
                >
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="B">
                B = Wersja Foto
                <input
                  type="checkbox"
                  id="B"
                  value="B"
                  v-model="newChangedUserSurveys"
                >
                <span class="checkmark-checkbox"></span>
              </label>
              <label class="main__elem__checkbox-button" for="C">
                C = Wersja Ilustracja
                <input
                  type="checkbox"
                  id="C"
                  value="C"
                  v-model="newChangedUserSurveys"
                >
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
    <!-- <div v-else>
      <div v-for="(user, index) in usersFB" :key="user.index">
        <p>{{user.user}}</p>
      </div>
    </div>-->
  </main>
</template>

<script>
import { db } from "../assets/firebase";
import Axios from "Axios";

export default {
  // async asyncData({ store }) {
  //   return await store.dispatch("listAllUsers");
  // },
  data() {
    return {
      surveys: [],
      answerShow: false,
      answersShow: true,
      clikedAnswer: null,
      surveyDoc: null,
      userDoc: null,
      usersFB: [],
      usersSDK: [],
      changeSurveys: false,
      changeUserSurveys: null,
      newChangedUserSurveys: []
    };
  },
  methods: {
    answerShowHide(id) {
      this.clikedAnswer = id;
      this.answerShow = !this.answerShow;
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
      this.answersShow = false;
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
                survey: survey
              });
              this.usersFB.push({
                user: uid,
                survey: survey
              });
            }
          });
        });
    }
    // getUsers() {
    //   let user = [];
    //   for (let index = 0; index < this.usersFB.length; index++) {
    //     user.push(this.usersFB[index][0]);
    //   }
    //   user = this.unique(user);
    //   // for (let i = 0; i < user.length; i++) {
    //   //   for (let j = 0; j < this.usersFB.length; j++) {
    //   //     if (this.usersFB[j].user == user[i]) {
    //   //       user[i].push(this.usersFB[j].survej);
    //   //     }
    //   //   }
    //   //   user.push(this.usersFB[index].user);
    //   // }
    //   console.log(user);
    //   // if (this.usersFB[index].user == this.usersFB[index + 1].user) {
    //   //   // user.push(this.usersFB[index].survey);
    //   //   // user.push(this.usersFB[index + 1].survey);
    //   //   // user.push(this.usersFB[index + 1].user);
    //   //   // this.usersFB[index].user.push(this.usersFB[index + 1]).user;
    //   //   // console.log(user);
    //   //   // console.log(this.usersFB[index + 1].user);
    //   // }
    // },
    // unique(arr) {
    //   var obj = {};
    //   for (var i = 0; i < arr.length; i++) {
    //     var str = arr[i];
    //     obj[str] = true;
    //   }
    //   return Object.keys(obj);
    // }
  },
  created() {
    var surveyD = db.collection("survey");
    var userD = db.collection("user");
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
  }
};
</script>

<style scoped>
main {
  width: 100%;
  overflow: auto;
  flex-direction: unset;
  justify-content: baseline;
  align-items: baseline;
  flex-wrap: wrap;
}
.main__answers {
  width: 85%;
}
.answer {
  width: 90%;
}
.answer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.answer__header__time p {
  text-align: right;
}
.answer__answers p {
  text-align: left;
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
.answer__header__user p {
  text-align: left;
}
.button_delete_all {
  position: absolute;
  top: 2vh;
  right: 2%;
  background-color: rgb(226, 64, 52);
  color: white;
}
.main__users {
  width: 90%;
  text-align: left;
}
.main__users p {
  width: 100%;
  text-align: left;
}
.main__users__elem {
  border: 1px #053276 solid;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main__elem__checkbox {
  width: 100%;
}
.main__users__elem__complited,
.main__users__elem__avaible {
  width: 47%;
}
</style>
