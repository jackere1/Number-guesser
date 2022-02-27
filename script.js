let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.round(Math.random() * 9);
}

const compareGuesses = (user, computer, target) => {
    let diffHuman = Math.abs(target-user);
    let diffComputer = Math.abs(target-computer);
    if(diffHuman <= diffComputer) return true;
    return false;
}

let updateScore = arg => {
    if(arg == 'human')
        humanScore++;
    else computerScore++; 
}

let advanceRound = () => {
    currentRoundNumber++;
} 