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
    square.classList.add("playerSquare");
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
    square.classList.add("computerSquare");
    square.dataset.x = x;  // store row coordinate
    square.dataset.y = y;  // store column coordinate
    computerboardDiv.appendChild(square);

    if(computer.computerboard.gameboard[x][y] !==0) {
      square.classList.add("computerShip");
    }
  });
});

const playerDivs = document.querySelectorAll('.playerSquare')
const computerDivs = document.querySelectorAll('.computerSquare')
let turn = "player1";
function repeatSquareAlert() {
  alert("You have already attacked that square, please pick another");
}
function notTurnAlert() {
  alert("It's not your turn, please wait for the computer to go");
}

function computerMove() {
  const randomX = Math.floor(Math.random() * 10);
  const randomY = Math.floor(Math.random() * 10);
  const squareToClick = document.querySelector(
    `.playerSquare[data-x="${randomX}"][data-y="${randomY}"]`
  );

  if (squareToClick && squareToClick.dataset.attacked !== "true") {
    squareToClick.click();
    turn = "player1";
  } else {
    computerMove(); // retry if square was already used
  }
}

playerDivs.forEach(div => {
  const x = parseInt(div.dataset.x, 10);
  const y = parseInt(div.dataset.y, 10);
  div.addEventListener('click', function() {

    const result = player1.playerboard.receiveAttack([x, y])
      if (result.hitShip) {
        div.classList.add("hitShip");
      }else {
        div.classList.add("missed");
      }

      div.dataset.attacked = "true";
      if(player1.playerboard.allSunk()) {
        alert("All of Player 1's ships are sunk! The computer won!");
        return;
      }
      turn = "player1";
})
})

computerDivs.forEach(div => {
  const x = parseInt(div.dataset.x, 10);
  const y = parseInt(div.dataset.y, 10);
  div.addEventListener('click', function() {
    
    if (turn === "computer") {
      notTurnAlert();
      return;
    }

    if(div.dataset.attacked === "true"){
      repeatSquareAlert();
      return;
    }

  const result = computer.computerboard.receiveAttack([x, y])
  if (result.hitShip) {
    div.classList.add("hitShip");
  }else {
    div.classList.add("missed");
  }

  div.dataset.attacked = "true";
  if(computer.computerboard.allSunk()) {
    alert("All of the Computer's ships are sunk! Congrats, you won!");
    return;
  }
  turn = "computer";
  computerMove();
})
})

}

initializeGame();