const buttons = document.querySelectorAll("button")
let gameCount = 0
let selectionOptions = new Set(['rock', 'paper', 'scissors'])

const getComputerSelectionIdx = () => {
    return parseInt((Math.random() * 2).toFixed())
}
 
const playGame = (playerSelection) => {
    if (gameCount < 5 && selectionOptions.has(playerSelection)) {
        const computerSelection = [...selectionOptions][getComputerSelectionIdx()]
        const computerSelectionIdx = [...selectionOptions].indexOf(computerSelection)
        const playerSelectionIdx = [...selectionOptions].indexOf(playerSelection)
        const maxSelectionIdx = [...selectionOptions].length -1

        // Compute possible outcomes
        if (playerSelection === computerSelection) {
            console.log('A TIE!')
        } else if (playerSelectionIdx === maxSelectionIdx && computerSelectionIdx === 0) {
            console.log('comp win')
            console.log(computerSelection, ' beats ', playerSelection)
        } else if (playerSelectionIdx === 0 && computerSelectionIdx === maxSelectionIdx) {
            console.log(playerSelection, ' beats ', computerSelection)
            console.log('player wins')
        } else {
            if (playerSelectionIdx > computerSelectionIdx) {
                console.log('player wins else')
                console.log(playerSelection, ' beats ', computerSelection)
            } else {
                console.log('compp wins else')
                console.log(computerSelection, ' beats ', playerSelection)
            }
        }

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