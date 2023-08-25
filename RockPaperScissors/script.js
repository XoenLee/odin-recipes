console.log("Let's start the match!")

//Start
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    return (x == 0) ? 'Rock':
    (x == 1) ? 'Paper':
    'Scissors';
}

function playRound(playerSelection, computerSelection){

        let y = playerSelection.toLowerCase();
        let z = computerSelection.toLowerCase();

        return (y == 'rock' && z == 'rock') || (y == 'paper' && z == 'paper') || (y == 'scissors' && z == 'scissors') ? 'It\'s a draw':
        (y == 'rock' && z == 'paper') || (y == 'paper' && z == 'scissors') || (y == 'scissors' && z == 'rock') ? 'Computer Wins!':
        'Player Wins!';

}

let scorePlayer = 0; 
let scoreComp = 0;

function game(){

    for (let i = 0; i<5; i++){
        let validInput = false;
        let playerSelection;

        while (!validInput) {
            playerSelection = prompt("Choose from Rock, Paper, or Scissors (or type 'exit' to quit):");
            
            if (playerSelection === null) {
                console.log("You've cancelled the prompt.");
                return; // Terminate the game
            } else if (playerSelection.toLowerCase() === 'exit') {
                console.log("Game exited.");
                return; // Terminate the game
            } else if (['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
                validInput = true; // Valid input, exit the loop
            } else {
                console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
            }
        }

        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        console.log(result);
        switch (result){
            case 'Computer Wins!':
                scoreComp++;
                break;
            case 'Player Wins!':
                scorePlayer++;
                break;
            default:
                break;
        }
        console.log("Player's score is: " + scorePlayer + " Computer's Score is: " + scoreComp);
    }
    // Determine the overall winner
    let finalMessage = "";
    if (scorePlayer > scoreComp) {
        finalMessage = "Player Wins!";
    } else if (scorePlayer < scoreComp) {
        finalMessage = "Computer Wins!";
    } else {
        finalMessage = "It's a Draw!";
    }
    // Display the final scores and result
    console.log(`The Final Score is:
    Player's score: ${scorePlayer}
    Computer's score: ${scoreComp}
    ${finalMessage}
    `)

    

    
}
game();