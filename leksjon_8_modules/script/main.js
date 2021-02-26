import * as Controller from './controller.js';

const inputfield = document.querySelector("#numberfield");
const outputfield = document.querySelector("#outputfield");

let bufferedOperator    = null;
let bufferedInput_a     = null;
let bufferedInput_b     = null;
let tempResult = null;

let state_input_a = true;

inputfield.addEventListener('keyup', (e)=>{
    let handledKeyResult = Controller.default(e.key);
    handleKeyResult(handledKeyResult);
});

function handleKeyResult(result) {
    switch(result){
        case Controller.NUMBERINPUT:
            handleNumberInput();
            break;
        case Controller.CLEARDATA:
            clearfield();
            reset();
            break;
        case Controller.CALCULATE:
            handleFunction(bufferedOperator);
            break;
        case Controller.INVALIDOPERATION:
            break;
        default:
            if(typeof(result) === 'function'){
                handleFunction(result);
            }
            break;
    }
}

function handleFunction(funParam) {
    // hvis ingen funksjon finnes i bufferen så må
    // betyr det at funksjonen vi mottar her skal lagres
    // i bufferen. Hvis det allerede finnes en funksjon i 
    // bufferen, så må vi sjekke om det finnes et tall i 
    // bufferen og om det finnes et tall i inputfeltet. 
    // Isåfall skal det gjøres en utregning. Om det ikke 
    // finnes et tall i inputfeltet, så skal den nye 
    // regneoperasjonen settes til bufferen uten at det
    // skjer noe mer, ellers skal det selvsagt gjøres en 
    // utregning. Det betyr tre mulig tilstander:

    //  case 1 bufferedInput = null, bufferedOperator = null, inputfield er tomt; 
    //  brukeren har trykket en operator
    //  legg til operatoren i bufferen
    //  og clearfield()

    // case 2 bufferedInput_a != null, bufferedOperator = null, inputfield er tomt;
    // brukeren har trykket en operator
    // legg til operatoren i bufferen
    // sett state_input_a = false;
    // clearfield();

    // case 3 bufferedInput_a !=null, bufferedInput_b != null, bufferedOperator != null
    // brukeren har trykket en operator eller enter
    // bruk operatoren og gjør utrenging på tall a og b i bufferen
    // clearfield, setOutput og sett svaret til bufferedInput_a, bufferedInput_b == null,

    // case 5

    if(funParam != null){
        if(bufferedInput_a != null && bufferedInput_b != null){
            let result = funParam(bufferedInput_a, bufferedInput_b);
            setResultField(result);
            bufferedInput_a = result;
            bufferedInput_b = null;

        } else if(bufferedInput_a != null) {
            bufferedOperator = funParam;
            state_input_a = false;
        }

    } else if(bufferedInput_a != null && state_input_a == true){//Dette kan bare skje hvis "Calculate" slår inn
        state_input_a = false;
    }
    clearfield();
}

function handleNumberInput() {
    let number = parseInt(inputfield.value);
    if(typeof(number)==='number'){
        if(state_input_a){
            bufferedInput_a = number;
        } else {
            bufferedInput_b = number;
        }
        console.log(`Buffer changed to: a= ${bufferedInput_a} b=${bufferedInput_b}`);
    }
}

function clearfield(){
    console.log("Clearing Field!");
    inputfield.value = "";
}

//resets the calculator to its default state
function reset(){
    state_input_a = true;
    bufferedOperator = null;
    bufferedInput_a = null;
    bufferedInput_b = null;
    tempResult = null;
    outputfield.innerHTML="---";
}

function setResultField(result){
    outputfield.innerHTML = result;
}