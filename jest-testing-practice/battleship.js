export class Ship {
    constructor (length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
        return this.hits;
    }

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
        }
        return this.sunk;
    }
}

export class Gameboard {
    constructor(player) {
        this.width = 10;
        this.height = 10;
        this.player = player;
        this.gameboard = this.createBoard();
        this.ships = [];
    }

    createBoard(){
       const gameboard = Array.from({ length: this.height }, () => Array(this.width).fill(0));
       return gameboard;
    }
//make ship record if cell has been hit, name ships 
    placeShip(coordinates, direction, shipLength){
        let ship = new Ship(shipLength);
        this.ships.push(ship);
        const [x, y] = coordinates;

        if(direction === "horizontal") {
            if(y + shipLength > 10){
                return false;
            }

            for (let i = 0; i < shipLength; i++){
                if (this.gameboard[x][y + i] !== 0){
                    return false;
                }
            }

            for (let i = 0; i < shipLength; i++){
                this.gameboard[x][y + i] = {ship, index: i};
            }
        }

        if(direction === "vertical") {
            if (x + shipLength > 10) {
                return false;
            }

            for (let i = 0; i < shipLength; i++){
                if(this.gameboard[x + i][y] !== 0){
                    return false;
                }
            }

            for (let i = 0; i < shipLength; i++){
                    this.gameboard[x + i][y] = {ship, index: i};
                }
            }
        }

    receiveAttack(coordinates){
        const hitCoordinates = coordinates;
        const [x, y] = coordinates;
        let hitShip;
        let missed;

        if(this.gameboard[x][y].ship){
            this.gameboard[x][y].ship.hit();
            hitShip = true;
            missed = false;
        }else {
            hitShip = false;
            missed = coordinates;
            this.gameboard[x][y] = "M"
        }
        return {hitCoordinates, hitShip, missed}
    }

    allSunk(){
        return this.ships.every(ship => ship.isSunk());
    }
}

export class Player {
    constructor(name) {
        this.name = name;
        this.playerboard = new Gameboard(this.name);
    }
}

export class Computer {
    constructor() {
        this.name = "Computer";
        this.computerboard = new Gameboard(this.name);
    }
}
