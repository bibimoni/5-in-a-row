const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

//resize canvas
const GRID_WIDTH = canvas.width = 800;
const GRID_HEIGHT = canvas.height = 800;

c.fillRect(0, 0,GRID_WIDTH, GRID_HEIGHT);
let board = new Board({
    boardWidth: 20, 
    boardHeight: 20,
})
let player1 = new Player({
    win: false,
    imageSrc: './img/XO.png',
    firstTurn: true,
    icon: 'x'
})
let player2 = new Player({
    win: false,
    imageSrc: './img/XO.png',
    firstTurn: false,
    icon: 'o'
})
board.initializeBoard();
board.drawBoard();


