const generatePlayerBoard = (numberOfRows,numberOfColumns) =>{
  let board = [];
  for(let i=0;i<numberOfRows;i++){
    let row = [];
    for(let j=0;j<numberOfColumns;j++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let i=0;i<numberOfRows;i++){
    let row = [];
    for(let j=0;j<numberOfColumns;j++){
      row.push(null);
    };
    board.push(row);
  };

  numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    //bombs may be placed on existing bombs
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if(board[randomRowIndex][randomColumnIndex] !== 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B';
       numberOfBombsPlaced++;
    }
  }


  return board;
};

const getNumberOfNeighborBombs = (bombBoard,rowIndex,columnIndex) => {
  const neighborOffsets = [
    [-1,-1],
    [-1,0],
    [0,-1],
    [0,0],
    [1,1],
    [1,0],
    [0,1],
    [-1,1]
  ];
  const numberOfRows = bombBoard.length;
}


const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board '+printBoard(playerBoard));
console.log('Bomb Board '+printBoard(bombBoard));
