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

//komponent-tre 

Vi planlegger å ha en router i app eller i en navigasjonskomponent som tar seg av visningen av forskjellige hoved komponenter. Vi kan da enkelt legge til flere hovedkomponenter etter behov, eller kutt ut noen hvis vi ikke har tid til å lage dem.
Hver hovedkomponent håndterer oppdatering av view selv, samt lagring og henting av data fra minnet.

Valg av bibloteker
---------------------
//skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager 
x
y
z

Valg av API
---------------
//skal dokumenteres i tutorials form slik at andre lett kan lære av eksempelet dere lager 
x
y
z

Arbeidsflyt - Git, github, issues, etc.  
-----------------------------------------
//hva vi har brukt og hvordan

Github

Issues

Pull requests 

Kommentarer i koden .... 


Testing 
------------------
//prosessen

Jest ....
Enzyme ....

//har vi noe papertrail å viste til??????


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



-------------------------------------to do list delete before release--------------------------

Short List:

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
