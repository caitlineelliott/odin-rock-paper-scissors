const buttons = document.querySelectorAll("button")
let gameCount = 0
let selectionOptions = new Set(['paper', 'rock', 'scissors'])
console.log(selectionOptions)

const getComputerSelectionIdx = () => {
    return (Math.random() * 2).toFixed()
}

const playGame = (playerSelection) => {
    if (gameCount < 5 && selectionOptions.has(playerSelection)) {
        const computerSelection = [...selectionOptions][getComputerSelectionIdx()]
        if (playerSelection === computerSelection) {
            console.log('A TIE!')
        }
        gameCount++
        console.log(playerSelection, computerSelection)
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
// rock beats scissors
// scissors beats paper
// paper beats rock


// paper 0
// rock 1
// scissors 2
// paper 0

// Computer delivers results message
// Computer increments games + 1
// Computer records scores
// Loop until Games === 5