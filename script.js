let humanScore = 0
let computerScore = 0

const getComputerChoice = function() {
    const result = Math.random() * 10
    if (result <= 3.33) return 'rock'
    if (3.33 < result <= 6.66) return 'paper'
    if (result > 6.66) return 'scissors'
}

const getHumanChoice = function() {
    let choice = prompt("What's your choice?")
    return choice.toLowerCase()
}
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

const playRound = function(humanChoice, computerChoice) {
    
    if(humanChoice == computerChoice) return 'draw'
    if((humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper')) humanScore += 1
    if((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors' && humanChoice == 'paper')) computerScore += 1
    console.log('humanScore = ' + humanScore + '; computerScore = ' + computerScore)
}

