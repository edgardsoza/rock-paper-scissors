const options = ['rock', 'paper' , 'scissors']

function computerPlay () {
    return options[Math.floor(Math.random()*options.length)]
}

function playRound () {
    let playerSelection = (prompt('Enter your input, you miserable Human')).toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return 0
    } else if (playerSelection == 'rock' & computerSelection == "scissors") {
        return 1
    } else if (playerSelection == 'rock' & computerSelection == "paper") {
        return 2
    } else if (playerSelection == 'paper' & computerSelection == "scissors") {
        return 2
    } else if (playerSelection == 'paper' & computerSelection == "rock") {
        return 1
    } else if (playerSelection == 'scissors' & computerSelection == "rock") {
        return 2
    } else if (playerSelection == 'scissors' & computerSelection == "paper") {
        return 1
    }
}

function game() {
        let humanCounter = 0;
        let machineCounter = 0;
        let i = 0;
        while (i<5) {
            let round = playRound();
            if (round == 1) {
                humanCounter += 1;
                i++;
                console.log(`Humans won this round!! Humans=${humanCounter} and Machines=${machineCounter}`)
            } else if (round == 2) {
                machineCounter +=  1;
                i++;
                console.log(`The AI has won this one hahahaha!! Machines=${machineCounter} and Humans=${humanCounter}`)
            } else {
                console.log(`This round goes for nobody!! Try again you human!! Machines=${machineCounter} and Humans=${humanCounter}`)
                continue;
            }
        }
        if(machineCounter > humanCounter) {
            return(`Machines have won!!! Your world is ours!! Final score is Machines=${machineCounter} and Humans=${humanCounter}`)
        } else {
            return(`Humans have won!!! We will send you our best antivirus!!  Final score is Humans=${humanCounter} and Machines=${machineCounter}`)
        }
    }
