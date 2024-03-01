function getComputerChoice() {
    let computerChoice;
    const rpschoice = ['Rock', 'Paper', 'Scissors']
    index = Math.floor(Math.random() * 3)
    computerChoice = rpschoice[index]
    return computerChoice
}
function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        score = -1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        score = -1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        score = -1
    }
    return score
}
function showResult(score, playerChoice, computerChoice) {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')

    if (score == 1) {
        result.innerText = 'You win'
    }
    else if (score == 0) {
        result.innerText = 'Draw'
    }

    else {
        result.innerText = 'You lose'
    }
    hands.innerText = `👨${playerChoice} vs 🤖${computerChoice}`

}
let totalscore = 0
function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice()
    let score = getResult(playerChoice, computerChoice)

    totalscore = totalscore + score
    result = document.getElementById('player-score')
    result.innerText = totalscore
    showResult(score, playerChoice, computerChoice)

}


function playGame() {
    rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => {
            onClickRPS(rpsButton.value)
        }


    });


    endButton = document.getElementById('endGameButton')
    endButton.onclick = () => {
        endGame()
    }
}

function endGame() {
    playerScore = document.getElementById('player-score')
    hands = document.getElementById('hands')
    result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''

}

playGame()