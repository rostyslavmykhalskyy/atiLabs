<template>
  <footer>
    <img
      @click="showP=!showP"
      :class="{'footer-ico-mobile-clicked' : showP}"
      class="footer-ico-mobile"
      src="/ico-union.png"
      alt
    />
    <p
      v-if="showP"
      class="footer__p footer-ico-mobile"
    >Projekt współfinansowany przez Unię Europejską z Europejskiego Funduszu Rozwoju Regionalnego w ramach Programu Inteligentny Rozwój. Projekt realizowany w ramach konkursu Narodowego Centrum Badań i Rozwoju: „ Szybka Ścieżka„. Celem projektu jest opracowanie metody i aplikacji „SIMON” do komputerowej nienadzorowanej terapii depresji. Efektem będzie wdrożenie aplikacji SIMON. Wartość Projektu: 11 054 379.55 zł., wkład z Funduszy Europejskich: 8 039 672.01 zł.</p>
    <p
      class="footer__p"
    >Projekt współfinansowany przez Unię Europejską z Europejskiego Funduszu Rozwoju Regionalnego w ramach Programu Inteligentny Rozwój. Projekt realizowany w ramach konkursu Narodowego Centrum Badań i Rozwoju: „ Szybka Ścieżka„. Celem projektu jest opracowanie metody i aplikacji „SIMON” do komputerowej nienadzorowanej terapii depresji. Efektem będzie wdrożenie aplikacji SIMON. Wartość Projektu: 11 054 379.55 zł., wkład z Funduszy Europejskich: 8 039 672.01 zł.</p>
    <div class="footer__imgs">
      <div class="footer__img">
        <img src="/logoFE.png" />
      </div>
      <div class="footer__img">
        <img src="/logoPL.png" />
      </div>
      <div class="footer__img">
        <a href="https://www.ncbr.gov.pl">
          <img src="/logoNCBR.png" />
        </a>
      </div>
      <div class="footer__img">
        <img src="/logoUE.png" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showP: false
    };
  }
};
</script>

<style >
.footer-ico-mobile {
  display: none;
}
.footer-ico-mobile-clicked {
  transform: rotate(180deg);
}
</style>