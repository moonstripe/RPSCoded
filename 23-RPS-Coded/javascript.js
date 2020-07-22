var rpsChoices = ["rock", "paper", "scissors"];
var gameStates = ["w", "l", "t"];

// Inputs: player, computer choices. Outputs: game results

function shoot(ai, player) {
    if (ai === player) {
        return "t";

        // player loses
    } else if (ai === "rock" && player === "scissors") {
        return "l";
    } else if (ai === "scissors" && player === "paper") {
        return "l";
    } else if (ai === "paper" && player === "rock") {
        return "l";
        // player wins
    } else if (ai === "scissors" && player === "rock") {
        return "w";
    } else if (ai === "rock" && player === "paper") {
        return "w";
    } else if (ai === "paper" && player === "scissors") {
        return "w";
    } 
}

// Iterates while adding games

let games = 0;
let wins = 0;
let losses = 0;

while (games < 10) {
    var playerChoice = prompt("Do you choose 'rock', 'paper', or 'scissors'?");
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    alert("ai chose "+aiChoice);

    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        alert("You tied with the Computer, try again");
    } else if (gameResult === "w") {
        alert("You won against the Computer!");
        wins++;
        games++;
    } else if (gameResult === "l") {
        alert("You got your ass beat...");
        losses++;
        games++;
    }
}

alert("You won "+wins+" games out of 10!");