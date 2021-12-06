const pascalsTriangle = function (numRows) {
  let triangle = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    triangle[i] = new Array(i + 1);
    if (i === 0) {
      triangle[0][0] = 1;
    } else if (i === 1) {
      triangle[1][0] = 1;
      triangle[1][1] = 1;
    } else {
      for (let j = 0; j < i + 1; j++) {
        if (j === 0) {
          triangle[i][j] = 1;
        } else if (j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
  }
  return triangle;
};
