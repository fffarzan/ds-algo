function search2dMatrix(matrix, target) {
  let t = 0;
  let b = matrix.length - 1;

  while (t <= b) {
    let row = Math.floor((t + b) / 2);

    if (target > matrix[row][matrix[0].length - 1]) {
      t = r + 1;
    } else if (target < matrix[row][0]) {
      b = l - 1;
    } else {
      break;
    }
  }

  if (t > b) {
    return false;
  }

  let row = Math.floor((t + b) / 2);
  let l = 0;
  let r = matrix[0].length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (target > matrix[row][m]) {
      l = m + 1;
    } else if (target < matrix[row][m]) {
      r = m - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  search2dMatrix(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 131],
      [14, 20, 30, 401],
    ],
    10,
  ),
); // true
console.log(
  search2dMatrix(
    [
      [1, 2, 4, 81],
      [10, 11, 12, 131],
      [14, 20, 30, 401],
    ],
    15,
  ),
); // false
