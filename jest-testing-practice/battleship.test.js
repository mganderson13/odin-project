const { Ship, Gameboard, Player, Computer } = require('./battleship.js');

let ship; 
let gameboard;

describe('ship class object', () => {
  beforeEach(() => {
  ship = new Ship(4);
});
  test('ship length', () => {
    expect(ship.length).toBe(4);
  });

  test('ship starts with 0 hits', () => {
    expect(ship.hits).toBe(0);
  });

  test('ship is not sunk to start', () => {
    expect(ship.sunk).toBe(false);
  })

  test('hit function', () => {
    expect(ship.hit()).toBe(1);
  })

  test('isSunk function', () => {
    expect(ship.isSunk()).toBe(false);
  })

    test('isSunk function', () => {
        ship.hit();
    expect(ship.isSunk()).toBe(false);
  })

  test('isSunk after hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })
});

describe('gameboard class', () => {

  beforeEach(() => {
    gameboard = new Gameboard("player1");
  });

  test('create board', () => {
    expect(gameboard.width).toBe(10);
    expect(gameboard.height).toBe(10);
  });

  test('player storage', () => {
    expect(gameboard.player).toBe("player1");
  })

  test('gameboard creation', () => {
    expect(gameboard.gameboard).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  })

  test('places a horizontal ship of length 3 at [0,0]', () => {
    gameboard.placeShip([0,0], "horizontal", 3);

    // Grab cells
    const cell0 = gameboard.gameboard[0][0];
    const cell1 = gameboard.gameboard[0][1];
    const cell2 = gameboard.gameboard[0][2];

    // Check that they all reference the same ship
    expect(cell0.ship).toBe(cell1.ship);
    expect(cell1.ship).toBe(cell2.ship);

    // Check correct indexes
    expect(cell0.index).toBe(0);
    expect(cell1.index).toBe(1);
    expect(cell2.index).toBe(2);
  });

  test('places a vertical ship of length 2 at [1,1]', () => {
    gameboard.placeShip([1,1], "vertical", 2);

    const cell0 = gameboard.gameboard[1][1];
    const cell1 = gameboard.gameboard[2][1];

    expect(cell0.ship).toBe(cell1.ship);
    expect(cell0.index).toBe(0);
    expect(cell1.index).toBe(1);
  });

  test('receiveAttack function hit', () => {
    gameboard.placeShip([1,1], "vertical", 2);

    expect(gameboard.receiveAttack([1,1])).toEqual({hitCoordinates: [1, 1], hitShip: true, missed: false});
    expect(gameboard.gameboard[1][1].ship.hits).toBe(1);
  })

    test('receiveAttack function miss', () => {
    gameboard.placeShip([1,2], "vertical", 2);

    expect(gameboard.receiveAttack([3,3])).toEqual({hitCoordinates: [3, 3], hitShip: false, missed: [3, 3]});
    expect(gameboard.gameboard[1][2].ship.hits).toBe(0);
    expect(gameboard.gameboard[3][3]).toBe("M");
  })

  test('sink all ships', () => {
        gameboard.placeShip([1,2], "vertical", 2);
        gameboard.receiveAttack([1,2]);
        gameboard.receiveAttack([2,2]);

      expect(gameboard.allSunk()).toBe(true);
  })

  test("Ships not sunk", () => {
        gameboard.placeShip([1,2], "vertical", 2);
        gameboard.receiveAttack([1,2]);
        gameboard.receiveAttack([2,5]);

      expect(gameboard.allSunk()).toBe(false);
  })

    test('Ships not sunk with 2 ships', () => {
        gameboard.placeShip([1,2], "vertical", 2);
        gameboard.placeShip([5,5], "vertical", 2);
        gameboard.receiveAttack([1,2]);
        gameboard.receiveAttack([2,2]);

      expect(gameboard.allSunk()).toBe(false);
  })
})

describe('Player class', () => {
  let player;
  beforeEach(() => {
    player = new Player("player1");
  });

  test('gameboard creation', () => {
    expect(player.playerboard.gameboard).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  })

  test('player name', () => {
    expect(player.name).toBe("player1");
  })

  test('test player gameboard placeShip functions', () => {
    player.playerboard.placeShip([5, 5], "vertical", 2);

    expect(player.playerboard.ships.length).toBe(1);
  })

})

describe('computer class', () => {
  let computer;
  beforeEach(() => {
    computer = new Computer()
  })

  test('computer name', () => {
    expect(computer.name).toBe("Computer");
  })

  test('computer gameboard creation', () => {
    expect(computer.computerboard.gameboard).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
  })

  test('computer hit count', () => {
    computer.computerboard.placeShip([5, 5], "vertical", 2);
    computer.computerboard.receiveAttack([5, 5]);

    expect(computer.computerboard.ships.length).toBe(1);
    expect(computer.computerboard.gameboard[5][5].ship.hits).toBe(1);
    expect(computer.computerboard.ships[0].hits).toBe(1);
  })
})