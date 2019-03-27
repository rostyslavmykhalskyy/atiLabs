<template>
  <main>
    <table style="width:99%">
      <thead>
        <tr>
          <!-- <th>Ankieta</th> -->
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
          <!-- <td>{{ ankiet.ankiet }}</td> -->
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
    </table>
  </main>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      ankiety: []
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
</style>
