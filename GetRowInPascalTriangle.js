const facto = function (number) {
  if (number === 0) return 1;
  else return facto(number - 1) * number;
};

const combi = function (rowIndex, i) {
  return facto(rowIndex) / (facto(i) * facto(rowIndex - i));
};

const getRow = function (rowIndex) {
  let row = new Array(rowIndex + 1);
  if (rowIndex === 0) return [1];
  else if (rowIndex === 1) return [1, 1];
  else {
    for (let i = 0; i <= rowIndex; i++) {
      row[i] = combi(rowIndex, i);
    }
    return row;
  }
};
