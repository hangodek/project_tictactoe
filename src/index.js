import "./styles.css"

import winningCheck from "./board.js";
import { makePlayer } from "./makeplayer.js";
import { board, winningCombinations } from "./board.js";

const block = document.querySelectorAll(".block");
const placeholder = document.querySelector("#placeholder")
const startButton = document.querySelector("#startGame")
let player1Name = document.querySelector("#player1")
let player2Name = document.querySelector("#player2")

startButton.addEventListener("click", playGame);

function playGame() {
    const player1 = new makePlayer(player1Name.value, "X");
    const player2 = new makePlayer(player2Name.value, "O");

    player1Name.value = "";
    player2Name.value = "";

    let currentTurn = player1;
    placeholder.textContent = `${player1.name} Turn`;

    block.forEach((item, index) => {
        block.textContent = "";
        item.addEventListener("click", handleClick);
    })

    function handleClick(x) {
        let tempTarget = x.target;
        let temp = Array.from(block).indexOf(tempTarget);

        if (tempTarget.textContent === "") {
            tempTarget.textContent = currentTurn.symbol;
            board[temp] = currentTurn.symbol;


            if (winningCheck(board)) {
                placeholder.textContent = `${currentTurn.name} Win!`;
                block.forEach((item, index) => {
                    item.removeEventListener("click", handleClick);
                })
                return;
            }

            if (currentTurn === player1) {
                currentTurn = player2;
            } else {
                currentTurn = player1;
            }

            placeholder.textContent = `${currentTurn.name} Turn`;
        }

        console.log(board);
    }

}
