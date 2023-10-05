const options = ['rock', 'paper', 'scissors'];
let currentRound = 0;
let humanCounter = 0;
let machineCounter = 0;
let activities = document.getElementById("choice");
const mainContainer = document.querySelector(".gameboard").parentNode;
const firstDiv = document.querySelector(".gameboard");
const firstTitle = document.querySelector("h1");
const updateTitle = document.createElement("h3");
const select = document.querySelector("#choice");
const label = document.querySelector("label");

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
    updateTitle.textContent="";
    updateScore();
    if (currentRound >= 5) {
        endGame();
        return;
    }
}

function updateScore() {
    updateTitle.textContent = `Humans=${humanCounter} and Machines=${machineCounter} Round ${currentRound}/5 FIGHT AGAIN HUMAN!`;
    mainContainer.insertBefore(updateTitle, firstDiv);
}

function endGame() {
    updateTitle.textContent="";
    if (machineCounter > humanCounter) {
        firstTitle.textContent = "Machines have won!!! Your world is ours!! Final score is Machines=" + machineCounter + " and Humans=" + humanCounter;
    } else {
        firstTitle.textContent = "Humans have won!!! We will send you our best antivirus!!  Final score is Humans=" + humanCounter + " and Machines=" + machineCounter;
    }
    firstDiv.classList.add('display-none');
    label.classList.add('display-none');
    select.classList.add('display-none');
    const restartButton = document.createElement("input");
    restartButton.type = "button";
    restartButton.value = "Play Again";
    restartButton.id = "restartButton";
    mainContainer.appendChild(restartButton)
    restartButton.addEventListener("click", function () {
        location.reload();
    });
}

activities.addEventListener("input", function (e) {
    game();
});
