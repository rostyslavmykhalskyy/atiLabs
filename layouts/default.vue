<template>
  <div :class="dynamicBG" class="mobileBG">
    <headerTop @logined="onLogin" @clickHome="update++" />
    <transition name="blur" mode="out-in">
      <nuxt :key="update" />
    </transition>
    <footerbottom v-if="loginedFooter" />
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
  @media (max-width: 1919px) {
    font-size: 14px;
    .header__form {
      width: 27%;
    }
    main {
      width: 90.62%;
      margin: 0 6.54% 0 2.84%;
    }
    .main__contact__info {
      width: 56%;
      margin-right: 1.67%;
    }
    .main__contact__form {
      width: 42.046%;
      padding: 4.0741vh 1.646%;
    }
    .main__contact__info__elems-group1,
    .main__contact__info__elems-group2 {
      margin-right: 6.36126%;
    }
    .main__contact__info__elems-group3 {
      width: 41.4688%;
    }
    .main__login__form {
      width: 28.83%;
    }
  }
  @media (max-width: 1440px) {
    main {
      width: 96.62%;
      margin: 0 1.54% 0 1.84%;
    }
    .main__h {
      font-size: 2.125rem;
    }
    .main__left-side button {
      margin-top: 2.25rem !important;
    }
    .header__form {
      width: 38%;
    }
    .main__login__form {
      width: 41.83%;
    }
    .main__login__img {
      margin-right: 2.935%;
    }
    .main__contact__info__elems-group1,
    .main__contact__info__elems-group2 {
      margin-right: 1.5%;
    }
    .main__contact__info__elems-group3 {
      width: 37.4688%;
    }
    .main__contact__info__elems-group3
      .main__contact__info__elem:first-of-type {
      margin-right: 4.466667%;
    }
    .main__contact__info img {
      width: 58.507%;
    }
    .main__right-side {
      width: 36%;
      margin-left: -6%;
    }
    .main__left-side {
      width: 70%;
      margin-bottom: 4vh;
    }
    .main__contact__form__text-area {
      textarea {
        height: 15.334vh;
      }
    }
    .main__contact__info__img {
      width: 55%;
    }
    .main__login__img img {
      width: 70%;
    }
  }
  @media (max-width: 1000px) {
    header {
      width: 100%;
      height: 60px;
      margin: 0;
      padding: 0;
      background-color: #fff;
      box-sizing: border-box;
      .header-top {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
      }
      .header__imgs {
        display: none;
      }
      .header__imgs-mobile {
        width: 58.03466666666667%;
        display: flex;
        .header__img {
          width: 45.6%;
          max-width: 124.7px;
          margin: 0;
          &:first-of-type {
            width: 56.5%;
            max-width: 140.1px;
            margin-right: 3.421333333333333%;
          }
        }
      }
      .header__form {
        display: none;
      }
      .header__form-mobile {
        top: 20px;
        right: 4%;
        position: absolute;
        display: block;
      }
      .header__form__nav,
      .header__logined-mobile {
        width: 100%;
        top: 60px;
        left: 0;
        margin: 0;
        display: block;
        position: absolute;
        background-color: white;
        z-index: 1;
        box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.08);
        &:after {
          content: "";
          width: 100%;
          height: 100vh;
          position: fixed;
          display: block;
          background-color: #00000054;
        }
      }
      .header__form__nav {
        p,
        a {
          text-align: center;
          margin: 0 auto 4.1vh;
          &:first-of-type {
            margin-top: 4.1vh;
          }
        }
      }
      .header__form__nav-button,
      .header__form__nav-button-cancel {
        width: 26px;
        height: 19px;
        position: absolute;
        right: 0;
        border-radius: 0%;
        padding: 0;
        background-color: white;
        background-repeat: no-repeat;
        background-image: url("/ico-menu.png");
      }
      .header__form__nav-button-cancel {
        width: 20px;
        height: 20px;
        background-image: url("/ico-menu-cancel.png");
      }
    }
    .header__logined {
      display: unset;
      border: unset;
      background-color: unset;
      border-radius: unset;
      padding: unset;
      position: unset;
    }
    .header__logined-mobile {
      padding: 20px 0;
      box-sizing: border-box;
      button {
        margin: 0 auto 20px;
        padding: 0 0 0 31px;
        display: block;
        border: none;
        border-radius: unset;
        background-color: unset;
        background-image: url("/ico-logout-mobile.png");
        background-repeat: no-repeat;
        background-position: 0 50%;
        background-size: 21px 21px;
        outline: none;
        cursor: pointer;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        letter-spacing: 0.04em;

        color: #5690ff;
      }
      p {
        width: 91.46666666666667%;
        margin: 0 auto;
        text-align: left;
        margin-bottom: 10px;
        &:last-of-type {
          border-radius: 20px;
          border: 1px #92daf5 solid;
          padding: 10px 17px;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
      }
    }
    footer {
      width: 100%;
      padding: 0 5%;
      box-sizing: border-box;
      box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.08);
    }
    .footer__p {
      order: 1;
      display: none;
    }
    .footer-ico-mobile {
      margin: 1.799100449775112vh auto;
      display: block;
    }
    .footer__imgs {
      width: 100%;
      margin: 0;
      .footer__img {
        margin-bottom: 0;
      }
    }
    .mobileBG {
      background: none;
    }
    main {
      width: 100%;
      padding: 0vh !important;
      margin: 0vh !important;
      overflow: hidden;
    }
    .main__left-side {
      width: 91.46666666666667%;
      margin: 0;
      .main__p {
        text-align: center;
        font-size: 0.9rem;
        .br-mobile {
          display: unset;
        }
      }
      .main__h {
        margin: 11.8577vh 31.46666666666667% 0 0;
        font-size: 1.25rem;
        // text-align: left;
      }
      .main__h-mobile {
        font-size: 1.75rem;
        display: block;
        color: #3a5c9d;
      }
      button {
        width: 100%;
        margin: 5vh auto !important;
        padding: 0.8125rem !important;
        font-size: 1rem !important;
      }
    }
    .main__right-side {
      display: none;
    }
    .main__right-side-mobile {
      width: 100%;
      display: block;
      img {
        width: 100%;
        margin-top: -8vh;
        margin-left: 23.2%;
      }
    }
    .main__login__img {
      width: unset;
      margin: 0;
    }
    .main__login__form {
      width: 100%;
      .main__h {
        font-size: 1.25rem;
        font-family: "Montserrat-bold";
        letter-spacing: 0.05em;
      }
    }
    .main__login__form__signin {
      margin-bottom: 1.5vh;
    }
    .main__login__form__signin__input input {
      padding-top: 0.7143rem;
      padding-bottom: 0.7143rem;
      font-size: 0.9375rem;
    }
    .main__login__form__signin__input:first-of-type input {
      margin-bottom: 2.998500749625187vh;
    }
    .main__login__form__signin__input:last-of-type input {
      margin-bottom: 16.364%;
    }
    .main__login__form__signin__input p {
      right: unset;
      top: 6vh;
      left: 6%;
      font-size: 0.8125rem;
    }
    .main__login__form__signin__input:last-of-type p {
      top: 6vh;
      left: 6%;
    }
    .main__login__form__signin__submit {
      padding: 10px;
      font-size: 1rem;
    }
    .main__contact__form {
      display: none;
    }
    .main__contact__info {
      width: 68%;
      margin: 0 auto;
      flex-wrap: unset;
      display: none;
    }
    .contact-mobile {
      margin-bottom: 4.047976011994003vh;
      display: block;
      .main__h2,
      .main__p {
        text-align: center;
      }
    }
    .main__contact__info__elems-group1 .main__contact__info__elem:last-of-type,
    .main__contact__info__elems-group2 .main__contact__info__elem:last-of-type,
    .main__contact__info__elems-group3 .main__contact__info__elem:last-of-type {
      margin-bottom: 4.6296vh;
    }
    .main__contact__info__elems-group3 {
      width: 100%;
    }
    .main__contact__mobile__menu {
      width: 100%;
      display: flex;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
      color: #3a5c9d;
      li {
        width: 100%;
        padding: 10px 0;
        background-color: #ffffff;
        text-align: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
      }
      .main__contact__mobile__menu__active {
        border-bottom: 1px #3a5c9d solid;
      }
    }
    .main__contact__info__img {
      width: 100%;
      img {
        width: 100%;
        margin: 0;
      }
    }
    .main__contact__info__elems-group1,
    .main__contact__info__elems-group2 {
      width: 100%;
      margin-right: 0;
    }
    .main__contact__form {
      width: 91.46666666666667%;
      margin: 0 auto;
      box-shadow: none;
      input,
      textarea {
        width: 100%;
        padding: 10px 0 10px 17px;
        box-sizing: border-box;
        font-size: 0.9rem;
        border-radius: 21px;
      }
      .main__form__button {
        width: 100%;
        border-radius: 26.4249px;
        font-size: 1rem;
        padding: 10px;
      }
    }
    .main__contact__form__text-area textarea {
      height: 38.832vh;
    }
    #logined_main {
      width: 100%;
      min-height: 91vh;
    }
    .main__logined__surveys {
      padding: 2.998500749625187vh 0 9.745127436281859vh;
    }
    .main__logined__surveys__elem {
      width: 91.46666666666667%;
      margin: 0 auto 1.499250374812594vh;
      &:last-of-type {
        margin-bottom: 0;
      }
      img {
        width: 21px;
        height: 21px;
        margin: 10px 0 0 10px;
      }
      p {
        margin: 1.199400299850075vh auto 5.847076461769115vh;
        font-family: "Montserrat";
      }
    }
    .main__logined__surveys__elem:nth-of-type(3n + 3) {
      margin-right: auto;
    }
    .main__logined__nav {
      position: fixed;
      bottom: 0;
      background-color: #ffffff;
    }
    .main__logined__nav {
      width: 100%;
      margin: 0;
      padding: 1.5vh 3.15%;
      box-sizing: border-box;
    }
    .main__logined__nav__elem {
      display: block;
    }
    .main__logined__nav__elem-mobile {
      display: block;
    }
    .main__logined__nav__elem {
      img {
        margin: 0 auto;
        display: block;
      }
      p {
        margin: 0;
        font-size: 14px;
      }
    }
    .main__logined__nav__elem:first-of-type {
      img:first-of-type {
        display: none;
      }
    }
    .main__logined__nav__elem:nth-of-type(2) {
      background: unset;
      img:first-of-type {
        display: none;
      }
    }
  }
  @media (max-width: 320px) {
    .main__logined__nav {
      width: 100%;
      margin: 0;
      padding: 1.5vh 3.15%;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      box-shadow: 0px 0px 4px #86cefa;
    }
    .main__logined__nav__elem {
      width: 44%;
      margin: 5px 0;
      padding: 5px 0;
      display: flex;
      border-radius: 0;
      box-sizing: border-box;
      justify-content: space-between;
      border-bottom: 1px black solid;
      & :hover {
        box-shadow: 0px 10px 23px -13px #86cefa;
        border-bottom: 1px #86cefa solid;
      }
      img {
        width: 15%;
        margin: 0;
        padding-bottom: 5px;
      }
      p {
        order: -1;
      }
    }
  }
  //   @media (max-width: 1917px) {
  //     font-size: 15px;
  //     .main__login__form__signin {
  //       width: 80%;
  //     }
  //     .main__login__form {
  //       width: 30.856%;
  //     }
  //     .header__form {
  //       width: 25.15%;
  //     }
  //     // .main__login__form {
  //     //   width: 26.856%;
  //     // }
  //     main {
  //       width: 96.62%;
  //       margin: 0 1.54% 0 1.84%;
  //     }

  //     .main__contact__info {
  //       width: 59%;
  //       margin-right: 0.67%;
  //     }
  //     .header__form {
  //       width: 29.15%;
  //     }
  //   }

  //   @media (max-width: 1440px) {
  //     font-size: 14px;
  //     .header__form {
  //       width: 30.15%;
  //     }
  //     .main__login__form {
  //       width: 34.856%;
  //     }
  //     .main__login__form__signin {
  //       width: 70%;
  //     }
  //     .main__contact__info {
  //       width: 58%;
  //       margin-right: 1.67%;
  //     }
  //     .main__login__img {
  //       width: 40.085%;
  //     }
  //   }

  //   @media (max-width: 1260px) {
  //     font-size: 13px;
  //     .main__contact__info {
  //       width: 58%;
  //       margin-right: 1.67%;
  //     }
  //     .main__contact__info__elems-group1,
  //     .main__contact__info__elems-group2 {
  //       margin-right: 4.36126%;
  //     }
  //     .main__contact__info__elems-group3
  //       .main__contact__info__elem:first-of-type {
  //       margin-right: 10.266667%;
  //     }
  //     .header__form {
  //       width: 34.15%;
  //     }
  //   }

  //   @media (max-width: 1024px) {
  //     font-size: 8px;
  //   }

  //   @media (max-width: 768px) {
  //     font-size: 8px;
  //   }
}
.blue-button {
  -webkit-box-shadow: 0px 35px 46px -24px rgba(86, 144, 255, 1);
  -moz-box-shadow: 0px 35px 46px -24px rgba(86, 144, 255, 1);
  box-shadow: 0px 35px 46px -24px rgba(86, 144, 255, 1);
}
.blue-text-span {
  color: #4086ee;
  font-weight: bold;
}
.defaultBG {
  background-image: url("/bg_top.png"), url("/bg_bottom.png");
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh;
}
.loginBG {
  background-image: url("/bg_left.png");
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 52.70520833333333% 100vh;
}
.indexBG {
  background-image: url("/bg_top.png");
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 45.9375% 24.53703703703704vh;
}
.loginedBG {
  background-image: url("/bg_top.png"), url("/bg_top2.png"),
    url("/bg_bottom2.png");
  background-position: left top, left 15vh, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh, 33.125% 98.7037037037037%,
    50.52083333333333% 78.14814814814815%;
}
.blur-enter-active,
.blur-leave-active {
  transition: filter 0.3s;
}
.blur-enter {
  filter: blur(1.5rem);
}
.blur-leave-to {
  filter: blur(1.5rem);
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
  width: 86.62%;
  margin: 0 7.54% 1vh 4.04%;
  height: 4.4vh;
  // width: 95%;
  // height: 6vh;
  padding-top: 5.3vh;
  // margin: 0vh auto 1vh;
  // padding: 1vh 0 1vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(253, 253, 253, 0.01);
}
.header-top {
  display: none;
}
.header__imgs {
  width: 20.921%;
  height: auto;
  display: flex;
  // justify-content: space-between;
}
.header__imgs-mobile {
  display: none;
}
.header__img {
  width: 53.58%;
  max-width: 186px;
  margin-right: 7.670474%;
  img {
    width: 100%;
    max-width: 186px;
    height: auto;
    display: block;
  }
}
.header__img:last-of-type {
  width: 39.19%;
  margin-right: 0;
}
.header__form {
  width: 23.15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__form-mobile {
  display: none;
}
.header__signin {
  width: 100%;
}
.header__form__nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  // justify-content: space-between;
  p,
  a {
    margin-right: 12%;
    font: 1rem/1 "Montserrat", century gothic, sans-serif;
    font-weight: 600;
    color: #1a1b1e;
    letter-spacing: 0.04em;
  }
  a:last-child {
    margin: 0;
  }
  a p {
    margin: 0;
  }
  .nuxt-link-exact-active p {
    font-family: "Montserrat-bold";
  }
}
// .header__input {
//   border-radius: 10px 0% 0% 10px;
//   text-align: center;
//   border: 1px solid #2980f6;
//   cursor: pointer;
//   background-color: #fdfdfd;
//   outline: none;
//   font-family: "Montserrat", century gothic, sans-serif;
// }

// .header__input:last-of-type {
//   margin-left: -1px;
//   border-radius: 0 10px 10px 0;
// }

// .button__form__submit {
//   height: 100%;
//   padding: 6px 25px 6px 25px;
//   margin-left: 1%;
//   padding-right: 45px;
//   border-radius: 10px;
//   color: $white-color;
//   border: 1px solid $blue-bg-color2;
//   background-color: $blue-bg-color2;
//   background-image: url("/arrow-right-circle.png");
//   background-repeat: no-repeat;
//   background-position: 85% 50%;
//   font-family: "Montserrat", century gothic, sans-serif;
//   text-transform: none;
// }

.header__logined {
  display: flex;
  align-items: center;
  border: 1px solid #5690ff;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 50px 10px 10px;
  position: relative;
  p {
    margin-left: 10px;
    font: 0.9375rem/1 "Montserrat", century gothic, sans-serif;
  }
}

.header__logined button {
  width: 36px;
  height: 36px;
  padding: 0;
  position: absolute;
  top: 0;
  right: -22%;
  border: none;
  border-radius: unset;
  background-color: unset;
  background-image: url("/ico-logout.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  outline: none;
  cursor: pointer;
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
  width: 90.625%;
  margin: 0 auto;
  // height: 6vh;
  height: 15vh;
  padding: 1vh 0 1vh 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}
.footer__p {
  margin-bottom: 1.851851851851852vh;
  font: 0.75rem/1.3 "Montserrat", century gothic, sans-serif;
  font-weight: 600;
}
.footer__imgs {
  width: 51.72413793103448%;
  margin-right: 5.412%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.footer__img {
  width: 23.8%;
  height: auto;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
.footer__img:first-of-type {
  width: 15.28%;
}
.footer__img:nth-of-type(2) {
  width: 25%;
}
.footer__img:nth-of-type(3) {
  width: 23.67%;
}
.footer__img:last-of-type {
  width: 26.778%;
}
//Foter End
//Main Start
main {
  height: 72.3vh;
  // height: 84vh;
  width: 86.62%;
  margin: 0 8.54% 0 4.84%;
  display: flex;
  // position: relative;
  justify-content: center;
  align-items: center;
  color: $blue-bg-color2;
}

.main__h {
  font: 3.125rem "Montserrat-bold", century gothic, sans-serif;
  color: #1a1b1e;
}
.main__h2 {
  font: 1.875rem "Montserrat-bold", century gothic, sans-serif;
  text-align: center;
  color: #1a1b1e;
}

main p {
  margin-top: 2.314814814814815vh;
}
.main__p {
  font: 1rem/1.875 "Montserrat", century gothic, sans-serif;
  text-align: center;
  letter-spacing: 0.03em;
  color: #1a1b1e;
  .br-mobile {
    display: none;
  }
}
.main__form__button {
  margin: 3.703703703703704vh auto 0;
  padding: 16px 26.82%;
  display: block;
  color: #ffffff;
  background-color: #8cdff9;
  font: 1.563rem "Montserrat", century gothic, sans-serif;
  background: linear-gradient(59.06deg, #5690ff -103.36%, #8cdff9 188.39%);
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
  width: 51.711%;
  margin-top: -4vh;
}
.main__left-side h2 {
  text-align: left;
}
.main__left-side p {
  text-align: left;
}
.main__right-side-mobile {
  display: none;
}
.main__right-side {
  width: 54.297%;
  margin-left: -12%;
  max-width: 903px;
  img {
    width: 100%;
    height: auto;
    display: block;
    margin-left: 0;
  }
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
////Main Login Start
.main__login__img {
  width: 50.085%;
  max-width: 832.96px;
  margin-right: 15.935%;
  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
}
.main__login__form {
  width: 25.856%;
  margin-top: -5vh;
}
.main__login__form__signin {
  // width: 91.864%;
  width: 100%;
  padding: 0 1.375rem;
  margin: 3.240740740740741vh auto;
  box-sizing: border-box;
}
.main__login__form__signin__input {
  position: relative;
}
.main__login__form__signin__input p {
  margin-top: 0;
  position: absolute;
  top: 20px;
  right: -9.5rem;
  color: #d84343;
  font-weight: 500;
  font-size: 1.188rem;
}
.main__login__form__signin__input:last-of-type p {
  right: -9rem;
}

.main__login__form__signin__input input {
  width: 100%;
  max-width: 395px;
  padding: 1.25rem 2.188rem 1.25rem 1.875rem;
  border: 1px #b0c0e1 solid;
  border-radius: 36.1856px;
  display: block;
  box-sizing: border-box;
  font: 1.188rem/1 "Montserrat", century gothic, sans-serif;
  background-repeat: no-repeat;
  background-position: 95% 50%;
  outline: none;
}
.main__login__form__signin__input input::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.main__login__form__signin__input:first-of-type input {
  background-image: url("/input_email_ico.png");
  background-size: 18px 22px;
  margin: 0 auto 1.388888888888889vh;
}
.main__login__form__signin__input:last-of-type input {
  background-image: url("/input_password_ico.png");
  margin: 0 auto 10.364%;
}
.main__login__form__signin__submit {
  width: 100%;
  max-width: 395px;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  font: 1.563rem/1 "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #fff;
  padding: 15px;
  background: linear-gradient(59.06deg, #5690ff -103.36%, #8cdff9 188.39%);
}
.main__login__form .main__p {
  width: 57.445%;
  margin: 0 auto;
  letter-spacing: unset;
  b {
    font-family: "Montserrat-bold", century gothic, sans-serif;
  }
}
////Main Login End
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
////Main Presentation End
///Logined Start
.main__logined__nav {
  width: 68.59939759036145%;
  margin: 12vh auto 7vh;
  display: flex;
  justify-content: space-between;
}
.main__logined__nav__elem {
  display: flex;
  align-items: center;
  padding: 0.462962962962963vh 2.195389681668496%;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.45;
  p {
    margin: 0 0 0 15px;
    font-size: 1.25rem;
    letter-spacing: 0.04rem;
    font-weight: 600;
  }
}
.main__logined__nav__elem-mobile {
  display: none;
}
.main__logined__nav__elem__active {
  opacity: 1;
}
.main__logined__nav__elem:nth-of-type(2) {
  background: linear-gradient(
    89.97deg,
    #5690ff -50.45%,
    #80c0fb 6.95%,
    #8cdff9 104.21%
  );
}
.main__logined__surveys {
  width: 100%;
  // padding-left: 1.5%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.main__logined__surveys__elem:nth-of-type(3n + 3) {
  margin-right: 0;
}
.main__logined__surveys__elem {
  width: 31.226%;
  margin: 0 3.013% 3.703703703703704vh 0;
  background: #ffffff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  img {
    height: 6.018518518518519vh;
    display: block;
    margin: 2.314814814814815vh auto;
  }
  p {
    margin-bottom: 10.46296296296296vh;
    color: #000000;
    font-weight: 600;
    font: 1.125rem "Montserrat-bold", century gothic, sans-serif;
  }
}
///Logined End
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
  margin: 1.851851851851852vh auto 0 1.5% !important;
  width: 20%;
}

.main__elem__radio-button {
  display: block;
  position: relative;
  padding-left: 27px !important;
  margin-bottom: 1.574074074074074vh !important;
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
  height: 16px;
  width: 16px;
  background-color: #ffffff;
  border: 1px black solid !important;
  border-radius: 50%;
  @extend.basic-animation;
}

.main__elem__radio-button:hover input ~ .checkmark {
  background-color: #ccc;
}

.main__elem__radio-button input:checked ~ .checkmark {
  background-color: #ffffff;
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
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #5690ff;
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
.main__contact__info {
  width: 53.094%;
  margin-right: 6.67%;
  display: flex;
  flex-wrap: wrap;
}
.main__contact__info .main__h2 {
  margin-bottom: 2.32vh;
}
.main__contact__info__img {
  width: 100%;
  margin-bottom: 0.98vh;
  img {
    width: 80.507%;
    max-width: 709.61px;
    margin-left: 8.154020385050963%;
    display: block;
  }
}
.main__contact__info__elems-group1,
.main__contact__info__elems-group2 {
  margin-right: 7.36126%;
}
.main__contact__info__elems-group3 {
  display: flex;
  flex-wrap: wrap;
  width: 42.4688%;
}
.main__contact__info__elems-group3 .main__contact__info__elem:first-of-type {
  margin-right: 23.46666666666667%;
}
.main__contact__info__elems-group1 .main__contact__info__elem:last-of-type,
.main__contact__info__elems-group2 .main__contact__info__elem:last-of-type,
.main__contact__info__elems-group3 .main__contact__info__elem:last-of-type {
  margin-bottom: 0;
}
.main__contact__info__elem {
  // max-width: 24.35%;
  // min-width: 11.66%;
  margin-bottom: 4.6296vh;
  // display: flex;
  // flex-wrap: wrap;
  // align-content: baseline;
}
// .main__contact__info__elem:nth-of-type(4) {
//   max-width: 23.44%;
//   min-width: 23.44%;
// }
.main__contact__info__elem:last-of-type {
  width: 100%;
}
.main__contact__info__elem__h {
  width: 100%;
  color: #3065ec;
  text-transform: uppercase;
  margin-bottom: 0.6481vh;
  font: 1rem "Montserrat-bold", century gothic, sans-serif;
}
.main__contact__form {
  width: 40.046%;
  max-width: 1000px;
  padding: 4.0741vh 2.646%;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.main__contact__form__input {
  width: 100%;
  padding: 5px 5px;
}
.main__contact__form__input {
  width: 57.613%;
  margin-bottom: 2.7777vh;
  padding: 16.5px 30px;
  border-radius: 10px;
  display: block;
  border: 1px #9bd2ef solid;
  border-radius: 36.1856px;
  font: 1.188rem "Montserrat", century gothic, sans-serif;
}
.main__contact__form__input::placeholder,
.main__contact__form__text-area textarea::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.main__contact__form__text-area textarea {
  overflow: hidden;
  width: 100%;
  height: 28.334vh;
  max-height: 306px;
  padding: 20px 30px;
  box-sizing: border-box;
  resize: none;
  border-radius: 36.1856px;
  border: 1px #9bd2ef solid;
  font: 1.188rem "Montserrat", century gothic, sans-serif;
}
.contact-mobile {
  display: none;
}
//Mein End
@media (max-width: 2560px) {
}
@media (max-width: 1820px) {
  // .main__contact__info__elems-group3 {
  //   width: 25%;
  //   display: block;
  // }
  // .main__contact__info__elems-group3 div:last-of-type {
  //   position: absolute;
  //   left: 0;
  // }
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

  .text-arria {
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
      update: 0,
      path: ""
    };
  },
  methods: {
    onLogin(data) {
      this.user = data;
    }
  },
  computed: {
    dynamicBG() {
      if ($nuxt.$route.path == "/login") {
        return {
          loginBG: true
        };
      } else if ($nuxt.$route.path == "/") {
        return {
          indexBG: true
        };
      } else if ($nuxt.$route.path == "/logined") {
        return {
          loginedBG: true
        };
      } else {
        return {
          defaultBG: true
        };
      }
    },
    loginedFooter() {
      if ($nuxt.$route.path == "/logined") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>



