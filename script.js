const buttons = document.querySelectorAll("button")
const scoresContainer = document.querySelector(".scores-container")
const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")

let gameCount = 0
let selectionOptions = new Set(['rock', 'paper', 'scissors'])
let gameWinner

const getComputerSelectionIdx = () => {
    return parseInt((Math.random() * 2).toFixed())
}

const setResults = (gameWinner) => {
    if (gameWinner === 'computer') {
        computerScore.innerHTML++
    } else if (gameWinner === 'player') {
        playerScore.innerHTML++
    } else {
        computerScore.innerHTML++
        playerScore.innerHTML++
    }
}
 
const playGame = (playerSelection) => {
    if (gameCount < 5 && selectionOptions.has(playerSelection)) {
        const computerSelection = [...selectionOptions][getComputerSelectionIdx()]
        const computerSelectionIdx = [...selectionOptions].indexOf(computerSelection)
        const playerSelectionIdx = [...selectionOptions].indexOf(playerSelection)
        const maxSelectionIdx = [...selectionOptions].length -1

        // Compute possible outcomes
        if (playerSelection === computerSelection) {
            gameWinner = 'both'
        } else if (playerSelectionIdx === maxSelectionIdx && computerSelectionIdx === 0) {
            gameWinner = 'computer'
        } else if (playerSelectionIdx === 0 && computerSelectionIdx === maxSelectionIdx) {
            gameWinner = 'player'
        } else {
            if (playerSelectionIdx > computerSelectionIdx) {
                gameWinner = 'player'
            } else {
                gameWinner = 'computer'
            }
        }

        setResults(gameWinner)
        gameCount++
    }
}

buttons.forEach((button) => button.addEventListener("click", () => { 
    playGame(button.id)
}))


// User clicks button
// if GAMES < 5 =>
// Computer stores user selection
// Computer gets computer selection
// Computer compares user & computer score

// OUTCOMES
// rock beats scissors 0
// paper beats rock 1
// scissors beats paper 2

// Computer delivers results message
// Computer increments games + 1
// Computer records scores
// Loop until Games === 5