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
let ties = 0;
let tieLength = 0;

function rockPlayer() {
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    var playerChoice = "rock"
    
    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+", too. Shoot again!";
        ties++;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        tieLength++;
        document.getElementById("r_btn").style.backgroundColor = "#555";
        document.getElementById("s_btn").style.backgroundColor = "#555";
        document.getElementById("p_btn").style.backgroundColor = "#555";
    } else if (gameResult === "w") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You won against the computer!";
        wins++;
        games++;
        var tieLength = 0;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        document.getElementById("r_btn").style.backgroundColor = "green";
        document.getElementById("s_btn").style.backgroundColor = "red";
        document.getElementById("p_btn").style.backgroundColor = "#555";

    } else if (gameResult === "l") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". Better luck next time...";
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        losses++;
        games++;
        var tieLength = 0;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        document.getElementById("r_btn").style.backgroundColor = "red";
        document.getElementById("p_btn").style.backgroundColor = "green";
        document.getElementById("s_btn").style.backgroundColor = "#555";
    }



}

function paperPlayer() {
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    var playerChoice = "paper"
    
    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+", too. Shoot again!";
        ties++;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        ties++;
        tieLength++;
        document.getElementById("r_btn").style.backgroundColor = "#555";
        document.getElementById("s_btn").style.backgroundColor = "#555";
        document.getElementById("p_btn").style.backgroundColor = "#555";
    } else if (gameResult === "w") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You won against the computer!";
        wins++;
        games++;
        var tieLength = 0;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        document.getElementById("p_btn").style.backgroundColor = "green";
        document.getElementById("r_btn").style.backgroundColor = "red";
        document.getElementById("s_btn").style.backgroundColor = "#555";

    } else if (gameResult === "l") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". Better luck next time...";
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        losses++;
        games++;
        var tieLength = 0;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        document.getElementById("p_btn").style.backgroundColor = "red";
        document.getElementById("s_btn").style.backgroundColor = "green";
        document.getElementById("r_btn").style.backgroundColor = "#555";
    }

}
function scissorsPlayer() {
    const aiChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    var playerChoice = "scissors"
    
    var gameResult = shoot(aiChoice, playerChoice);

    if (gameResult === "t") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+", too. Shoot again!";
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        ties++;
        tieLength++;
        document.getElementById("r_btn").style.backgroundColor = "#555";
        document.getElementById("s_btn").style.backgroundColor = "#555";
        document.getElementById("p_btn").style.backgroundColor = "#555";
    } else if (gameResult === "w") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". You won against the computer!";
        wins++;
        games++;
        var tieLength = 0;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        document.getElementById("s_btn").style.backgroundColor = "green";
        document.getElementById("p_btn").style.backgroundColor = "red";
        document.getElementById("r_btn").style.backgroundColor = "#555";

    } else if (gameResult === "l") {
        document.getElementById("demo").innerHTML = "AI chose "+aiChoice+". Better luck next time...";
        ties++;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        losses++;
        games++;
        var tieLength = 0;
        document.getElementById("score").innerHTML = "You've won "+wins+" out of "+games+" games. You've tied "+ties+" times.";
        document.getElementById("s_btn").style.backgroundColor = "red";
        document.getElementById("r_btn").style.backgroundColor = "green";
        document.getElementById("p_btn").style.backgroundColor = "#555";
    }

}