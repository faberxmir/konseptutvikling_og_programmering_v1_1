const numberField = document.querySelector(".guessField");
const correctAnswer = Math.round(Math.random()*100);

numberField.focus();
console.log(correctAnswer);

const guess = (inputNumber) => {
    console.log(`my guess was ${inputNumber}`);
    if(inputNumber > correctAnswer){
        setStatusText(`${inputNumber} was to high!`, 1)
    } else if(inputNumber < correctAnswer) {
        setStatusText(`${inputNumber} was to low!`, -1);
    } else {
        setStatusText('correct answer', 0);
    }
};


const setStatusText = (inputNumber, validator) => {
    const statusField = document.querySelector(".statusText");
    switch(validator){
        case 0:
            statusField.innerHTML = "Correct Answer, you rock!";
            if(statusField.classList.contains('error')){
                statusField.classList.toggle('error');
            }
            statusField.classList.toggle('success');
            break;
        case 1:
            clearInputField();
            statusField.innerHTML = `${inputNumber} is to HIGH, try again`;
            if(!statusField.classList.contains('error')){
                statusField.classList.toggle('error');
            }
            break;
        case -1:
            statusField.innerHTML = `${inputNumber} is to LOW, try again`;
            if(!statusField.classList.contains('error')){
                statusField.classList.toggle('error');
            }
            clearInputField();
            break; 
    }
}

const clearInputField = ()=>{
    numberField.value = '';
}

numberField.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(e.key != 'Backspace'){
        if(e.key == 'Enter'){
            guess(numberField.value);

        } else if(isNaN(e.key)){
            location.reload();

        } else {
            let guessFieldContent = numberField.value;

            if(guessFieldContent.length > 3 || guessFieldContent > 100){
                guessFieldContent = guessFieldContent.slice(0, -1);
                numberField.value = guessFieldContent;

            } else if(numberField == 100 || guessFieldContent.length > 1 && guessFieldContent != 10 ){
                guess(guessFieldContent);
            }
        }
    }
});