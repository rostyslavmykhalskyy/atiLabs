<template>
  <main>
    <div class="answer" v-for="ankiet in ankiety" :key="ankiet.id">
      <div class="answer__header">
        <div class="answer__header__user">
          <p>Użytkownik: {{ ankiet.user_email }}</p>
          <button class="answer__more">Pokaż odpowiedzi</button>
        </div>
        <div class="answer__header__time">
          <p>Początek: {{ ankiet.startTime }}</p>
          <p>Koniec: {{ ankiet.endTime }}</p>
        </div>
      </div>
      <transition name="answers">
        <div v-if="answerShow" class="answer__answers">
          <p>Odpowiedż 1: {{ ankiet.answer1 }}</p>
          <p v-for="answer2 in ankiet.answer2" :key="answer2.id">Odpowiedż 2: {{ answer2 }}</p>
          <p>Odpowiedż 3: {{ ankiet.answer3 }}</p>
          <p>Odpowiedż 4: {{ ankiet.answer4 }}</p>
          <p>Odpowiedż 5: {{ ankiet.answer5 }}</p>
          <p>Odpowiedż 6: {{ ankiet.answer6 }}</p>
          <p>Odpowiedż 7: {{ ankiet.answer7 }}</p>
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
        <tr v-for="ankiet in ankiety" :key="ankiet.id">
          <td>{{ ankiet.answer1 }}</td>
          <td>{{ ankiet.answer2 }}</td>
          <td>{{ ankiet.answer3 }}</td>
          <td>{{ ankiet.answer4 }}</td>
          <td>{{ ankiet.answer5 }}</td>
          <td>{{ ankiet.answer6 }}</td>
          <td>{{ ankiet.answer7 }}</td>
          <td>{{ ankiet.startTime }}</td>
          <td>{{ ankiet.endTime }}</td>
          <td>{{ ankiet.user_email }}</td>
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
      ankiety: [],
      answerShow: false
    };
  },
  created() {
    db.collection("ankiet")
      .get()
      .then(query => {
        query.forEach(colect => {
          this.ankiety.push(colect.data());
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
