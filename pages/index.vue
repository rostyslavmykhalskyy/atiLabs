<template>
  <main>
    <div class="main__left-side">
      <h2 class="main__h">Platforma badawcza SIMON</h2>
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
    </div>
  </main>
</template>



<style scoped>
.main__p {
  text-align: left;
}
main {
  padding: 30px;
  align-items: unset;
  box-sizing: border-box;
}
</style>