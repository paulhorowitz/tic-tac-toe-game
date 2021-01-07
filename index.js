const players = (player, icon, turn) => {
    return { player, icon, turn };
};

const player1 = players("player 1", "X", true);
const player2 = players("player 2", "O", false);

const createGameBoard = (() => {
    'use strict';
    var gameBoard = ["", "", "", "", "", "", "", "", ""];


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
                        checkWinner();
                    }
                    else {
                        element.innerHTML = "O";
                        player2.turn = false;
                        player1.turn = true;
                        var turnIndex = gridSquaresArray.indexOf(element)
                        gameBoard[turnIndex] = "O"
                        checkWinner();
                    }

                }
                else {
                    console.log(gameBoard)
                    return;
                }
            })

        });
    })()

    const checkWinner = () => {
        
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
                if (option.every(hasX)) 
                setTimeout(function () {
                    alert("PLAYER 1 WINNER!!!!!")
                }, 1)
                else if (option.every(hasO))
                setTimeout(function () {
                    alert("PLAYER 2 WINNER!!!!!")
                }, 1)
        })
    }
    return gameBoard;
})()

