import { Ship, Gameboard, Player, Computer } from './battleship.js';

function initializeGame() {
    const player1 = new Player("player1");
    const computer = new Computer();
    player1.playerboard.placeShip([0,4], "vertical", 3);
    player1.playerboard.placeShip([4,0], "vertical", 3);
    player1.playerboard.placeShip([7,5], "horizontal", 2);
    player1.playerboard.placeShip([4,9], "vertical", 4);
    player1.playerboard.placeShip([9,4], "horizontal", 5);

    computer.computerboard.placeShip([0,1], "horizontal", 3)
    computer.computerboard.placeShip([2,1], "horizontal", 5)
    computer.computerboard.placeShip([4,2], "vertical", 2)
    computer.computerboard.placeShip([3,8], "vertical", 4)
    computer.computerboard.placeShip([7,1], "vertical", 3)

    const playerboardDiv = document.getElementById("playerboard");
    const computerboardDiv = document.getElementById("computerboard");

player1.playerboard.gameboard.forEach((row, x) => {
  row.forEach((cell, y) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.x = x;  // store row coordinate
    square.dataset.y = y;  // store column coordinate
    playerboardDiv.appendChild(square);

    if(player1.playerboard.gameboard[x][y] !==0) {
      square.classList.add("playerShip");
    }

  });
});

computer.computerboard.gameboard.forEach((row, x) => {
  row.forEach((cell, y) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.x = x;  // store row coordinate
    square.dataset.y = y;  // store column coordinate
    computerboardDiv.appendChild(square);

    if(computer.computerboard.gameboard[x][y] !==0) {
      square.classList.add("computerShip");
    }
  });
});

}

initializeGame();