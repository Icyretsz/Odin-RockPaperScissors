function getComputerChoice() {
    let computerChoice;
    const randomValue = Math.random();
    if (randomValue <1/3) computerChoice = "rock";
    else if (randomValue <2/3) computerChoice = "paper";
    else computerChoice = "scissors";
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter you choice (rock/paper/scissors):");
    playerChoice = playerChoice.toLowerCase();
    while (playerChoice!== 'rock' && playerChoice!=='paper' && playerChoice!=='scissors') {
        playerChoice = prompt("You did not give a valid choice. Try again (rock/paper/scissors):")
    }
    return playerChoice;
}

let playerPoint=0,
    computerPoint=0;

function logPoint() {
    console.log(`Computer - player: ${computerPoint} - ${playerPoint}`);
}

function evaluateRound(computerChoice, playerChoice) {
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        ++playerPoint;
        console.log(`Computer chose: ${computerChoice}, player chose: ${playerChoice}`);
        logPoint();
        console.log('Player wins!');
    }
    else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        ++playerPoint;
        console.log(`Computer chose: ${computerChoice}, player chose: ${playerChoice}`);
        logPoint();
        console.log('Player wins!');
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        ++playerPoint;
        console.log(`Computer chose: ${computerChoice}, player chose: ${playerChoice}`);
        logPoint();
        console.log('Player wins!');
    }
    else if (computerChoice === playerChoice) console.log("It's a draw!");
    else {
        ++computerPoint;
        console.log(`Computer chose: ${computerChoice}, player chose: ${playerChoice}`);
        logPoint();
        console.log('Computer wins!')
    }
}

function mainGameLoopBO5() {
    while (playerPoint < 3 && computerPoint < 3) {
        evaluateRound(getComputerChoice(), getPlayerChoice());
    }
    alert(`End. ` + (playerPoint === 3 ? 'Player wins!' : 'Computer wins!'));
    playerPoint=0;
    computerPoint=0;
}

mainGameLoopBO5();