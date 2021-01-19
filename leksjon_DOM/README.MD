**Geir Hilmersen - 16 Jan 2021**

Denne leksjonen bygger på denne videoen på youtube:

<a href="https://www.youtube.com/watch?v=wKBu_dEaF9E&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=6"> Net Ninja - DOM Object </a>

**Sett opp grunnleggende infrastruktur for oppgaven;**
* guessgame.html
    * lenke til .css
    * lenke til .js
* master.css
* script.js

_sjekk at det virker før du begynner._


**OPPGAVE 1**

_Lag et form på guessgame.html siden siden din med følgende elementer;_
* h1 med teksten Guess a number between 0-100
* input text skal være tom når siden åpner
* p class=feedback skal være ..make your guess, når siden åpner
_Under form skal du lage;_
* p instructions. Der skal det stå "Press any letter to restart the game"
    
**OPPGAVE 2**

_Lag en .css som får siden din til å se litt ryddig ut_
* form skal være sentrert og ha egen bakgrunnsfarge
* Overskriften skal være stor og tydelig.
* Inputfeltet skal være tydelig mitt i formet
* beskrivelsen skal være i klar kontrast til bakgrunnen

**OPPGAVE 3**

_Lag en .js som implementerer følgende funksjonalitet:_
* generer følgende variabel;
    * "const correctAnswer" med en verdi mellom 0 og 100;

    Hot tip! Sjekk hvordan math.random() fungerer hvis du ikke vet hvordan du skal generere 
    verdien "correctAnswer"

**OPPGAVE 4**

_Utvid .js filen med følgende funksjonalitet_
* når brukeren trykker "enter"-knappen, så skal scriptet sjekke hvilket tall som er skrevet inn.
* hvis tallet er riktig, så skal <p class="feedback"> endre sin tekst slik at det står at riktig tall er skrevet inn og teksten skal bli grønn.
* hvis tallet er for lavt, så skal <p class="feedback"> endre sin tekst slik at det står at tallet er for lavt og teksten skal bli rød!
* hvis tallet er for høyt, så skal <p class="feedback"> endre sin tekst slik at det står at tallet er for høyt og teksten skal bli rød!

**OPPGAVE 5**

_Utvid .js filen med følgende funksjonalitet_
* hvis brukeren trykker en knapp som ikke er et tall, så skal spillet begynne på nytt.

    Hot tip! For å få til dette må du lage en .eventListener(). Hvis du er i tvil om hva det er, så
    kan du spørre læreren din, eller søke det opp med google.

**OPPGAVE 6**

_Utvid .js filen med følgende funksjonalitet_
* hvis brukeren skriver inn et tall som er større enn 100;
    så skal det komme en popup som sier at brukeren ikke kan bruke så store tall
    det som er skrevet inn i inputfeltet skal slettes så feltet blir tomt
    men siden skal IKKE laste inn på nytt.
