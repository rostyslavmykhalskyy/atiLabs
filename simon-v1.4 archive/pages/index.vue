<template>
  <main>
    <!-- <div class="main__left-side">
      <h1 class="main__h">Platforma badawcza SIMON</h1>
      <p
        class="main__p"
      >Projekt SIMON to system do samodzielnej, komputerowej psychoterapii depresji. Dla naszego zespołu SIMON to nie tylko projekt naukowy i biznesowy, ale także coś osobistego – wiemy, czym jest depresja i chcemy pomóc osobom, które nie mogą pozwolić sobie na drogie leczenie psychologiczne lub mają opory przed wizytą u psychoterapeuty.</p>
      <p
        class="main__p"
      >Jeśli chcesz mieć wpływ na to, jaki będzie SIMON, zapraszamy do udziału w ankietach.</p>
      <p class="main__p">Zaloguj się lub napisz na adres badania@atilabs.pl, aby uzyskać dostęp.</p>
    </div>
    <div class="main__right-side">
      <div class="main__right-side__elem">
        <div class="main__right-side__elem__img">
          <img src="/ico_depression.png" alt>
        </div>
        <nuxt-link to="/surveyPoints">
          <button>Test na depresję</button>
        </nuxt-link>
      </div>
      <div class="main__right-side__elem">
        <div class="main__right-side__elem__img">
          <img src="/ico_anxiety.png" alt>
        </div>
        <nuxt-link to="/surveyPoints2">
          <button>Test zaburzeń lękowych</button>
        </nuxt-link>
      </div>
      <div class="main__right-side__elem">
        <div class="main__right-side__elem__img">
          <img src="/ico_confusion.png" alt>
        </div>
        <nuxt-link to="/exercises">
          <button>Ćwiczenie poznaj swoje emocje</button>
        </nuxt-link>
      </div>
    </div>-->
    <div class="main__left-side">
      <h1 class="main__h">Platforma badawcza SIMON</h1>
      <p class="main__p">
        Projekt
        <span class="blue-text-span">SIMON</span> to system do samodzielnej, komputerowej psychoterapii depresji. Dla naszego zespołu
        <br />
        <span class="blue-text-span">SIMON</span> to nie tylko projekt naukowy i biznesowy, ale także coś osobistego – wiemy,
        <br />czym jest depresja i chcemy pomóc osobom, które nie mogą pozwolić sobie na drogie leczenie
        <br />psychologiczne lub mają opory przed wizytą u psychoterapeuty.
      </p>
      <p class="main__p">
        Jeśli chcesz mieć wpływ na to, jaki będzie
        <span class="blue-text-span">SIMON</span>, zapraszamy do udziału w ankietach.
      </p>
      <p class="main__p">
        Zaloguj się lub napisz na adres
        <span class="blue-text-span">badania@atilabs.pl</span>, aby uzyskać dostęp.
      </p>
      <button class="blue-button" @click="login">Zaloguj się</button>
    </div>
    <div class="main__right-side">
      <img src="index-img.png" alt />
    </div>
  </main>
</template>



<style scoped>
.main__p {
  font-size: 1.063rem;
  text-align: left;
}
main {
  /* margin: 0 6.54% 0 6.84%; */
  box-sizing: border-box;
  padding-top: 13vh;
}
.main__left-side h1 {
}
.main__left-side button {
  margin-top: 7.25rem;
  margin-left: 16.25581395348837%;
  /* padding: 2.038vh 12.522%; */
  /* padding: 25px 100px; */
  padding: 1.563rem 6.5rem;
  font: 1.875rem "Montserrat-bold", century gothic, sans-serif;
  color: #fff;
  background: linear-gradient(67.25deg, #5690ff -103.36%, #8cdff9 188.39%);
}
</style>

<script>
export default {
  methods: {
    login() {
      this.$router.replace("/login");
    }
  }
};
</script>
