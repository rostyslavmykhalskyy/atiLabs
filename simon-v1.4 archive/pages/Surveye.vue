<template>
  <main :class="{surveyBG:state>2, surveyBG2:subState==3 && state==3}">
    <div class="header__logo">
      <img @click="home" src="/logoATIlabs.png" alt />
    </div>
    <div class="header__form">
      <div key="logined" class="header__logined">
        <img src="/ico-login.png" alt />
        <p>{{loginedUser}}</p>
        <button @click="logout"></button>
      </div>
    </div>

    <div class="main__survey__nav">
      <p @click="state=1" :class="{'main__survey__nav__p-active':state==1}">1. Opis przypadku</p>
      <p @click="state=2" :class="{'main__survey__nav__p-active':state==2}">2. Psychoedukacja</p>
      <p @click="state=3" :class="{'main__survey__nav__p-active':state==3}">3. Ćwiczenie</p>
      <p @click="state=4" :class="{'main__survey__nav__p-active':state==4}">4. Ankieta</p>
    </div>
    <div v-if="state==3" class="main__survey__nav subnav">
      <p @click="subState=1" :class="{'main__survey__nav__p-active':subState==1}">Część A</p>
      <p @click="subState=2" :class="{'main__survey__nav__p-active':subState==2}">Część B</p>
      <p @click="subState=3" :class="{'main__survey__nav__p-active':subState==3}">Część C</p>
      <p @click="subState=4" :class="{'main__survey__nav__p-active':subState==4}">Część D</p>
    </div>
    <div class="main__survey__content">
      <div v-if="state==1" class="main__survey__content1">
        <div class="main__survey__content1__block1">
          <div class="main__survey__content1__block1__img">
            <img src="/surveyE/main__survey__content1__block1.png" alt />
          </div>
          <h2
            class="main__survey__content__h"
          >Marek prowadzi firmę, w której zatrudnia kilkadziesiąt osób.</h2>
          <div class="main__survey__content1__block1__p">
            <p>
              Pierwszą firmę przejął po rodzicach, jeszcze gdy był na studiach.
              <br />Marek systematycznie przypomina sobie jak rozmawiał wtedy
              <br />z ojcem:
              <span class="bold">
                “Tato, mam studia na głowie, nie wiem jak prowadzić biznes.
                <br />Na pewno nie dam sobie rady i firma upadnie”.
                <br />
              </span> Jednak jego ojciec wywierał presję, by syn go nie zawiódł. Właśnie wtedy pojawiły się u Marka stany depresyjne, przez które nie skończył studiów, o co wciąż się obwinia.
              <br />
              <span class="bold">“Nie mogę znów wszystkich zawieść”</span> — myśli.
            </p>
          </div>
          <button
            class="button-arrow main__survey__content1__block1__arrow"
            v-scroll-to="'.main__survey__content1__block2'"
          ></button>
        </div>
        <div class="main__survey__content1__block2">
          <div class="main__survey__content1__block2__img">
            <h2 class="main__survey__content__h">W obecnej firmie Marek ma wspólnika Krzysztofa.</h2>
            <p>Marysia, żona Krzysztofa, jest księgową. Niedawno firma straciła duży kontrakt, zaczęły się problemy finansowe i nieporozumienia ze wspólnikiem i jego żoną, dotyczące podziału pieniędzy oraz pomysłów na to, co dalej.</p>
          </div>
          <div class="main__survey__content1__block2__img">
            <img src="/surveyE/main__survey__content1__block2.png" alt />
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block3'"></button>
        </div>
        <div class="main__survey__content1__block3">
          <h2
            class="main__survey__content__h"
          >Kilka dni temu Marek i Krzysztof spotkali się ponownie, by porozmawiać o obecnej sytuacji.</h2>
          <div class="main__survey__content1__block3__p">
            <p>
              <span class="bold">- To moja wina, że mamy kłopoty</span> — powiedział Marek.
              <span class="bold">
                - Zawsze zawalam. Muszę się wziąć w garść.
                <br />- Marek, ja wiem, że się starasz
              </span> — odpowiedział Krzysiek, poklepując przyjaciela po ramieniu.
            </p>
          </div>
          <div class="main__survey__content1__block3__p">
            <p>Marek uważa, że zaniedbuje wiele spraw między innymi przez to, że ma depresję. Czasami czuje się tak źle, że nie ma motywacji, by wstać rano z łóżka. Wtedy odwołuje spotkania albo po prostu się na nich nie pojawia.</p>
          </div>
          <img src="/main__survey__content1__block-bg4.png" alt />
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block4'"></button>
        </div>
        <div class="main__survey__content1__block4">
          <h2 class="main__survey__content__h">Krzysztof i Marysia wiedzą o depresji Marka...</h2>
          <div class="main__survey__content1__block4__p">
            <p>
              ...i choć do tej pory nie była ona powodem nieporozumień między nimi, ostatnio coraz bardziej na niego naciskają. Pewnego dnia Marysia zdenerwowana zadzwoniła do niego rano i krzyknęła do słuchawki:
              <br />
              <span
                class="bold"
              >“Marek ! Czemu ciebie znowu nie ma?! Wiecznie na ciebie czekamy! Jak można w taki beznadziejny sposób traktować swoich wspólników!”</span>
            </p>
          </div>
          <div class="main__survey__content1__block4__img">
            <img src="/surveyE/main__survey__content1__block4.png" alt />
          </div>
          <div class="main__survey__content1__block4__p">
            <p>
              <span
                class="bold"
              >“Inni są zawsze na czas i robią to, co do nich należy. Tylko na mnie nie można liczyć”</span>
              - pomyślał Marek. Poczuł się bardzo zawstydzony i winny. Wspólnicy zawsze byli wyrozumiali wobec jego stanu, a on kiedy tylko miał siły, pracował ile tylko mógł.
              <br />
              <br />Teraz poczuł jednak, że przysparza im problemów, a oni chcieli mu pomóc, biorąc na siebie firmę i zajmując się wszystkimi formalnościami.
            </p>
          </div>
          <div class="main__survey__content1__block4__bg">
            <h2
              class="main__survey__content__h"
            >Kilka dni temu Marek słyszał, jak Krzysiek i Marysia rozmawiają o firmie i dalszych planach.</h2>
            <p class="main__survey__content1__block4__p">
              Zmartwił się, że rozmawiali bez niego.
              <br />Krzysztof uspokajał Marysię:
              <br />
              <span class="bold">- Kochanie, spokojnie, przeanalizujmy to jeszcze raz.</span>
              <br />Marysia była zdenerwowana:
              <br />
              <span
                class="bold"
              >- Taki jesteś spokojny, a widziałeś ostatnie rozliczenia? To wszystko jakaś jedna wielka porażka.</span>
              <br />
              <span class="bold">- Wybrniemy z tego, trzeba tylko zastanowić się jak.</span> — powiedział Krzysztof.
              <br />
              <span
                class="bold"
              >- No tak, a może spytamy Marka? Eh, jednak nie, bo nie ma go tutaj, jak zawsze.</span> — powiedziała Marysia.
            </p>
            <img src="/surveyE/main__survey__content1__block4__bg.png" alt />
          </div>
          <div class="main__survey__content1__block4__img">
            <img src="/surveyE/main__survey__content1__block4__2.png" alt />
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block5'"></button>
        </div>
        <div class="main__survey__content1__block5">
          <div class="main__survey__content1__block5__h">
            <h2
              class="main__survey__content__h"
            >Marek przestał ufać wspólnikom i zaczął się martwić o swoje miejsce w firmie.</h2>
          </div>
          <p class="main__survey__p">
            Nie wie, co się dzieje, ani co powinien robić. Czuje się całkowicie zdołowany, nie może się zmotywować do działania. Cały czas myśli o tym, że znowu stanie się to, czego się najbardziej boi:
            <br />
            <span
              class="bold"
            >“Dlaczego rozmawiają beze mnie? Eh, pewnie mają mnie dość. Mnie i mojej wiecznej niekompetencji. Mają rację, powinni się mnie pozbyć. Tylko mają ze mną problemy”.</span>
          </p>
          <button @click="scrollStateTo2" class="main__survey__button">Dalej</button>
        </div>
      </div>
      <div v-else-if="state==2" class="main__survey__content2">
        <div class="main__survey__content2__block1">
          <div class="main__survey__content2__block1__img">
            <img src="/surveyE/main__survey__content2__block1.png" alt />
          </div>
          <div class="main__survey__content2__block1__p">
            <h2
              class="main__survey__content__h"
            >Sposób myślenia odgrywa bardzo ważną rolę w wywoływaniu i podtrzymywaniu depresji.</h2>
            <p>
              Myśli, które pojawiają się w naszej głowie w reakcji na różne zdarzenia, mogą być trafne lub zniekształcone. Zniekształcone myśli bardzo często wywołują negatywne emocje, na przykład smutek czy poczucie winy.
              <br />
              <br />Zniekształcenia poznawcze stosują wszyscy ludzie, nie tylko cierpiący na zaburzenia nastroju. Osoby w depresji mają jednak tendencję do zniekształcania według tego samego - negatywnego - wzorca. Bardzo ważną umiejętnością w radzeniu sobie z zaburzeniami nastroju jest rozpoznawanie swoich najczęstszych zniekształceń i zrozumienie ich wpływu na nastrój oraz zachowanie.
            </p>
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content2__block2'"></button>
        </div>
        <div class="main__survey__content2__block2">
          <h1 class="main__survey__content__h">Najczęstszymi zniekształceniami poznawczymi są :</h1>
          <div class="main__survey__content2__block2__list">
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>1</p>
              </div>
              <p>przewidywanie przyszłości — postrzeganie przyszłości w czarnych barwach;</p>
            </div>
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>2</p>
              </div>
              <p>katastrofizacja — przekonanie, że to, co się wydarzyło lub się wydarzy, będzie tak straszne, że tego nie zniosę;</p>
            </div>
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>3</p>
              </div>
              <p>niesprawiedliwe porównania — porównuję siebie i swoje osiągnięcia z innymi, przyjmując nierealistyczne standardy; skupiam się na tym, co innym udaje się lepiej , siebie zawsze oceniam gorzej;</p>
            </div>
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>4</p>
              </div>
              <p>personalizacja — przypisywanie sobie nadmiernej odpowiedzialności za negatywne zdarzenia bez uwzględniania tego, że inni też przyczynili się do danej sytuacji;</p>
            </div>
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>5</p>
              </div>
              <p>powinność — nie skupiam się na tym, jak jest i co robię, lecz na tym, jak być powinno i co powinienem robić;</p>
            </div>
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>6</p>
              </div>
              <p>nadmierne uogólnianie — dostrzeganie uogólnionego wzorca w pojedynczym zdarzeniu;</p>
            </div>
            <div class="main__survey__content2__block2__list__elem">
              <div class="main__survey__content2__block2__list__elem__num">
                <p>7</p>
              </div>
              <p>etykietowanie — przypisywanie ogólnych negatywnych cech sobie albo innym.</p>
            </div>
          </div>
        </div>
        <div class="main__survey__content2__block3">
          <h2
            class="main__survey__content__h"
          >Marek ma bardzo wiele zniekształceń poznawczych, co wywołuje u niego objawy depresji. Korzystne dla niego byłoby nauczenie się rozpoznawania tych zniekształceń.</h2>
          <div class="main__survey__content2__block3__img">
            <img src="/surveyE/main__survey__content2__block3.png" alt />
          </div>
        </div>
        <button @click="state++" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==3" class="main__survey__content3">
        <div v-if="subState==1" class="main__survey__content3__block1">
          <h1 class="main__survey__content__h">ROZPOZNAWANIE ZNIEKSZTAŁCEŃ POZNAWCZYCH</h1>
          <p
            class="main__survey__content__p"
          >Umiejętność rozpoznawania zniekształceń pozwoli zrozumieć, w jaki sposób wpływają one na postrzeganie różnych zdarzeń. W tabelce znajdują się przykłady myśli / zdań z sytuacji Marka oraz określenie, jakie jest to zniekształcenie poznawcze.</p>
          <div class="main__survey__content3__block1__section">
            <h2 class="main__survey__content__h2">Sytuacja</h2>
            <h2 class="main__survey__content__h2">Zniekształcenie poznawcze</h2>
            <div class="main__survey__content3__block1__section__elem">
              <img
                v-show="surveyInfoNum>1"
                @click="prevSurveyInfo"
                src="/ico-nav-slide-left.svg"
                alt
              />
              <div class="main__survey__content3__block1__section__elem__box">
                <p>{{surveyInfo[surveyInfoNum].name}}</p>
              </div>
              <div class="main__survey__content3__block1__section__elem__box">
                <p>{{surveyInfo[surveyInfoNum].thought}}</p>
              </div>
              <img
                v-show="surveyInfoNum<7"
                @click="nextSurveyInfo"
                src="/ico-nav-slide-right.svg"
                alt
              />
            </div>
          </div>
          <div class="main__survey__content3__block1__circle">
            <div
              v-for="(n,index) in surveyInfo"
              :key="n.index"
              :class="{main__survey__content3__block1__circle__elem__viewed: index <= surveyInfoNum}"
              class="main__survey__content3__block1__circle__elem"
            ></div>
          </div>
          <button v-if="surveyInfoNum==7" @click="subState++" class="main__survey__button">Dalej</button>
        </div>
        <div v-if="subState==2" class="main__survey__content3__block4">
          <h1
            class="main__survey__content__h"
          >Zastanów się nad swoimi myślami, które powodują u Ciebie obniżenie nastroju.</h1>

          <p
            class="main__survey__content__p2"
          >Wypisz przykłady takich myśli i określ do jakiej kategorii zniekształceń one należą</p>
          <div class="main__survey__content3__block1__section content3__block4__section">
            <h2 class="main__survey__content__h2">Sytuacja</h2>
            <h2 class="main__survey__content__h2">Zniekształcenie poznawcze:</h2>
            <div
              class="main__survey__content3__block1__section__elem content3__block4__section__elem"
            >
              <div class="main__survey__content3__block4__section__elem__box-input">
                <input type="text" v-model="userThought[0].name" placeholder="Wpisz tutaj" />
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought[0].option"
                  :options="options"
                ></multiselect>
              </div>
              <div class="main__survey__content3__block4__section__elem__box-input">
                <input type="text" v-model="userThought[1].name" />
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought[1].option"
                  :options="options"
                ></multiselect>
              </div>
              <div class="main__survey__content3__block4__section__elem__box-input">
                <input type="text" v-model="userThought[2].name" />
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought[2].option"
                  :options="options"
                ></multiselect>
              </div>
              <div class="main__survey__content3__block4__section__elem__box-input">
                <input type="text" v-model="userThought[3].name" />
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought[3].option"
                  :options="options"
                ></multiselect>
              </div>
              <div class="main__survey__content3__block4__section__elem__box-input">
                <input type="text" v-model="userThought[4].name" />
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought[4].option"
                  :options="options"
                ></multiselect>
              </div>
              <div class="main__survey__content3__block4__section__elem__box-input">
                <input type="text" v-model="userThought[5].name" />
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought[5].option"
                  :options="options"
                ></multiselect>
              </div>
            </div>
          </div>
          <button @click="saveAnswersD" class="main__survey__button">Zapisz</button>
          <button
            @click="subState++, surveyInfoChooseRandomNum = generateArrayRandomNumber(0,13)"
            class="main__survey__button main__survey__content3__block4__button"
          >Pomiń</button>
          <div v-if="showPopUp" class="survay-save-success-background">
            <div class="survay-save-success">
              <h3 class="main__survey__content__h">Zapisano</h3>
            </div>
          </div>
        </div>
        <div v-if="subState==3" class="main__survey__content3__block2">
          <h1 class="main__survey__content__h">Rozpoznawanie zniekształceń poznawczych</h1>
          <p
            class="main__survey__content__p"
          >Umiejętność rozpoznawania zniekształceń pozwoli zrozumieć, w jaki sposób wpływają one na postrzeganie różnych zdarzeń. W tabelce znajdują się przykłady myśli / zdań z sytuacji Marka oraz określenie, jakie jest to zniekształcenie poznawcze.</p>
          <div class="main__survey__content3__block1__section">
            <h2 class="main__survey__content__h2">Sytuacja</h2>
            <h2 class="main__survey__content__h2">Zniekształcenie poznawcze:</h2>
            <div
              class="main__survey__content3__block1__section__elem content3__block4__section__elem"
            >
              <div class="main__survey__content3__block4__section__elem__box-input">
                <p>{{surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum]].thought}}</p>
                <div class="big-select">
                  <multiselect
                    class="main__survey__content3__block4__section__elem__box-input-select"
                    placeholder="Wybierz z listy"
                    selectLabel
                    selectedLabel
                    deselectLabel
                    :allow-empty="false"
                    v-model="surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum]].choosedOption"
                    :options="options"
                  ></multiselect>
                </div>
              </div>
            </div>

            <!-- <div class="main__survey__content3__block1__section__elem">
              <div class="main__survey__content3__block1__section__elem__box">
                <p>{{surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum-1]].name}}</p>
              </div>
              <div class="main__survey__content3__block1__section__elem__box">
                <multiselect
                  class="main__survey__content3__block4__section__elem__box-input-select"
                  placeholder="Wybierz z listy"
                  selectLabel
                  selectedLabel
                  deselectLabel
                  :allow-empty="false"
                  v-model="userThought.userThoughtNumber1.option"
                  :options="options"
                ></multiselect>
              </div>
              <div
                class="main__survey__content3__block1__section__elem__box content3__block2__section__elem__box"
              >
                <button
                  :disabled="surveyInfoChooseAnswer != null"
                  @click="saveAnswersB('Fakt')"
                  :class="{'main__survey__content3__block1__section__elem__box_button-true': surveyInfoChooseAnswer == 'Fakt' && surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum-1]].option == surveyInfoChooseAnswer,
                  'main__survey__content3__block1__section__elem__box_button-false': surveyInfoChooseAnswer == 'Fakt' && surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum-1]].option != surveyInfoChooseAnswer}"
                  class="main__survey__content3__block1__section__elem__box_button"
                >Fakt</button>
                <button
                  :disabled="surveyInfoChooseAnswer != null"
                  @click="saveAnswersB('Interpretacja')"
                  :class="{'main__survey__content3__block1__section__elem__box_button-true': surveyInfoChooseAnswer == 'Interpretacja' && surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum-1]].option == surveyInfoChooseAnswer,
                   'main__survey__content3__block1__section__elem__box_button-false': surveyInfoChooseAnswer == 'Interpretacja' && surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum-1]].option != surveyInfoChooseAnswer}"
                  class="main__survey__content3__block1__section__elem__box_button"
                >Interpretacja</button>
              </div>
            </div>-->
          </div>
          <div class="main__survey__content3__block1__circle content3__block2__circle">
            <div
              v-for="(n,index) in surveyInfoChoose"
              :key="n.index"
              :class="{main__survey__content3__block1__circle__elem__viewed: index <= surveyInfoChooseNum}"
              class="main__survey__content3__block1__circle__elem content3__block2__circle__elem"
            ></div>
          </div>
          <button
            v-if="surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum]].choosedOption && surveyInfoChooseNum<13"
            @click="saveAnswersB"
            class="main__survey__button"
          >Następne</button>
          <button
            v-if="surveyInfoChoose[surveyInfoChooseRandomNum[surveyInfoChooseNum]].choosedOption && surveyInfoChooseNum==13"
            @click="subState++"
            class="main__survey__button"
          >Dalej</button>
        </div>
        <div v-if="subState==4" class="main__survey__content3__block3">
          <h1
            class="main__survey__content__h"
          >Przeczytaj dokładnie poniższe pytania dotyczące materiału i wybierz prawidłową odpowiedź.</h1>
          <p class="main__survey__content__p2">Tylko jedna odpowiedź jest prawdziwa.</p>

          <div v-if="surveyCNum == 1" class="main__survey__content3__block3__elem">
            <h3 class="main__survey__content__h3">1. Przewidywanie przyszłości to:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[0] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                wnioskowanie o przyszłości na podstawie obserwacji,
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[0]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                sztywne przekonania na temat przyszłości,
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[0]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                jedna z technik radzenia sobie,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[0]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                przygotowanie się na nadchodzącą sytuację.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[0]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">2. Katastrofizacja to:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[1] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                dążenie do negatywnych konsekwencji;
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                dostrzeganie zarówno pozytywnych jak i negatywnych aspektów zdarzenia;
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                negatywny obraz zdarzenia;
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                skupienie się na najbardziej prawdopodobnym scenariuszu wydarzeń.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">3. Niesprawiedliwe porównania to:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[2] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                posługiwanie się wygórowanymi standardami,
                <input
                  type="radio"
                  id="one"
                  :value="true"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                skupienie się na sukcesach i porażkach innych osób,
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                uzasadniona ocena siebie w porównaniu do innych,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                technika służąca zmniejszeniu nierówności.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">4. Personalizacja to:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[3] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                same przypisywanie sobie odpowiedzialności za przebieg wydarzenia,
                <input
                  type="radio"
                  id="one"
                  :value="true"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                dostosowanie sytuacji do osobistych potrzeb,
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                rozumienie intencji innych osób,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                uwzględnienie wpływu innych osób lub sytuacji.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">5. Powinność to:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[4] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                wykonywanie wcześniej zaplanowanych czynności,
                <input
                  type="radio"
                  id="one"
                  value="1"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                działanie motywowane poczuciem obowiązku,
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                realizacja korzystnych celów,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                cecha osobowości odpowiedzialna za podejmowanie działania.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">6. Nadmierne uogólnianie:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[5] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                zwiększa elastyczność działania,
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                pozwala przewidzieć skutki zdarzenia,
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                to wnioskowanie na podstawie jednej sytuacji,
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                to przemyślane wyciąganie wniosków.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">7. Etykietowanie:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[6] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                to kategoryzowanie w oparciu o wystarczające przesłanki,
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[6]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                to przypisywanie negatywnych predyspozycji i cech,
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[6]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                pozwala na trafną reakcję na sytuację zewnętrzną,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[6]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                poprawna interpretacja dwóch przesłanek.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[6]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div v-if="surveyCNum == 2" class="main__survey__content3__block3__elem">
            <h3
              class="main__survey__content__h3"
            >8. Pierwsze stany depresyjne Marka spowodowane były:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[7] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                przerwaniem studiów,
                <input type="radio" id="one" value="11" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                odpowiedzialnością za pierwszą firmę,
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[7]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                presją rodziców,
                <input type="radio" id="two" :value="true" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wymaganiami współpracowników.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[7]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">9. Po pojawieniu się problemów w firmie Marek:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[8] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                obwiniał swoich współpracowników,
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[8]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                tłumaczył je sytuacją na rynku,
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[8]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                delegował zadania,
                <input type="radio" id="two" value="3" v-model="surveyC[8]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wziął odpowiedzialność na siebie.
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[8]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">10. Przez depresję Marek:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[9] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                nigdy nie ma energii do pracy,
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                unika kontaktu ze współpracownikami,
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                powierzył prowadzenie firmy współpracownikom,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                przestał martwić się o firmę.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">11. Kiedy Marek martwi się o firmę:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[10] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                szuka rozwiązania wraz ze współpracownikami,
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                czuje się zawstydzony i winny,
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wchodzi w otwarty konflikt ze współpracownikami,
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                powierza rozwiązanie problemu współpracownikom.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3
              class="main__survey__content__h3"
            >12. Marek słysząc współpracowników rozmawiających o firmie:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[11] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                przestał im ufać,
                <input type="radio" id="one" :value="true" v-model="surveyC[11]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                ucieszył się, że rozwiązują problem,
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[11]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                postanowił odpocząć,
                <input type="radio" id="two" value="3" v-model="surveyC[11]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                dołączył do dyskusji.
                <input type="radio" id="two" value="4" v-model="surveyC[11]" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="main__survey__content3__block1__circle content3__block3__circle">
            <div
              v-for="(n,index) in 2"
              :key="n.index"
              :class="{main__survey__content3__block1__circle__elem__viewed: index+1 <= surveyCNum}"
              class="main__survey__content3__block1__circle__elem content3__block2__circle__elem"
            ></div>
          </div>
          <div @click="saveAll" class="main__survey__button">Dalej</div>
        </div>
      </div>
      <div v-else-if="state==4" class="main__survey__content4">
        <h1
          v-if="survey4state <= 2"
          class="main__survey__content__h"
        >Proszę przeczytać stwierdzenia dotyczące zaprezentowanego w tej części badania materiału i wskazanie na ile zgadzasz lub nie zgadzasz się z poszczególnymi zdaniami:</h1>
        <h1
          v-if="survey4state == 3"
          class="main__survey__content__h"
        >Zaprezentowany materiał jest według mnie</h1>
        <p
          v-if="survey4state <= 2"
          class="main__survey__content__p2"
        >(1 - w stopniu znikomym; 5 - w stopniu bardzo dużym)</p>
        <p
          v-if="survey4state == 3"
          class="main__survey__content__p2"
        >(1 - bardzo zły; 5 - bardzo dobry)</p>
        <div v-if="survey4state==1" class="main__survey__content4__block">
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">1. Materiał był dla mnie atrakcyjny</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an1}"
                @click="an1=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an1 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">2. Materiał wzbudził moje zainteresowanie</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an2}"
                @click="an2=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an2 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">3. Materiał był dla mnie nudny</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an3}"
                @click="an3=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an3 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">4. Materiał był dla mnie ciekawy</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an4}"
                @click="an4=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an4 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">5. Materiał był dla mnie trudny w odbiorze</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an5}"
                @click="an5=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an5 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">6. Materiał był odpowiedniej długości</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an6}"
                @click="an6=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an6 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">7. Materiał wywołał we mnie dyskomfort</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an7}"
                @click="an7=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an7 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
        </div>
        <div v-if="survey4state==2" class="main__survey__content4__block">
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">8. Z zainteresowaniem obejrzałem/am materiał</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an8}"
                @click="an8=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an8 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">9. Z uwagą zapoznałem/am się z materiałem</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an9}"
                @click="an9=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an9 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >10. Identyfikuję się z bohaterem, który pojawił się w materiale</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an10}"
                @click="an10=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an10 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p
              class="main__survey__content__p2"
            >11. Potrafiłem/am wczuć się w przedstawioną sytuację</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an11}"
                @click="an11=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an11 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">12. Opisana sytuacja była mi obca</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an12}"
                @click="an12=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an12 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">13. Starannie wykonałem/am przygotowane zadanie</p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an13}"
                @click="an13=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an13 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <div class="main__survey__content4__block__elem">
            <p class="main__survey__content__p2">
              14. Wykonałbym/wykonałabym takie zadanie, gdyby było ono zaprezentowane w
              <br />produkcie do komputerowej psychoterapii depresji.
            </p>
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an14}"
                @click="an14=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an14 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
        </div>
        <div v-if="survey4state==3" class="main__survey__content4__block block2">
          <div class="main__survey__content4__block__elem">
            <div class="main__elem__circle_buttons">
              <button
                v-for="(button, index) in 5"
                :key="button"
                class="circle_button"
                :class="{circle_button_clicked: index+1 == an15}"
                @click="an15=index+1"
              >{{index+1}}</button>
            </div>
            <div
              v-if="checkAn == true && an15 == null"
              class="main__survey__content4__block__elem-error"
            >
              <span>Brak odpowiedzi</span>
            </div>
          </div>
          <h2 class="main__survey__content__h">Dodatkowe uwagi</h2>
          <div class="main__contact__form__text-area">
            <textarea placeholder="Maksymalnie 250 znaków"></textarea>
          </div>
        </div>
        <div class="main__survey__content3__block1__circle content4">
          <div
            v-for="(n,index) in 3"
            :key="n.index"
            :class="{main__survey__content3__block1__circle__elem__viewed: index < survey4state}"
            class="main__survey__content3__block1__circle__elem content3__block2__circle__elem"
          ></div>
        </div>
        <button v-if="survey4state <= 2" @click="nextState4" class="main__survey__button">Dalej</button>
        <button v-if="survey4state == 3" @click="nextState4" class="main__survey__button">Zakończ</button>
        <div v-if="showPopUpLastState" class="survay-save-success-background">
          <div class="survay-save-success success2">
            <img src="/ico-survey-success.png" alt />
            <h3 class="main__survey__content__h">
              Gratulecje!
              <br />Zadanie ukończone!
            </h3>
            <download-excel
              style="color: blue"
              :data="json_data"
              :fields="json_fields"
              worksheet="My Worksheet"
              type="csv"
              name="filename.xls"
            >Download CSV</download-excel>
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

import Multiselect from "vue-multiselect";

import JsonExcel from "vue-json-excel";

export default {
  layout: "survey",
  components: { Multiselect, "download-excel": JsonExcel },
  data() {
    return {
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ],
      json_fields: {
        id: "user",
        mail: "user_email",
        survey: "survey",
        zniekształcenia_atrakcyjnosc_tabela: "Zadanie1_atrakcyjnosc_tabela",
        zniekształcenia_skutecznosc_cwiczenie1: "Zadanie2_skutecznosc_fakty0",
        zniekształcenia_skutecznosc_cwiczenie2: "Zadanie2_skutecznosc_fakty1",
        zniekształcenia_skutecznosc_cwiczenie3: "Zadanie2_skutecznosc_fakty2",
        zniekształcenia_skutecznosc_cwiczenie4: "Zadanie2_skutecznosc_fakty3",
        zniekształcenia_skutecznosc_cwiczenie5: "Zadanie2_skutecznosc_fakty4",
        zniekształcenia_skutecznosc_cwiczenie6: "Zadanie2_skutecznosc_fakty5",
        zniekształcenia_skutecznosc_cwiczenie7: "Zadanie2_skutecznosc_fakty6",
        zniekształcenia_skutecznosc_cwiczenie8: "Zadanie2_skutecznosc_fakty7",
        zniekształcenia_skutecznosc_cwiczenie9: "Zadanie2_skutecznosc_fakty8",
        zniekształcenia_skutecznosc_cwiczenie10: "Zadanie2_skutecznosc_fakty9",
        zniekształcenia_skutecznosc_cwiczenie11: "Zadanie2_skutecznosc_fakty10",
        zniekształcenia_skutecznosc_cwiczenie12: "Zadanie2_skutecznosc_fakty11",
        zniekształcenia_skutecznosc_cwiczenie13: "Zadanie2_skutecznosc_fakty12",
        zniekształcenia_skutecznosc_cwiczenie14: "Zadanie2_skutecznosc_fakty13",
        zniekształcenia_skutecznosc_test1: "Zadanie3_skutecznosc_testy0",
        zniekształcenia_skutecznosc_test2: "Zadanie3_skutecznosc_testy1",
        zniekształcenia_skutecznosc_test3: "Zadanie3_skutecznosc_testy2",
        zniekształcenia_skutecznosc_test4: "Zadanie3_skutecznosc_testy3",
        zniekształcenia_skutecznosc_test5: "Zadanie3_skutecznosc_testy4",
        zniekształcenia_skutecznosc_test6: "Zadanie3_skutecznosc_testy5",
        zniekształcenia_skutecznosc_test7: "Zadanie3_skutecznosc_testy6",
        zniekształcenia_skutecznosc_test8: "Zadanie3_skutecznosc_testy7",
        zniekształcenia_skutecznosc_test9: "Zadanie3_skutecznosc_testy8",
        zniekształcenia_skutecznosc_test10: "Zadanie3_skutecznosc_testy9",
        zniekształcenia_skutecznosc_test11: "Zadanie3_skutecznosc_testy10",
        zniekształcenia_skutecznosc_test12: "Zadanie3_skutecznosc_testy11",
        zniekształcenia_atrakcyjnosc_ankieta1: "an1",
        zniekształcenia_atrakcyjnosc_ankieta2: "an2",
        zniekształcenia_atrakcyjnosc_ankieta3: "an3",
        zniekształcenia_atrakcyjnosc_ankieta4: "an4",
        zniekształcenia_atrakcyjnosc_ankieta5: "an5",
        zniekształcenia_atrakcyjnosc_ankieta6: "an6",
        zniekształcenia_atrakcyjnosc_ankieta7: "an7",
        zniekształcenia_atrakcyjnosc_ankieta8: "an8",
        zniekształcenia_atrakcyjnosc_ankieta9: "an9",
        zniekształcenia_atrakcyjnosc_ankieta10: "an10",
        zniekształcenia_atrakcyjnosc_ankieta11: "an11",
        zniekształcenia_atrakcyjnosc_ankieta12: "an12",
        zniekształcenia_atrakcyjnosc_ankieta13: "an13",
        zniekształcenia_atrakcyjnosc_ankieta14: "an14",
        zniekształcenia_atrakcyjnosc_ankieta15: "an15",
        zniekształcenia_atrakcyjnosc_ankieta16: "an16"
      },
      json_data: [],
      options: [
        "Przepowiadanie przyszłości",
        "Personalizacja",
        "Etykietowanie",
        "Powinność",
        "Nadmierne uogólnianie",
        "Niesprawiedliwe porównanie",
        "Katastrofizacja"
      ],
      state: 1,
      subState: 1,
      surveyInfo: {
        1: {
          name: "Firma i tak upadnie, a ja poniosę konsekwencje.",
          thought: "PRZEPOWIADANIE PRZYSZŁOŚCI"
        },
        2: {
          name: "To tylko moja wina, że mamy kłopoty.",
          thought: "PERSONALIZACJA"
        },
        3: {
          name: "Jestem całkowicie nieodpowiedzialny i zawsze zawalam.",
          thought: "ETYKIETOWANIE, NADMIERNE UOGÓLNIANIE"
        },
        4: {
          name: "Powinienem wreszcie wziąć się w garść.",
          thought: "POWINNOŚĆ "
        },
        5: {
          name: "Wiecznie na ciebie czekamy.",
          thought: "NADMIERNE UOGÓLNIANIE"
        },
        6: {
          name:
            "Inni są zawsze na czas i robią to, co do nich należy. Tylko na mnie nie można liczyć.",
          thought: "NIESPRAWIEDLIWE PORÓWNANIE"
        },
        7: {
          name:
            "Jak stracę ten biznes, to sobie z tym już zupełnie nie poradzę. Całkiem się załamię. To będzie koniec.",
          thought: "KATASTROFIZACJA"
        }
      },
      surveyInfoNum: 1,
      userThought: [
        {
          name: null,
          option: null
        },
        {
          name: null,
          option: null
        },
        {
          name: null,
          option: null
        },
        {
          name: null,
          option: null
        },
        {
          name: null,
          option: null
        },
        {
          name: null,
          option: null
        }
      ],
      surveyInfoChoose: [
        {
          thought: "Jak mąż mnie zostawi, nie poradzę sobie.",
          option: "Katastrofizacja",
          choosedOption: ""
        },
        {
          thought: "Nie dostanę tej pracy.",
          option: "Przepowiadanie przyszłości",
          choosedOption: ""
        },
        {
          thought: "To przeze mnie nie dostaliśmy tego zlecenia.",
          option: "Personalizacja",
          choosedOption: ""
        },
        {
          thought: "Wszyscy w grupie świetnie mówią po angielsku tylko ja nie.",
          option: "Niesprawiedliwe porównanie",
          choosedOption: ""
        },
        {
          thought: "Ona jest nieprofesjonalna.",
          option: "Etykietowanie",
          choosedOption: ""
        },
        {
          thought: "Powinienem się bardziej starać, bo jestem leniwy.",
          option: "Powinność",
          choosedOption: ""
        },
        {
          thought: "Nigdy nic mi się nie udaje.",
          option: "Nadmierne uogólnianie",
          choosedOption: ""
        },
        {
          thought: "Załamię się, jak znów mi się nie uda.",
          option: "Katastrofizacja",
          choosedOption: ""
        },
        {
          thought: "To się nie może dobrze skończyć.",
          option: "Przepowiadanie przyszłości",
          choosedOption: ""
        },
        {
          thought: "Jest niemiły, bo nie zgodziłam się mu pomóc.",
          option: "Personalizacja",
          choosedOption: ""
        },
        {
          thought: "Inni w moim wieku mają już swoje mieszkanie.",
          option: "Niesprawiedliwe porównanie",
          choosedOption: ""
        },
        {
          thought: "Jestem zbyt głupia, żeby mnie polubić",
          option: "Etykietowanie",
          choosedOption: ""
        },
        {
          thought: "Muszę przestać się zamartwiać.",
          option: "Powinność",
          choosedOption: ""
        },
        {
          thought: "Nigdy nie potrafię się zachować w towarzystwie.",
          option: "Nadmierne uogólnianie",
          choosedOption: ""
        }
      ],
      surveyInfoChooseNum: 0,
      surveyInfoChooseRandomNum: [],
      surveyInfoChooseAnswer: null,
      surveyCNum: 1,
      surveyC: [],
      showPopUp: false,
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
      checkAn: false,
      survey4state: 1,
      userTextAnswer: 0,
      showPopUpLastState: false,
      loginedUser: null
    };
  },
  methods: {
    home() {
      this.$router.replace("/logined");
    },
    nextSurveyInfo() {
      if (this.surveyInfoNum < 7) {
        this.surveyInfoNum++;
      }
    },
    prevSurveyInfo() {
      if (this.surveyInfoNum > 1) {
        this.surveyInfoNum--;
      }
    },
    scrollStateTo2() {
      this.state++;
      firstScrollTo("main");
    },
    saveAnswersB() {
      if (this.surveyInfoChooseNum < 13) {
        this.surveyInfoChooseNum++;
      }
    },
    saveAll() {
      let state;
      for (var i = 0; i < 12; i++) {
        if (this.surveyC[i] == null && i < 7 && this.surveyCNum == 1)
          state = true;
        else if (
          this.surveyC[i] == null &&
          i < 12 &&
          i > 7 &&
          this.surveyCNum == 2
        ) {
          state = true;
        }
      }

      if (state) {
        this.checkAn = true;
      } else {
        if (this.surveyCNum == 1) {
          this.surveyCNum++;
          this.checkAn = false;
        } else {
          this.state++;
          this.checkAn = false;
        }
      }
      firstScrollTo("main");
    },
    generateArrayRandomNumber(min, max) {
      var totalNumbers = max - min + 1,
        arrayTotalNumbers = [],
        arrayRandomNumbers = [],
        tempRandomNumber;
      while (totalNumbers--) {
        arrayTotalNumbers.push(totalNumbers + min);
      }
      while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(
          Math.random() * (arrayTotalNumbers.length - 1)
        );
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
      }
      return arrayRandomNumbers;
    },
    saveAnswersD() {
      this.showPopUp = true;
      this.surveyInfoChooseRandomNum = this.generateArrayRandomNumber(0, 13);
      this.userThought.forEach(element => {
        if ((element.name || element.option) != null) {
          this.userTextAnswer = 1;
        }
      });
      setTimeout(() => {
        this.showPopUp = false;
        this.subState++;
      }, 1000);
    },
    nextState4() {
      if (this.survey4state == 3) {
        if (this.an15 == null) {
          this.checkAn = true;
        } else {
          this.showPopUpLastState = true;
          this.saveData();
          setTimeout(() => {
            // this.$router.replace("/logined");
          }, 1500);
        }
      }
      if (
        ((this.an1 &&
          this.an2 &&
          this.an3 &&
          this.an4 &&
          this.an5 &&
          this.an6 &&
          this.an7) != null &&
          this.survey4state == 1) ||
        ((this.an8 &&
          this.an9 &&
          this.an10 &&
          this.an11 &&
          this.an12 &&
          this.an13 &&
          this.an4) != null &&
          this.survey4state == 2)
      ) {
        firstScrollTo("main");
        this.survey4state++;
        this.checkAn = false;
      } else {
        this.checkAn = true;
      }
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.succssesfuly = null;
          this.$router.replace("/");
        })
        .catch(error => {});
    },
    saveData() {
      //Block D
      for (let index = 0; index < this.surveyC.length; index++) {
        if (this.surveyC[index] != true) {
          this.surveyC[index] = 0;
        } else {
          this.surveyC[index] = 1;
        }
      }
      for (let index = 0; index < this.surveyInfoChoose.length; index++) {
        if (
          this.surveyInfoChoose[index].choosedOption !=
          this.surveyInfoChoose[index].option
        ) {
          this.surveyInfoChoose[index] = 0;
        } else {
          this.surveyInfoChoose[index] = 1;
        }
      }
      this.json_data = [
        {
          user: fb.auth().currentUser.uid,
          user_email: fb.auth().currentUser.email,
          survey: "Zniekształcenia poznawcze",
          Zadanie1_atrakcyjnosc_tabela: this.userTextAnswer,
          Zadanie2_skutecznosc_fakty0: this.surveyInfoChoose[0],
          Zadanie2_skutecznosc_fakty1: this.surveyInfoChoose[1],
          Zadanie2_skutecznosc_fakty2: this.surveyInfoChoose[2],
          Zadanie2_skutecznosc_fakty3: this.surveyInfoChoose[3],
          Zadanie2_skutecznosc_fakty4: this.surveyInfoChoose[4],
          Zadanie2_skutecznosc_fakty5: this.surveyInfoChoose[5],
          Zadanie2_skutecznosc_fakty6: this.surveyInfoChoose[6],
          Zadanie2_skutecznosc_fakty7: this.surveyInfoChoose[7],
          Zadanie2_skutecznosc_fakty8: this.surveyInfoChoose[8],
          Zadanie2_skutecznosc_fakty9: this.surveyInfoChoose[9],
          Zadanie2_skutecznosc_fakty10: this.surveyInfoChoose[10],
          Zadanie2_skutecznosc_fakty11: this.surveyInfoChoose[11],
          Zadanie2_skutecznosc_fakty12: this.surveyInfoChoose[12],
          Zadanie2_skutecznosc_fakty13: this.surveyInfoChoose[13],
          Zadanie3_skutecznosc_testy0: this.surveyC[0],
          Zadanie3_skutecznosc_testy1: this.surveyC[1],
          Zadanie3_skutecznosc_testy2: this.surveyC[2],
          Zadanie3_skutecznosc_testy3: this.surveyC[3],
          Zadanie3_skutecznosc_testy4: this.surveyC[4],
          Zadanie3_skutecznosc_testy5: this.surveyC[5],
          Zadanie3_skutecznosc_testy6: this.surveyC[6],
          Zadanie3_skutecznosc_testy7: this.surveyC[7],
          Zadanie3_skutecznosc_testy8: this.surveyC[8],
          Zadanie3_skutecznosc_testy9: this.surveyC[9],
          Zadanie3_skutecznosc_testy10: this.surveyC[10],
          Zadanie3_skutecznosc_testy11: this.surveyC[11],
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
          an16: this.an16
        }
      ];
      //   if (fb.auth().currentUser.uid) {
      //     db.collection("survey")
      //       .add({
      //         Zadanie1_atrakcyjnosc_tabela: this.an1,
      //         answer2: this.an2,
      //         answer3: this.an3,
      //         startTime: this.startTime,
      //         endTime: this.endTime,
      //         survey: "A",
      //         user_email: fb.auth().currentUser.email,
      //         user: fb.auth().currentUser.uid
      //       })
      //       .then((this.saved = true));
      //   }
    }
  },
  created() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.loginedUser = fb.auth().currentUser.email;
      } else {
        this.loginedUser = "Error";
      }
    });
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
.header__form {
  width: 20.0525%;
  right: 9.33%;
  top: 5.7vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__logined {
  width: 67.68%;
  display: flex;
  align-items: center;
  border: 1px solid #5690ff;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 50px 10px 10px;
  position: relative;
}
.header__logined p {
  letter-spacing: 0em;
  margin-left: 10px;
  font: 0.9375rem/1 "Montserrat", century gothic, sans-serif;
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
  background-image: url(/ico-logout.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  outline: none;
  cursor: pointer;
}
html {
  @media (max-width: 1440px) {
    .main__survey__content1__block3__p {
      top: 14.307407vh;
    }
    main {
      padding-top: 15.540741vh;
    }
    .main__survey__content2__block3__p {
      margin-top: 19.259259vh;
    }
    .main__survey__content1__block1__arrow {
      margin-top: 5vh;
    }
    .subnav {
      margin-bottom: 5.648148vh;
    }
    .main__survey__content2__block2 {
      padding-top: 15.666667vh;
    }
  }
  @media (max-width: 1367px) {
    .main__survey__content1__block1__p {
      margin-left: 48.583333%;
      width: 49.15625%;
    }

    .main__survey__content1__block2__img {
      margin: 1.444444vh auto 1.277778vh;
    }
    .main__survey__content1__block3__p[data-v-7aca4ec1] {
      top: 21.307407vh;
      width: 48.572917%;
    }
    .main__survey__content1__block4__p {
      width: 68.072917%;
      margin-bottom: 7.814815vh;
    }
    .main__survey__content2__block1 {
      margin-top: 15.833333vh;
    }
    .main__survey__content2__block1__p {
      width: 45.145833%;
      margin-bottom: 13vh;
    }
    .main__survey__content2__block3__p {
      width: 86.739583%;
    }
    .main__survey__content__p {
      width: 59.875%;
    }
  }
  @media (max-width: 1280px) {
    .main__survey__nav {
      width: 55.9795%;
    }
    .main__survey__content1__block1__p {
      width: 43.15625%;
    }
    .main__survey__content1__block3__p {
      top: 17.007407vh;
    }
    .main__survey__content1__block3__p {
      width: 47.572917%;
    }
    .main__survey__content1__block4__p {
      width: 62.072917%;
      margin-bottom: 7.814815vh;
    }
    .main__survey__content2__block1 {
      margin-top: 7.833333vh;
    }
    .main__survey__content2__block1__p {
      margin-bottom: 14vh;
    }
    .main__survey__content2__block3__p {
      margin-top: 2.259259vh;
    }
    .main__survey__content2__block2__img {
      top: 3.962963vh;
    }
    .main__survey__content__p {
      width: 57.875%;
    }
  }
  @media (max-width: 1024px) {
    main {
      padding-top: 13.540741vh;
    }
    .main__survey__nav {
      width: 82.9795%;
    }
    .main__survey__content1__block1__p p:first-of-type {
      margin-bottom: 0.6rem;
    }
    .main__survey__content1__block1__p {
      width: 48.15625%;
      margin-left: 47.283333%;
    }
    .main__survey__content1__block1 {
      margin-top: 2.259259vh;
    }
    .main__survey__content1__block1__arrow {
      margin-top: 3vh;
    }

    .main__survey__content1__block4 {
      padding-top: 6.011111vh;
    }
    .main__survey__content1__block4__p {
      width: 84.072917%;
    }
    .main__survey__content1__block5 {
      padding-top: 17.62963vh;
      padding-bottom: 11.796296vh;
    }
    .main__survey__content2__block1__p {
      width: 46.145833%;
    }
    .main__survey__content2__block2__img {
      top: 11.962963vh;
      width: 100%;
    }
  }
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
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 18.24074074074074vh;
  display: block;
  box-sizing: border-box;
}
.surveyBG {
  background-image: url("/bg_top.png"), url("/bg_bottom-survey.png");
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh,
    30.83333333333333% 30.70092592592593vh;
}
.surveyBG2 {
  background-image: url("/bg_top.png"), url("/bg_top2.png"),
    url("/bg_bottom-survey.png");
  background-position: left top, left 38.51851851851852vh, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 45.9375% 24.53703703703704vh, 33.125% 98.7037037037037vh,
    30.83333333333333% 30.70092592592593vh;
}
.main__survey__button {
  width: 11.82291666666667%;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
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
.main__survey__nav__p-active {
  opacity: 1 !important;
}
.main__survey__nav {
  width: 51.9795%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  p {
    cursor: default;
    text-align: center;
  }
}
.main__survey__nav p {
  width: 22.345491%;
  padding: 0.9259259259259259vh 0;
  background-color: #5690ff;
  border-radius: 50px;
  font: 1rem/1 "Montserrat-bold", century gothic, sans-serif;
  opacity: 0.3;
  color: #ffffff;
}
.subnav {
  width: 30%;
  margin: 2.314814814814815vh auto 10.64814814814815vh;
  p {
    width: 19.79166666666667%;
    font-size: 0.875rem;
    color: #5690ff;
    border: 2px solid #5690ff;
    border-radius: 50px;
    background-color: unset;
    padding: 5px 0;
  }
}
.main__survey__content {
  width: 100%;
}
.main__survey__content__h {
  font: 1.43rem/1.875rem "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: center;
}
.main__survey__content__h2 {
  width: 20.83333333333333%;
  margin-right: 2.083333333333333%;
  display: inline-block;
  text-align: center;
  font: 1.563rem/1 "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
  &:last-of-type {
    margin-right: 0%;
  }
}
.main__survey__content__h3 {
  font: 1.25rem/1 "Montserrat-bold", century gothic, sans-serif;
  text-align: left;
  letter-spacing: 0.03em;
  color: #000000;
}
// .main__survey__content__p::first-letter {
//   font: 1.063rem/1.875 "Montserrat", century gothic, sans-serif !important;
// }
.main__survey__content__p {
  width: 41.875%;
  margin: 2.777777777777778vh auto 0;
  font: 1.063rem/1.875 "Montserrat", century gothic, sans-serif;
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
.main__survey__content1__block1 {
  margin-top: 13.88888888888889vh;
  // height: 96.2962962962963vh;
  h2 {
    width: 39.94791666666667%;
    margin-left: 49.58333333333333%;
    margin-bottom: 0.9259259259259259vh;
    text-align: left;
  }
}
.main__survey__content1__block1__img {
  width: 46.14583333333333%;
  max-width: 886px;
  position: absolute;
  top: 0%;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content1__block1__p {
  margin-left: 49.58333333333333%;
  width: 39.94791666666667%;
  p:first-of-type {
    margin-bottom: 2.6rem;
  }
}
.main__survey__content1__block1__arrow {
  margin: 23.14814814814815vh auto 0;
}

.main__survey__content1__block2 {
  padding-top: 6.481481481481481vh;
  p {
    width: 67.648%;
    margin: 2.777777777777778vh auto 0;
    text-align: center;
  }
  .button-arrow {
    margin-top: -60px;
    position: relative;
  }
}
.main__survey__content1__block2__img {
  width: 61.9799%;
  margin: 1.388888888888889vh auto 0;
  position: static;
  img {
    width: 100%;
  }
  &:first-of-type {
    margin-top: 0;
  }
}
.main__survey__content1__block3 {
  padding-top: 30.09259259259259vh;
  padding-bottom: 35.64814814814815vh;
  position: relative;
  h2 {
    width: 100%;
    margin: 0 auto;
  }
  img {
    position: absolute;
    width: 80.5546875%;
    top: 16.75925925925926vh;
    left: 5.208333333333333%;
  }
}
.main__survey__content1__block3__p {
  width: 52.03125%;
  margin: 5.092592592592593vh auto;
  &:last-of-type {
    margin: 0 auto;
    p {
      text-align: center;
      letter-spacing: 0.05em;
    }
  }
}
.main__survey__content1__block3 button {
  position: absolute;
  right: 50%;
  margin-right: -30px;
  bottom: 0;
}
.main__survey__content1__block4 {
  width: 80.52083333333333%;
  margin: 0 auto;
  padding-top: 6.481481481481481vh;
  h2 {
    width: 55.757%;
    margin: 0 auto 5.092592592592593vh;
    text-align: center;
  }
}
.main__survey__content1__block4__p {
  width: 68.072917%;
  margin: 0 auto 14.81481481481481vh;
}
.main__survey__content1__block4__img {
  width: 75.23%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.main__survey__content1__block4__bg {
  position: relative;
  img {
    top: -19vh;
    position: absolute;
  }
}
.main__survey__content1__block5 {
  padding-top: 10.92592592592593vh;
  padding-bottom: 8.796296296296296vh;
  p {
    margin: 0 auto 7.407407407407407vh;
    width: 58.90625%;
  }
}
.main__survey__content1__block5__h {
  width: 59.79166666666667%;
  margin: 0 auto 5.0926vh;
  h2 {
    text-align: center;
  }
}

.main__survey__content2 {
  padding-bottom: 7.222222222222222vh;
  button {
    margin-top: 9.259259259259259vh;
  }
}
.main__survey__content2__block1 {
  margin-top: 10.18518518518519vh;
}
.main__survey__content2__block1__img {
  width: 46.14583333333333%;
  max-width: 886px;
  position: absolute;
  top: 0%;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content2__block1__p {
  width: 36.14583333333333%;
  margin-left: 49.58333333333333%;
  margin-bottom: 16.38888888888889vh;
  h2 {
    text-align: left;
    margin-bottom: 0.625rem;
  }
  p {
    margin-bottom: 1.875rem;
  }
  p:last-of-type {
    margin-bottom: 0rem;
  }
}
.main__survey__content2__block2 {
  padding-left: 20.3125%;
  padding-top: 6.481481481481481vh;
  h1 {
    text-align: left;
  }
}
.main__survey__content2__block2__img {
  width: 87.44791666666667%;
  position: absolute;
  top: 2.962962962962963vh;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content2__block2__list__elem {
  margin-top: 2.777777777777778vh;
  display: flex;
  align-items: center;
  &:first-of-type {
    margin-top: 3.703703703703704vh;
  }
  p {
    width: 69.935%;
  }
}
.main__survey__content2__block2__list__elem__num {
  width: 39px;
  height: 39px;
  margin-right: 1.5625%;
  border-radius: 50px;
  background: linear-gradient(91.47deg, #80c0fb -53.64%, #8cdff9 24.74%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #ffffff;
    width: unset;
  }
}
.main__survey__content2__block3 {
  padding-top: 18.51851851851852vh;
  h2 {
    width: 63.38541666666667%;
    margin: 0 auto;
  }
}
.main__survey__content2__block3__img {
  width: 72.31197916666667%;
  margin: 6.481481481481481vh auto 0;
  img {
    width: 100%;
  }
}
.main__survey__content3__block1 {
  .main__survey__button {
    margin-bottom: 4.640741vh;
  }
}
.main__survey__content3__block1__section {
  margin-top: 7.222222222222222vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.main__survey__content3__block1__section__elem {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3.796296296296296vh;
  position: relative;
  img:first-of-type,
  img:last-of-type {
    top: 3.796296296296296vh;
    position: absolute;
  }
  img:first-of-type {
    left: 10.57291666666667%;
  }
  img:last-of-type {
    right: 10.57291666666667%;
  }
}
.main__survey__content3__block1__section__elem__box {
  width: 20.83333333333333%;
  height: 13.88888888888889vh;
  margin-right: 2.083333333333333%;
  padding: 20px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
  &:last-of-type {
    margin-right: 0%;
  }
}
.main__survey__content3__block1__section__elem__box p {
  font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  margin: 0 auto;
  text-align: center;
  // &::first-letter {
  //   font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  // }
}
.main__survey__content3__block1__section__elem__box:nth-last-of-type(2) p {
  font-style: italic;
  // &::first-letter {
  //   font-style: italic;
  // }
}
.main__survey__content3__block1__section__elem__box_button-true {
  box-shadow: 0px 0px 20px #2bb61f !important;
}
.main__survey__content3__block1__section__elem__box_button-false {
  box-shadow: 0px 0px 20px rgba(254, 46, 46, 0.8) !important;
}
.main__survey__content3__block1__circle {
  width: 8.877551020408163%;
  margin: 3.703703703703704vh auto 4.640741vh;
  display: flex;
  justify-content: space-between;
}
.main__survey__content3__block1__circle__elem {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: #3065ec;
  opacity: 0.3;
}
.main__survey__content3__block1__circle__elem__viewed {
  opacity: 1;
}
.main__survey__content3__block2 {
  p {
    width: 52.08333333333333%;
  }
}
.content3__block2__section__elem__box {
  &:last-of-type {
    padding: 0;
    flex-wrap: wrap;
    border: unset;
    button {
      width: 100%;
      height: 40.633333%;
      margin-bottom: 6.666666666666667%;
      font: 1rem/1.25 "Montserrat-bold", century gothic, sans-serif;
      background-color: #ffffff;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
      &:last-of-type {
        margin: 0;
      }
      &:hover {
      }
    }
  }
}
.content3__block2__circle {
  width: 15.41666666666667%;
}
.content3__block2__circle__elem {
  width: 7px;
  height: 7px;
}
.main__survey__content3__block3 {
  .main__survey__button {
    margin-bottom: 8.796296296296296vh;
  }
}
.main__survey__content3__block3__elem {
  margin-top: 7.222222222222222vh;
  padding-left: 31.61458333333333%;
  .main__survey__content__h3 {
    margin-top: 6.018518518518519vh;
  }
  .main__survey__content__h3:first-of-type {
    margin-top: 0;
  }
}
.main__elem__radio {
  width: unset;
  position: relative;
  .main__survey__content4__block__elem-error {
    top: 0;
    right: 16%;
  }
}
.content3__block3__circle {
  width: 1.25%;
}
.main__survey__content3__block4 {
  margin-bottom: 4.340741vh;
}
.content3__block4__section h2 {
  width: 26.04166666666667%;
  margin: 0;
}
.main__survey__content3__block4__section__elem__box-input {
  width: 52.08333333333333%;
  margin: 0 auto;
  display: flex;
  input,
  p,
  .multiselect,
  .big-select {
    display: none;
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #3065ec;
    border-bottom: none;
    border-radius: 0 50px 50px 0;
    option {
      font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
    }
  }
  p {
    display: flex;
    align-items: center;
  }

  input:first-of-type,
  p:first-of-type {
    border-radius: 50px 0 0 50px;
    border-right: none;
  }
  .multiselect,
  .big-select {
    padding: 0;
  }
  input::placeholder {
    font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  }
}
.main__survey__content3__block4__section__elem__box-input:last-of-type {
  input,
  p {
    border-bottom: 1px solid #3065ec;
  }
  .multiselect,
  .big-select {
    border-bottom: 1px solid #3065ec;
  }
  .big-select {
    padding: 16px 0 0 0;
    .multiselect {
      width: 100%;
      border: none;
    }
  }
}

.content3__block4__section__elem {
  margin-top: 2.314814814814815vh;
  padding-bottom: 6.018518518518519vh;
  flex-wrap: wrap;
}
.main__survey__content3__block4__button {
  margin-top: 1.388888888888889vh;
  color: #3065ec;
  border: 2px solid #3065ec;
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
}
.survay-save-success-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
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
    margin-bottom: 8.796296296296296vh;
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
  top: 4vh;
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
</style>
