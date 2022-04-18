let playerScore = 0;
let computerScore = 0;
let scoreToWin = 5;

let gameEnd = false;

const resultDiv = document.querySelector("#result");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sissors = document.getElementById("sissors");

rock.addEventListener("click", function () {playerPlay("rock")});
paper.addEventListener("click", function () {playerPlay("paper")});
sissors.addEventListener("click", function () {playerPlay("sissors")});

function playerPlay (selection) {

    if (playerScore < 5 && computerScore < 5) {
        playerSelection = selection;

        const result = document.createElement("div");
        result.classList.add("result");
        result.textContent = "Player selected " + playerSelection;
        resultDiv.appendChild(result);

        const roundResultDiv = document.createElement("div");
        roundResultDiv.classList.add("result");

        roundResult = playRound(selection, computerPlay());

        if (roundResult === "tie") {
            roundResultDiv.textContent = "Tie!";
        }
        else if (roundResult === "win") {
            roundResultDiv.textContent = "Player wins this round!";
            playerScore++;
        }
        else if (roundResult === "lose") {
            roundResultDiv.textContent = "Computer wins this round!";
            computerScore++;
        }

        resultDiv.appendChild(roundResultDiv);
    }
    else if (playerScore === 5) {
        result.textContent = "Player won the game!";
        gameEnd = true;
    }
    else if (computerScore === 5) {
        result.textContent = "Computer won the game!";
        gameEnd = true;
    }
};

function computerPlay() {
    let roll;
    let result;
    
    roll = Math.floor(Math.random() * 3);

    const computerResult = document.createElement("div");
    computerResult.classList.add("computerResult");

    switch (roll) {
        case 0:
            result = "rock";
            computerResult.textContent = "Computer selected " + result;
            break;
        case 1:
            result = "paper";
            computerResult.textContent = "Computer selected " + result;
            break;
        case 2:
            result = "sissors";
            computerResult.textContent = "Computer selected " + result;
            break;
        default:
            console.log("error");
    }

    resultDiv.appendChild(computerResult);
    return result;
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "tie";
        }
        if (computerSelection === "paper") {
            return "lose";
        }
        if (computerSelection === "sissors") {
            playerScore++;
            return "win";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "win";
        }
        if (computerSelection === "paper") {
            return "tie";
        }
        if (computerSelection === "sissors") {
            return "lose";
        }
    }

    if (playerSelection === "sissors") {
        if (computerSelection === "rock") {
            return "lose";
        }
        if (computerSelection === "paper") {
            return "win";
        }
        if (computerSelection === "sissors") {
            return "tie";
        }
    }
}



/*
function game() {
    for (let i = 0; i < scoreToWin; i++) {
        console.log (playRound(playerPlay(), computerPlay()));
    }
}

game();
*/