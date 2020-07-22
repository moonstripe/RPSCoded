function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

var rpsChoices = ["rock", "paper", "scissors"];
var gameStates = ["w", "l", "t"];

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

let games = 0;
let wins = 0;
let losses = 0;

function rockPlayer() {
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    var playerChoice = "rock"
    
    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You tied with the Computer, try again.";
        document.getElementById("score").innerHTML = wins + " out of "+games;
    } else if (gameResult === "w") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You won against the computer!";
        wins++;
        games++;
        document.getElementById("score").innerHTML = wins + " out of "+games;
    } else if (gameResult === "l") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". Better luck next time...";
        losses++;
        games++;
        document.getElementById("score").innerHTML = wins + " out of "+games;
    }



}

function paperPlayer() {
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    var playerChoice = "rock"
    
    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You tied with the Computer, try again.";
        document.getElementById("score").innerHTML = wins + " out of "+games;
    } else if (gameResult === "w") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You won against the computer!";
        wins++;
        games++;
        document.getElementById("score").innerHTML = wins + " out of "+games;
    } else if (gameResult === "l") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". Better luck next time...";
        losses++;
        games++;
        document.getElementById("score").innerHTML = wins + " out of "+games;
    }

}
function scissorsPlayer() {
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    var playerChoice = "rock"
    
    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You tied with the Computer, try again.";
        document.getElementById("score").innerHTML = wins + " out of "+games;
    } else if (gameResult === "w") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You won against the computer!";
        wins++;
        games++;
        document.getElementById("score").innerHTML = wins + " out of "+games;
    } else if (gameResult === "l") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". Better luck next time...";
        document.getElementById("score").innerHTML = wins + " out of "+games;
        losses++;
        games++;
        document.getElementById("score").innerHTML = wins + " out of "+games;
    }

}