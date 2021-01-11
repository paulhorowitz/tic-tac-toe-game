const players = (player, icon, turn) => {
    return { player, icon, turn };
};

const player1 = players("player 1", "X", true);
const player2 = players("player 2", "O", false);

const createGameBoard = (() => {
    'use strict';
    var gameBoard = ["", "", "", "", "", "", "", "", ""];
    const playAgainEl = document.getElementById("play-again");

    const containerEl = document.getElementById("container")
    for (var i = 0; i < gameBoard.length; i++) {
        const gridEl = document.createElement("div");
        container.appendChild(gridEl);
        gridEl.className = 'gridSquare';
        gridEl.id = 'gridSquare';
    }

    const gridSquares = document.querySelectorAll(".gridSquare");

    const gridSquaresArray = Array.from(gridSquares)

    const playGame = (() => {
        gridSquaresArray.forEach(element => {
            element.addEventListener("click", () => {
                if (element.innerHTML == "") {
                    if (player1.turn == true) {
                        element.innerHTML = "X";
                        player1.turn = false;
                        player2.turn = true;
                        var turnIndex = gridSquaresArray.indexOf(element)
                        gameBoard[turnIndex] = "X"
                    }
                    else {
                        element.innerHTML = "O";
                        player2.turn = false;
                        player1.turn = true;
                        var turnIndex = gridSquaresArray.indexOf(element)
                        gameBoard[turnIndex] = "O"
                    }
                    checkWinner();
                    checkForTie();
                }
                else {
                    console.log(gameBoard)
                    return;
                }
            })

        });
    })()

    const checkForTie = () => {

        const h2El = document.getElementById("winner-message");

        const notEmpty = (value) => value != ""; 

        if (gameBoard.every(notEmpty)) {
            h2El.innerText = "It's a tie"
            finishGame()
        }
    
    }

    const checkWinner = () => {

        const h2El = document.getElementById("winner-message");
        
        const hasX = (element) => element == "X";
        const hasO = (element) => element == "O";
        
        var winningOptions = [
        [gameBoard[0],gameBoard[1],gameBoard[2]],
        [gameBoard[3],gameBoard[4],gameBoard[5]],
        [gameBoard[6],gameBoard[7],gameBoard[8]],
        [gameBoard[0],gameBoard[3],gameBoard[6]],
        [gameBoard[1],gameBoard[4],gameBoard[7]],
        [gameBoard[2],gameBoard[5],gameBoard[8]],
        [gameBoard[0],gameBoard[4],gameBoard[8]],
        [gameBoard[2],gameBoard[4],gameBoard[6]]
        ]
    
        winningOptions.forEach(option => {
                if (option.every(hasX)) {
                    h2El.innerText = "Player 1 Wins!"
                    finishGame()
                }
                else if (option.every(hasO)) {

                    h2El.innerText = "Player 2 Wins!"
                    finishGame()
                }
        })
    }

    const finishGame = () => {
        playAgainEl.style.visibility = "visible"
        playAgainEl.addEventListener("click", () => {
            location.reload();
        })
    }
    return gameBoard;
})()

