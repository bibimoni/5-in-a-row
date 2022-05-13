class Player{
    
    constructor({win, imageSrc, firstTurn, icon}) {
        this.win = win;
        this.image = new Image();
        this.image.src = imageSrc;
        this.firstTurn = firstTurn;
        this.pos = [];
        this.icon = icon; // x / o
        this.canPlace = firstTurn // if the first turn is available, the player can place X/O

    } 
    performAction() {
        if(!this.canPlace) return;

    }
    translateMousePosition() {

    }
}

class Board {
    constructor({boardWidth, boardHeight}) {
        this.width = boardWidth;
        this.height = boardHeight;
        //this.image = new Image();
        //this.image.src = imageSrc;
        this.Board; //board is an 2D array
    }

    initializeBoard() {
        this.Board = new Array(this.width).fill(0);
        for(let i = 0; i < this.width; i++) {
            this.Board[i] = new Array(this.height).fill(0);
        }             
    }
    drawBoard() {       
        for(let i = 0; i < this.width; i++) {      
            for(let j = 0; j < this.height; j++) {
                (i+j) % 2 === 0 ? c.fillStyle = '#635170' : c.fillStyle = 'pink' ;
                c.fillRect(i*GRID_WIDTH/this.width, j*GRID_HEIGHT/this.height, GRID_HEIGHT/this.height, GRID_HEIGHT/this.height)
            }
        }
    }   
}