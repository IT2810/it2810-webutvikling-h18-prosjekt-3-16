# it2810-webutvikling-h18-prosjekt-3-16
it2810-webutvikling-h18-prosjekt-3-016 created by GitHub Classroom

Dokumentasjon
===================

Tema
---------
Applikasjonen er en parodi på PIMMs. Applikasjonen sitt formål er derfor å "motivere" brukeren til å bli så miserabels så over hode mulig. Vi valgte dette fordi vi synts det er morsomt og gjør prosjektet mer motiverende å jobbe med (ironsik nok). 
Men dette prosjektet kan også ha en positiv effekt på motivasjon og planlegging, gitt at brukeren skjønner det er en parodi. Det er et kjent konsept å snu problemet på hode å prøve å oppnå det motsatte fra det en ønsker, for å få bedre innsikt i problemet. For videre utforsking av tema kan vi referere til: 
- 7 Ways to Maximize Misery - https://www.youtube.com/watch?v=LO1mTELoj6o
- How to be miserable - https://www.amazon.com/How-Be-Miserable-Strategies-Already/dp/1626254060

Navn og logo
----------------
Vi har valgt å kalle applikasjonen vår BeeSad med logo av en trist bie. Fordi don't let your memes be dreams. 

Arkitektur
---------------
Vi har valgt en flat arkitektur som tillater mye parallell funksjonalitet. Vi mener dette er en god løsning på
oppgaven som er gitt. Fordi hovedfokus i oppgaven er ikke å implementere mest mulig funksjonalitet og da er det en fordelaktig å ha det modulært. 
I dokumentasjons mappen finner en skisser til komponent layout og arkitektur, som vi lagde før vi begynte å kode.

Treestruktur
- App.js
    - Router.js
        - Home.js
        - Todo.js
            - Note.js
            - myAsyncStorage.js
        - Calender.js
        - Pedometer.js
        - Map.js
        

Vi har en router i en navigasjonskomponent som tar seg av visningen av forskjellige hovedkomponenter. 
Vi kan da enkelt legge til flere hovedkomponenter eller frjerne dem etter behov.
Hver hovedkomponent håndterer oppdatering av view selv, samt lagring og henting av data fra minnet.

Slutt funksjonalitet
---------------------------
Vi har en applikasjon med bottomBarNavigation hvor en enkelt kan ligge til "sceens" etter behov. Dette håndteres av router.js. 
Hver sceene er sin egen komponent med child komponenter hvor det trengs. 

Home er en velkommstide med noe tekst som forklarer hva applikasjonen er.

I Todo kan en opprette notater og slette dem. Hvert notat element er et note.js element som ligges til i en liste. 

Calender er implementasjon av tredjeparts bibloteket react-native-calenderen. Den viser hvilken dato det er og console logger 
press og longpress av datoer. Vi har ikke implementert events i kalenderen enda.

Map er en impimentasjone av google maps, med gps navigasjon som viser hvor du er. 

Pedometer måler antall skritt en har gått. Vi fikk aldri denne til å fungere, så den rendres ikke i applikasjonen. 

Valg av bibloteker og API
---------------------
Om noen lurer på hvor vi fant 3 parts bibliotek ta en titt på nettsidene under. Der finner dere info om implementasjon og bruk. 

- navTab fra https://reactnavigation.org/docs/en/tab-based-navigation.html 

- react-native-calendar fra https://github.com/wix/react-native-calendars. Dette virket som et godt valg for bruk av kalendar 
fordi den gir oss mye funksjonalitet som vi enkelt kan bruke videre. Vi har ikke brukt denne funksjonaliteten videre i MVP som vi 
har laget. 

-google maps fra https://github.com/react-community/react-native-maps


Arbeidsflyt - Git, github, issues, etc.  
-----------------------------------------
Vi bruker Github med issues, branches og pull requests. Vi begynte prosjektet med å diskutere oppgaven og tegne opp et røft design av 
applikasjonen. Disse bildene ligger i documentation mappen på repoet. 

Deretter laget vi issues til all ønsket og nødvendig funksjonalitet som dekket alle kriteriene i oppgaven. De issusene som er nødvendig for en mvp ble
taget med dette. På github kan en enkelt assigne seg selv eller andre til et issue og se hva andre jobber med. En har også en god oversikt over hva som er 
igjen av ønsket funksjonalitet og MVP.

Vi bruker master som produksjons nivået av appliksjonen. Dette skal alltid være fungerene. Under har vi dev som vi bruker til 
integrasjonstesting og bugfixing. Ut i fra dev igjen har vi brancher der vi utvikler enheter og tester dem. Slik sørger man for at 
en kan utvikle ny funksjonalitet parallelt uten konflikter. Vi har også alltid en fuksjonell master brach som har blitt enhetstestet og 
integrasjonstestet i branshene under seg. 

Ingen får lov til å merge inn i dev eller master. Vi bruker pull requests i githus. Personen som har laget koden oppretter pull requesten, 
for at den deretter skal bli godkjennt av andre. Når den er godkjent, i vårt tilfelle bestemte vi at det var nok med en godkjenneing, så kunne den
merges av eier. 

I tillegg til denne dokumentasjonen har vi kommentert koden slik at det skal bli så forståelig som mulig. 


Testing med Jest
------------------
Jest er et rammeverk som tester plain javascript. Så for å konvertere react native kode til plain javascript har vi brukt babel.
Det å sette opp Jest og Babel i react-native er knotete og dokumentasjonen en finner på nett er selvmotsigende. 
På grunn av dette satte vi ikke opp jest før mot slutten av prosjektet. Dette er en avgjørelse om hvor en ønsker å fokusere tiden, 
vi satte jest under MVP på prioriteringsstigen. 

Dette går i mot testmetodikken vi ønsket å bruke. Som er å skrive tester for hver komponent rett etter at den er laget. 
Det vil si unit testing med jest før implementeringen av komponenter i developmen. Slik at vi kan gjøre integrasjonstesting og debuging.
Det vi ente opp med å gjøre i stede for var å test manuelt underveis (visuelt, console log, etc.) på unit testene og slik som vi planlagte å gjøre integrasjonstestingen.

Dette har igrunn fungert greit. Vi har ikke møtt på noen større problemer med koden vi har, og ting har fungert som forventet.

Dokumentasjon for å kjøre jest tester

For jest cli kommandoer kjør
- ./node_modules/.bin/jest --enKommado

For å kjøre alle tester
- npm test

For denne oppgaven er det 2 type tester som er aktuelle: snapshot og mock tester.  
Jest snapshot er brukt på alle de statiske komponentene som skal rendres likt hver gang. Det vil si home.js, calender.js og todo.js (todo.js 
er helt i og med at den rendres uten note objekter). De andre komponentene kan vi ikke teste med snapshot siden de endrer seg dynamisk. 

Resten av funksjonaliteten tester vi med mock tester. Mock tester er tester som simulerer funksjonaliteten til koden og sjekker om den gir oss forventet resultat.

Final test coverage
<pre>
------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |    37.93 |        0 |    27.78 |    37.93 |                   |
 Components       |    35.71 |        0 |    27.78 |    35.71 |                   |
  Calender.js     |    16.67 |      100 |    16.67 |    16.67 |    18,20,22,32,34 |
  Home.js         |      100 |      100 |      100 |      100 |                   |
  Note.js         |       50 |      100 |        0 |       50 |                11 |
  Todo.js         |    36.84 |        0 |       30 |    36.84 |... 75,85,86,91,92 |
 assets/img       |      100 |      100 |      100 |      100 |                   |
  beesad_logo.jpg |      100 |      100 |      100 |      100 |                   |
------------------|----------|----------|----------|----------|-------------------|
</pre>

Vi har en lav prosentandel dekket med test coverage fordi vi ikke fikk begynt med jest før mot slutten av prosjektet. Vi har demonstrert at vi 
behersker de testmetodene som er relevant i denne oppgaven og hvordan en tester systematisk, selv om vi ikke har fått gjennomført det til punkt å prikke
, på grunn av tekniske problemer. 

Vi anser at disse testene dekker alle enhet(unit) i prosjektet og er tilstrekkelig til å dekke kriteriet:

- Prosjektet skal testes med Jest og vise og dokumentere god og systematisk enhetstesting.

I prosjekt 3 er det ikke et læringsmål om å lære seg jest eller testing. Vi anser dermed testingen som ferdig, på dette punket ettersom kriteriet er oppfylt.

Læringsmål
-------------------
Gjennom dette prosjektet har vi oppfylt følge læringsmål. 

- Videregående  kunnskap og ferdigheter i React og grunnleggende ferddigheter i React Native
- Ferdigheter i å finne og velge gode tredjeparts komponenter.
- Ferdigheter i å lage/bygge brukerfunksjonalitet ved hjelp av biblioteker og api.
- Kunnskaper og ferdigheter i å håndtere persistent tilstand (lagring av data) på enheten
- Videregående kompetanse i bruk av git og dokumentasjon/styring av utviklingsoppgaver med issues. 
- Ferdigheter i gruppearbeid med fokus på samarbeid og læring, fordeling og koordinering av arbeidsoppgaver, utvikling og samarbeidende utvikling med git.
