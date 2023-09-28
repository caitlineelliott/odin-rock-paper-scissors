const buttons = document.querySelectorAll("button")
const scoresContainer = document.querySelector(".scores-container")
const playerSelection = document.querySelector(".player-selection")
const computerSelection = document.querySelector(".computer-selection")
const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")
const results = document.getElementById("results")

let gameCount = 0
let selectionOptions = new Set(['rock', 'paper', 'scissors'])
const maxSelectionIdx = [...selectionOptions].length -1

const setVictoryMessage = (winner) => {
    results.style.display = 'block';
    if (winner === 'both') {
        results.innerHTML = `It's a tie!`
    } else {
        results.innerHTML = `${winner} wins!`
    }
}

const incrementScores = (gameWinner) => {
    if (gameWinner === 'computer') {
        computerScore.innerHTML++
    } else if (gameWinner === 'player') {
        playerScore.innerHTML++
    } else {
        computerScore.innerHTML++
        playerScore.innerHTML++
    }
}

const determineWinner = (playerSelection, computerSelection) => {
    const computerSelectionIdx = [...selectionOptions].indexOf(computerSelection)
    const playerSelectionIdx = [...selectionOptions].indexOf(playerSelection)

    if (playerSelection === computerSelection) {
        return 'both'
    } else if (playerSelectionIdx === maxSelectionIdx && computerSelectionIdx === 0) {
        return 'computer'
    } else if (playerSelectionIdx === 0 && computerSelectionIdx === maxSelectionIdx) {
        return 'player'
    } else {
        if (playerSelectionIdx > computerSelectionIdx) {
            return 'player'
        } else {
            return 'computer'
        }
    }
}

const getComputerSelection = () => {
    return [...selectionOptions][parseInt((Math.random() * 2).toFixed())]
}

const updateBtnUI = (playerSelection) => {
    buttons.forEach(button => {
        if (button.id !== playerSelection) {
            button.classList.add('not-selected')
        }
    })
}
   
const playGame = (playerSelection) => {
    if (gameCount < 5 && selectionOptions.has(playerSelection)) {
        updateBtnUI(playerSelection)

        const computerSelection = getComputerSelection()
        
        const winner = determineWinner(playerSelection, computerSelection)
        incrementScores(winner)

        if (winner === 'player') {
            setVictoryMessage(winner, playerSelection, computerSelection)
        } else {
            setVictoryMessage(winner, computerSelection, playerSelection)
        }

        gameCount++
    }
}