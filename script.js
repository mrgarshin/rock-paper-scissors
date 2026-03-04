let humanScore = 0
let computerScore = 0
let draw = 0

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

const playRound = function(humanChoice, computerChoice) {
    
    if(humanChoice == computerChoice) draw += 1
    if((humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper')) humanScore += 1
    if((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors' && humanChoice == 'paper')) computerScore += 1
    
}




const playGame = function(repetition) {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    for (let i = 1; i < repetition+1; i++) {
        playRound(humanSelection, computerSelection)
        
        console.log("round - " + i+ '. humanScore = ' + humanScore + '; computerScore = ' + computerScore + '; draw - ' + draw)
        if (i < repetition) {
            humanSelection = getHumanChoice()
            computerSelection = getComputerChoice()
        }
        
    }
    
    console.log('Final scores: humanScore = ' + humanScore + '; computerScore = ' + computerScore)
    
}

playGame(3)