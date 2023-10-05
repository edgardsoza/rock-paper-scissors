const options = ['rock', 'paper', 'scissors'];
let currentRound = 0;
let humanCounter = 0;
let machineCounter = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = document.getElementById("choice").value;
    let playerImg = "images/" + playerSelection + ".png";
    let computerImg = "images/" + computerSelection + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", playerImg);
    document.querySelectorAll("img")[1].setAttribute("src", computerImg);

    document.getElementById("choice").value = "";
    if (playerSelection == computerSelection) {
        return 0;
    } else if (
        (playerSelection == 'rock' && computerSelection == "scissors") ||
        (playerSelection == 'paper' && computerSelection == "rock") ||
        (playerSelection == 'scissors' && computerSelection == "paper")
    ) {
        return 1;
    } else {
        return 2;
    }
}

function game() {
    let roundResult = playRound();

    if (roundResult == 1) {
        humanCounter += 1;
        currentRound += 1;
    } else if (roundResult == 2) {
        machineCounter += 1;
        currentRound += 1;
    }

    updateScore();

    if (currentRound >= 5) {
        endGame();
        return;
    }
}

function updateScore() {
    document.querySelector("h1").style.fontSize = "3rem";
    document.querySelector("h1").innerHTML = `Humans=${humanCounter} and Machines=${machineCounter} Round ${currentRound}/5 FIGHT AGAIN HUMAN!`;
}

function endGame() {
    document.querySelector("h1").style.fontSize = "6rem";
    console.log(machineCounter, humanCounter)
    if (machineCounter > humanCounter) {
        document.querySelector("h1").innerHTML = "Machines have won!!! Your world is ours!! Final score is Machines=" + machineCounter + " and Humans=" + humanCounter +" REFRESH TO PLAY AGAIN";
    } else {
        document.querySelector("h1").innerHTML = "Humans have won!!! We will send you our best antivirus!!  Final score is Humans=" + humanCounter + " and Machines=" + machineCounter +" REFRESH TO PLAY AGAIN";
    }
    document.querySelector(".gameboard").style.display='none';
    document.querySelector("select").style.display='none';
    document.querySelector("label").style.display='none';

}

var activities = document.getElementById("choice");
activities.addEventListener("input", function (e) {
    game();
});
