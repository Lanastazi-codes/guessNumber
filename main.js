let game = document.querySelector(".game-container")
let computerNumber = document.getElementById('number');
let generatorBtn = document.querySelector(".generate-btn");
let userInput = document.querySelector(".users-input");
let submitBtn = document.querySelector(".submit-btn");


function numberGenerator(x) {
    computerNumber.innerHTML = "Write your guess🤔";
    randomNumber = Math.ceil(Math.random() * x);

    function numberComparison() {

        let usersGues = userInput.value;
        if (randomNumber < usersGues) {
            confirm("менше😉");

        }else if (randomNumber > usersGues) {
            confirm("більше😏");

        }else{
            confirm("Ти виграв!!!🤩😎🎉");
            numberGenerator(x);
        }
    }

    submitBtn.addEventListener("click", numberComparison);
}




