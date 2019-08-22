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
    <div class="main__survey__content">
      <div v-if="state==1" class="main__survey__content1">
        <div class="main__survey__content1__block1">
          <div class="main__survey__content1__block1__img">
            <img src="/surveyH/main__survey__content1__block1.png" alt />
          </div>
          <h2 class="main__survey__content__h">Jest niedziela wieczór.</h2>
          <div class="main__survey__content1__block1__p">
            <p>Na samą myśl o poniedziałku Monika odczuwa lęk, zdenerwowanie i zły nastrój. Od dłuższego czasu ma problemy z depresją i czuje, że to właśnie z powodu pracy. Przedstawicielem handlowym w dużej korporacji wydawniczej jest już siódmy rok. Od 6 lat czuje jednak, że to nie jest miejsce dla niej.</p>
          </div>
          <p class="main__survey__content__p">
            Z wykształcenia jest marketingowcem, ale nigdy nie pracowała w zawodzie, chociaż zawsze o tym marzyła.
            <br />Zaraz po studiach wydawnictwo zaoferowało jej dość dobrze płatne stanowisko handlowca i tak już zostało.
            <br />Monika czuje, że w tej pracy się nie spełnia. Nawet jej tak naprawdę nie lubi. Chciałaby zarabiać nieco więcej i zaspokoić swoje ambicje.
          </p>
          <button
            class="button-arrow main__survey__content1__block1__arrow"
            v-scroll-to="'.main__survey__content1__block2'"
          ></button>
        </div>
        <div class="main__survey__content1__block2">
          <h2 class="main__survey__content__h">
            Monika ciągle sobie obiecuje, że odejdzie z firmy
            <br />i zacznie pracować w wymarzonym zawodzie...
          </h2>
          <p
            class="main__survey__content__p"
          >...jednak mija rok za rokiem, nic się nie zmienia, a ona popada w coraz większą frustrację. Z pewną dozą zazdrości, ale i podziwu obserwuje swoje koleżanki ze studiów, które pracują w branży od lat. Są zadowolone, rozwijają się, idą naprzód, podczas gdy ona cały czas tkwi w miejscu. Monika chciałaby coś zmienić, ale nie za bardzo wie, jak się za to zabrać, jak zrobić ten pierwszy krok. Pewnego dnia podczas rozmowy z przyjaciółką Asią, Monika po raz kolejny zaczęła narzekać na swoją sytuację. Asia, która bardzo interesuje się psychologią i rozwojem osobistym, podrzuciła jej kilka książek w ramach motywacji.</p>
          <div class="main__survey__content1__block2__img"></div>
          <div class="main__survey__content1__block2__img">
            <img src="/surveyH/main__survey__content1__block2.png" alt />
          </div>
          <p class="main__survey__content__p main__survey__content1__block2__p-bottom">
            Podpowiedziała również, że proces zmian powinno się zacząć przede wszystkim od jasnego określenia swoich celów.
            <span
              class="bold"
            >– Jeśli nie wiesz do czego dążysz, jesteś jak dziecko we mgle</span> – przekonywała Asia
            <span
              class="bold"
            >– Pomyśl, co chcesz robić za 10 lat, za 5 lat, za rok. A potem zacznij działać w tym kierunku.</span>
          </p>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block3'"></button>
          <img
            src="/surveyE/main__survey__content1__block4__bg.png"
            alt
            class="main__survey__content__bg"
          />
        </div>
        <div class="main__survey__content1__block3">
          <h2 class="main__survey__content__h">To dało Monice nieco do myślenia.</h2>
          <p
            class="main__survey__content__p main__survey__content1__block3__p"
          >Przeczytała kilka książek, przejrzała artykuły w internecie i doszła do wniosku, że przede wszystkim chce zmienić pracę na branżę marketingu i reklamy. Ostatecznie chce założyć własną firmę i dobrze zarabiać. W końcu pewnego wieczoru usiadła z kartką papieru i zaczęła spisywać swoje cele. Doszła do wniosku, że satysfakcja z wykonywanej pracy jest dla niej bardzo ważna w życiu i za kilka lat chciałaby pracować na wymarzonej posadzie, zamiast męczyć się w nieskończoność na stanowisku, którego nie lubi. Zastanowiła się, jak ma dotrzeć do tego celu i uznała, że pierwszym krokiem powinna być ostateczna rozmowa z szefem na temat etatu w marketingu.</p>
          <div class="main__survey__content1__block3__img">
            <img src="/surveyH/main__survey__content1__block3.png" alt />
          </div>
          <p
            class="main__survey__content__p left-text"
          >Uznała, że rozmowa w obecnym tygodniu jest nierealna, dlatego postanowiła, że najpierw napisze maila, aby się na nią umówić. Monika wie, że na zmianę stanowiska może nie mieć wpływu, a nie chce uzależniać swojego życia od decyzji szefa. Postanowiła więc skupić się na celach, których realizacja w większym stopniu zależy od niej: rozejrzy się za pracą w innej firmie. Jeśli znajdzie coś interesującego - wyśle aplikację. Ale najpierw musi napisać swoje CV! To jest cel na jutro</p>
          <p
            class="main__survey__content__p left-text"
          >Kiedy Monika ustaliła najbliższe działania, zaczęła myśleć o tym, co dalej powinna zrobić, by osiągnąć swoje życiowe cele (wymarzone stanowisko, a może nawet własną firmę). Żeby znaleźć dobrą pracę powinna się dokształcić, więc w przyszłym tygodniu przejrzy też oferty szkoleń z marketingu i reklamy, a w ciągu miesiąca zapisze się na któreś z nich.</p>
          <img
            src="/surveyE/main__survey__content1__block4__bg.png"
            alt
            class="main__survey__content__bg"
          />
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block4'"></button>
        </div>
        <div class="main__survey__content1__block3 main__survey__content1__block4">
          <h2
            class="main__survey__content__h"
          >Dzięki temu w ciągu roku powinna zostać już marketingowcem na odpowiednim poziomie.</h2>
          <div class="main__survey__content__p left-text main__survey__content1__block3__p">
            Ponieważ zawsze marzyła o swojej firmie marketingowej, to poza zdobyciem doświadczenia zaplanowała też założenie własnej działalności za jakiś czas - to cel na najbliższe kilka lat.
            <br />Po zapisaniu swoich celów Monika poczuła, że wie, co powinna zrobić, aby osiągnąć to, czego pragnie. Przede wszystkim musi wykonać pierwszy mały krok: umówić się na rozmowę z szefem oraz napisać CV. To dało jej nadzieję na poprawę i nabrała większej motywacji do działania.
          </div>
          <img
            src="/surveyH/main__survey__content1__bg2.png"
            alt
            class="main__survey__content__bg2"
          />
        </div>
        <button @click="scrollStateTo2" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==2" class="main__survey__content2">
        <div class="main__survey__content2__block1">
          <div class="main__survey__content2__block1__img">
            <img src="/surveyH/main__survey__content2__block1.png" alt />
          </div>
          <div class="main__survey__content2__block1__p">
            <h2
              class="main__survey__content__h"
            >Gdy jesteśmy w depresji łatwo możemy stracić z oczu nasze cele, obowiązki i plany na przyszłość.</h2>
            <p>Wraz z pogorszeniem się nastroju coraz mniej skupiamy się na tym, co nas napędza, na naszych celach, tym co jest dla nas ważne i co daje nam nadzieję. Tracimy motywację do działania, a to, co kiedyś sprawiało nam przyjemność, przestaje się liczyć.</p>
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content2__block2'"></button>
        </div>
        <div class="main__survey__content2__block2">
          <div class="main__survey__content2__block2__h">
            <h2
              class="main__survey__content__h"
            >W pokonywaniu depresji bardzo ważne jest ustalanie celów. Dzięki temu możemy utrzymać motywację do życia, działania i realizacji marzeń. Nie mając celu jesteśmy jak turysta zagubiony wśród górskich szlaków.</h2>
          </div>
          <p class="main__survey__content__p left-text">
            Pracując nad określeniem celów można zacząć od
            <span
              class="bold"
            >celów krótkoterminowych</span>, czyli na najbliższy dzień, tydzień, miesiąc.
            <br />Co chcesz zrobić w tym tygodniu, co da Ci satysfakcję?
            <br />Co chcesz osiągnąć w tym miesiącu?
            <br />
            <br />Dalej ustalamy
            <span class="bold">cele długoterminowe,</span> na najbliższe lata.
            <br />W jakim miejscu chcesz być, co robić, jak żyć za 5 lat?
            <br />
            <br />Na koniec przychodzi czas na ustalenie swoich
            <span class="bold">celów życiowych.</span>
            <br />Jak ma wyglądać Twoje życie?
            <br />Co chcesz w nim zmienić?
          </p>
          <p class="main__survey__content__p left-text"></p>
          <img src="/surveyH/main__survey__content2__bg.png" alt class="main__survey__content2__bg" />
          <div class="main__survey__content2__block2__img">
            <img src="/surveyH/main__survey__content2__block2.png" alt />
          </div>
          <p class="main__survey__content__p left-text">
            Ustalając swoje cele zadbaj, by były one
            <span class="bold">konkretnie sformułowane</span> i unikaj ogólników. Trudno jest osiągnąć cele ogólne, musisz dokładnie wiedzieć do czego dążysz. Unikaj słów “więcej”, “mniej”, “częściej”. Jeśli Twoim celem jest szczęście, odpowiedz sobie na pytanie co to konkretnie dla Ciebie znaczy być szczęśliwym. Czy znaczy to mieć więcej ludzi wokół siebie? A może mieć rodzinę lub podróżować? Każda z tych rzeczy może być Twoim osobnym celem w dążeniu do szczęścia. Jeśli chcesz mieć więcej przyjaciół, określ konkretnie ich liczbę. W sprecyzowaniu celu pomoże Ci odpowiedź na pytanie: Skąd będziesz wiedział, że osiągnąłeś ten cel? Po czym poznasz?
          </p>
          <div class="main__survey__content2__bg2">
            <img src="main__survey__content2__bg2.png" alt />
          </div>
          <h2 class="main__survey__content__h main__survey__content2__block2__h">
            Zadbaj o ustalenie terminu dla swojego celu. Do kiedy chcesz to zrobić?
            <br />Cel bezterminowy jest wyjątkowo trudny do zrealizowania,
            <br />ale łatwy do przesuwania w czasie.
          </h2>
          <p class="main__survey__content__p left-text">
            Zastanów się, czy Twój cel jest realny i czy jest realne, by został zrealizowany w ustalonym terminie. Czy jest realne, abyś w tym roku objechał świat dookoła? Jaka jest szansa na to, abyś w jeszcze w tym miesiącu kupiła swoje mieszkanie? To bardzo ważne, aby ustalać sobie realne cele, w przeciwnym razie z góry narażamy się na porażkę w ich realizacji. Stawiaj sobie jednak ambitne cele, czyli takie, których realizacja wymaga od Ciebie pewnego wysiłku. Cel jest bowiem czymś więcej niż zadaniem do wykonania.
            <br />Na koniec pomyśl, w jakim stopniu osiągnięcie tego celu zależy od Ciebie. Jaki masz wpływ na jego realizację? Zatrudnienie w Twojej wymarzonej firmie zależy tylko częściowo od Ciebie, ostatecznie to przecież szef decyduje. Z pewnością jednak masz wpływ na to, czy zgłosisz swoją kandydaturę.
          </p>
          <div class="main__survey__content2__block2__img2">
            <img src="/surveyH/main__survey__content2__block2__img2.png" alt />
          </div>
          <h2 class="main__survey__content__h main__survey__content2__block2__h">
            Kiedy już określisz swoje cele zastanów się, co Ci pomoże osiągnąć ten cel i jaki musi być Twój pierwszy krok w tym kierunku, abyś wiedział/wiedziała od czego musisz rozpocząć działanie.
            <br />
            <br />Następnie… zacznij działać.
            <br />
            <br />Bohaterka naszej historii ustaliła swoje cele krótko- i długoterminowe oraz życiowe. Znajdziesz je w kolejnej części.
          </h2>
        </div>
        <img src="/surveyH/main__survey__content2__bg3.png" alt class="main__survey__content2__bg3" />
        <button @click="state++" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==3" class="main__survey__content3">
        <div v-if="subState==1" class="main__survey__content3__block1">
          <h2 class="main__survey__content__h">Ćwiczenie wykonane przez bohatera</h2>
          <div v-if="surveyInfoNum == 1" class="main__survey__content3__block1__presentation">
            <h3 class="bold">CELE KRÓTKOTERMINOWE</h3>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>I</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Jaki jest mój cel do zrealizowania jutro?</p>
                <p class="bold">Po pracy napiszę CV.</p>
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>II</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Jaki jest mój cel do zrealizowania w tym tygodniu?</p>
                <p class="bold">
                  Napiszę maila do szefa.
                  <br />Przejrzę oferty pracy.
                  <br />Poszukam szkoleń z marketingu.
                </p>
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>III</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Jaki jest mój cel do zrealizowania w tym miesiącu?</p>
                <p class="bold">Zapiszę się na jakieś szkolenie z marketingu</p>
              </div>
            </div>
          </div>
          <div v-if="surveyInfoNum == 2" class="main__survey__content3__block1__presentation">
            <h3 class="bold">CELE DŁUGOTERMINOWE</h3>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>I</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Jaki jest mój cel do zrealizowania w tym roku?</p>
                <p class="bold">Znaleźć pracę w branży marketingowej</p>
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>II</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Jakie są moje cele do zrealizowania w ciągu najbliższych 5 lat?</p>
                <p class="bold">Założę własną działalność gospodarczą z branży marketingowej</p>
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>III</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Jakie są moje cele do zrealizowania w ciągu najbliższych 10 lat?</p>
                <p class="bold">Będę się utrzymywać z pracy we własnej firmie marketingowej</p>
              </div>
            </div>
          </div>
          <div v-if="surveyInfoNum == 3" class="main__survey__content3__block1__presentation">
            <h3 class="bold">CELE ŻYCIOWE</h3>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>I</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p>Co jest moim celem życiowym?</p>
                <p class="bold">
                  Praca we własnej firmie.
                  <br />Praca, która daje satysfakcję.
                </p>
              </div>
            </div>
          </div>
          <div class="main__survey__content3__block1__circle content4">
            <div
              v-for="(n,index) in 3"
              :key="n.index"
              :class="{main__survey__content3__block1__circle__elem__viewed: index < surveyInfoNum}"
              class="main__survey__content3__block1__circle__elem content3__block2__circle__elem"
            ></div>
          </div>
          <button
            v-if="surveyInfoNum<3"
            @click="surveyInfoNum++"
            class="main__survey__button"
          >Następne</button>
          <button v-else @click="subState++" class="main__survey__button">Dalej</button>
        </div>
        <div v-if="subState==2" class="main__survey__content3__block4">
          <h2
            class="main__survey__content__h"
          >Odpowiedz na pytania poniżej, aby określić swoje cele na przyszłość. Pamiętaj aby Twoje cele były:</h2>
          <div class="main__survey__content3__block4__info">
            <p>konkretne</p>
            <p>określone w czasie</p>
            <p>realne</p>
            <p>ambitne</p>
            <p>zależne od Ciebie</p>
          </div>
          <div class="main__survey__content3__block1__presentation">
            <h3 class="bold">CELE KRÓTKOTERMINOWE</h3>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>I</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Jaki jest mój cel do zrealizowania jutro?</p>
                <input type="text" v-model="userThought[0].thought" />
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>II</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Jaki jest mój cel do zrealizowania w tym tygodniu?</p>
                <input type="text" v-model="userThought[1].thought" />
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>III</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Jaki jest mój cel do zrealizowania w tym miesiącu?</p>
                <input type="text" v-model="userThought[2].thought" />
              </div>
            </div>
          </div>
          <div class="main__survey__content3__block1__presentation">
            <h3 class="bold">CELE DŁUGOTERMINOWE</h3>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>I</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Jaki jest mój cel do zrealizowania w tym roku?</p>
                <input type="text" v-model="userThought[3].thought" />
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>II</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Jakie są moje cele do zrealizowania w ciągu najbliższych 5 lat?</p>
                <input type="text" v-model="userThought[4].thought" />
              </div>
            </div>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>III</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Jakie są moje cele do zrealizowania w ciągu najbliższych 10 lat?</p>
                <input type="text" v-model="userThought[5].thought" />
              </div>
            </div>
          </div>
          <div class="main__survey__content3__block1__presentation">
            <h3 class="bold">CELE ŻYCIOWE</h3>
            <div class="main__survey__content3__block1__presentation__elem">
              <div class="main__survey__content3__block1__presentation__elem__circle">
                <p>I</p>
              </div>
              <div class="main__survey__content3__block1__presentation__elem__text">
                <p class="bold">Co jest moim celem życiowym?</p>
                <input type="text" v-model="userThought[6].thought" />
              </div>
            </div>
          </div>

          <button @click="saveAnswersD" class="main__survey__button">Zapisz</button>
          <button
            @click="subState++, surveyInfoChooseRandomNum = generateArrayRandomNumber(0,17)"
            class="main__survey__button main__survey__content3__block4__button"
          >Pomiń</button>
          <div v-if="showPopUp" class="survay-save-success-background">
            <div class="survay-save-success">
              <h3 class="main__survey__content__h">Zapisano</h3>
            </div>
          </div>
        </div>
        <div v-if="subState==3" class="main__survey__content3__block2">
          <h1 class="main__survey__content__h">
            Poniżej znajdziesz przykłady celów.
            <br />Przeczytaj je i zaznacz, czy poszczególne cele spełniają kryteria:
          </h1>
          <div class="main__survey__content3__block2__info">
            <p>Sprecyzowany (konkretnie sformułowany, aby nie było wątpliwości co jest celem),</p>
            <p>Realny (możliwe do zrealizowania w danym czasie i okolicznościach),</p>
            <p>Określony w czasie (ma określony termin realizacji),</p>
            <p>Zależny od osoby wyznaczającej sobie cel.</p>
          </div>
          <h1 class="main__survey__content__h2">
            Cecha ambitności celu została pominięta, ponieważ często zależy od
            <br />kontekstu, w którym znajduje się dana osoba.
          </h1>
          <div class="main__survey__content3__block1__section">
            <p class="main__survey__content3__block1__section__header__top">Kryteria</p>
            <div class="main__survey__content3__block1__section__header__block">
              <p class="main__survey__content3__block1__section__header__left">Cele</p>
              <div class="main__survey__content3__block1__section__header">
                <p class="main__survey__content3__block1__section__header__elem">Sprecyzowany</p>
                <p class="main__survey__content3__block1__section__header__elem">Realny</p>
                <p class="main__survey__content3__block1__section__header__elem">Określony w czasie</p>
                <p
                  class="main__survey__content3__block1__section__header__elem"
                >Zależny w pełni ode mnie</p>
              </div>
            </div>
            <div class="main__survey__content3__block1__section__body">
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Po wakacjach rozpocznę naukę jakiegoś języka</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="checkbox" id="one" value="1" v-model="surveyInfo[0].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="checkbox" id="two" value="2" v-model="surveyInfo[0].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="checkbox" id="two" value="3" v-model="surveyInfo[0].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="checkbox" id="two" value="4" v-model="surveyInfo[0].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Schudnę do Sylwestra</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[1].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[1].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[1].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[1].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Zaraz po uzyskaniu dyplomu rozpocznę poszukiwanie pracy</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[2].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[2].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[2].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[2].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Mam 25 lat, jestem singlem. W ciągu 5 lat wyjdę za mąż</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[3].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[3].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[3].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[3].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Mam 20 tys. zł. oszczędności. Gdy odłożę 30 tys złotych pojadę w podróż do USA.</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[4].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[4].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[4].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[4].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Mój samochód jest stary i zbyt często się psuje. Mam odłożone pieniądze, więc kupię sobie najnowszą wersję tego samochodu</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[5].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[5].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[5].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[5].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>W ciągu kolejnego weekendu sam wyremontuję całe mieszkanie</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[6].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[6].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[6].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[6].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>W poniedziałek po szkole kupię karnet do fitness klubu na moim osiedlu</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[7].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[7].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[7].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[7].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Jutro znajdę jakąś pracę</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[8].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[8].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[8].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[8].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Zacznę się leczyć na depresję</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="1" v-model="surveyInfo[9].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyInfo[9].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyInfo[9].option" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="4" v-model="surveyInfo[9].option" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <!-- <div class="main__survey__content3__block1__section__elem">
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
              <div class="main__survey__content3__block1__section__elem__box">
                <p>{{surveyInfo[surveyInfoNum].option}}</p>
              </div>
              <img
                v-show="surveyInfoNum<7"
                @click="nextSurveyInfo"
                src="/ico-nav-slide-right.svg"
                alt
              />
            </div>-->
          </div>
          <button @click="subState++" class="main__survey__button">Zapisz</button>
          <div v-if="showPopUp" class="survay-save-success-background">
            <div class="survay-save-success">
              <h3 class="main__survey__content__h">Zapisano</h3>
            </div>
          </div>
        </div>
        <div v-if="subState==4" class="main__survey__content3__block3">
          <h1
            class="main__survey__content__h"
          >Przeczytaj dokładnie poniższe pytania dotyczące materiału i wybierz prawidłową odpowiedź.</h1>
          <p class="main__survey__content__p2">Tylko jedna odpowiedź jest prawdziwa.</p>
          <div v-if="surveyCNum == 1" class="main__survey__content3__block3__elem">
            <h3 class="main__survey__content__h3">1. Przykładem celu konkretnego jest:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[0] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                Będę spacerował
                <input type="radio" id="one" value="2" v-model="surveyC[0]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Będę dużo spacerował
                <input type="radio" id="two" value="11" v-model="surveyC[0]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Będę częściej spacerował
                <input type="radio" id="two" value="3" v-model="surveyC[0]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Będę spacerował dwa razy w tygodniu
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[0]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">2. Przykładem celu określonego w czasie jest:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[1] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                Wyjadę na wakacje
                <input type="radio" id="one" value="11" v-model="surveyC[1]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Wyjadę na wakacje za dwa miesiące
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Wkrótce wyjadę na wakacje
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Kiedyś wyjadę na wakacje.
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">3. Cele realne:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[2] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                wymagają pomocy innych osób
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                są niezależne od sytuacji zewnętrznej
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                da się zrealizować w danym miejscu i czasie
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                to inaczej zadanie do wykonania
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">4. Cele ambitne:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[3] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                są realizowane samodzielnie
                <input
                  type="radio"
                  value="2"
                  id="one"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wymagają wysiłku
                <input type="radio" id="two" :value="true" v-model="surveyC[3]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                powinny być jak najprostsze
                <input
                  type="radio"
                  id="two"
                  value="11"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                nie muszą być realne
                <input type="radio" id="two" value="4" v-model="surveyC[3]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">5. Cele zależne ode mnie charakteryzują się:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[4] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                kontrolą nad ich realizacją
                <input
                  type="radio"
                  id="one"
                  :value="true"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                brakiem kontroli nad ich realizacją
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                zaangażowaniem innych osób
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                samodzielną realizacją
                <input type="radio" id="two" value="4" v-model="surveyC[4]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">6. Ustalenie celów umożliwia:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[5] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                zaangażowanie innych do działania
                <input
                  type="radio"
                  id="one"
                  value="2"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                utrzymanie motywacji
                <input type="radio" id="two" :value="true" v-model="surveyC[5]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                uniknąć odpowiedzialności za ich realizację
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                przesuwanie ich w czasie
                <input
                  type="radio"
                  id="two"
                  value="11"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3
              class="main__survey__content__h3"
            >7. Wraz z pogarszaniem się nastroju coraz mniej skupiamy się na celach:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[6] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                krótkoterminowych
                <input type="radio" id="one" value="4" v-model="surveyC[6]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                długoterminowych
                <input type="radio" id="two" value="2" v-model="surveyC[6]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                życiowych
                <input type="radio" id="two" value="3" v-model="surveyC[6]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wszystkich powyższych.
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[6]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div v-if="surveyCNum == 2" class="main__survey__content3__block3__elem">
            <h3 class="main__survey__content__h3">8. Marzeniem Moniki jest:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[7] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                dalszy rozwój rodziny
                <input type="radio" id="one" value="11" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                rozwój osobisty
                <input type="radio" id="two" value="3" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                satysfakcja z pracy zawodowej
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[7]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                uznanie w oczach koleżanek
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[7]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">9. Krótkoterminowym celem Moniki było:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[8] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                założenie firmy
                <input type="radio" id="one" value="2" v-model="surveyC[8]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                napisanie CV
                <input type="radio" id="two" :value="true" v-model="surveyC[8]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                satysfakcja z pracy
                <input type="radio" id="two" value="3" v-model="surveyC[8]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                zdobycie doświadczenia zawodowego
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[8]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">10. Aby zmienić swoją sytuację Monika postanowiła:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[9] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                porozmawiać z Adamem
                <input type="radio" id="one" value="11" v-model="surveyC[9]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                założyć działalność gospodarczą
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                czekać na rozwój sytuacji
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                rozpisać swoje cele
                <input type="radio" id="two" :value="true" v-model="surveyC[9]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">11. Monika zaczęła od zaplanowania celów:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[10] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                krótkoterminowych
                <input type="radio" id="one" :value="true" v-model="surveyC[10]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                średnioterminowych
                <input type="radio" id="two" value="2" v-model="surveyC[10]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                długoterminowych
                <input type="radio" id="two" value="3" v-model="surveyC[10]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                bez określonej kolejności.
                <input
                  type="radio"
                  id="two"
                  value="11"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">12. Po zapisaniu swoich celów Monika:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[11] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                nie wiedziała od czego zacząć
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[11]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wiedziała, co powinna zrobić
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[11]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                potrzebowała pomocy w ich realizacji
                <input
                  type="radio"
                  value="2"
                  id="two"
                  v-model="surveyC[11]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                nie wierzyła w ich realizację.
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[11]"
                />
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
            <p
              class="main__survey__content__p2"
            >14. Wykonałbym/wykonałabym takie zadanie, gdyby było ono zaprezentowane w produkcie do komputerowej psychoterapii depresji.</p>
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
            <textarea v-model="an16" placeholder="Maksymalnie 250 znaków"></textarea>
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

import JsonExcel from "vue-json-excel";

export default {
  layout: "survey",
  components: { "download-excel": JsonExcel },
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
        objawy_atrakcyjnosc_tabela: "Zadanie1_atrakcyjnosc_tabela",
        objawy_skutecznosc_cwiczenie1: "Zadanie2_skutecznosc_objawy0",
        objawy_skutecznosc_cwiczenie2: "Zadanie2_skutecznosc_objawy1",
        objawy_skutecznosc_cwiczenie3: "Zadanie2_skutecznosc_objawy2",
        objawy_skutecznosc_cwiczenie4: "Zadanie2_skutecznosc_objawy3",
        objawy_skutecznosc_cwiczenie5: "Zadanie2_skutecznosc_objawy4",
        objawy_skutecznosc_cwiczenie6: "Zadanie2_skutecznosc_objawy5",
        objawy_skutecznosc_cwiczenie7: "Zadanie2_skutecznosc_objawy6",
        objawy_skutecznosc_cwiczenie8: "Zadanie2_skutecznosc_objawy7",
        objawy_skutecznosc_cwiczenie9: "Zadanie2_skutecznosc_objawy8",
        objawy_skutecznosc_cwiczenie10: "Zadanie2_skutecznosc_objawy9",
        objawy_skutecznosc_cwiczenie11: "Zadanie2_skutecznosc_objawy10",
        objawy_skutecznosc_cwiczenie12: "Zadanie2_skutecznosc_objawy11",
        objawy_skutecznosc_cwiczenie13: "Zadanie2_skutecznosc_objawy12",
        objawy_skutecznosc_cwiczenie14: "Zadanie2_skutecznosc_objawy13",
        objawy_skutecznosc_cwiczenie15: "Zadanie2_skutecznosc_objawy14",
        objawy_skutecznosc_cwiczenie16: "Zadanie2_skutecznosc_objawy15",
        objawy_skutecznosc_cwiczenie17: "Zadanie2_skutecznosc_objawy16",
        objawy_skutecznosc_cwiczenie18: "Zadanie2_skutecznosc_objawy17",
        objawy_skutecznosc_test1: "Zadanie3_skutecznosc_testy0",
        objawy_skutecznosc_test2: "Zadanie3_skutecznosc_testy1",
        objawy_skutecznosc_test3: "Zadanie3_skutecznosc_testy2",
        objawy_skutecznosc_test4: "Zadanie3_skutecznosc_testy3",
        objawy_skutecznosc_test5: "Zadanie3_skutecznosc_testy4",
        objawy_skutecznosc_test6: "Zadanie3_skutecznosc_testy5",
        objawy_skutecznosc_test7: "Zadanie3_skutecznosc_testy6",
        objawy_skutecznosc_test8: "Zadanie3_skutecznosc_testy7",
        objawy_skutecznosc_test9: "Zadanie3_skutecznosc_testy8",
        objawy_skutecznosc_test10: "Zadanie3_skutecznosc_testy9",
        objawy_skutecznosc_test11: "Zadanie3_skutecznosc_testy10",
        objawy_skutecznosc_test12: "Zadanie3_skutecznosc_testy11",
        objawy_atrakcyjnosc_ankieta1: "an1",
        objawy_atrakcyjnosc_ankieta2: "an2",
        objawy_atrakcyjnosc_ankieta3: "an3",
        objawy_atrakcyjnosc_ankieta4: "an4",
        objawy_atrakcyjnosc_ankieta5: "an5",
        objawy_atrakcyjnosc_ankieta6: "an6",
        objawy_atrakcyjnosc_ankieta7: "an7",
        objawy_atrakcyjnosc_ankieta8: "an8",
        objawy_atrakcyjnosc_ankieta9: "an9",
        objawy_atrakcyjnosc_ankieta10: "an10",
        objawy_atrakcyjnosc_ankieta11: "an11",
        objawy_atrakcyjnosc_ankieta12: "an12",
        objawy_atrakcyjnosc_ankieta13: "an13",
        objawy_atrakcyjnosc_ankieta14: "an14",
        objawy_atrakcyjnosc_ankieta15: "an15",
        objawy_atrakcyjnosc_ankieta16: "an16"
      },
      json_data: [],
      state: 1,
      subState: 1,
      surveyInfo: [
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        },
        {
          name: "",
          option: null
        }
      ],
      surveyInfoNum: 1,
      userThought: [
        {
          thought: null
        },
        {
          thought: null
        },
        {
          thought: null
        },
        {
          thought: null
        },
        {
          thought: null
        },
        {
          thought: null
        },
        {
          thought: null
        }
      ],
      surveyInfoChoose: [
        {
          name: "Nie mam na nic siły.",
          option: false
        },
        {
          name: "Ludziom nie można ufać.",
          option: false
        },
        {
          name:
            "Adam kiedyś bardzo lubił chodzić na siłownię, ale od dłuższego czasu nie ma to ochoty ani energii.",
          option: false
        },
        {
          name: "Moje życie nie ma sensu",
          option: false
        },
        {
          name: "Mam sto pomysłów na minutę.",
          option: false
        },
        {
          name: "Nie mogę się zdecydować, czy podjąć studia.",
          option: false
        },
        {
          name: "To moja wina, że moje życie jest takie beznadziejne.",
          option: false
        },
        {
          name:
            "Małgosia od kilku tygodni zamknęła się w domu, unika kontaktu z ludźmi.",
          option: false
        },
        {
          name:
            "Czytam gazetę ale nie wiem co czytam, kompletnie nie mogę się skupić.",
          option: false
        },
        {
          name: "Agnieszka czuje się spokojna.",
          option: false
        },
        {
          name: "Kocham życie!",
          option: false
        },
        {
          name: "Nikt nie może mi pomóc.",
          option: false
        },
        {
          name: "Paulina jest energiczną dziewczyną i ma wiele zainteresowań.",
          option: false
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
      loginedUser: null,
      saved: false
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
    saveAnswersB(answer) {
      this.surveyInfoChooseAnswer = answer;
      if (
        this.surveyInfoChoose[
          this.surveyInfoChooseRandomNum[this.surveyInfoChooseNum]
        ].option === answer
      ) {
        this.surveyInfoChoose[
          this.surveyInfoChooseRandomNum[this.surveyInfoChooseNum]
        ].choosedOption = 1;
      } else {
        this.surveyInfoChoose[
          this.surveyInfoChooseRandomNum[this.surveyInfoChooseNum]
        ].choosedOption = 0;
      }
      setTimeout(() => {
        if (this.surveyInfoChooseNum < 17) {
          this.surveyInfoChooseAnswer = null;
          this.surveyInfoChooseNum++;
        } else {
          this.surveyInfoChooseAnswer = "done";
        }
      }, 500);
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
      this.surveyInfoChooseRandomNum = this.generateArrayRandomNumber(0, 17);
      this.surveyInfo.forEach(element => {
        if (element.option != null) {
          this.userTextAnswer = 1;
        }
      });
      setTimeout(() => {
        firstScrollTo("main");
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
            if (this.saved) {
              // this.$router.replace("/logined");
            }
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
      for (let index = 0; index < this.surveyC.length; index++) {
        if (this.surveyC[index] != true) {
          this.surveyC[index] = 0;
        } else {
          this.surveyC[index] = 1;
        }
      }
      for (let index = 0; index < this.surveyInfoChoose.length; index++) {
        if (this.surveyInfoChoose[index].choosedOption != true) {
          this.surveyInfoChoose[index] = 0;
        } else {
          this.surveyInfoChoose[index] = 1;
        }
      }
      this.json_data = [
        {
          user: fb.auth().currentUser.uid,
          user_email: fb.auth().currentUser.email,
          survey: "objawy_depresji_brak_personalizacji",
          Zadanie1_atrakcyjnosc_tabela: this.userTextAnswer,
          Zadanie2_skutecznosc_objawy0: this.surveyInfoChoose[0],
          Zadanie2_skutecznosc_objawy1: this.surveyInfoChoose[1],
          Zadanie2_skutecznosc_objawy2: this.surveyInfoChoose[2],
          Zadanie2_skutecznosc_objawy3: this.surveyInfoChoose[3],
          Zadanie2_skutecznosc_objawy4: this.surveyInfoChoose[4],
          Zadanie2_skutecznosc_objawy5: this.surveyInfoChoose[5],
          Zadanie2_skutecznosc_objawy6: this.surveyInfoChoose[6],
          Zadanie2_skutecznosc_objawy7: this.surveyInfoChoose[7],
          Zadanie2_skutecznosc_objawy8: this.surveyInfoChoose[8],
          Zadanie2_skutecznosc_objawy9: this.surveyInfoChoose[9],
          Zadanie2_skutecznosc_objawy10: this.surveyInfoChoose[10],
          Zadanie2_skutecznosc_objawy11: this.surveyInfoChoose[11],
          Zadanie2_skutecznosc_objawy12: this.surveyInfoChoose[12],
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
      // if (fb.auth().currentUser.uid) {
      //   db.collection("survey")
      //     .add({
      //       user: fb.auth().currentUser.uid,
      //       user_email: fb.auth().currentUser.email,
      //       survey: "Fakty i interpretacje",
      //       Zadanie1_atrakcyjnosc_tabela: this.userTextAnswer,
      //       Zadanie2_skutecznosc_objawy: this.surveyInfoChoose,
      //       Zadanie3_skutecznosc_testy: this.surveyC,
      //       an1: this.an1,
      //       an2: this.an2,
      //       an3: this.an3,
      //       an4: this.an4,
      //       an5: this.an5,
      //       an6: this.an6,
      //       an7: this.an7,
      //       an8: this.an8,
      //       an9: this.an9,
      //       an10: this.an10,
      //       an11: this.an11,
      //       an12: this.an12,
      //       an13: this.an13,
      //       an14: this.an14,
      //       an15: this.an15,
      //       an16: this.an16
      //     })
      //     .then((this.saved = true));
      // }
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
    main {
      padding-top: 15.540741vh;
    }
    .main__survey__content2__block3__p {
      margin-top: 19.259259vh;
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
.left-text {
  text-align: left !important;
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
  margin: 2.314814814814815vh auto 4.64814814814815vh;
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
  font: 1.438rem/1.875rem "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
  text-align: center;
}
.main__survey__content__h2 {
  text-align: center;
  font: 1.563rem/1 "Montserrat-bold", century gothic, sans-serif;
  letter-spacing: 0.03em;
  color: #000000;
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
  width: 54.89583333333333%;
  margin: 2.777777777777778vh auto 0;
  font: 1.125rem/1.875 "Montserrat", century gothic, sans-serif;
  letter-spacing: 0.04em;
  text-align: center;
}
// .main__survey__content p::first-letter {
//   font: 1.12rem/1.725 "Montserrat-bold", century gothic, sans-serif;
// }
.main__survey__content__p2 {
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
.main__survey__content1 {
  .main__survey__button {
    margin-top: 9.259259259259259vh;
    margin-bottom: 7.407407407407407vh;
  }
}
.main__survey__content1__block1 {
  margin-top: 9.259259259259259vh;
  // height: 96.2962962962963vh;
  h2 {
    margin-left: 49.58333333333333%;
    width: 35.15625%;
    text-align: left;
  }
  .main__survey__content__p {
    text-align: left;
    margin-top: 39.81481481481481vh;
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
  width: 33.75%;
  p:first-of-type {
    margin-top: 0.9259259259259259vh;
  }
}
.main__survey__content1__block1__arrow {
  margin: 9.259259259259259vh auto 0;
}

.main__survey__content1__block2 {
  padding-top: 4.791666666666667vh;
  position: relative;
  .main__survey__content1__block2__p-bottom {
    margin: -7.5rem auto 0 auto;
  }
  .button-arrow {
    margin-top: 9.259259259259259vh;
    position: relative;
    z-index: 2;
  }
}
.main__survey__content1__block2__img {
  width: 61.9799%;
  margin: 4.444444444444444vh auto 0;
  img {
    width: 100%;
  }
}
.main__survey__content__bg2 {
  width: 34.65104166666667%;
  left: 30.05208333333333%;
  bottom: -18vh;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content__bg {
  width: 58.153125%;
  left: 18.923437%;
  bottom: -28.6vh;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
  }
}
.main__survey__content1__block3 {
  position: relative;
  padding-top: 7.87037037037037vh;
  h2 {
    width: 100%;
    margin: 0 auto;
  }
  .left-text:last-of-type {
    margin-top: 9.259259259259259vh;
  }
  .main__survey__content__bg {
    bottom: 0;
  }
  .button-arrow {
    margin-top: 7.87037037037037vh;
  }
}
.main__survey__content1__block3__img {
  width: 60.61927083333333%;
  margin: 0 auto 0 22%;
  img {
    width: 100%;
  }
}
.main__survey__content1__block3__p {
  width: 54.89583333333333%;
  margin: 4.62962962962963vh auto 11.11111111111111vh;
}
.main__survey__content2 {
  padding-bottom: 7.222222222222222vh;
  button {
    margin-top: 11.3vh;
  }
}
.main__survey__content2__bg3 {
  width: 60.12083333333333%;
  left: 15.41666666666667%;
  bottom: 34vh;
  position: absolute;
}
.main__survey__content2__bg2 {
  width: 60.12083333333333%;
  left: 10.41666666666667%;
  bottom: 46vh;
  position: absolute;
}
.main__survey__content2__bg {
  width: 60.12083333333333%;
  left: 10.41666666666667%;
  position: absolute;
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
  width: 29.21875%;
  margin-left: 49.58333333333333%;
  margin-bottom: 20vh;
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
  padding-top: 21.66666666666667vh;
  position: relative;
  .main__survey__content2__bg {
    top: 21.66666666666667vh;
  }
  .main__survey__content2__block2__h:first-of-type {
    margin-top: 0;
  }
}
.main__survey__content2__block2__img {
  width: 68.18854166666667%;
  margin: 5.208333333333333vh auto 7.8125vh;
  img {
    width: 100%;
  }
}
.main__survey__content2__block2__img2 {
  width: 60.61927083333333%;
  margin: 9.259259259259259vh auto 0;
}
.main__survey__content2__block2__h {
  width: 54.89583333333333%;
  margin: 12.96296296296296vh auto 5.555555555555556vh;
}
.main__survey__content2__block2__h-bg {
  width: 65.72916666666667%;
  left: 17.5%;
  top: 13.2vh;
  position: absolute;
}
.main__survey__content2__block3 {
  margin-top: 25.92592592592593vh;
  display: flex;
  justify-content: center;
}
.main__survey__content2__block3__img {
  width: 13.02083333333333%;
  margin-right: 5.208333333333333%;
  img {
    width: 100%;
  }
}
.main__survey__content2__block3__text {
  width: 34.0625%;
  margin-top: 4vh;
}
.main__survey__content2__block3__text__elem {
  ul {
    margin-top: 3.703703703703704vh;
    margin-bottom: 7.407407407407407vh;
    li {
      margin-bottom: 1.388888888888889vh;
      padding-left: 36px;
      font: 1rem/1.875 "Montserrat", century gothic, sans-serif;
    }
    li::before {
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
.main__survey__content2__block3__text__elem:last-of-type {
  ul {
    margin-bottom: 0;
  }
}
.main__survey__content2__block4 {
  position: relative;
  padding: 13.88888888888889vh 0;
  h2 {
    width: 60.0625%;
    margin: 0 auto;
  }
}
.main__survey__content2__block4__bg {
  width: 65.72916666666667%;
  top: -7vh;
  left: 17%;
  position: absolute;
}
.main__survey__content2__block5 {
  display: flex;
  justify-content: center;
  position: relative;
  p {
    width: 34.58125%;
    margin: 6vh 0 0 0;
    text-align: left;
    z-index: 1;
  }
}
.main__survey__content2__block5__img {
  width: 19.79166666666667%;
  margin-left: 2.604166666666667%;
}
.main__survey__content2__block5__bg {
  width: 56.77083333333333%;
  top: 0;
  left: 9.3%;
  position: absolute;
  img {
    height: 100%;
  }
}
.main__survey__content2__block6 {
  margin-top: 33.33333333333333vh;
  position: relative;
  h2 {
    width: 57%;
    margin: 0 auto;
  }
}
.main__survey__content2__block6__bg {
  width: 65.74583333333333%;
  top: -10.4vh;
  left: 17.4%;
  position: absolute;
}

.main__survey__content3__block1 {
  .main__survey__button {
    margin: 6.481481481481481vh auto 3.240740740740741vh;
  }
  .main__survey__content3__block1__circle {
    div {
      width: 12px;
      height: 12px;
    }
  }
}
.main__survey__content3__block1__presentation {
  width: 52.08333333333333%;
  min-height: 473px;
  margin: 1.851851851851852vh auto 0;
  padding: 3.703703703703704vh 0;
  background: #ffffff;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  h3 {
    margin-bottom: 3.703703703703704vh;
    color: #5690ff;
    text-align: center;
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
  }
  .main__survey__content3__block1__presentation__elem {
    padding-left: 21%;
    display: flex;
    margin-bottom: 6.018518518518519vh;
    &:last-of-type {
      margin: 0;
    }
    .main__survey__content3__block1__presentation__elem__circle {
      width: 50px;
      height: 50px;
      margin-right: 3.6%;
      border-radius: 50px;
      border: 1px solid #5690ff;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.main__survey__content3__block1__section {
  width: 70.98958333333333%;
  margin: 5.555555555555556vh auto 6.018518518518519vh;
}
.main__survey__content3__block1__section__header__top {
  width: 77.98972853998533%;
  margin: 0 0 1.851851851851852vh 22.01027146001467%;
  background: #3065ec;
  border: 1px solid #3065ec;
  box-sizing: border-box;
  border-radius: 50px;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
}
.main__survey__content3__block1__section__header__block {
  display: flex;
  margin-bottom: 3.703703703703704vh;
}
.main__survey__content3__block1__section__header__left {
  width: 22.01027146001467%;
  font-size: 1rem;
  text-align: center;
  background: #3065ec;
  border: 1px solid #3065ec;
  box-sizing: border-box;
  border-radius: 50px;
  color: #fff;
}
.main__survey__content3__block1__section__header {
  width: 77.98972853998533%;
  display: flex;
}
.main__survey__content3__block1__section__header__elem {
  width: 25%;
  box-sizing: border-box;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #3065ec;
  border-right: none;
  color: #3065ec;
  &:first-of-type {
    border-radius: 50px 0 0 50px;
  }
  &:last-of-type {
    border-right: 1px solid #3065ec;
    border-radius: 0 50px 50px 0;
  }
}
.main__survey__content3__block1__section__body__elem {
  min-height: 70px;
  display: flex;
  border-left: 1px solid #3065ec;
  border-radius: 50px;
  .main__elem__radio {
    width: 77.98972853998533%;
    margin: 0 !important;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .main__elem__radio {
    margin-bottom: 0 !important;
  }
  .checkmark {
    top: 0;
    width: 22.1px;
    height: 22px;
    border: 2px solid #3065ec !important;
  }
  .main__elem__radio-button {
    width: 26px;
    height: 26px;
    padding: 0 !important;
    margin-bottom: 0 !important;
  }
  .main__elem__radio-button .checkmark:after {
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
  }
  &:last-of-type {
    .main__survey__content3__block1__section__body__elem__header {
      border-bottom: 1px solid #3065ec;
    }
  }
}
.main__survey__content3__block1__section__body__elem:nth-of-type(2n-1) {
  background-color: #f4f4f4;
  border: 1px solid #3065ec;
  border-radius: 50px;
  padding: 0.1px;
}
.main__survey__content3__block1__section__body__elem__header {
  width: 22.01027146001467%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #3065ec;
  border-radius: 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  p {
    color: #3065ec;
    text-align: center;
    font-size: 1rem;
  }
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
  h1 {
    margin-bottom: 3.240740740740741vh;
  }
  button {
    margin: 9.259259259259259vh auto;
  }
}
.main__survey__content3__block2__info {
  width: 48.8%;
  margin: 0 auto 3.240740740740741vh;
  p {
    margin-bottom: 2.314814814814815vh;
    padding-left: 30px;
    background-image: url("/ico-atention.png");
    background-position: 0 4px;
    background-repeat: no-repeat;
    background-size: 20px;
    font-size: 1.25rem;
  }
}
.main__survey__content3__block2__table {
  width: 41.14583333333333%;
  margin: 0 auto;
}
.main__survey__content3__block2__table__header {
  border: 1px solid #3065ec;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  p {
    width: 50%;
    text-align: center;
    &:first-of-type {
      border-right: 1px solid #3065ec;
    }
  }
}
.main__survey__content3__block2__table__body {
  margin-top: 1.851851851851852vh;
  .main__survey__content3__block1__section__body__elem__header,
  .main__elem__radio {
    width: 50%;
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
  margin-bottom: 7.87037037037037vh;
  .main__survey__content3__block1__presentation {
    min-height: unset;
    margin-bottom: 7.87037037037037vh;
  }
  .main__survey__content3__block1__presentation__elem {
    padding: 0 13.5% 0 5%;
  }
  .main__survey__content3__block1__presentation__elem__text {
    width: 72.6%;
    input {
      width: 100%;
      margin-top: 0.9259259259259259vh;
      padding: 16px;
      min-height: 50px;
      background: #fbfbfb;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      border-radius: 20px;
    }
  }
}
.main__survey__content3__block4__info {
  width: 47.13541666666667%;
  margin: 2.314814814814815vh auto 0;
  display: flex;
  justify-content: space-between;
  p {
    padding-left: 30px;
    background-image: url("/ico-atention.png");
    background-position: 0 4px;
    background-repeat: no-repeat;
    background-size: 20px;
  }
}
.content3__block4__section h2 {
  width: 26.04166666666667%;
  margin: 0;
}
.main__survey__content3__block4__section__elem__box-input {
  width: 78.125%;
  margin: 0 auto;
  display: flex;
  input {
    width: 33.33333333333333%;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #3065ec;
    border-bottom: none;
  }
  input:first-of-type {
    border-radius: 50px 0 0 50px;
    border-right: none;
  }
  input:nth-of-type(2) {
    border-right: none;
  }
  input:last-of-type {
    border-radius: 0 50px 50px 0;
  }
  input::placeholder {
    font: 1rem/1.125 "Montserrat", century gothic, sans-serif;
  }
}
.main__survey__content3__block4__section__elem__box-input:last-of-type {
  input {
    border-bottom: 1px solid #3065ec;
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