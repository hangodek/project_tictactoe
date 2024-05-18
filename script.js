let gameBoard = [
    [, , ,],
    [, , ,],
    [, , ,]
];

function playGame() {
    let player = {
        scores: 0,
        isWin: undefined,
    }

    let computer = {
        scores: 0,
        isWin: undefined,
    }

    let i = 0

    while(i < 3) {
        let playerChoice = parseInt(prompt());

        switch(playerChoice) {
            case 1: 
                gameBoard[0][0] = "x"
                console.log(gameBoard)
                break;
            case 2: 
                gameBoard[0][1] = "x"
                console.log(gameBoard)
                break;
            case 3: 
                gameBoard[0][2] = "x"
                console.log(gameBoard)
                break;
            case 4: 
                gameBoard[1][0] = "x"
                console.log(gameBoard)
                break;
            case 5: 
                gameBoard[1][1] = "x"
                console.log(gameBoard)
                break;
            case 6: 
                gameBoard[1][2] = "x"
                console.log(gameBoard)
                break;
            case 7: 
                gameBoard[2][0] = "x"
                console.log(gameBoard)
                break;
            case 8: 
                gameBoard[2][1] = "x"
                console.log(gameBoard)
                break;
            case 9: 
                gameBoard[2][2] = "x"
                console.log(gameBoard)
                break;
        }

        let computerChoice = getComputerChoice();
        
        switch(computerChoice) {
            case 0: 
                gameBoard[0][0] = "o"
                console.log(gameBoard)
                break;
            case 1: 
                gameBoard[0][1] = "o"
                console.log(gameBoard)
                break;
            case 2: 
                gameBoard[0][2] = "o"
                console.log(gameBoard)
                break;
            case 3: 
                gameBoard[1][0] = "o"
                console.log(gameBoard)
                break;
            case 4: 
                gameBoard[1][1] = "o"
                console.log(gameBoard)
                break;
            case 5: 
                gameBoard[1][2] = "o"
                console.log(gameBoard)
                break;
            case 6: 
                gameBoard[2][0] = "o"
                console.log(gameBoard)
                break;
            case 7: 
                gameBoard[2][1] = "o"
                console.log(gameBoard)
                break;
            case 8: 
                gameBoard[2][2] = "o"
                console.log(gameBoard)
                break;
        }

        i++;

    }


}

function getComputerChoice() {
    let temp = Math.floor(Math.random() * 9);

    if (gameBoard[temp] != undefined || gameBoard[temp] == "x") {
        getComputerChoice();
    }

    return temp;
}

console.log("Hai")
playGame();