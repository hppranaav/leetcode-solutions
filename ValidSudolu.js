// let board = [
//     ['7', '.', '.', '.', '4', '.', '.', '.', '.'],
//     ['.', '.', '.', '8', '6', '5', '.', '.', '.'],
//     ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '9', '.', '.', '.'],
//     ['.', '.', '.', '.', '5', '.', '5', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ];

const isValid = function (board) {
  let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    checkerCol = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  // check rows
  for (let i = 0; i < 9; i++) {
    checker = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    checkerCol = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < 9; j++) {
      // check rows
      if (checker[Number(board[i][j]) - 1] === 0) {
        checker[Number(board[i][j]) - 1] = 1;
      } else if (checker[Number(board[i][j]) - 1] === 1) {
        return false;
      }

      // check columns
      if (checkerCol[Number(board[j][i]) - 1] === 0) {
        checkerCol[Number(board[j][i]) - 1]++;
      } else if (checkerCol[Number(board[j][i]) - 1] === 1) {
        return false;
      }
    }
  }

  // check sub-squares
  let k = 0;
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      checker = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (checker[Number(board[i + k][j + l]) - 1] === 0) {
            checker[Number(board[i + k][j + l]) - 1] = 1;
          } else if (checker[Number(board[i + k][j + l]) - 1] === 1) {
            return false;
          }
        }
      }
    }
  }
  return true;
};
