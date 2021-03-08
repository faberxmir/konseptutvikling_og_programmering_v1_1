const HIGHSCOREKEY = "highscore";

const correctAnswer = Math.round(Math.random()*100);
const inputField = document.querySelector("input");
const outputField = document.querySelector("#feedback");
const timerField = document.querySelector("#timer");

let guesscounter = 0;
let runGame = true;
let currentTimeSecs = 0;
let timer = timerController();

let highscorelist = localStorage.getItem(HIGHSCOREKEY);

if(highscorelist === null){
    highscorelist = [
        {name: "AAA", time: 60, guesses: 15},
        {name: "BBB", time: 120, guesses: 15},
        {name: "CCC", time: 180, guesses: 15}]
    let jsonString = JSON.stringify(highscorelist);
    localStorage.setItem(HIGHSCOREKEY, jsonString);
}

addHighScorelist();
restart();

document.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'Enter':
            makeaGuess();
            break;
        case 'Escape':
            restart();
            break;
        default:
            if(isNaN(parseInt(event.key))){
                event.preventDefault();
            }
            break;
    }
});

inputField.addEventListener('input', event => {
  
    let keypress = event.data;
    let inputNumber;
    keypress = parseInt(keypress);

    inputNumber = parseInt(inputField.value);

    if(inputNumber >= 0 && inputNumber < 101){
        if(inputNumber > 10){
            makeaGuess();
        }
    } else {
        clearInputField();
    }
});

function makeaGuess(){
    ++guesscounter;
    guessedNumber = inputField.value;
    if(guessedNumber > correctAnswer){
        feedback("your guess was to high!")
    } else if(guessedNumber < correctAnswer){
        feedback("your guess was to low!")
    } else {
        win();
    }
    setTimeout(clearInputField, 200);
}

function feedback(feedback){
    outputField.innerText = feedback;
}

function clearInputField(){
    inputField.value = "";
}

function win(){
    feedback(`CORRECT! Time spent ${currentTimeSecs} seconds. Number of guesses ${guesscounter}`);
    clearInterval(timer);
    console.log("you won!");
    checkForHighScore("");
}

function checkForHighScore(user){
    for(let i = 0; i < highscorelist.length; ++i){
        if(user.guesses < highscorelist[i].guesses){
            
            for(let y = highscorelist.length-1; y < i; --y){

            }
        }
    }
}



function restart(){
    resetOutputField();
    clearInputField();
    timerField.innerText = 0;
    clearInterval(timer);
    timer = timerController();
}

function resetOutputField(){
    outputField.innerText = "Gjett et tall mellom 1 og 100";
}
function addHighScorelist(){
    const highscoreHTML = document.querySelector("#highscoreHTML").getElementsByTagName("li");
    highscorelist = JSON.parse(highscorelist);
    let node = highscoreHTML.firstChild;

    for(let i = 0; i < highscoreHTML.length; ++i){
        console.log(highscoreHTML[i]);
        highscoreHTML[i].innerHTML = `${highscorelist[i].name} - guesses: ${highscorelist[i].guesses} - time: ${highscorelist[i].time}`;
    }
}

function timerController(){
    let startTime = Date.now();
    let currentTimeMS;

   return setInterval(() => {
        currentTimeMS = Date.now()-startTime;
        currentTimeSecs = currentTimeMS/1000; //1000ms in a sec
        timerField.innerText = parseInt(currentTimeSecs);
    }, 1000);

}