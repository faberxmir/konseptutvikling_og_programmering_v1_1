const HIGHSCOREKEY = "highscore";
const HIGHSCORELISTLENGTH = 3;

const inputField = document.querySelector(".guessfield");
const outputField = document.querySelector("#feedback");
const timerField = document.querySelector("#timer");
const highscoreinput = document.querySelector(".highscoreinput"); 

let correctAnswer; 

let guesscounter = 0;
let runGame = true;
let currentTimeSecs = 0;
let timer = timerController();

let highscorelist;
highscorelist = getHighScoreList();

renderHighScorelist();
initNewGame();

document.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'Enter':
            makeaGuess();
            break;
        case 'Escape':
            initNewGame();
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

highscoreinput.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Submitted!");
});

function generateAnswer(){
    const answer = Math.round(Math.random()*100);
    console.log(answer);
    return answer;
}

function makeaGuess(){
    ++guesscounter;
    guessedNumber = inputField.value;
    if(guessedNumber > correctAnswer){
        feedback("your guess was to high!");
    } else if(guessedNumber < correctAnswer){
        feedback("your guess was to low!");
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
    checkForHighScore();
}

//Check if the user has a highscore and put it in where it belongs
function checkForHighScore(user){
    console.log("checkforhighscorecalled");
    let tempPosition;
    for(let i = 0; i < highscorelist.length; ++i){
        if(guesscounter < highscorelist[i].guesses){
            tempPosition = i;
            console.log(`user has a highscore! highscore to beat ${highscorelist[i].guesses}`);
        }
    }
    if(typeof tempPosition !== 'undefined'){
        let tempuser;
        for(let i = tempPosition; i >0; --i){
            tempuser= highscorelist[i-1]
            //highscorelist[i-1] = highscorelist[i];
        }
        highscorelist[tempPosition].name = "GGG";
        highscorelist[tempPosition].guesses = 10;
        highscorelist[tempPosition].time = 10;
    }
    console.log(highscorelist);
    setHighScoreList();
    renderHighScorelist();
}

function initNewGame(){
    generateAnswer();
    resetOutputField();
    clearInputField();
    timerField.innerText = 0;
    clearInterval(timer);
    timer = timerController();
}

function resetOutputField(){
    outputField.innerText = "Gjett et tall mellom 1 og 100";
}


function setHighScoreList(){
    localStorage.setItem(HIGHSCOREKEY, JSON.stringify(highscorelist));
}

function getHighScoreList(){
    highScoreList = JSON.parse(localStorage.getItem(HIGHSCOREKEY));

    if(highscorelist === null){
        highscorelist = [
            {name: "AAA", time: 60, guesses: 15},
            {name: "BBB", time: 120, guesses: 15},
            {name: "CCC", time: 180, guesses: 15}]
        let jsonString = JSON.stringify(highscorelist);
        localStorage.setItem(HIGHSCOREKEY, jsonString);
    }

    return highScoreList;
}
function renderHighScorelist(){
    let highscoreHTML = document.querySelector("#highscoreHTML"); 
    highscorelist = getHighScoreList();
    let element;
    console.log(`highscorelist length: ${HIGHSCORELISTLENGTH}`);
    for(let i = 0; i < HIGHSCORELISTLENGTH; ++i){
        element = document.createElement("li");
        element.innerHTML = 
            `
                <span class="name">${highscorelist[i].name}</span> 
                <span class="guesses"> guesses: ${highscorelist[i].guesses}</span> 
                <span class="time"> time: ${highscorelist[i].time} sec</span>
            `
            ;
        
        highscoreHTML.appendChild( element );
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