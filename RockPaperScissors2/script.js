//The Purpose of the game is to play with a rock, paper, scissors with a computer.\
//First, the player will select his/her weapon
//Then, the computer will randomly select his weapon
//The choices of both will be compared to conclude a winner
//Rock beats scissors, scissors beats paper, paper beats rock, same weapon is a draw


//Start
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    let ComputerChoice;
    switch (x) {
        case 0:
        ComputerChoice = 'rock';
        break;
        case 1:
        ComputerChoice = 'paper';
        break;
        case 2:
        ComputerChoice = 'scissors';
        break;
    }
    return ComputerChoice;
}

function playRound(playerSelection, computerSelection){
    
    let y = playerSelection.toLowerCase();
    let z = computerSelection;

    return (y === z) ? 'It\'s a DRAW!':
    ((y == 'rock' && z == 'scissors') || (y == 'scissors' && z == 'paper') || (y == 'paper' && z == 'rock')) ? 'Player WINS!':
    'Computer WINS!';
}

function game(){
    let a = scorePlayer = 0;
    let b = scoreComputer = 0;
    let i = scoreTally = 1;
    let playerSelection;

    for (i=1; i<6; i++){
        let validInput = false;

            while (!validInput){
            playerSelection = prompt("Please select you weapon: Rock, Paper or Scissors");

                if (playerSelection === null){
                    console.log('You\'ve cancelled the prompt.');
                    return;
                }else if (['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())){
                    validInput = true;
                }else{
                    console.log('Invalid input. Please choose from: Rock, Paper, or Scissors');
                }
            }
        
        const computerSelection = getComputerChoice();

        console.log('Player Chooses: ' + playerSelection.toLowerCase());
        console.log('Computer Chooses: ' + computerSelection);

        console.log(playRound(playerSelection, computerSelection));

        let d = playRound(playerSelection, computerSelection);

        switch (d){
            case 'It\'s a DRAW!':
                break;
            case 'Player WINS!':
                a++;
                break;
            case 'Computer WINS!':
                b++;
                break;
        }

        console.log(
        `Score tally:
        GAME ${i}
        Player Score: ${a}
        Computer Score: ${b}`);

    }
    //Results of the Game
    switch (a<b){
        case true:
            console.log('The WINNER is COMPUTER!!!');
            break;
        case false:
            console.log('The WINNER is PLAYER!!!');
            break;
        default:
            console.log('It\'s a DRAW');
        
    }
}
game();