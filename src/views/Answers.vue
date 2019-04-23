<template>
  <main>
    <div class="answer" v-for="survey in surveys" :key="survey.id">
      <div class="answer__header">
        <div class="answer__header__user">
          <p>Użytkownik: {{ survey.user_email }}</p>
          <button @click="answerShow=true" class="answer__more">Pokaż odpowiedzi</button>
        </div>
        <div class="answer__header__time">
          <p>Początek: {{ survey.startTime }}</p>
          <p>Koniec: {{ survey.endTime }}</p>
        </div>
      </div>
      <transition name="answers">
        <div v-if="answerShow" class="answer__answers">
          <p>Odpowiedż 1: {{ survey.answer1 }}</p>
          <p v-for="answer2 in survey.answer2" :key="answer2.id">Odpowiedż 2: {{ answer2 }}</p>
          <p>Odpowiedż 3: {{ survey.answer3 }}</p>
          <p>Odpowiedż 4: {{ survey.answer4 }}</p>
          <p>Odpowiedż 5: {{ survey.answer5 }}</p>
          <p>Odpowiedż 6: {{ survey.answer6 }}</p>
          <p>Odpowiedż 7: {{ survey.answer7 }}</p>
        </div>
      </transition>
    </div>
    <!-- <table style="width:99%">
      <thead>
        <tr>
          <th>Odpowiedż 1</th>
          <th>Odpowiedż 2</th>
          <th>Odpowiedż 3</th>
          <th>Odpowiedż 4</th>
          <th>Odpowiedż 5</th>
          <th>Odpowiedż 6</th>
          <th>Odpowiedż 7</th>
          <th>Start</th>
          <th>End</th>
          <th>User</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="survey in surveys" :key="survey.id">
          <td>{{ survey.answer1 }}</td>
          <td>{{ survey.answer2 }}</td>
          <td>{{ survey.answer3 }}</td>
          <td>{{ survey.answer4 }}</td>
          <td>{{ survey.answer5 }}</td>
          <td>{{ survey.answer6 }}</td>
          <td>{{ survey.answer7 }}</td>
          <td>{{ survey.startTime }}</td>
          <td>{{ survey.endTime }}</td>
          <td>{{ survey.user_email }}</td>
        </tr>
      </tbody>
    </table>-->
  </main>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      surveys: [],
      answerShow: false
    };
  },
  created() {
    db.collection("survey")
      .get()
      .then(query => {
        query.forEach(colect => {
          this.surveys.push(colect.data());
        });
      });
  }
};
</script>

<style scoped>
table {
  font-size: 0.8rem;
  border-collapse: collapse;
  width: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-border-horizontal-spacing: 0;
}
th,
td {
  text-align: left;
  padding: 1px 1px;
  width: 9%;
  word-wrap: break-word;
  word-break: break-all;
  -webkit-hyphens: auto;
  hyphens: auto;
  border: 1px solid black;
}
thead {
  color: #fff;
}
main {
  height: auto;
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
</style>
