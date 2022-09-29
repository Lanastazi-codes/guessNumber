let game = document.querySelector(".game-container")
let computerNumber = document.getElementById('number');
let generatorBtn = document.querySelector(".generate-btn");
let userInput = document.querySelector(".users-input");
let submitBtn = document.querySelector(".submit-btn");


function numberGenerator(x) {
    computerNumber.innerHTML = "Write your guess🤔";
    randomNumber = Math.ceil(Math.random() * x);
    console.log(randomNumber);

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

    submitBtn.addEventListener("click", numberComparison);
}

function userWon() {
    computerNumber.innerHTML = "Ти виграв!!!🤩😎🎉";
}


