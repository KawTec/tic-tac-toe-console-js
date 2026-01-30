const prompt = require("prompt-sync")();
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "🐯";
let gameIsActive = true;

function displayBoard() {
    console.log(`${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
    ------------
    ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
    ------------
    ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}`);
}

function handleMove(position) {
    if(gameBoard[position] === " ") {
        gameBoard[position] = currentPlayer;
    } else {
        console.log("Cell already taken, choose another one.");
        return false;
    }

    if(checkWin()) {
        displayBoard();
        console.log(`Player ${currentPlayer} wins!`);
        gameIsActive = false;
        return true;
    } 
    if(gameBoard.every(cell => cell !== " ")) {
        displayBoard();
        console.log("It's a tie!");
        gameIsActive = false;
        return true;
    }
    currentPlayer = currentPlayer === "🐯" ? "🐻‍❄️" : "🐯";
    return true;
}

function checkWin() {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                            [0, 3, 6], [1, 4, 7], [2, 5, 8],
                            [0, 4, 8], [2, 4, 6]];
    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return gameBoard[a] === currentPlayer 
        && gameBoard[b] === currentPlayer 
        && gameBoard[c] === currentPlayer;
    });
}

while(gameIsActive) {
    displayBoard();
    const input = prompt(`Player ${currentPlayer}, enter your move (0-8) or 'q' to quit: `);
    if(input.toLowerCase() === "q") {
        console.log("Game exited by player.");
        gameIsActive = false;
        break;
    }
    if(input >= 0 && input <= 8) {
        handleMove(parseInt(input));
    } else {
        console.log("Invalid input. Please enter a number between 0 and 8.");
    }
}
console.log("Thanks for playing!");