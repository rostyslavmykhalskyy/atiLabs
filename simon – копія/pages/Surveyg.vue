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
            <img src="/surveyG/main__survey__content1__block1.png" alt />
          </div>
          <h2 class="main__survey__content__h">Alicja jest 50-letnią kobietą.</h2>
          <div class="main__survey__content1__block1__p">
            <p>Prowadzi znany w mieście zakład krawiecki, w którym szyje suknie ślubne. Zawsze niezależna finansowo – była nawet w stanie wspomagać swoje dorosłe już dzieci. Jednak jej świat został wywrócony do góry nogami przez wypadek samochodowy. Od tamtego czasu Alicja ma nie w pełni sprawną prawą rękę, cierpi na częste bóle głowy i kręgosłupa. Lekarz zalecił jej pracę w niepełnym wymiarze godzin, jednak Alicja nie mogła na to przystać. “Nie jestem przecież kaleką” – pomyślała. Dlatego, pomimo zaleceń, kobieta pracowała na pełen etat, aż któregoś dnia ból nie pozwolił jej na dalszą pracę.</p>
          </div>
          <p class="main__survey__content__p">
            Po tej sytuacji Alicja trafiła na kilkumiesięczne zwolnienie. Jej oszczędności topniały, ale problemy ze zdrowiem nie pozwalały na powrót do pracy. Nie wiedziała, co z nią będzie. Musiała czekać na decyzję w sprawie renty.
            <br />Dla tak niezależnej kobiety jak Alicja, czekanie bez możliwości zrobienia czegokolwiek, żeby poprawić swoją sytuację, było prawdziwą udręką. “Jestem całkowicie bezwartościowa” – myślała coraz częściej. Jej nastrój pogarszał się z dnia na dzień. Ograniczyła spotkania ze znajomymi.
          </p>
          <button
            class="button-arrow main__survey__content1__block1__arrow"
            v-scroll-to="'.main__survey__content1__block2'"
          ></button>
        </div>
        <div class="main__survey__content1__block2">
          <h2 class="main__survey__content__h">Kiedy lekarz rodzinny polecił jej psychoterapię...</h2>
          <p
            class="main__survey__content__p"
          >...Alicja była gotowa ją podjąć. Chciała poprawić swoje samopoczucie. Jednak kiedy dowiedziała się, że najbliższy wolny termin wypada za kilka miesięcy, poczuła jak ogarnia ją frustracja. Lekarz poinformował ją, że zamiast czekać w kolejce do specjalisty może odbyć terapię komputerową, w czasie której zdobędzie wiedzę i umiejętności podobne do tych przekazywanych podczas tradycyjnej psychoterapii.</p>
          <div class="main__survey__content1__block2__img"></div>
          <div class="main__survey__content1__block2__img">
            <img src="/surveyG/main__survey__content1__block2.png" alt />
          </div>
          <p
            class="main__survey__content__p main__survey__content1__block2__p-bottom"
          >Alicja miała wiele wątpliwości. “Jak komputer mógłby prowadzić moją terapię?” – zastanawiała się. Psychoterapeucie jeszcze by zaufała, ale terapia komputerowa nie była na jej nerwy. Od lekarza wyszła zdezorientowana. Nie była przekonana, czy ma ochotę pakować się w coś takiego.</p>
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block3'"></button>
          <img
            src="/surveyE/main__survey__content1__block4__bg.png"
            alt
            class="main__survey__content__bg"
          />
        </div>
        <div class="main__survey__content1__block3">
          <h2 class="main__survey__content__h">W drodze do domu spotkała znajomą.</h2>
          <p
            class="main__survey__content__p main__survey__content1__block3__p"
          >Alicja nie miała chęci na towarzystwo, ale przekładała wspólne wyjście na kawę tak długo, że głupio jej było odmówić. Znajoma jest bardzo gadatliwą osobą i chciała koniecznie opowiedzieć jej, co się działo, odkąd się ostatnio widziały.</p>
          <div class="main__survey__content1__block3__img">
            <img src="/surveyG/main__survey__content1__block3.png" alt />
          </div>
          <p class="main__survey__content__p left-text">
            – A pamiętasz syna Mieci, no tego, co zawsze taki gburowaty był? – opowiadała z pasją, a Alicja tylko potakiwała. – No to się okazało, proszę ja ciebie, że on depresje ma, a nie jest gbur!
            <br />“A to ciekawe” – pomyślała Alicja. Nie dała nic po sobie poznać, jednak ten wątek bardzo ją zainteresował.
            <br />– Opowiadaj, zamieniam się w słuch – powiedziała do znajomej.
            <br />– Chciał do lekarza iść, ale wiesz jak to u nas jest, długo by czekać musiał, ale ten doktor, co u niego był, to mu powiedział, żeby sobie to na komputerze zrobił. I wiesz, że mu lepiej?
            <br />– Ale jak to na komputerze? – zapytała podejrzliwie Alicja. “Czy to możliwe, że to naprawdę działa?”– myślała..
          </p>
          <p class="main__survey__content__p left-text">
            – Miecia mówiła, że on coś tam czyta i że zadania jakieś rozwiązuje i że się jakiś pogodniejszy robić zaczął – powiedziała znajoma Alicji, wyraźnie zadowolona, że udało jej się zaciekawić koleżankę.
            <br />“Skoro jemu to pomogło, może mi też pomoże” – myślała Alicja. ”Nie zaszkodzi chyba spróbować…?”.
          </p>
          <img
            src="/surveyE/main__survey__content1__block4__bg.png"
            alt
            class="main__survey__content__bg"
          />
          <button class="button-arrow" v-scroll-to="'.main__survey__content1__block4'"></button>
        </div>
        <div class="main__survey__content1__block3 main__survey__content1__block4">
          <h2 class="main__survey__content__h">
            Alicja postanowiła skorzystać z terapii komputerowej.
            <br />Powoli wykonywała zadane ćwiczenia.
          </h2>
          <div class="main__survey__content__p left-text main__survey__content1__block3__p">
            Nie zawsze była przekonana co do ich sensowności i czasem robiła je pobieżnie, ale nie poddawała się. “Nie jest to takie złe i nawet mi pomaga” – zauważyła Alicja.
            <br />Obawiała się jednak powiedzieć o tym córce. Wstydziła się, co może o niej pomyśleć, pomimo tego, że córka od momentu wypadku bardzo starała się dbać o Alicję i podnosić ją na duchu.
          </div>
          <div class="main__survey__content1__block3__img">
            <img src="/surveyG/main__survey__content1__block4.png" alt />
          </div>
          <h2 class="main__survey__content__h">Pewnego dnia, gdy córka zadzwoniła do Alicji...</h2>
          <p class="main__survey__content__p">
            ...ta – z dużym wahaniem – postanowiła opowiedzieć jej
            <br />o terapii komputerowej. Ku jej zdumieniu córka wykazała się dużym zrozumieniem i obiecała odwiedzić ją,
            <br />żeby mogły porozmawiać twarzą w twarz.
            <br />Alicja cieszyła się, że będzie mogła pochwalić się pracą nad sobą. Terapia sprawiała, że czuła się nieco lepiej i była przekonana, że podjęła dobrą decyzję. Postanowiła kontynuować terapię w tej formie.
            <br />Gdy córka odwiedziła Alicję, objęła ją czule i powiedziała:
            <br />– Mamo, jestem z ciebie taka dumna!
          </p>
          <img
            src="/surveyG/main__survey__content1__bg2.png"
            alt
            class="main__survey__content__bg2"
          />
        </div>
        <button @click="scrollStateTo2" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==2" class="main__survey__content2">
        <div class="main__survey__content2__block1">
          <div class="main__survey__content2__block1__img">
            <img src="/surveyG/main__survey__content2__block1.png" alt />
          </div>
          <div class="main__survey__content2__block1__p">
            <h2 class="main__survey__content__h">Być może doświadczyłeś kiedyś...</h2>
            <p>...trudnego zdarzenia, kiedy nie wierzyłeś w swoją zdolność poradzenia sobie z nim. Ale kiedy zacząłeś myśleć, że na pewno dasz sobie radę, poczułeś zadowolenie, siłę i nadzieję, a Twoje nastawienie wpłynęło na to, jak się zachowałeś w tej sytuacji. Zmiany te wyjaśnia model poznawczy, inaczej model ABC.</p>
          </div>
          <button class="button-arrow" v-scroll-to="'.main__survey__content2__block2'"></button>
        </div>
        <div class="main__survey__content2__block2">
          <div class="main__survey__content2__block2__h-bg">
            <img
              src="/surveyG/main__survey__content2__bg.png"
              alt
              class="main__survey__content2__bg"
            />
          </div>
          <div class="main__survey__content2__block2__h">
            <h2
              class="main__survey__content__h"
            >Chorujący na depresję często doświadczają przykrych uczuć, których skutkiem są charakterystyczne dla tej choroby zachowania, np. izolowanie się czy brak aktywności.</h2>
          </div>
          <p
            class="main__survey__content__p left-text"
          >Najbardziej efektywną formą leczenia depresji i wielu innych zaburzeń psychicznych jest terapia poznawczo – behawioralna. Podejście to zakłada, że nasze myśli, uczucia oraz zachowania są ze sobą powiązane i wzajemnie na siebie wpływają. Szczególnie nasze myśli wpływają na nastrój, a w konsekwencji na sposób reagowania. Myśli pojawiają się w ważnych dla nas momentach i wzbudzają emocje oraz zachowania.</p>
          <p class="main__survey__content__p left-text">
            <span class="bold">A. Sytuacje</span> – to wszelkie zdarzenia, których doświadczamy.
            <br />
            <br />
            <span class="bold">B. Myśli</span> – pojawiają się w różnych ważnych sytuacjach i napędzają całą dalszą reakcję. Niektóre są zwane myślami automatycznymi, ponieważ nie podlegają naszej kontroli.
            <br />
            <br />
            <span class="bold">C. Konsekwencje:</span>
            <br />
            <span class="bold">Emocje</span> – są wywołane myślami. Bardzo ważne jest, aby zrozumieć, że to nie bezpośrednio sytuacja wyzwala w nas uczucia, lecz myśli, które pojawiają się wtedy w naszej głowie. Sytuacji nie możemy zmienić, ale możemy próbować zmienić nasz sposób myślenia o niej.
            <br />
            <span class="bold">Zachowania</span> – są zewnętrznym wyrazem naszych emocji, które są efektem wcześniej pojawiających się myśli.
          </p>
          <img src="/surveyE/main__survey__content2__bg.png" alt class="main__survey__content2__bg" />
          <div class="main__survey__content2__block2__img">
            <img src="/surveyG/main__survey__content2__block2__img.png" alt />
          </div>
          <p class="main__survey__content__p left-text">
            Zrozumienie modelu
            <span class="bold">ABC (Sytuacje -> Myśli -> Konsekwencje)</span> jest niezbędnym etapem leczenia depresji. Dzięki niemu można poznać mechanizm swojej choroby, czyli zrozumieć swoje myśli automatyczne oraz następujące po nich uczucia i zachowania.
          </p>
          <div class="main__survey__content2__bg2">
            <img src="main__survey__content2__bg2.png" alt />
          </div>
          <h2
            class="main__survey__content__h main__survey__content2__block2__h"
          >Model ABC (zwany również modelem poznawczym) wyjaśnia związek między myślami, emocjami oraz zachowaniem.</h2>
          <p
            class="main__survey__content__p left-text"
          >Każdy z tych elementów wpływa na pozostałe, a zmiana jednego z nich pociąga za sobą zmianę innych. Dlatego zmieniając swoje zachowanie, zaczynasz się inaczej czuć w różnych sytuacjach oraz inaczej o nich myśleć. Z kolei zmieniając swój sposób myślenia o problemie, zmieniają się Twoje uczucia z nim związane, a w związku z tym również zachowanie w problemowej sytuacji.</p>
          <p
            class="main__survey__content__p left-text"
          >Jeśli masz w przyszłym tygodniu ważny egzamin i uważasz, że będzie trudny, a Ty nic na niego nie umiesz, to możesz poczuć lęk i stres: będziesz uczyć się po nocach albo zupełnie się poddasz. Natomiast jeśli uważasz, że będzie łatwy, a Ty dużo już umiesz, to będziesz odczuwać spokój i pozwolisz sobie na równowagę między nauką a odpoczynkiem. Tak właśnie może działać model ABC.</p>
        </div>
        <img src="/surveyG/main__survey__content2__bg3.png" alt class="main__survey__content2__bg3" />
        <button @click="state++" class="main__survey__button">Dalej</button>
      </div>
      <div v-else-if="state==3" class="main__survey__content3">
        <div v-if="subState==1" class="main__survey__content3__block1">
          <h2
            class="main__survey__content__h"
          >Tabelka przedstawia myśli, uczucia i zachowania bohatera historii w różnych znaczących sytuacjach. Po zapoznaniu się z nią wypełnij swoją tabelkę 1.3. w kolejnej części zadania.</h2>
          <div class="main__survey__content3__block1__section">
            <div class="main__survey__content3__block1__section__header">
              <p
                class="main__survey__content3__block1__section__header__elem"
              >Zdarzenie aktywujące/ sytuacja</p>
              <p class="main__survey__content3__block1__section__header__elem">Myśl</p>
              <p class="main__survey__content3__block1__section__header__elem">Konsekwencje: emocje</p>
              <p
                class="main__survey__content3__block1__section__header__elem"
              >Konsekwencje: zachowanie</p>
            </div>
            <div class="main__survey__content3__block1__section__body">
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Zalecenie pracy w niepełnym wymiarze godzin</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Przecież nie jestem kaleką</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Złość</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Kontynuowanie pracy na pełen etat</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Bycie na zwolnieniu</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Jestem całkowicie bezwartościowa</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Obniżony nastrój, smutek</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Ograniczenie spotkań ze znajomymi</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Propozycja lekarza dotycząca terapii komputerowej</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Zamiast swoją pracę wykonywać, to mnie będą do komputera odsyłać. Mnie, 50 letnią kobietę! Przecież on jest jakiś niepoważny!</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>oburzenie, frustracja</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Postanowienie niepodejmowania takiej terapii</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Spotkanie znajomej</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Nie mam ochoty na towarzystwo, ale długo przekładałam spotkanie</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>zakłopotanie, zawstydzenie</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Podjęcie rozmowy ze znajomą</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Opowiadanie znajomej o terapii komputerowej</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>A to ciekawe</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>ciekawość</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Słuchanie opowieści znajomej</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Opowiadanie znajomej o terapii komputerowej</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Nie wierzę, że coś takiego może mi pomóc. Szkoda czasu.</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>poczucie beznadziei i zawodu</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Nie podejmowanie terapii</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>pogorszenie samopoczucia i potrzeba podjęcia terapii</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Jak komputer miałby mi pomóc? Co jeśli kliknę coś nie tak i tylko się ośmieszę.</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>lęk</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Nie podejmowanie terapii</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Podjęcie terapii i poprawa samopoczucia</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Może coś w tym jest.</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>zadowolenie, nadzieja</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Kontynuowanie terapii komputerowej</p>
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Pozytywna reakcja córki na informację o podjęciu terapii komputerowej</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Podjęłam dobrą decyzję.</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>radość, zadowolenie z siebie, nadzieja</p>
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <p>Kontynuowanie terapii komputerowej</p>
                </div>
              </div>
              <!-- <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__header">
                  <p>Smutek lub obniżony nastrój</p>
                </div>
                <div class="main__elem__radio">
                  <label class="main__elem__radio-button">
                    <input type="radio" id="one" :value="true" v-model="surveyC[0]" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="11" v-model="surveyC[0]" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="2" v-model="surveyC[0]" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="main__elem__radio-button">
                    <input type="radio" id="two" value="3" v-model="surveyC[0]" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              -->
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
          <button @click="subState++" class="main__survey__button">Dalej</button>
        </div>
        <div v-if="subState==2" class="main__survey__content3__block4">
          <h1 class="main__survey__content__h">Tabela 1.3.</h1>
          <p
            class="main__survey__content__p2"
          >Przypomnij sobie jakieś ważne dla Ciebie zdarzenia z ostatnich 2 tygodni i wpisz je w pierwszą kolumnę. Następnie zapisz myśl, która pojawiła się wtedy Twojej głowie. Zapisz konsekwencje tych myśli, czyli emocje oraz zachowania. Przeanalizuj w ten sposób kilka sytuacji.</p>
          <div class="main__survey__content3__block1__section">
            <div class="main__survey__content3__block1__section__header">
              <p
                class="main__survey__content3__block1__section__header__elem"
              >Zdarzenie aktywujące/ sytuacja</p>
              <p class="main__survey__content3__block1__section__header__elem">Myśl</p>
              <p class="main__survey__content3__block1__section__header__elem">Konsekwencje: emocje</p>
              <p
                class="main__survey__content3__block1__section__header__elem"
              >Konsekwencje: zachowanie</p>
            </div>
            <div class="main__survey__content3__block1__section__body">
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
              </div>
              <div class="main__survey__content3__block1__section__body__elem">
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
                </div>
                <div class="main__survey__content3__block1__section__body__elem__text">
                  <textarea type="text" />
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
          <h2 class="main__survey__content__h">Uzupełnij poniższą tabelkę</h2>
          <p
            class="main__survey__content__p"
          >Dopasowując poszczególne kafelki do odpowiedniej kolumny (sytuacja, myśl, emocje, zachowanie) tak aby w każdym wierszu pokazać relację między tymi elementami. W efekcie otrzymasz przykłady, które pokazują, że ta sama sytuacja może prowadzić do różnych myśli, a tym samym różnych emocji i zachowań.</p>
          <div class="main__survey__content3__block1__section">
            <div class="main__survey__content3__block1__section__header">
              <p
                class="main__survey__content3__block1__section__header__elem"
              >Zdarzenie aktywujące/ sytuacja</p>
              <p class="main__survey__content3__block1__section__header__elem">Myśl</p>
              <p class="main__survey__content3__block1__section__header__elem">Konsekwencje: emocje</p>
              <p
                class="main__survey__content3__block1__section__header__elem"
              >Konsekwencje: zachowanie</p>
            </div>
            <div class="main__survey__content3__block1__section__body flex-drag">
              <div
                class="draggable"
              >
                <div v-for="element in userName" :key="element.id">
                  <p>{{element.name}}</p>
                </div>
              </div>
              <draggable
                class="draggable"
                v-model="userThought"
                group="name"
                @start="drag=true"
                @end="drag=false"
              >
                <div v-for="element in userThought" :key="element.id">
                  <p>{{element.name}}</p>
                </div>
              </draggable>
              <draggable
                class="draggable"
                v-model="userEmotions"
                group="name"
                @start="drag=true"
                @end="drag=false"
              >
                <div v-for="element in userEmotions" :key="element.id">
                  <p>{{element.name}}</p>
                </div>
              </draggable>
              <draggable
                class="draggable"
                v-model="userBehavior"
                group="name"
                @start="drag=true"
                @end="drag=false"
              >
                <div v-for="element in userBehavior" :key="element.id">
                  <p>{{element.name}}</p>
                </div>
              </draggable>
            </div>
          </div>
          <button @click="subState++" class="main__survey__button">Zapisz</button>
        </div>
        <div v-if="subState==4" class="main__survey__content3__block3">
          <h1
            class="main__survey__content__h"
          >Przeczytaj dokładnie poniższe pytania dotyczące materiału i wybierz prawidłową odpowiedź.</h1>
          <p class="main__survey__content__p2">Tylko jedna odpowiedź jest prawdziwa.</p>

          <div v-if="surveyCNum == 1" class="main__survey__content3__block3__elem">
            <h3 class="main__survey__content__h3">1. Na depresję mogą cierpieć:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[0] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                tylko celebryci
                <input type="radio" id="one" :value="true" v-model="surveyC[0]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                tylko osoby z niskim wykształceniem
                <input
                  type="radio"
                  id="two"
                  value="11"
                  v-model="surveyC[0]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                tylko osoby bez pracy
                <input type="radio" id="two" value="2" v-model="surveyC[0]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                każdy
                <input type="radio" id="two" value="3" v-model="surveyC[0]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">2. Przyczyną depresji są być:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[1] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                czynniki zewnętrzne
                <input type="radio" id="one" value="11" v-model="surveyC[1]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                czynniki biologiczne
                <input type="radio" id="two" :value="true" v-model="surveyC[1]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                czynniki zewnętrzne i/lub biologiczne
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                nie wiadomo jakie są przyczyny depresji
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[1]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">3. Depresja i pogorszenie nastroju:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[2] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                to to samo
                <input type="radio" id="one" value="11" v-model="surveyC[2]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                mają podobne objawy
                <input type="radio" id="two" value="2" v-model="surveyC[2]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                są całkowicie niezależne
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[2]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                zawsze występują razem
                <input type="radio" id="two" value="4" v-model="surveyC[2]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">4. Obniżenie nastroju w depresji zazwyczaj</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[3] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                jest silniejsze rano, a słabsze wieczorem
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                jest słabsze rano, a silniejsze wieczorem
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                jest tak samo silne rano i wieczorem
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                jest niezależne od pory dnia
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[3]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">5. Anhedonia to</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[4] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                obniżenie nastroju
                <input type="radio" id="one" :value="true" v-model="surveyC[4]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                utrata odczuwania przyjemności
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                wycofanie z relacji społecznych
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[4]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                poczucie samotności
                <input type="radio" id="two" value="4" v-model="surveyC[4]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">6. Podstawowym objawem depresji nie jest</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[5] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                obniżenie nastroju
                <input type="radio" id="one" value="11" v-model="surveyC[5]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                brak odczuwania przyjemności
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                osłabienie wytrzymałości
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[5]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                myśli samobójcze
                <input type="radio" id="two" value="4" v-model="surveyC[5]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">7. Myśli samobójcze pojawiają się</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[6] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                w łagodnej depresji
                <input type="radio" id="one" :value="true" v-model="surveyC[6]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                w umiarkowanej depresji
                <input type="radio" id="two" value="2" v-model="surveyC[6]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                w ciężkiej depresji
                <input type="radio" id="two" value="3" v-model="surveyC[6]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                są niezależne od nasilenia depresji
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
            <h3 class="main__survey__content__h3">8. Natalia za swoje problemy obwinia</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[7] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                rodziców
                <input type="radio" id="one" value="11" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                chłopaka
                <input type="radio" id="two" :value="true" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                siebie
                <input type="radio" id="two" value="3" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                przyjaciółkę
                <input type="radio" id="two" value="4" v-model="surveyC[7]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">9. Problemy Natalii rozpoczęły się gdy</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[8] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                przeprowadziła się do małego miasta
                <input
                  type="radio"
                  id="one"
                  :value="true"
                  v-model="surveyC[8]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                przeprowadziła się do dużego miasta
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[8]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                zakończyła pracę
                <input type="radio" id="two" value="3" v-model="surveyC[8]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                zamieszkała z rodzicami
                <input type="radio" id="two" value="4" v-model="surveyC[8]" />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">10. Natalia myśląc o przyszłości</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[9] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                ma określone plany
                <input type="radio" id="one" value="11" v-model="surveyC[9]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                ma nadzieję na zmianę
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                czuje lęk
                <input type="radio" id="two" value="3" v-model="surveyC[9]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                unika myślenia o przyszłości
                <input
                  type="radio"
                  id="two"
                  value="4"
                  v-model="surveyC[9]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">11. Początkowo Natalia:</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[10] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                nie była przekonana do wyjazdu
                <input
                  type="radio"
                  id="one"
                  value="11"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                chciała zamieszkać z przyjaciółmi
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                od razu zgodziła się na wyjazd
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                sama zainicjowała pomysł wyjazdu
                <input
                  type="radio"
                  id="two"
                  :value="true"
                  v-model="surveyC[10]"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <h3 class="main__survey__content__h3">12. Natalia nie poszukuje pracy ponieważ</h3>
            <div class="main__elem__radio">
              <div
                v-if="checkAn == true && surveyC[11] == null"
                class="main__survey__content4__block__elem-error"
              >
                <span>Brak odpowiedzi</span>
              </div>
              <label class="main__elem__radio-button">
                woli nie pracować
                <input type="radio" id="one" value="11" v-model="surveyC[11]" />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                ma za dużo obowiązków domowych
                <input
                  type="radio"
                  id="two"
                  value="2"
                  v-model="surveyC[11]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                nie wierzy, że jej się uda
                <input
                  type="radio"
                  id="two"
                  value="3"
                  v-model="surveyC[11]"
                />
                <span class="checkmark"></span>
              </label>
              <label class="main__elem__radio-button">
                Paweł nie chce, aby pracowała
                <input
                  type="radio"
                  id="two"
                  :value="true"
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

import draggable from "vuedraggable";
export default {
  layout: "survey",
  components: { "download-excel": JsonExcel, draggable },
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
        fakty_atrakcyjnosc_tabela: "Zadanie1_atrakcyjnosc_tabela",
        fakty_skutecznosc_cwiczenie1: "Zadanie2_skutecznosc_fakty0",
        fakty_skutecznosc_cwiczenie2: "Zadanie2_skutecznosc_fakty1",
        fakty_skutecznosc_cwiczenie3: "Zadanie2_skutecznosc_fakty2",
        fakty_skutecznosc_cwiczenie4: "Zadanie2_skutecznosc_fakty3",
        fakty_skutecznosc_cwiczenie5: "Zadanie2_skutecznosc_fakty4",
        fakty_skutecznosc_cwiczenie6: "Zadanie2_skutecznosc_fakty5",
        fakty_skutecznosc_cwiczenie7: "Zadanie2_skutecznosc_fakty6",
        fakty_skutecznosc_cwiczenie8: "Zadanie2_skutecznosc_fakty7",
        fakty_skutecznosc_cwiczenie9: "Zadanie2_skutecznosc_fakty8",
        fakty_skutecznosc_cwiczenie10: "Zadanie2_skutecznosc_fakty9",
        fakty_skutecznosc_cwiczenie11: "Zadanie2_skutecznosc_fakty10",
        fakty_skutecznosc_cwiczenie12: "Zadanie2_skutecznosc_fakty11",
        fakty_skutecznosc_cwiczenie13: "Zadanie2_skutecznosc_fakty12",
        fakty_skutecznosc_cwiczenie14: "Zadanie2_skutecznosc_fakty13",
        fakty_skutecznosc_cwiczenie15: "Zadanie2_skutecznosc_fakty14",
        fakty_skutecznosc_cwiczenie16: "Zadanie2_skutecznosc_fakty15",
        fakty_skutecznosc_cwiczenie17: "Zadanie2_skutecznosc_fakty16",
        fakty_skutecznosc_cwiczenie18: "Zadanie2_skutecznosc_fakty17",
        fakty_skutecznosc_test1: "Zadanie3_skutecznosc_testy0",
        fakty_skutecznosc_test2: "Zadanie3_skutecznosc_testy1",
        fakty_skutecznosc_test3: "Zadanie3_skutecznosc_testy2",
        fakty_skutecznosc_test4: "Zadanie3_skutecznosc_testy3",
        fakty_skutecznosc_test5: "Zadanie3_skutecznosc_testy4",
        fakty_skutecznosc_test6: "Zadanie3_skutecznosc_testy5",
        fakty_skutecznosc_test7: "Zadanie3_skutecznosc_testy6",
        fakty_skutecznosc_test8: "Zadanie3_skutecznosc_testy7",
        fakty_skutecznosc_test9: "Zadanie3_skutecznosc_testy8",
        fakty_skutecznosc_test10: "Zadanie3_skutecznosc_testy9",
        fakty_skutecznosc_test11: "Zadanie3_skutecznosc_testy10",
        fakty_skutecznosc_test12: "Zadanie3_skutecznosc_testy11",
        fakty_atrakcyjnosc_ankieta1: "an1",
        fakty_atrakcyjnosc_ankieta2: "an2",
        fakty_atrakcyjnosc_ankieta3: "an3",
        fakty_atrakcyjnosc_ankieta4: "an4",
        fakty_atrakcyjnosc_ankieta5: "an5",
        fakty_atrakcyjnosc_ankieta6: "an6",
        fakty_atrakcyjnosc_ankieta7: "an7",
        fakty_atrakcyjnosc_ankieta8: "an8",
        fakty_atrakcyjnosc_ankieta9: "an9",
        fakty_atrakcyjnosc_ankieta10: "an10",
        fakty_atrakcyjnosc_ankieta11: "an11",
        fakty_atrakcyjnosc_ankieta12: "an12",
        fakty_atrakcyjnosc_ankieta13: "an13",
        fakty_atrakcyjnosc_ankieta14: "an14",
        fakty_atrakcyjnosc_ankieta15: "an15",
        fakty_atrakcyjnosc_ankieta16: "an16"
      },
      json_data: [],
      state: 1,
      subState: 1,
      surveyInfo: [
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        },
        {
          name: "",
          option: ""
        }
      ],
      surveyInfoNum: 1,
      userName: [
        {
          name: "Zbliża się termin oddania projektu"
        },
        {
          name:
            "Zostało mało czasu na przygotowanie się do rozmowy kwalifikacyjnej"
        },
        {
          name: "Przeprowadzam się do innego miasta"
        },
        {
          name: "Randka nie była udana"
        },
        {
          name: "Zaplanowany cel został zrealizowany"
        },
        {
          name: "Zapomniałem o urodzinach przyjaciółki"
        },
        {
          name: "Korek na drodze"
        }
      ],
      userThought: [
        {
          name: "Nie zdążę skończyć i szef mnie zwolni"
        },
        {
          name: "Zrobię tyle ile dam radę"
        },
        {
          name: "Czeka mnie tyle wyzwań"
        },
        {
          name:
            "To kolejny raz, coś jest ze mną nie tak i nigdy nikogo nie poznam"
        },
        {
          name: "Włożyłam w to dużo pracy"
        },
        {
          name: "Zawiodłem "
        },
        {
          name: "Znowu spóźnię się do pracy"
        }
      ],
      userEmotions: [
        {
          name: "zdenerwowanie, lęk"
        },
        {
          name: "spokój"
        },
        {
          name: "ciekawość, ekscytacja"
        },
        {
          name: "smutek, złość, lęk"
        },
        {
          name: "zadowolenie"
        },
        {
          name: "wstyd"
        },
        {
          name: "irytacja"
        }
      ],
      userBehavior: [
        {
          name: "Idę do lekarza po zwolnienie."
        },
        {
          name: "Robię przerwę w pracy i wracam do zadania po przerwie."
        },
        {
          name: "Rozpoczynam przygotowania"
        },
        {
          name: "Zostaję cały weekend w domu"
        },
        {
          name: "Angażuję się w kolejne zadania"
        },
        {
          name: "Przepraszam i rekompensuję"
        },
        {
          name: "Trąbię na innych"
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
      this.userThought.forEach(element => {
        if (element.option != null) {
          firstScrollTo("main");
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
          survey: "Fakty i interpretacje",
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
          Zadanie2_skutecznosc_fakty14: this.surveyInfoChoose[14],
          Zadanie2_skutecznosc_fakty15: this.surveyInfoChoose[15],
          Zadanie2_skutecznosc_fakty16: this.surveyInfoChoose[16],
          Zadanie2_skutecznosc_fakty17: this.surveyInfoChoose[17],
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
      //       Zadanie2_skutecznosc_fakty: this.surveyInfoChoose,
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
  font: 1.438rem/1.875rem "Montserrat-bold", century gothic, sans-serif;
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
    margin-top: 23.14814814814815vh;
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
}
.main__survey__content2__block2__img {
  width: 68.18854166666667%;
  margin: 5.208333333333333vh auto 7.8125vh;
  img {
    width: 100%;
  }
}
.main__survey__content2__block2__h {
  width: 44.01041666666667%;
  margin: 0 auto 5.555555555555556vh;
  &:last-of-type {
    margin-top: 29.44444444444444vh;
  }
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
  h2 {
    width: 47.8125%;
    margin: 0 auto 6.481481481481481vh;
  }
  .main__survey__button {
    margin: 9.259259259259259vh auto;
  }
}
.main__survey__content3__block1__section {
  width: 68.75%;
  margin: 0 auto;
  // display: flex;
  // justify-content: center;
  // flex-wrap: wrap;
}
.main__survey__content3__block1__section__header {
  margin: 0 auto 4.166666666666667vh;
  display: flex;
  border: 1px solid #3065ec;
  border-radius: 50px;
}
.main__survey__content3__block1__section__header__elem {
  width: 25%;
  box-sizing: border-box;
  text-align: center;
  font-size: 1rem;
  background: #3065ec;
  border-right: 1px solid #ffffff;
  color: #ffffff;
  &:first-of-type {
    border-radius: 50px 0 0 50px;
  }
  &:last-of-type {
    border-right: none;
    border-radius: 0 50px 50px 0;
  }
}
.flex-drag {
  display: flex;
  justify-content: space-around;
}
.draggable {
  width: 24.622%;
  cursor: move;
  div {
    min-height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.9259259259259259vh;
    background: #ffffff;
    border: 1px solid #3065ec;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    p {
      text-align: center;
    }
  }
}
.main__survey__content3__block1__section__body__elem {
  min-height: 112px;
  margin-bottom: -1px;
  display: flex;
  border-radius: 50px;
  border: 1px solid #3065ec;
  &:last-of-type {
    margin-bottom: 0;
  }
}
.main__survey__content3__block1__section__body__elem:nth-of-type(2n) {
  background-color: #f4f4f4;
  border-radius: 50px;
}
.main__survey__content3__block1__section__body__elem__text {
  width: 25%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #3065ec;
  border-radius: 50px 0 0 50px;
  box-sizing: border-box;
  overflow: hidden;
  &:last-of-type {
    border: none;
  }
  p {
    line-height: 1.125rem;
    text-align: center;
    font-size: 1rem;
  }
  textarea {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    resize: none;
    background-color: transparent;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 20px;
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
    margin-bottom: 9.259259259259259vh;
    width: 70.27083333333333%;
  }
  button {
    margin: 9.259259259259259vh auto;
  }
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
  margin-bottom: 4.340741vh;
  .main__survey__content__p2 {
    width: 69.27083333333333%;
    margin: 0 auto 9.259259259259259vh;
  }
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

//////////////////////////////
.left-text {
  text-align: left;
}
</style>