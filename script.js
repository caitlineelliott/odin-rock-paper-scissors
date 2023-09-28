const buttons = document.querySelectorAll("button")
const scoresContainer = document.querySelector(".scores-container")
const playerSelection = document.querySelector(".player-selection")
const computerSelection = document.querySelector(".computer-selection")
const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")
const results = document.getElementById("results")
const resultsSubtitle = document.getElementById("results-subtitle")

let gameCount = 0
let selectionOptions = new Set(['rock', 'paper', 'scissors'])
const maxSelectionIdx = [...selectionOptions].length -1

const setVictoryMessage = (winner, winnerSelection, loserSelection) => {
    results.style.display = 'block';
    if (winner === 'both') {
        results.innerHTML = `It's a tie!`
        resultsSubtitle.style.display = 'block'
        resultsSubtitle.innerHTML = `both chose ${winnerSelection}`
    } else {
        results.innerHTML = `${winner} wins!`
        resultsSubtitle.style.display = 'block'
        resultsSubtitle.innerHTML = `${winnerSelection} beats ${loserSelection}`
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

const setSelectionOnUI = (playerSelection, computerSelection) => {
    buttons.forEach(button => {
        if (button.id !== playerSelection) {
            button.classList.add('not-selected')
            button.classList.remove('selected')
        } else {
            button.classList.add('selected')
            button.classList.remove('not-selected')
        }
    })

    const options = document.getElementsByClassName('computer-btns')[0].children
    for (option of options) {
        if (option.id === `computer-${computerSelection}`) {
            option.classList.add('selected')
            option.classList.remove('not-selected')
        } else {
            option.classList.remove('selected')
            option.classList.add('not-selected')
        }
    }
}

const getComputerSelection = () => {
    const computerSelection = [...selectionOptions][parseInt((Math.random() * 2).toFixed())]
    setSelectionOnUI(computerSelection)
    return computerSelection
}

const getOverallWinnerMessage = (playerScore, computerScore) => {
    let result
    if (playerScore > computerScore) {
        result = `you won ${playerScore} to ${computerScore}`
    } else if (computerScore > playerScore) {
        result = `the computer won ${computerScore} to ${playerScore}`
    } else {
        result = `it's a ${playerScore}-${computerScore} tie`
    }

    return `Out of 5 games, ${result}! Play again?`
}
   
const playGame = (playerSelection) => {
    if (gameCount < 5 && selectionOptions.has(playerSelection)) {
        const computerSelection = getComputerSelection()
        setSelectionOnUI(playerSelection, computerSelection)
        
        const winner = determineWinner(playerSelection, computerSelection)
        incrementScores(winner)

        if (winner === 'player') {
            setVictoryMessage(winner, playerSelection, computerSelection)
        } else {
            setVictoryMessage(winner, computerSelection, playerSelection)
        }

        gameCount++
    } 
    if (gameCount === 5) {
        const message = getOverallWinnerMessage(parseInt(playerScore.innerHTML), parseInt(computerScore.innerHTML))

        setTimeout(() => {
            confirm(message)
            window.location.reload()
        }, [100])
    }
}