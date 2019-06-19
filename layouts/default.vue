<template>
  <div id="main_app">
    <headerTop @logined="onLogin" @clickHome="update++"/>
    <nuxt :key="update"/>
    <footerbottom/>
  </div>
</template>

<style lang="scss">
#main_app {
  // background-image: url("https://firebasestorage.googleapis.com/v0/b/ankiety-35c4d.appspot.com/o/bg.png?alt=media&token=40111a41-4f2e-4647-b443-31553831fc52");
  background-image: url("/bg.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}
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
  font: 1rem "Montserrat", century gothic, sans-serif;
}
button {
  padding: 5px 25px 5px 25px;
  border: none;
  border-radius: 143px;
  cursor: pointer;
  outline: none;
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
  width: 95%;
  height: 6vh;
  padding-top: 1vh;
  margin: 0vh auto 1vh;
  // padding: 1vh 0 1vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(253, 253, 253, 0.01);
}
.header__signin {
  display: flex;
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

.header__form__nav {
  display: flex;
  justify-content: flex-end;
  width: 40%;
  p,
  a {
    margin-right: 5%;
    line-height: 0;
  }
}

.header__form {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header__input {
  border-radius: 10px 0% 0% 10px;
  text-align: center;
  border: 1px solid #2980f6;
  cursor: pointer;
  background-color: #fdfdfd;
  outline: none;
  font-family: "Montserrat", century gothic, sans-serif;
}

.header__input:last-of-type {
  margin-left: -1px;
  border-radius: 0 10px 10px 0;
}

.button__form__submit {
  height: 100%;
  padding: 6px 25px 6px 25px;
  margin-left: 1%;
  padding-right: 45px;
  border-radius: 10px;
  color: $white-color;
  border: 1px solid $blue-bg-color2;
  background-color: $blue-bg-color2;
  background-image: url("/arrow-right-circle.png");
  background-repeat: no-repeat;
  background-position: 85% 50%;
  font-family: "Montserrat", century gothic, sans-serif;
  text-transform: none;
}

.header__logined {
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  border: 1px #053276 solid;
  background-color: #fff;
  border-radius: 15px;
  padding: 5px 10px;
}

.header__logined button {
  margin-left: 25px;
  color: $white-color;
  background-color: $blue-bg-color2;
}

.header__popup {
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1000;
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
  font: 1.2rem "Montserrat", century gothic, sans-serif;
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
  width: 95%;
  height: 6vh;
  margin: 0 auto;
  padding: 1vh 0 1vh 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}
.footer__p {
  width: 55%;
  font: 0.5rem/1.2 "Montserrat", century gothic, sans-serif;
}
.footer__imgs {
  width: 40%;
  margin-right: 5%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.footer__img {
  width: 25%;
  height: auto;
  img {
    display: block;
    height: auto;
    width: 100%;
  }
}
.footer__img:first-of-type {
  img {
    width: 70%;
    margin: 0 auto;
  }
}
//Foter End
//Main Start
main {
  height: 84vh;
  width: 95%;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: $blue-bg-color2;
}

.main__h {
  font: 1.625rem "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 2px;
}

main p {
  font: 1rem/1.2 "Montserrat", century gothic, sans-serif;
  text-align: center;
  margin-top: 4.5vh;
}
.main__p {
  text-align: center;
}
.action_button {
  width: 100%;
  margin-top: 1vh;
  padding: 2vh;
  border-radius: 5px;
  color: #ffffff;
  background-color: $blue-bg-color;
}
.main__left-side {
  width: 57%;
  margin-right: 3%;
}
.main__left-side h2 {
  text-align: left;
}
.main__left-side p {
  text-align: left;
}
.main__right-side {
  width: 40%;
}
.main__right-side__elem:first-of-type {
  margin-top: 0;
}
.main__right-side__elem {
  width: 80%;
  margin: 5vh auto;
  display: flex;
  flex-wrap: wrap;
  a {
    width: 100%;
    display: block;
  }
  button {
    width: 70%;
    margin: 0 auto;
    display: block;
    box-shadow: 1px 1px 10px rgba(80, 255, 202, 0.25);
    background: #fbfcfc;
    border-radius: 20px;
    padding: 26px;
    color: $blue-txt-color;
    font-weight: bold;
    font: 1rem "Montserrat", century gothic, sans-serif;
  }
  .main__right-side__elem__img {
    margin: 0 auto;
  }
}
.main_contact__info {
  width: 30%;
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;
}
////Main Presentation Start
.main__presentation {
  // padding: 7vh 2.5% 2vh 2.5%;
  // margin-bottom: 1vh;
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
  width: 50%;
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
  border: 5px solid $accent-color !important;
  transform: scale(0.94);
  &:hover {
    transform: scale(0.94);
  }
}

.main__presentation__elem__button:last-of-type {
  margin-bottom: 0;
}
.main__presentation__elem__media {
  width: 60%;
  min-height: 40.41953703703704vh;
  display: flex;
  align-items: center;
}
.main__presentation__elem__media__movie {
  width: 100%;
  margin: 3vh 0 0;
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
.main_contact__form {
  margin-top: 7vh;
  width: 70%;
}
////Main Presentation End
////Main Survey Start
.main__nosurvej {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-self: baseline;
}
.main__nosurvej p {
  margin-top: 2vh;
}
.main__thought {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.main__thought__buttons {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.main__thought__buttons button {
  width: 100%;
  margin-bottom: 2vh;
  background-color: #4ab6f4;
}
.main__thought__buttons button:last-of-type {
  margin: 0;
}
.main__survey {
  width: 100%;
}
.main__elem {
  text-align: center;
  width: 90%;
  margin: 0 auto;
}
.main__elem button {
  margin: 0 auto;
  background-color: white;
  display: block;
  color: #053276;
  border: 1px #053276 solid;
  font: 1rem "Montserrat", century gothic, sans-serif;
}
.main__elem__imgs {
  margin: 5vh 0 5vh 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.main__elem__imgs__img {
  width: 40%;
  margin: 0 auto;
  img {
    display: block;
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
  border: 5px solid $accent-color !important;
  &:hover {
    transform: none;
    box-shadow: none;
  }
}
.text-arria {
  width: 60%;
  height: 20vh;
  margin: 1.2vh auto 0 auto;
  overflow: hidden;
  font: 1rem "Montserrat", century gothic, sans-serif;
  textarea {
    overflow: hidden;
    width: 100%;
    height: 100%;
    resize: none;
    box-sizing: border-box;
    padding: 2%;
    border: none;
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
  margin-bottom: 2vh;
  cursor: pointer;
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
  margin-bottom: 2vh;
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
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px #69ddd0 solid;
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
.navigate p {
  text-indent: 0rem;
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
.buttonAction {
  margin-top: 2vh !important;
  border: 1px #053276 solid;
  color: #053276;
  background-color: #fff;
  font-size: 1.5rem;
  font: 1rem "Montserrat", century gothic, sans-serif;
}
////Main Contact
.main_contact__form__input {
  margin-bottom: 1vh;
  padding: 4px 70px;
  background: #fdfdfd;
  border-radius: 10px;
  display: block;
  text-align: center;
  border: none;
  font-size: 0.985rem;
}
.main_contact__form button {
  margin-top: 3vh;
  width: 160px;
  height: 30px;
  padding: 5px 50px 5px 50px;
  background: #35f3dd;
  color: #053276;
  border-radius: 10px;
  font-size: 0.9375rem;
}
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
    padding: 0 0 5vh;
    flex-direction: column;
    margin: 0 auto;
  }
  .header__form {
    justify-content: center;
    flex-wrap: wrap;
  }
  .header__form__nav {
    justify-content: center;
    width: 100%;
    margin-bottom: 3vh;
  }
  .header__signin {
    display: block;
  }
  .header__popup {
    top: 0;
    height: 100%;
  }
  main {
    min-height: 84vh;
    padding: 15px;
    box-sizing: border-box;
    height: auto;
    flex-wrap: wrap;
  }
  .main__left-side {
    width: 100%;
    margin-bottom: 2vh;
  }
  .main__right-side {
    width: 100%;
  }
  .main__elem {
    width: 100%;
  }
  // .main__elem button {
  //   font-size: 0.7rem;
  // }
  .main__elem__p {
    font-size: 0.9rem;
  }
  .main__p {
    font-size: 0.9rem;
    width: 90%;
    margin: 0 auto;
  }
  .main__h {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 5vh;
  }
  .main__presentation__elem {
    flex-direction: column;
  }
  .main__presentation__elem__media__picture img {
    height: auto;
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
    width: 40%;
  }
  .header__img {
    width: 45%;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  form {
    text-align: center;
    width: 80%;
    margin: 0 auto 5vh auto;
  }
  .header__input {
    border-radius: 25px;
    margin-bottom: 1vh;
    width: 100%;
    box-sizing: border-box;
  }
  .header__input:last-of-type {
    border-radius: 25px;
  }
  .button__form__submit {
    width: 100%;
    border-radius: 25px;
    margin: 0;
    background-position: 99.5% 50%;
    padding-right: 25px;
  }
  .navigate {
    align-items: center;
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
  .main_contact__form {
    width: 80%;
    margin-bottom: 5vh;
  }
  .main_contact__info {
    width: 80%;
  }
  .main_contact__form__input {
    width: 100%;
    padding: 5px 5px;
  }
  .text-arria {
    width: 100%;
  }
  .main_contact__form button {
    width: 100%;
  }
}

@media (max-width: 480px) {
}

@media (max-width: 320px) {
  .navigate {
    display: block;
  }
  .header__imgs {
    width: 70%;
  }
}
</style>

<script>
import headerTop from "~/components/header";
import footerbottom from "~/components/footer";

export default {
  components: {
    headerTop,
    footerbottom
  },
  data() {
    return {
      user: "",
      update: 0
    };
  },
  methods: {
    onLogin(data) {
      this.user = data;
    }
  }
};
</script>



