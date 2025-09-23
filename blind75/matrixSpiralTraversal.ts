export default function matrixSpiralTraversal(matrix: number[][]): number[] {
  const noOfLayers = Math.ceil((matrix.length + 1) / 2);
  const row = matrix.length;
  const col = matrix[0].length;
  let top = 0;
  let down = row - 1;
  let left = 0;
  let right = col - 1;

  let results: number[] = [];

  while (results.length < row * col) {
    // from top to right
    for (let j = left; j <= right; j++) {
      results.push(matrix[top][j]);
    }

    // top to bottom on right
    for (let i = top + 1; i <= down; i++) {
      results.push(matrix[i][right]);
    }

    if (top !== down) {
      for (let j = right - 1; j >= left; j--) {
        results.push(matrix[down][j]);
      }
    }

    if (left !== right) {
      for (let i = down - 1; i > top; i--) {
        results.push(matrix[i][left]);
      }
    }

    left++;
    right--;
    top++;
    down--;
  }
  return results;
}
