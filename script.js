function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    function printBoard() {
        for (let i =0; i<board.length; i++) {
            cellMark = '';
            for(let j=0;j<board[i].length;j++){
                cellMark += board[i][j].getMark();
                (j<2)? cellMark += '|':null;
            }
            console.log(cellMark);
        }
    };


    return {getBoard, printBoard};
}

//controls what's inside each cell of the array
function Cell(){
    let mark = ' ';

    const getMark = () => mark;

    function setMark(playerMark) {
        if (mark === ' '){
            mark = playerMark;  
        }
    }

    return {getMark, setMark};
}
//delete below test

const testBoard = Gameboard(); 
testBoard.printBoard();
console.log(testBoard.getBoard());
console.log(typeof testBoard);
let PlayerOne = {
    name: 'PlayerOneName',
    mark: 'X',
    score: 0
}
// testBoard[2].setMark(PlayerOne.mark);
//until here



function GameController(
    PlayerOneName = 'Player One',
    PlayerTwoName = 'Player Two'
){
    PlayerOne = {
        name: PlayerOneName,
        mark: 'X',
        score: 0
    }

    PlayerTwo = {
        name: PlayerTwoName,
        mark: 'O',
        score: 0
    }

    const board = Gameboard();

    let currentPlayer = PlayerOne;

    function playRound(){
        //check if a victory condition has been achieved.(3 in a row anywhere?)
            // if no victory achieved, run function that checks if there are any valid moves left.(is the board full?)
            //Declare Tie if no victory but board is full.
        
        // run a function that switches active player? (this is probably declared in GameController)
        function switchPlayer(){
            if (currentPlayer === PlayerOne){
                currentPlayer = PlayerTwo;
                
            }
            else{
                currentPlayer = PlayerOne;
            }
        }
        // run a function that places a mark in a cell that the active player selected for this round. 
        // (where is this function declared?) - maybe this function exists here and can be analyzed into two
        // subfunctions:
            // function that takes user input regarding which row and which column they choose 
            // e.g playerOption in Cell() -> r=2, c=1. (Two functions?)
            // board[2][1] 
        function setPlayerMark(){
            const row = 1;
            const column = 2; 

            
        }
        //printboard at the end of the round 
    }
}


