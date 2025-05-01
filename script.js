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

    function setMarkOnBoard (r, c, m) {
        board[r][c].setMark(m);
    };

    function checkVictory() {
        
        //checks if there is a row victory (3 same marks in a row)
        for (let r = 0; r <= 2; r++){
            if (board[r][0].getMark() === board[r][1].getMark() 
                && board[r][1].getMark() === board[r][2].getMark()
                && board[r][0].getMark() !== ' '){
                    console.log(`row`);
                return true;
            }
            
        }
        //checks if there is a column victory (3 same marks in a column)
        for (let c = 0; c <= 2; c++ ){
            if (board[0][c].getMark() === board[1][c].getMark() 
                && board[1][c].getMark() === board[2][c].getMark()
                && board[0][c].getMark() !== ' '){
                    console.log(`column`);
                return true;
            }
            
        }
        //checks if there is a diagonal victory in the form of a '\'
        if (board[0][0].getMark() === board[1][1].getMark() 
            && board[1][1].getMark() === board[2][2].getMark()
            && board[0][0].getMark() !== ' '){
                console.log(`diagonal 1 `);
                return true;
            }
            
        
        //checks if there is a diagonal victory in the form of a '/'
        else if (board[0][2].getMark() === board[1][1].getMark() 
            && board[1][1].getMark() === board[2][0].getMark()
            && board[0][2].getMark() !== ' '){
                console.log(`diagonal 2 `);
                return true;
            }
            
        return false;   
    }

    function resetBoard() {
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                board[i][j].resetMark();
                
            }
        }
    }

    return {getBoard, printBoard, setMarkOnBoard, checkVictory, resetBoard};
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

    function resetMark() {
        if (mark !== ' '){
            mark = ' ';
        }
    }

    return {getMark, setMark, resetMark};
}
//delete below test

const testBoard = Gameboard(); 
testBoard.printBoard();
console.log(testBoard.getBoard());
console.log(typeof testBoard);

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

    function switchPlayer(){
        if (currentPlayer === PlayerOne){
            currentPlayer = PlayerTwo;
            
        }
        else{
            currentPlayer = PlayerOne;
        }
    }
    
    function makeMove(){
        const rowChoice = prompt("Select which row (0-2):");
        const columnChoice = prompt("Select which column (0-2):");
        board.setMarkOnBoard(rowChoice, columnChoice, currentPlayer.mark);   
    }

    function playRound(){
        //check if a victory condition has been achieved.(3 in a row anywhere?)
            // if no victory achieved, run function that checks if there are any valid moves left.(is the board full?)
            //Declare Tie if no victory but board is full.
        
        
        
        makeMove();
        if (board.checkVictory()){
            console.log('Game won!');
            board.printBoard();
            console.log(board.getBoard());
            board.resetBoard();
        }
        else {
            switchPlayer();
            board.printBoard();
            console.log(board.getBoard());
        }
        
        
        //printboard at the end of the round 
    }
    return {switchPlayer, makeMove, playRound};
}

const game = GameController();
// game.playRound();


