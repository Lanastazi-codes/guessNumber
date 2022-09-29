let game = document.querySelector(".game-container")
let computerNumber = document.getElementById('number');
let generatorBtn = document.querySelector(".generate-btn");
let userInput = document.querySelector(".users-input");
let submitBtn = document.querySelector(".submit-btn");

let randomNumber = false;

function numberGenerator(x) {
    computerNumber.innerHTML = "Впиши здогадку🤔";
    randomNumber = Math.ceil(Math.random() * x);
    console.log(randomNumber);

    submitBtn.addEventListener("click", numberComparison);
}

function numberComparison() {

        let usersGues = userInput.value;
        if (randomNumber < usersGues) {
            computerNumber.innerHTML = "менше😉";
        }else if (randomNumber > usersGues) {
            computerNumber.innerHTML = "більше😏";
        }else{
            userWon()
        }
        
    }

function userWon() {
    computerNumber.innerHTML = "Ти виграв!!!🤩😎🎉";
}


