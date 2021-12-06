const matrixReshape = function (mat, r, c) {
  let m = mat.length,
    n = mat[0].length,
    newMat = new Array(r);
  for (let i = 0; i < r; i++) {
    newMat[i] = new Array(c);
  }
  if (r * c !== m * n) {
    newMat = mat;
  } else {
    let k = 0,
      l = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (l < c) {
          newMat[k][l] = mat[i][j];
          l++;
        } else {
          l = 0;
          newMat[++k][l] = mat[i][j];
          l++;
        }
      }
    }
  }
  return newMat;
};
