# Leksjon: MODULER
_I denne leksjonen skal du lære å bruke moduler i javaskript. 
Hensikten med moduler er å dele inn koden din i mindre enheter 
slik at den er lettere å teste og vedlikeholde. En modul / enhet
skal inneholde funksjoner og data som hører sammen._

## Nye begreper
* modul
* eksport
* import

## Nye Kodeord
* import
* export
* default
* * (asterix, stjerne er et kodeord)

## Modul
En Modul er bare kode som er gruppert sammen, vanligvis i en egen fil.
Det betyr at du kan skrive egen kode i en fil, og så bruke den i en annen
fil. De fleste moderne nettlesere støtter dette. Hvis du for eksempel
skal lage en kalkulator, så kan du lage en fil som heter _math.js_ og så
kan du legge mattefunksjoner inn i den filen.

## Eksport
Du kan eksportere funksjoner fra en fil du har laget slik at de kan
brukes i en annen fil. Alle store programmer bruker denne funksjonaliteten.

## Import
Du kan importere funksjoner fra andre filer og bruke dem i en fil du jobber
med selv, men __kun__ hvis funksjonen du bruker er eksportert på forhånd. 

_import og export statements hører altså naturlig sammen. Du kan ikke 
importere noe som ikke allerede er eksportert._