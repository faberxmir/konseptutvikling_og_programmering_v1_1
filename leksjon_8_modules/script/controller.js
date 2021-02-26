// Geir Hilmersen 26 feb 2021

// Kontroller klassen skal avgjøre hvilken logiske
// operasjon som skal utføres på "view'et", altså
// .HTML siden din, men den skal ikke faktisk gjøre
// noe med det, det er det viewklassen som skal.

// Import statements skal stå øverst i koden din.
// Det er forventet. 
import * as Math from './math.js';

// Disse konstantene gjør kodene lettere å lese.
// Da blir det lettere å forholde seg til retur-
// verdien
const INVALIDOPERATION  = -1;
const CLEARDATA         = 1;
const CALCULATE         = 2;
const NUMBERINPUT       = 3;


// Keyhandler funksjonen skal ikke gjøre noe annet enn
// å ta imot en verdi, et tastetrykk, og avgjøre hva 
// som skal returneres. Dette er en del av kontroller-
// logikken
function handleKeys(keypress) {
    let returnValue = INVALIDOPERATION;

    console.log(typeof(parseInt(keypress)));

    switch(keypress){
        case '+':
            returnValue = Math.add;
            break;
        case '-':
            returnValue = Math.subtract;
            break;
        case '/':
            returnValue = Math.divide;
            break;
        case '*':
            returnValue = Math.multiply;
            break;
        case 'c':
            returnValue = CLEARDATA;
            break;
        case 'Enter':
            returnValue = CALCULATE;
            break;
        default:
            if(typeof(parseInt(keypress))==='number'){
                returnValue = NUMBERINPUT;
            }
            break;
    }
    return returnValue;
}

export {handleKeys as default, CLEARDATA, CALCULATE, INVALIDOPERATION, NUMBERINPUT};