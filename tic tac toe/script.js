//board 3x3
//win = all x or y or (0,0) (1,1) (2,2) or (0,2) (1,1) (2,0)
// if ()
//player - assigned symbol

const Gameboard =(function () {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

return { board };
})();

//track player 
function Player() {
    let player = !player;
}

//player makes move replace array coordinate with x or o 
function makeMove(x, y, player) {
    const uiGameboard = document.getElementById("gameBoard");
    if (Gameboard.board[x][y] === 0) {
    if (player === "player1"){
    Gameboard.board[x][y] = "x";
    let space = document.getElementById(`${x}${y}`);
    space.innerHTML = "x";
    }else if (player === "player2") {
        Gameboard.board[x][y] = "o";
        let space = document.getElementById(`${x}${y}`);
        space.innerHTML = "o";
    }else {
        console.log("please indicate correct player");
    }
}else {
    console.log("that space is already taken");
}

function checkWin(player) {
    if (player === "player1") {
        //check vertical center, horizontal center, diagonal down, diagonal up
        if ((Gameboard.board[1][1] === "x" && Gameboard.board[0][1] === "x" && Gameboard.board[2][1] === "x")
        || (Gameboard.board[1][1] === "x" && Gameboard.board[1][0] === "x" && Gameboard.board[1][2] === "x")
        || (Gameboard.board[0][0] === "x" && Gameboard.board[1][1] === "x" && Gameboard.board[2][2] === "x")
        || (Gameboard.board[2][0] === "x" && Gameboard.board[1][1] === "x" && Gameboard.board[0][2] === "x")
        || (Gameboard.board[0][0] === "x" && Gameboard.board[0][1] === "x" && Gameboard.board[0][2] === "x")
        || (Gameboard.board[2][0] === "x" && Gameboard.board[2][1] === "x" && Gameboard.board[2][2] === "x")
        || (Gameboard.board[0][0] === "x" && Gameboard.board[1][0] === "x" && Gameboard.board[2][0] === "x")
        || (Gameboard.board[0][2] === "x" && Gameboard.board[1][2] === "x" && Gameboard.board[2][2] === "x")) {
                console.log(`winner: `, player);
        }
    }
    if (player === "player2") {
        //check vertical center, horizontal center, diagonal down, diagonal up
        if ((Gameboard.board[1][1] === "o" && Gameboard.board[0][1] === "o" && Gameboard.board[2][1] === "o")
        || (Gameboard.board[1][1] === "o" && Gameboard.board[1][0] === "o" && Gameboard.board[1][2] === "o")
        || (Gameboard.board[0][0] === "o" && Gameboard.board[1][1] === "o" && Gameboard.board[2][2] === "o")
        || (Gameboard.board[2][0] === "o" && Gameboard.board[1][1] === "o" && Gameboard.board[0][2] === "o")
        || (Gameboard.board[0][0] === "o" && Gameboard.board[0][1] === "o" && Gameboard.board[0][2] === "o")
        || (Gameboard.board[2][0] === "o" && Gameboard.board[2][1] === "o" && Gameboard.board[2][2] === "o")
        || (Gameboard.board[0][0] === "o" && Gameboard.board[1][0] === "o" && Gameboard.board[2][0] === "o")
        || (Gameboard.board[0][2] === "o" && Gameboard.board[1][2] === "o" && Gameboard.board[2][2] === "o")) {
                console.log(`winner: `, player);
        }
    }
}
 
    checkWin(player);
}


makeMove(0, 0, "player2");
makeMove(2,0, "player1")
makeMove(2, 1, "player1")
makeMove(2, 2, "player1")
console.log(Gameboard);
