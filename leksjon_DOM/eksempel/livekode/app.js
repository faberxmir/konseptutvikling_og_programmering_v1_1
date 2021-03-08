const input = document.querySelector("input");
const output = document.querySelector("#feedback");
const allowedInput = /0-9/;
const correctAnswer = Math.round(Math.random()*100);

input.addEventListener('keyup', (event) => {

});

function checkForGuess(){
    const inFieldValue = parseInt(input.innerHTML);
    if(infieldValue > 11){
        guess(infieldValue);
    }
}

function guess(number){
    return number === correctAnswer;
}

//check if number

//check if high or low

//give feedback

//change css values