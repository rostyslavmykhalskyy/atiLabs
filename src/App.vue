<template>
  <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/vue-plyr/dist/vue-plyr.css">
    <headertop @logined="onLogin"></headertop>
    <transition name="rotateviews" mode="out-in">
      <router-view :loginedUser="user"></router-view>
    </transition>
    <footerbottom></footerbottom>
  </div>
</template>

<style lang="scss">
.rotateviews-enter-active,
.rotateviews-leave-active {
  transition: opacity 0.1s;
}
.rotateviews-enter {
  opacity: 0.9;
}
.rotateviews-leave-to {
  opacity: 0.9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fadeslow-enter-active,
.fadeslow-leave-active {
  transition: opacity 0.5s;
}
.fadeslow-enter,
.fadeslow-leave-to {
  opacity: 0;
}

.answers-enter-active,
.answers-leave-active {
  height: auto;
}
.answers-enter,
.answers-leave-to {
  height: 0;
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.3s ease-in-out;
  transform: rotateX(0deg);
}
.rotate-enter {
  transform: rotateX(-75deg);
}
.rotate-leave-to {
  transform: rotateX(75deg);
}

body {
  font: 1rem "PoppinsRegular", Arial, sans-serif;
}
button {
  padding: 5px 25px 5px 25px;
  border: none;
  font-weight: 700;
  border-radius: 143px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  &:hover,
  &:active {
    transform: scale(0.95);
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
  @extend.basic-animation;
}
video {
  width: 100%;
  height: auto;
}
//Header Start
header {
  width: 90%;
  height: 6vh;
  margin: 1vh auto 1vh auto;
  // padding: 1vh 0 1vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__imgs {
  width: 20%;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.header__img {
  width: 45%;
  img {
    display: block;
    height: auto;
    width: 100%;
  }
}

.header__form {
  display: flex;
  align-items: center;
}

.header__input {
  padding: 5px 25px 5px 25px;
  text-align: center;
  border: 1px solid $blue-bg-color1;
  cursor: pointer;
  outline: none;
  font-family: "PoppinsExtraLight", Arial, sans-serif;
}

.header__input:first-of-type {
  border-radius: 5px 0% 0% 5px;
}

.button__form__submit {
  height: 100%;
  color: $white-color;
  font-family: "PoppinsRegular", Arial, sans-serif;
  border-radius: 0% 5px 5px 0%;
  border: 1px solid $blue-bg-color1;
  background-image: linear-gradient(to right, $blue-bg-color1, $blue-bg-color2);
}

.header__logined {
  display: flex;
  align-items: center;
}

.header__logined button {
  margin-left: 25px;
  color: $white-color;
  background-image: linear-gradient(to right, $blue-bg-color1, $blue-bg-color2);
}

.header__popup {
  width: 100%;
  height: 80vh;
  top: 8vh;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: $white-color;
  background-color: rgba(22, 22, 22, 0.952);
}

.header__popup__info {
  position: relative;
  text-align: center;
  margin: 0 auto;
  top: 40%;
  font: 1.2rem "PoppinsExtraLight", Arial, sans-serif;
}

.header__popup__info p {
  margin-bottom: 2%;
}

.header__popup__preloader {
  width: 120px;
  height: 120px;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

//Header End
//Footer Start
footer {
  width: 70%;
  height: 10vh;
  margin: 0 auto;
  padding: 1vh 0 1vh 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}
.footer__p {
  text-indent: 1rem;
  font: 0.6rem/1.2 "PoppinsRegular", Arial, sans-serif;
}
.footer__imgs {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.footer__img {
  width: 10%;
  height: auto;
  img {
    display: block;
    height: auto;
    width: 100%;
  }
}
//Foter End
//Main Start
main {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: $white-color;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  background: linear-gradient(
    0.25turn,
    $blue-bg-color1,
    $blue-bg-color2,
    $blue-bg-color1
  );
}

.main__h {
  font: 2.5rem PoppinsRegular, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
}

main p {
  font: 1.2rem/1 "PoppinsRegular", Arial, sans-serif;
  text-align: center;
  margin-top: 4.5vh;
}
.main__p {
  text-align: center;
}
////Main Presentation Start
.main__presentation {
  padding: 3%;
  margin-bottom: 1vh;
}
.main__presentation .main__p {
  text-align: left;
}
.main__presentation__elem {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.main__presentation__elem__buttons {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.main__presentation__elem__button {
  font-size: 1.1rem !important;
  margin-bottom: 1vh;
  &:hover {
    transform: scale(0.97);
  }
}
.main__presentation__elem__button__clicked {
  font-size: 1.1rem !important;
  border: 5px solid $accent-color;
  transform: scale(0.94);
  &:hover {
    transform: scale(0.94);
  }
}

.main__presentation__elem__button:last-of-type {
  margin-bottom: 0;
}
.main__presentation__elem__media {
  width: 40%;
  min-height: 40.41953703703704vh;
  display: flex;
  align-items: center;
}
.main__presentation__elem__media__movie {
  width: 100%;
}
.main__presentation__elem__media__picture {
  max-width: 100%;
  margin: 0 auto;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 40.41953703703704vh;
    margin: 0 auto;
  }
}

////Main Presentation End
////Main Survey Start
.main__survey {
  width: 100%;
}
.main__elem {
  text-align: center;
  width: 65%;
  margin: 0 auto;
}
.main__elem button {
  margin: 0 auto;
  background-color: $white-color;
  color: $accent-color;
  display: block;
  font-weight: 750;
}
.main__elem__imgs {
  margin: 5vh 0 5vh 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.main__elem__imgs__img {
  width: 40%;
  height: auto;
  margin: 0 auto;
  img {
    display: block;
    max-height: 22vh;
    height: 22vh;
    width: 100%;
    -webkit-box-shadow: 5px 4px 28px 0px rgba(50, 50, 50, 0.6);
    -moz-box-shadow: 5px 4px 28px 0px rgba(50, 50, 50, 0.6);
    box-shadow: 5px 4px 28px 0px rgba(50, 50, 50, 0.6);
  }
}
.main__elem__circle_buttons {
  width: 40%;
  margin: 1.2vh auto 0 auto;
  display: flex;
}
.circle_button {
  min-height: 40px;
  min-width: 40px;
  padding: 0;
  display: block;
  text-align: center;
  border-radius: 50%;
}
.circle_button_clicked {
  border: 5px solid $accent-color;
  &:hover {
    transform: none;
    box-shadow: none;
  }
}
.text-arria {
  width: 40%;
  height: 9.26vh;
  margin: 1.2vh auto 0 auto;
  overflow: hidden;
  font: 1rem "PoppinsRegular", Arial, sans-serif;
  textarea {
    overflow: hidden;
    width: 100%;
    height: 100%;
    resize: none;
    box-sizing: border-box;
    padding: 2%;
  }
}

.main__elem__radio {
  margin: 1.2vh auto 0 auto;
  width: 20%;
}

.main__elem__radio-button {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 1vh;
  cursor: pointer;
  font-size: 1.1rem/1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main__elem__radio-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  @extend.basic-animation;
}

.main__elem__radio-button:hover input ~ .checkmark {
  background-color: #ccc;
}

.main__elem__radio-button input:checked ~ .checkmark {
  background-color: $accent-color;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.main__elem__radio-button input:checked ~ .checkmark:after {
  display: block;
}

.main__elem__radio-button .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

////Check-Box
.main__elem__checkbox {
  margin: 1.2vh auto 0 auto;
  width: 20%;
}

.main__elem__checkbox-button {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 1vh;
  cursor: pointer;
  font-size: 1.1rem/1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.main__elem__checkbox-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark-checkbox {
  position: absolute;
  top: 2px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  @extend.basic-animation;
}

.main__elem__checkbox-button:hover input ~ .checkmark-checkbox {
  background-color: #ccc;
}

.main__elem__checkbox-button input:checked ~ .checkmark-checkbox {
  background-color: $accent-color;
}

.checkmark-checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

.main__elem__checkbox-button input:checked ~ .checkmark-checkbox:after {
  display: block;
}

.main__elem__checkbox-button .checkmark-checkbox:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.navigate {
  margin-top: 2.5vh;
  display: flex;
  align-items: flex-end;
}

.main__elem__movie {
  width: 65%;
  text-align: center;
  position: relative;
  margin: 0 auto;
}
iframe {
  width: 100%;
  height: 100%;
}
.main__elem__movie .header__popup__preloader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
////Mein Survey End
//Mein End
@media (max-width: 2560px) {
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  button {
    &:hover,
    &:active {
      transform: scale(1);
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
  header {
    height: auto;
    flex-direction: column;
  }
  .header__popup {
    top: 0;
    height: 100%;
  }
  main {
    min-height: 84vh;
    padding: 25px;
    box-sizing: border-box;
    height: auto;
  }
  .main__p {
    width: 90%;
    margin: 0 auto;
  }
  .main__h {
    font-size: 1.8rem;
  }
  .main__presentation__elem {
    flex-direction: column;
  }
  .main__presentation__elem__buttons {
    width: 80%;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  .main__presentation__elem__media {
    width: 80%;
  }
  .main__elem__movie {
    width: auto;
    height: auto;
  }
  .main__elem__circle_buttons {
    width: 100%;
  }
  .header__imgs {
    width: 45%;
  }
  .header__img {
    width: 45%;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  form {
    text-align: center;
  }
  .header__input {
    border-radius: 25px;
    margin-bottom: 1vh;
  }
  .header__input:first-of-type {
    border-radius: 25px;
  }
  .button__form__submit {
    width: 80%;
    border-radius: 25px;
  }
  .testowanie {
    flex-direction: column;
  }
  .testowanie button {
    margin-bottom: 2vh;
  }
  .testowanie button:last-of-type {
    margin-bottom: 0vh;
  }
  footer {
    height: auto;
    align-content: center;
    padding: 1.3vh 0 1.3vh 0;
  }
  .footer__imgs {
    height: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .footer__img {
    width: 40%;
    margin-bottom: 4vh;
  }
}

@media (max-width: 480px) {
}

@media (max-width: 320px) {
}
</style>
<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    onLogin(data) {
      this.user = data;
    }
  }
};
</script>


