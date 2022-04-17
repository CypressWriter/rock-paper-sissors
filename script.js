let score;
let scoreToWin = 5;

function computerPlay() {
    let roll;
    let result;
    
    roll = Math.floor(Math.random() * 3);

    switch (roll) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "sissors";
            break;
        default:
            console.log("error");
    }
    return result;
}


/*
function playerPlay() {
    let result = window.prompt("Rock, paper, or sissors?");
    result = result.toLowerCase();
    return result;
}
*/

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sissors = document.getElementById("sissors");

rock.addEventListener("click", function () {playerPlay("rock")});
paper.addEventListener("click", function () {playerPlay("paper")});
sissors.addEventListener("click", function () {playerPlay("sissors")});

function playerPlay (selection) {
    playerSelection = selection;
    console.log(playerSelection);
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "tie";
        }
        if (computerSelection === "paper") {
            return "lose";
        }
        if (computerSelection === "sissors") {
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