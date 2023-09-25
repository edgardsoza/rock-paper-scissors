const options = ['rock', 'paper', 'scissors'];
let humanCounter = 0;
let machineCounter = 0;
let roundNumber = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    var playerImg = "images/" + playerSelection + ".png";
    var computerImg = "images/" + computerSelection + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", playerImg);
    document.querySelectorAll("img")[1].setAttribute("src", computerImg);
    if (playerSelection == computerSelection) {
        return 0;
    } else if (
        (playerSelection == 'rock' && computerSelection == "scissors") ||
        (playerSelection == 'paper' && computerSelection == "rock") ||
        (playerSelection == 'scissors' && computerSelection == "paper")
    ) {
        return 1; // Player wins
    } else {
        return 2; // Computer wins
    }
}

function updateScore() {
    document.querySelector("h1").style.fontSize = "3rem";
    document.querySelector("h1").innerHTML = `Humans=${humanCounter} and Machines=${machineCounter} Round ${roundNumber}/5 FIGHT AGAIN HUMAN!`;
}

async function game() {
    roundNumber++;
    if (roundNumber > 5) {
        endGame();
        return;
    }

    const activities = document.getElementById("choise");
    let roundResult = playRound(activities.value);

    if (roundResult == 1) {
        humanCounter += 1;
    } else if (roundResult == 2) {
        machineCounter += 1;
    }

    updateScore();
}

function endGame() {
    document.querySelector("h1").style.fontSize = "6rem";
    if (machineCounter > humanCounter) {
        document.querySelector("h1").innerHTML = "Machines have won!!! Your world is ours!! Final score is Machines=" + machineCounter + " and Humans=" + humanCounter +" REFRESH TO PLAY AGAIN";
    } else {
        document.querySelector("h1").innerHTML = "Humans have won!!! We will send you our best antivirus!!  Final score is Humans=" + humanCounter + " and Machines=" + machineCounter +" REFRESH TO PLAY AGAIN";
    }
    document.querySelector(".gameboard").style.display='none';
    document.querySelector("select").style.display='none';
    document.querySelector("label").style.display='none';

}

var activities = document.getElementById("choise");
activities.addEventListener("change", function (e) {
    game();
});

// Start the game
