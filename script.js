function computerPlay() {
    const options = ["rock", "paper", "scissors"],
        selectedOption = options[Math.floor(Math.random() * options.length)];
    return selectedOption;
};

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = userInput();
    let winner;

    console.log(`You selected ${playerSelection}.`);
    console.log(`Computer selected ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        console.log('Tie!')
        winner = 'tie'
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('You lose! Paper beats Rock.');
            winner = 'computer'
        } else {
            console.log('You Won! Rock beats Scissors.');
            winner = 'player'
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('You won! Paper beats Rock.')
            winner = 'player'
        } else {
            console.log('You lose! Scissors beats Paper.')
            winner = 'computer'
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lose! Rock beats Scissors.')
            winner = 'computer'
        } else {
            console.log('You won! Scissors beats Paper.')
            winner = 'player'
        }
    }
    return winner
}

function userInput() {
    let input = prompt('Make your choice! Rock, Paper, Scissors?');
    const selection = input.toLowerCase();
    if ((selection == 'scissors') || (selection == 'rock') || (selection == 'paper')) {
        return selection;
    } else {
        alert('You entered another option. Please enter only \'Rock\', \'Paper\' or \'Scissors\'')
        userInput();
    }
}

function game() {
    let roundNumber = 1;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`------- ROUND ${roundNumber} -------`)
        let roundWinner = playRound();
        if (roundWinner == 'computer') {
            computerScore++;
        } else if (roundWinner == 'player') {
            playerScore++;
        } else {
            //pass
        }
        console.log(`Player ${playerScore} - ${computerScore} Computer`)
        roundNumber++;
    }
    if (computerScore > playerScore) {
        console.log('You lose the game... Computer Wins. Better luck next time');
    } else if (computerScore < playerScore) {
        console.log('You won the game! Congratulations!');
    } else {
        console.log('It\'s a Tie! That was close..');
    }
    console.log('Refresh the page to play again!')
}

game();