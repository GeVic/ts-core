export default function matrixZeroing(matrix: number[][]): void {
  let col = matrix[0].length;
  let row = matrix.length;
  let setColZero = false;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0]) setColZero = true;

    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }

    // set 0 using the markers
    for (let i = 1; i < row; i++) {
      for (let j = 1; j < col; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }

    if (matrix[0][0] === 0) {
      for (let j = 0; j < col; j++) {
        matrix[0][j] = 0;
      }
    }

    if (setColZero) {
      for (let i = 0; i < row; i++) {
        matrix[i][0] = 0;
      }
    }
  }
}
