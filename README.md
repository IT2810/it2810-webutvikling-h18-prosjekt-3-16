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
Vi har valgt å kalle applikasjonen våres BeeSad med logo av en trist bie. Fordi don't let your memes be dreams. 

Arkitektur
---------------
Vi har valgt en bred arkitektur som tilater mye paralell funksjonalitet. Vi mener dette passer best til oppgaven som er gitt fordi, hovedfokus i oppgaven er ikke å implementere mest mulig funksjonalitet da er det en fordel å ha det modulært. 
I dokumentasjons mappen finner en drafts til komponent layout og arkitektur.

- App.js
    - Router.js
        - Home.js
        - Todo.js
            - Note.js
            - myAsyncStorage.js
        - Calender.js
        - Pedometer.js
        - Map.js
        

Vi planlegger å ha en router i app eller i en navigasjonskomponent som tar seg av visningen av forskjellige hoved komponenter. Vi kan da enkelt legge til flere hovedkomponenter etter behov, eller kutt ut noen hvis vi ikke har tid til å lage dem.
Hver hovedkomponent håndterer oppdatering av view selv, samt lagring og henting av data fra minnet.

Slutt funksjonalitet
---------------------------
Vi har en applikasjon med bottomBarNavigation hvor en enkelt kan ligge til "sceens" etter behov. Dette håndteres av router.js. 
Hver sceene er sin egen komponent med child komponenter hvor det trengs. 

Home er en velkommstide med noe tekst som forklarer hva applikasjonen er.

I Todo kan en opprette notater og slette dem. Hvert notat element er et note.js element som ligges til i en liste. 

Calender er implementasjon av tredjeparts bibloteket react-native-calenderen. Den viser hvilken dato det er og console logger 
press og longpress av datoer. Vi har ikke implementert events i kalenderen enda.

Pedometer måler antall skritt en har gått.

Valg av bibloteker
---------------------
//skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager 
- navTab

- react-native-calendar fra https://github.com/wix/react-native-calendars. Dette virket som et godt valg for bruk av kalendar 
fordi den gir oss mye funksjonalitet som vi enkelt kan bruke videre. Vi har ikke brukt denne funksjonaliteten videre i MVP som vi 
har laget. 

- Pedometer

Valg av API
---------------
//skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager 
x
y
z

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
Vi har snapshot tester av alle hovedkomponentene. Det vil si at en sjekker at disse komponentene rendrer opp mot en tidligere mal av UI-en.
Disse implemtenterte vi etter at vi fikk funksjonaliteten i hver kompenent til å fungerer, og oppdaterte dem når det var nødvendig.
Vi anser at disse testene dekker alle enhet(unit) i prosjektet og er tilstrekkelig til å dekke kriteriet:

- Prosjektet skal testes med Jest og vise og dokumentere god og systematisk enhetstesting.

I prosjekt 3 er det ikke et læringsmål om å lære seg jest eller testing. Vi anser dermed testingen som ferdig, på dette punket ettersom kriteriet er oppfylt.

Dette er en avgjørelse vi har kommet til fordi jest ikke funker til en dritt. Bruk av jest uten enzyme med react-native er ikke meningen. Det er dårlig støtte for 3 parts komponenter og vi kommer ikke til
å lage bable templates for å få testet disse npm modulene med jest. 
Vi har heller ikke brukt mockup functions, dette er noe vi kunne gjort for å få 100% test covrage. Men selv med dette oppnår vi ikke en tilfredstillene stander
på testene våre. Verken på unit, integrasjons eller system som en helet. Så vi har ikke prioritert disse type testene i prosjektet. Vi ser ikke at 
det er en naturlig måte å bruke teknologien vi har fått utdelt. Det hadde for eksempel vært mer relevant med CI i github eller gitlab. 

Helt seriøst føkk jest liksom. 

Læringsmål
-------------------
Gjennom dette prosjektet har vi lært x, dette kan en se gjennom y og z. 
//skriv at vi har lært alle læringsmålene og vis til noe i prosjektet som støtter dette. 
Videregående  kunnskap og ferdigheter i React og grunnleggende ferddigheter i React Native
Ferdigheter i å finne og velge gode tredjeparts komponenter.
Ferdigheter i å lage/bygge brukerfunksjonalitet ved hjelp av biblioteker og api.
Kunnskaper og ferdigheter i å håndtere persistent tilstand (lagring av data) på enheten
Videregående kompetanse i bruk av git og dokumentasjon/styring av utviklingsoppgaver med issues. 
Ferdigheter i gruppearbeid med fokus på samarbeid og læring, fordeling og koordinering av arbeidsoppgaver, utvikling og samarbeidende utvikling med git.

//konknluder med en framragende prestasjon -> A.



-------------------------------------krav til dokumetasjon------------------------------------
- Prosjektet dokumenteres med en README.md i git repositoriet.
- Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste valgene og løsningene som gruppa gjør (inklusive valg av komponenter og api).
- Koden skal være lettlest og godt strukturert slik at den er lett å sette seg inn i. Bruk av kommentarer skal være tilpasset at eksterne skal inspisere koden.
- Gruppas valg av teknologi som utforskes (jmfr krav til innhold) skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager (dvs. gi en liten introduksjon til hva og hvordan).
- Gruppa skal oppsummere den enkeltes bidrag i prosjektet i en egen fil som leveres i BB (dette er personopplysninger som ingen vil at skal ligge på git ;-)



-------------------------------------delete below before release--------------------------

--------------bb innlevering
Hvem har gjort hva
Tord
- Navigasjon - Routing.js
- Startsiden - Home.js
- Kalender - Calender.js
- Jest tester
- Skrevet dokumentasjon
Endre
- Todo - Todo.js og Note.js
- Asynclagring
Øyvind
-Skritteller - Pedometer.js

--------------Short List:

Tema, formål

finne gode 3party libaries


Innhold og funksjonalitet:

Kontakter, avtaler, todos, oppgaver, kalender(?), registring av personlige mål og resultater,  

Tilstand vha AsyncStorage

GPS/Skrittteller/direktek kommunikasjon med andre nheter

Krav til teknologier:

REACT NATVIE:
Expo : http://expo.io
Async Storage
Tredjepartskomponenter/bibliotek

Platformuavhengig ( IOS og Andriod)

Bruk av Git, Koding:

best practise
Git i webutvikling
issues
Commits markert til issues


Testing:
Jest og Enzyme, og skal være godt og systematisk testet

Doukemntasjon:
README.md
Vise viktige valg
Kommentarer
Tutorial så andre kan bruke det ( hva og hvordan)
dokument den enkeltes bidrag
