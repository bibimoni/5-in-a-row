const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');
let mouseCurrentPosition = {x: 0, y: 0};
//resize canvas
const GRID_WIDTH = canvas.width = 600;
const GRID_HEIGHT = canvas.height = 600;
const PATTERN = 15;
const winLine = 5;


c.fillRect(0, 0,GRID_WIDTH, GRID_HEIGHT);
let board = new Board({
    boardWidth: PATTERN, 
    boardHeight: PATTERN,
    imageSrc: './img/XO.png',
    requireLineLength: winLine
})

board.initializeBoard();
board.drawBoard();

let player1 = new Player({
    win: false,
    firstTurn: true,
    id: 1,
    boardWidth: PATTERN, 
    boardHeight: PATTERN,
})

let player2 = new Player({
    win: false,
    firstTurn: false,
    id: 2,
    boardWidth: PATTERN, 
    boardHeight: PATTERN,
})

const getMousePosition = (canvas, event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left - 4; // 4 is the border
    let y = event.clientY - rect.top - 4;
    return { x: x, y: y };
}


animationLoop();
function animationLoop() {
    window.requestAnimationFrame(animationLoop);
    board.update();
    if(board.drawing === true) changeHTML({text : 'TIE'})
    else if(player1.isWinning === true) changeHTML({text : 'X wins'});
    else if(player2.isWinning === true) changeHTML({text : 'O wins'});
}

canvas.addEventListener('mousedown', event => {
    
    mouseCurrentPosition =  getMousePosition(canvas, event);
    if(player1.canPlace){
        player1.performAction();
        if(player1.placeTieSuccess) {
            player1.canPlace = false;
            player2.canPlace = true;
            player1.placeTieSuccess = false;
        }
    }
    else if(player2.canPlace){
        player2.performAction();
        if(player2.placeTieSuccess) {
            player2.canPlace = false;
            player1.canPlace = true;
            player2.placeTieSuccess = false;
        }
    }
});


