const block = document.querySelectorAll(".block");

import { currentTurn } from "./script.js";
import { board, winningCombinations } from "./board.js";
import winningCheck from "./board.js";

export default function handleClick(x) {
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