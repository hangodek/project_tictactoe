import { block } from "./clicker.js"

let gameBoard = [
    , , ,
    , , ,
    , , ,
];

let boardCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playGame() {

    for (let i = 0; i < 3; i++) {

        let playerChoice = undefined;

        do {
            playerChoice = parseInt(prompt("Masukkan Angka"));
        } while (gameBoard[playerChoice] === "o" || gameBoard[playerChoice] === "x")

        switch(playerChoice) {
            case 0: 
                gameBoard[0] = "x"
                break;
            case 1: 
                gameBoard[1] = "x"
                break;
            case 2: 
                gameBoard[2] = "x"
                break;
            case 3: 
                gameBoard[3] = "x"
                break;
            case 4: 
                gameBoard[4] = "x"
                break;
            case 5: 
                gameBoard[5] = "x"
                break;
            case 6: 
                gameBoard[6] = "x"
                break;
            case 7: 
                gameBoard[7] = "x"
                break;
            case 8: 
                gameBoard[8] = "x"
                break;
        }

        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        
        switch(computerChoice) {
            case 0: 
                gameBoard[0] = "o"
                break;
            case 1: 
                gameBoard[1] = "o"
                break;
            case 2: 
                gameBoard[2] = "o"
                break;
            case 3: 
                gameBoard[3] = "o"
                break;
            case 4: 
                gameBoard[4] = "o"
                break;
            case 5: 
                gameBoard[5] = "o"
                break;
            case 6: 
                gameBoard[6] = "o"
                break;
            case 7: 
                gameBoard[7] = "o"
                break;
            case 8: 
                gameBoard[8] = "o"
                break;
        }

        


    }

    console.log(gameBoard);
    boardChecker(gameBoard, "x", "o");

}

function getComputerChoice() {
    let computerTemp = Math.floor(Math.random() * 9);

    if (gameBoard[computerTemp] === "x" || gameBoard[computerTemp] === "o") {
        return getComputerChoice();
    } else {
        return computerTemp;
    }

    
}

function boardChecker(board, player, computer) {
    for (const x of boardCombination) {
        const [a, b, c] = x;
        if (board[a] === player && board[b] === player && board[c] === player) {
            console.log("Player win");
            return true;
        } else if (board[a] === computer && board[b] === computer && board[c] === computer) {
            console.log("Computer win");
            return true;
        }
    }

    return false;
}




playGame();
