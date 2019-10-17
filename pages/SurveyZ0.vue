<template>
  <main>
    <nav v-if="state>0 && state<=10" class="main__survey__nav">
      <div
        v-for="block in 10"
        @click="state=block"
        class="main__survey__nav__pointer"
        :class="{'main__survey__nav__pointer-active':state>=block}"
        :key="block"
      ></div>
    </nav>
    <div class="main__survey__content">
      <div v-if="state==0" class="main__survey__content1">
        <h2 class="main__survey__content__h">Zniekształcenia poznawcze</h2>
        <p class="main__survey__content__p">
          Za chwilę zapoznasz się z materiałami dotyczącymi tak zwanych “zniekształceń poznawczych”. Za każde wykonane zadanie otrzymasz nagrodę, pod koniec poznasz poznasz również ilość dobrze wykonanych zadań.
          <br />
          <br />Zniekształcenia poznawcze to nieprawidłowe wzorce myślenia, które mogą powodować obniżenie nastroju i podtrzymywać objawy depresji. Przejdź dalej, by zapoznać się z wybranymi zniekształceniami poznawczymi.
        </p>
        <button class="main__survey__button" @click="state++">Zacznij</button>
      </div>
      <div v-else-if="state==1" class="main__survey__content2">
        <h2 class="main__survey__content__h">Czytanie myśli</h2>
        <p
          class="main__survey__content__p"
        >Polega na przypisywaniu innym osobom myśli lub przekonań na podstawie niezweryfikowanych przesłanek. “Czytając w myślach” często zakładamy czarne scenariusze, na przykład sądzimy, że inni mają negatywne zdanie na nasz temat.</p>
        <h2
          class="main__survey__content__h"
        >Wybierz twierdzenie, które może świadczyć o zniekształceniu poznawczym nazywanym “czytaniem myśli”.</h2>

        <div class="main__elem__radio">
          <label class="main__elem__radio-button">
            “Chciałabym pojechać na urlop”
            <input
              type="radio"
              id="one"
              value="“Chciałabym pojechać na urlop”"
              v-model="q[0]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Uśmiechnął się, na pewno uważa, że palnęłam głupotę.”
            <input
              type="radio"
              id="two"
              :value="true"
              v-model="q[0]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Nie lubię poniedziałków”
            <input
              type="radio"
              id="two"
              value="“Nie lubię poniedziałków”"
              v-model="q[0]"
            />
            <span class="checkmark"></span>
          </label>
        </div>

        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==2" class="main__survey__content3">
        <h2 class="main__survey__content__h2">Oto gwiazdka w nagrodę za wykonanie zadania:</h2>
        <div class="main__survey__content3__img">
          <img src="/surveyO/star.svg" alt />
        </div>
        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==3" class="main__survey__content2">
        <h2 class="main__survey__content__h">Przepowiadanie przyszłości</h2>
        <p
          class="main__survey__content__p"
        >Polega na przewidywaniu negatywnych wydarzeń pomimo braku przemawiających za nimi faktów. Osoby “przewidujące przyszłość” często zakładają że w przyszłości spotka je coś złego, nawet jeśli przypuszczenia te oparte są jedynie na “złych przeczuciach.”</p>
        <h2
          class="main__survey__content__h"
        >Wybierz twierdzenie, które może świadczyć o zniekształceniu poznawczym nazywanym “przepowiadaniem przyszłości”.</h2>

        <div class="main__elem__radio">
          <label class="main__elem__radio-button">
            “Ona myśli, że sobie nie poradzę”
            <input
              type="radio"
              id="one"
              value="“Ona myśli, że sobie nie poradzę”"
              v-model="q[1]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Nie lubię kalmarów”
            <input
              type="radio"
              id="two"
              value="“Nie lubię kalmarów”"
              v-model="q[1]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Nigdy nie dostanę podwyżki”
            <input type="radio" id="two" :value="true" v-model="q[1]" />
            <span class="checkmark"></span>
          </label>
        </div>

        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==4" class="main__survey__content3">
        <h2 class="main__survey__content__h2">
          “Najtrudniejsze jest zdecydowanie się na działanie. Reszta to już tylko kwestia wytrwałości.”
          <br />
          <br />[Amelia Earhart]
        </h2>
        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==5" class="main__survey__content2">
        <h2 class="main__survey__content__h">Personalizacja</h2>
        <p
          class="main__survey__content__p"
        >Polega na przypisywaniu sobie odpowiedzialności za wydarzenia, na które nie mamy wpływu lub na które nasz wpływ jest ograniczony.</p>
        <h2
          class="main__survey__content__h"
        >Wybierz twierdzenie, które może świadczyć o zniekształceniu poznawczym nazywanym “personalizacją”.</h2>

        <div class="main__elem__radio">
          <label class="main__elem__radio-button">
            “Jutro wychodzę na obiad z przyjaciółmi.”
            <input
              type="radio"
              id="one"
              value="“Jutro wychodzę na obiad z przyjaciółmi.”"
              v-model="q[2]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Przeze mnie Ania złamała nogę”
            <input
              type="radio"
              id="two"
              :value="true"
              v-model="q[2]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Kaszka manna to pokarm bogów, nie ma nic lepszego”
            <input
              type="radio"
              id="two"
              value=" “Kaszka manna to pokarm bogów, nie ma nic lepszego”"
              v-model="q[2]"
            />
            <span class="checkmark"></span>
          </label>
        </div>

        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==6" class="main__survey__content3">
        <h2 class="main__survey__content__h2">
          Gratulujemy, że udało Ci się wykonać kolejne ćwiczenie!
          <br />
          <br />Jesteś kolejny krok bliżej celu
        </h2>
        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==7" class="main__survey__content2">
        <h2 class="main__survey__content__h">Wyolbrzymianie/umniejszanie</h2>
        <p
          class="main__survey__content__p"
        >Polega na przyznawaniu dostrzeganym błędom, słabościom i zagrożeniom większego znaczenia niż mają w rzeczywistości, a także umniejszaniu znaczenia sukcesów, zalet i możliwości.</p>
        <h2
          class="main__survey__content__h"
        >Wybierz twierdzenie, które może świadczyć o zniekształceniu poznawczym nazywanym “Wyolbrzymianie/umniejszanie”.</h2>

        <div class="main__elem__radio">
          <label class="main__elem__radio-button">
            “Chodnik jest oblodzony, na pewno się poślizgnę”
            <input
              type="radio"
              id="one"
              value="“Chodnik jest oblodzony, na pewno się poślizgnę”"
              v-model="q[3]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Prognoza pogody przewiduje opady deszczu”
            <input
              type="radio"
              id="two"
              value="“Prognoza pogody przewiduje opady deszczu”"
              v-model="q[3]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Ciasto które przyniosłem nie smakowało współpracownikom, powinienem zwolnić się z tej pracy. Co ze mnie za księgowy, skoro nawet dobrego ciasta nie potrafię zrobić?!”
            <input
              type="radio"
              id="two"
              :value="true"
              v-model="q[3]"
            />
            <span class="checkmark"></span>
          </label>
        </div>

        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==8" class="main__survey__content3">
        <h2 class="main__survey__content__h2">Zostało jeszcze 1 zadanie do wykonania. Dasz radę! :)</h2>
        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==9" class="main__survey__content2">
        <h2 class="main__survey__content__h">Myślenie w kategoriach wszystko albo nic</h2>
        <p
          class="main__survey__content__p"
        >Polega na postrzeganiu wydarzeń w sposób kategoryczny zwany również “czarno-białym” lub zero jedynkowym. Osoba charakteryzująca się takim myśleniem nie dostrzega wszystkich opcji pośrednich pozostawiając tylko dwie skrajne możliwości. Typowymi dla tego zniekształcenia są stwierdzenia takie jak: „każdy”, „nigdy”, „wszystko”, „zawsze” kiedy nie mają one swojego potwierdzenia w rzeczywistej sytuacji.</p>
        <h2
          class="main__survey__content__h"
        >Wybierz twierdzenie, które może świadczyć o zniekształceniu poznawczym nazywanym “wszystko albo nic”.</h2>

        <div class="main__elem__radio">
          <label class="main__elem__radio-button">
            “Nigdy nie jadłem konfitury”
            <input
              type="radio"
              id="one"
              value="“Nigdy nie jadłem konfitury”"
              v-model="q[4]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Każdy sportowiec powinien trenować”
            <input
              type="radio"
              id="two"
              value="“Każdy sportowiec powinien trenować”"
              v-model="q[4]"
            />
            <span class="checkmark"></span>
          </label>
          <label class="main__elem__radio-button">
            “Nie potrafię nawet zrobić dobrej kawy, jestem nieudacznikiem”
            <input
              type="radio"
              id="two"
              :value="true"
              v-model="q[4]"
            />
            <span class="checkmark"></span>
          </label>
        </div>

        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==10" class="main__survey__content2">
        <h1 class="main__survey__content__h">Ilość poprawnych odpowiedzi:</h1>
        <h1 class="main__survey__content__h">{{trueAnswers()}}/5</h1>
        <div
          class="pie"
          :class="{pie_20:trueAnswers()==1, pie_40:trueAnswers()==2
        , pie_60:trueAnswers()==3, pie_80:trueAnswers()==4, pie_100:trueAnswers()==5}"
        ></div>
        <button class="main__survey__button" @click="state++">Dalej</button>
      </div>
      <div v-else-if="state==11" class="main__survey__content2 survey">
        <h2
          class="main__survey__content__h"
        >Prosimy o wypełnienie ankiety na temat zaprezentowanych mechanizmów angażujących:</h2>
        <p class="main__survey__content__p">Tylko jedna odpowiedź jest prawdziwa.</p>

        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">1.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się gwiazdki podniosło twoją motywację do wykonania kolejnego ćwiczenia /zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an1" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an1" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an1" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an1" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an1 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">2.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się gwiazdki podniosło twoje zadowolenie z wykonanego ćwiczenia?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an2" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an2" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an2" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an2" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an2 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">3.</h2>
            <h2
              class="main__survey__content__h"
            >Czy uważasz że nagroda w postaci gwiazdki była dopasowana do zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an3" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an3" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an3" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an3" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an3 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">4.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się gwiazdki było dla ciebie atrakcyjne?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an4" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an4" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an4" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an4" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an4 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">5.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się cytatu podniosło twoją motywację do wykonania kolejnego ćwiczenia /zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an5" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an5" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an5" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an5" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an5 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">6.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się cytatu podniosła twoje zadowolenie z wykonanego ćwiczenia?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an6" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an6" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an6" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an6" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an6 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">7.</h2>
            <h2
              class="main__survey__content__h"
            >Czy uważasz że nagroda w postaci cytatu była dopasowana do zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an7" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an7" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an7" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an7" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an7 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">8.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się cytatu było dla ciebie atrakcyjna?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an8" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an8" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an8" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an8" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an8 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">9.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się gratulacji podniosło twoją motywację do wykonania kolejnego ćwiczenia /zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an9" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an9" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an9" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an9" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an9 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">10.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się gratulacji podniosło twoje zadowolenie z wykonanego ćwiczenia?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an10" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an10" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an10" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an10" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an10 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">11.</h2>
            <h2
              class="main__survey__content__h"
            >Czy uważasz że nagroda w postaci gratulacji była dopasowana do zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an11" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an11" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an11" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an11" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an11 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">12.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się gratulacji była dla ciebie atrakcyjne?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an12" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an12" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an12" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an12" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an12 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">13.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się informacji o ilości pozostałych zadań podniosło twoją motywację do wykonania kolejnego ćwiczenia /zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an13" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an13" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an13" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an13" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an13 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">14.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się informacji o ilości pozostałych zadań podniosło twoją motywację do wykonania kolejnego ćwiczenia /zadania?!!!!!!!!!!!!!!!!!!!!!!!!</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an14" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an14" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an14" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an14" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an14 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">15.</h2>
            <h2
              class="main__survey__content__h"
            >Czy uważasz że nagroda w postaci informacji o ilości pozostałych zadań była dopasowana do zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an15" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an15" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an15" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an15" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an15 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">16.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się informacji o ilości pozostałych zadań było dla ciebie atrakcyjne?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an16" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an16" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an16" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an16" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an16 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">17.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się wykresu ilustrującego ilość poprawnie wykonanych zadań podniosłoby twoją motywację do wykonania kolejnego ćwiczenia /zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an17" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an17" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an17" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an17" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an17 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">18.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się wykresu ilustrującego ilość poprawnie wykonanych zadań podniosło wykresu ilustrującego ilość poprawnie wykonanych zadań twoje zadowolenie z wykonanego ćwiczenia?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an18" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an18" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an18" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an18" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an18 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">19.</h2>
            <h2
              class="main__survey__content__h"
            >Czy uważasz że nagroda w postaci wykresu ilustrującego ilość poprawnie wykonanych zadań była dopasowana do zadania?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an19" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an19" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an19" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an19" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an19 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>
        <div class="main__survey__content2__question">
          <div class="main__survey__content2__question__h">
            <h2 class="main__survey__content__h">20.</h2>
            <h2
              class="main__survey__content__h"
            >Czy pojawienie się wykresu ilustrującego ilość poprawnie wykonanych zadań było dla ciebie atrakcyjne?</h2>
          </div>

          <div class="main__elem__radio">
            <label class="main__elem__radio-button">
              zdecydowanie nie
              <input type="radio" id="one" value="0" v-model="an20" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej nie
              <input type="radio" id="two" value="1" v-model="an20" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              nie wiem
              <input type="radio" id="two" value="2" v-model="an20" />
              <span class="checkmark"></span>
            </label>
            <label class="main__elem__radio-button">
              raczej tak
              <input type="radio" id="two" value="3" v-model="an20" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div
            v-if="checkAn == true && an20 == null"
            class="main__survey__content4__block__elem-error"
          >
            <span>Brak odpowiedzi</span>
          </div>
        </div>

        <button @click="end" class="main__survey__button">Zakończ</button>
        <div v-if="showPopUpLastState" class="survay-save-success-background">
          <div class="survay-save-success success2">
            <img src="/ico-survey-success.png" alt />
            <h3 class="main__survey__content__h">
              Gratulacje!
              <br />Zadanie ukończone!
            </h3>
            <!-- <download-excel
              style="color: blue"
              :data="json_data"
              :fields="json_fields"
              worksheet="My Worksheet"
              type="csv"
              name="filename.xls"
            >Download CSV</download-excel>-->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { fb, db } from "../assets/firebase";

import { setTimeout } from "timers";
var VueScrollTo = require("vue-scrollto");

import { scroller } from "vue-scrollto/src/scrollTo";
const firstScrollTo = scroller();

import JsonExcel from "vue-json-excel";

export default {
  layout: "survey",
  data() {
    return {
      state: 0,
      q: [],
      checkAn: false,
      an1: null,
      an2: null,
      an3: null,
      an4: null,
      an5: null,
      an6: null,
      an7: null,
      an8: null,
      an9: null,
      an10: null,
      an11: null,
      an12: null,
      an13: null,
      an14: null,
      an15: null,
      an16: null,
      an17: null,
      an18: null,
      an19: null,
      an20: null,
      checkAn: false,
      showPopUpLastState: false
    };
  },
  methods: {
    scrollStateTo2() {
      this.state++;
      firstScrollTo("header");
    },
    scrollStateTo3() {
      this.state++;
      firstScrollTo("header");
    },
    end() {
      if (
        (this.an1 &&
          this.an2 &&
          this.an3 &&
          this.an4 &&
          this.an5 &&
          this.an6 &&
          this.an7 &&
          this.an8 &&
          this.an9 &&
          this.an10 &&
          this.an11 &&
          this.an12 &&
          this.an13 &&
          this.an14 &&
          this.an15 &&
          this.an16 &&
          this.an17 &&
          this.an17 &&
          this.an18 &&
          this.an19 &&
          this.an20) != null
      ) {
        firstScrollTo("main");
        this.showPopUpLastState = true;
        this.saveData();
        setTimeout(() => {
          this.showPopUpLastState = false;
          if (this.saved) {
            firstScrollTo("header");
            this.$router.replace("/logined");
          }
        }, 1500);
        this.checkAn = false;
      } else {
        this.checkAn = true;
      }
    },
    saveData() {
      if (fb.auth().currentUser.uid) {
        db.collection("survey")
          .add({
            user: fb.auth().currentUser.uid,
            user_email: fb.auth().currentUser.email,
            surveyName: "Zniekształcenia poznawcze",
            survey: "Z0",
            an1: this.an1,
            an2: this.an2,
            an3: this.an3,
            an4: this.an4,
            an5: this.an5,
            an6: this.an6,
            an7: this.an7,
            an8: this.an8,
            an9: this.an9,
            an10: this.an10,
            an11: this.an11,
            an12: this.an12,
            an13: this.an13,
            an14: this.an14,
            an15: this.an15,
            an16: this.an16,
            an17: this.an17,
            an18: this.an18,
            an19: this.an19,
            an20: this.an20,
            q1: this.checkQuiz(this.q[0]),
            q2: this.checkQuiz(this.q[1]),
            q3: this.checkQuiz(this.q[2]),
            q4: this.checkQuiz(this.q[3]),
            q5: this.checkQuiz(this.q[4])
          })
          .then((this.saved = true));
      }
    },
    trueAnswers() {
      var counter = 0;
      this.q.forEach(element => {
        if (element == true) {
          counter++;
        }
      });
      return counter;
    },
    checkQuiz(q) {
      if (typeof q === "string" || q instanceof String) return false;
      else return true;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 13.88888888888889vh;
  background-image: url(/bg_top.png), url(/bg_top2.png), url(/bg_bottom2.png);
  background-position: left top, left 15vh, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh, auto, auto;
}
main p {
  margin: 0;
}
p {
  text-align: left;
  font: 1.12rem/1.725 "Montserrat", century gothic, sans-serif;
  letter-spacing: 0.04em;
  color: #000000;
}
.bold {
  font-weight: 600;
}
main {
  width: 100%;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
}
label {
  color: #000000;
}
.bgState3mobile {
  display: none;
}
// .surveyBG2 {
//   background-image: url("/bg_top.png"), url("/bg_top2.png"),
//     url("/bg_bottom-survey.png");
//   background-position: left top, left 38.51851851851852vh, right bottom;
//   background-repeat: no-repeat, no-repeat, no-repeat;
//   background-size: 45.9375% 24.53703703703704vh, 33.125% 98.7037037037037vh,
//     30.83333333333333% 30.70092592592593vh;
// }
.bgState3,
.bgState3mobile {
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: -1;
  position: absolute;
}
.main__survey__button {
  width: 11.82291666666667%;
  display: block;
  box-sizing: border-box;
  margin: 5.555555555555556vh auto 0;
  padding: 20px 0;
  border-radius: 50px;
  text-align: center;
  font: 1.25rem/1.125 "Montserrat", century gothic, sans-serif;
  font-weight: 600;
  color: #ffffff;
  background-color: #3065ec;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.header__logo {
  position: absolute;
  top: 6.203703703703704vh;
  left: 4.322916666666667%;
  z-index: 1;
  width: 9.6875%;
  img {
    display: block;
    width: 100%;
  }
}

.main__survey__nav {
  width: 49.47916666666667%;
  margin: 0 auto 7.407407407407407vh;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  .main__survey__nav__pointer {
    width: 8.105263157894737%;
    height: 5px;
    background: #c4c4c4;
    border-radius: 10px;
  }
  .main__survey__nav__pointer-active {
    background: #3065ec;
  }
}
.main__survey__content {
  width: 100%;
}
.main__survey__content__h {
  width: 49%;
  margin: 0 auto;
  font: 1.125rem/1.875rem "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: center;
}
.main__survey__content__h2 {
  width: 49%;
  margin: 0 auto;
  text-align: center;
  font: 3.125rem/1 "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
}
.main__survey__content__p {
  width: 49%;
  margin: 2.777777777777778vh auto 0;
  font: 1.125rem/1.875 "Montserrat", century gothic, sans-serif;
  letter-spacing: 0.04em;
  text-align: center;
}
// .main__survey__content p::first-letter {
//   font: 1.12rem/1.725 "Montserrat-bold", century gothic, sans-serif;
// }
.main__survey__content__p2 {
  height: 28px;
  font: 1.563rem/1.75 "Montserrat", century gothic, sans-serif;
  margin: 0.9259259259259259vh auto 0;
  text-align: center;
  letter-spacing: 0.03em;
  // &::first-letter {
  //   font: 1.563rem/1.75 "Montserrat", century gothic, sans-serif !important;
  // }
}
.button-arrow {
  margin: 0 auto;
  display: block;
  min-width: 60px;
  min-height: 60px;
  background-repeat: no-repeat;
  background-image: url("/ico-arrow-down.svg");
}
.main__survey__content__bg2 {
  width: 34.65104166666667%;
  left: 30.05208333333333%;
  bottom: -18vh;
  position: absolute;
  z-index: -1;
}
.main__survey__content1 {
  padding-top: 29.81481481481481vh;
  .main__survey__button {
    margin-top: 7.407407407407407vh;
  }
}

.main__survey__content__bg {
  width: 58.153125%;
  left: 18.923437%;
  bottom: -28.6vh;
  position: absolute;
  z-index: -1;
  top: 0;
}
.main__survey__content1__block3__p {
  width: 54.89583333333333%;
  margin: 4.62962962962963vh auto 11.11111111111111vh;
  text-align: left;
  li {
    margin-bottom: 1.388888888888889vh;
    padding-left: 36px;
    font: 1rem/1.875 Montserrat, century gothic, sans-serif;
    &:before {
      content: "";
      width: 11px;
      height: 11px;
      margin-top: 0.5rem;
      margin-left: -36px;
      background: linear-gradient(91.47deg, #80c0fb -53.64%, #8cdff9 24.74%);
      display: block;
      position: absolute;
      border-radius: 11px;
    }
  }
}
.main__survey__content1__block3 button {
  margin-top: 7.87037037037037vh;
}
.main__survey__content1__block4 {
  padding-top: 3.01111111111111vh;
  background-image: url("/main__survey__content1__block-bg4.png");
  background-size: contain;
  // background-position: -3em 12em;
  background-repeat: no-repeat;
  h2 {
    width: 68.072917%;
    margin: 0 auto;
    text-align: center;
  }
}
.main__survey__content1__block4__p {
  width: 68.072917%;
  margin: 0 auto 14.81481481481481vh;
}
.main__survey__content1__block5 {
  padding-top: 10.92592592592593vh;
  padding-bottom: 8.796296296296296vh;
}
.main__survey__content1__block5__h {
  width: 59.79166666666667%;
  margin: 0 auto 9.259259259259259vh;
  h2 {
    text-align: center;
  }
}
.main__survey__content1__block5__img {
  width: 54.06%;
  margin: 0 auto 3.518518518518519vh;
  img {
    width: 100%;
    margin: 0 auto;
  }
}

.main__survey__content2 {
  h2:last-of-type {
    margin-top: 5.555555555555556vh;
  }
}
.main__survey__content3 {
  padding-top: 15.74074074074074vh;
  .main__survey__content3__img {
    width: 9.53125%;
    max-width: 183px;
    margin: 6.481481481481481vh auto 0;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.main__elem__radio {
  width: 31.25%;
  position: relative;
  margin-left: 38% !important;
  .main__survey__content4__block__elem-error {
    top: 0;
    right: 16%;
  }
}
.survey {
  width: 48%;
  margin: 0 auto;
  padding-bottom: 5vh;
  h2,
  p {
    width: unset;
    text-align: left;
    &:first-of-type {
      text-align: center;
    }
  }
  p {
    margin-top: 1vh;
  }
  .main__survey__content2__question {
    margin-top: 5.555555555555556vh;
    position: relative;
  }
  .main__survey__content2__question__h {
    display: flex;
    h2 {
      margin: 0;
      &:first-of-type {
        margin-right: 1.7%;
      }
    }
  }
  .main__elem__radio {
    margin-left: 3% !important;
  }
  .main__survey__button {
    width: 26%;
  }
}
.survay-save-success-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
}
.survay-save-success {
  position: absolute;
  height: 36.75925925925926vh;
  width: 22.5%;
  top: 36.2962962962963vh;
  left: 38.75%;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    padding-left: 35px;
    background-image: url("/ico-success.png");
    background-repeat: no-repeat;
  }
}
.main__survey__content4 {
  width: 65.3125%;
  margin: 7.87037037037037vh auto 0;
  .main__survey__content__h {
    font: 1.563rem/1.73 "Montserrat", century gothic, sans-serif;
    font-weight: bold;
    letter-spacing: 0.03em;
  }
  .main__survey__content__p2 {
    height: unset;
    font-size: 1.25rem;
    // &::first-letter {
    //   font-size: 1.25rem !important;
    // }
  }
}
.main__survey__content4 {
  .main__survey__button {
    width: 18.10207336523126%;
  }
}
.main__survey__content4__block {
  width: 83.9%;
  margin: 4.907407407407407vh auto 0;
  .main__survey__content__p2 {
    text-align: left;
    font-weight: 600;
    // &::first-letter {
    //   font-weight: 600 !important;
    // }
  }
}
.main__survey__content4__block__elem {
  position: relative;
}
.main__survey__content4__block__elem-error {
  top: 9.1vh;
  right: -8%;
  position: absolute;
  padding: 36px;
  background: #ffffff;
  box-shadow: -10px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  span {
    text-align: center;
    letter-spacing: 0.03em;
    font: 1rem/1.063 "Montserrat-bold", century gothic, sans-serif;
    color: #d84343;
  }
  &::after {
    content: "";
    position: absolute;
    left: -56px;
    bottom: 21px;
    border: 23px solid transparent;
    border-right: 35px solid white;
  }
}
.main__elem__circle_buttons {
  margin: 3.703703703703704vh 0 3.703703703703704vh 2.232854864433812%;
}
.main__elem__circle_buttons button {
  min-width: 37px;
  min-height: 37px;
  margin-right: 11.9%;
  background: #ffffff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  font: 1.25rem/1 "Montserrat", century gothic, sans-serif;
  &:last-of-type {
    margin-right: 0;
  }
}
.circle_button_clicked {
  color: #ffffff;
  border: none !important;
  background-color: #3065ec !important;
}
.content4 {
  width: 5.263157894736842%;
}
.block2 {
  .main__survey__content4__block__elem {
    .main__survey__content4__block__elem-error {
      top: -25px;
    }
  }
}
.block2 .main__elem__circle_buttons {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6.481481481481481vh;
  justify-content: space-between;
}
.success2 {
  flex-wrap: wrap;
  align-content: center;
  h3 {
    width: 100%;
    margin-top: 3.703703703703704vh;
    padding-left: 0;
    background: none;
  }
}
.main__contact__form__text-area {
  width: 95.1%;
  margin: 1.388888888888889vh auto 0;
  textarea {
    height: 18.51851851851852vh;
  }
}
.left-text {
  text-align: left;
}

.pie {
  width: 30em;
  height: 30em;
  border-radius: 50%;
  margin: 5vh auto 0;
  /* A little styling */
  border: 0.15em solid #fff;
  box-shadow: 0 0.075em 0.2em 0.05em rgba(0, 0, 0, 0.25);

  /* fixes a minor clipping issue in Chrome */
  background-origin: border-box;

  background-image: conic-gradient(#00c4cc 0deg, #38b6ff 0 260deg);
}
.pie_20 {
  background-image: conic-gradient(#00c4cc 72deg, #38b6ff 0 260deg);
}
.pie_40 {
  background-image: conic-gradient(#00c4cc 144deg, #38b6ff 0 260deg);
}
.pie_60 {
  background-image: conic-gradient(#00c4cc 216deg, #38b6ff 0 260deg);
}
.pie_80 {
  background-image: conic-gradient(#00c4cc 288deg, #38b6ff 0 260deg);
}
.pie_100 {
  background-image: conic-gradient(#00c4cc 360deg, #38b6ff 0 260deg);
}
@media (max-width: 1024px) {
  html {
    font-size: 14px;
    p {
      font-size: 0.9375rem;
    }
    .main__survey__content__h,
    .main__survey__content__p {
      font-size: 0.9375rem;
      width: 100%;
      text-align: left;
    }
    .main__survey__content__h2 {
      font-size: 2rem;
      width: 100%;
    }
    .button-arrow {
      display: none;
    }
    .main__survey__button {
      width: 80%;
    }
    main {
      background-image: url("/surveyFiles/main__survey__content3bg.svg");
      background-position: left top;
      background-repeat: no-repeat;
      background-size: auto;
      height: unset;
      min-height: unset;
      padding-bottom: 5vh !important;
    }
    .main__survey__nav {
      width: 100%;
      position: unset;
      margin: 1vh auto;
      padding: 0 7.866666666666665%;
      box-sizing: border-box;
      display: flex;
      p {
        width: unset;
        margin-top: 1vh;
        background-color: unset;
        font-size: 0.75rem;
        opacity: 1;
      }
    }
    .main__survey__content {
      width: 80%;
      margin: 0 auto;
    }
    .main__elem__radio {
      width: 100%;
      margin-left: unset !important;
    }

    .main__survey__content1 {
      padding-top: 5vh;
    }
  }
  .main__survey__content3 .main__survey__content3__img {
    width: 60%;
  }
  .main__elem__circle_buttons {
    margin-left: 0;
  }
  .main__elem__circle_buttons button {
    margin-right: 9%;
  }
  .main__survey__content4 .main__survey__button {
    width: 100%;
    margin-bottom: 8.796296296296296vh;
  }
  .pie {
    width: 20em;
    height: 20em;
  }
  .survey {
    width: 100%;
    .main__survey__content2__question__h h2:first-of-type {
      width: 10%;
    }
    .main__survey__button {
      width: 100%;
    }
  }
  .main__survey__content4__block__elem-error {
    top: unset;
    bottom: 0;
    padding: 21px;
    &::after {
      left: -34px;
      bottom: 16px;
      border: 14px solid transparent;
      border-right: 25px solid white;
    }
  }
  .survay-save-success {
    position: absolute;
    height: 60vh;
    width: 80%;
    top: 20vh;
    left: 10%;
    h3 {
      text-align: center !important;
    }
  }
}
</style>



