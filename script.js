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
//testing shit
const testBoard = Gameboard(); 

testBoard.printBoard();

console.log(testBoard.getBoard());

function Cell(){
    let mark = ' ';

    const getMark = () => mark;

    return {getMark};
}

function Player(name = 'test', mark){
    let score = 0 ;
    

//    return {name, mark, and a buch of other functions};
}