// dfs
export default function oceanFlow(matrix: number[][]): number[][] {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result: number[][] = [];

  const rows = matrix.length;
  const cols = matrix[0].length;

  if (rows === 0 || cols === 0) return [];

  const flowToTopLeft = Array.from(Array(rows), () => Array(cols).fill(false));
  const flowToBottomRight = Array.from(Array(rows), () => Array(cols).fill(false));

  const dfs = (i: number, j: number, reachable: boolean[][]) => {
    reachable[i][j] = true;

    for (const direction of directions) {
      const [dx, dy] = direction;
      const x = i + dx;
      const y = j + dy;

      if (x < rows && x >= 0 && y < cols && y >= 0) {
        if (reachable[x][y]) continue;
        if (matrix[x][y] < matrix[i][j]) continue;
        dfs(x, y, reachable);
      }
    }
  };

  for (let row = 0; row < rows; row++) {
    dfs(row, cols - 1, flowToBottomRight);
    dfs(row, 0, flowToTopLeft);
  }

  for (let col = 0; col < cols; col++) {
    dfs(0, col, flowToTopLeft);
    dfs(rows - 1, col, flowToBottomRight);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (flowToTopLeft[row][col] && flowToBottomRight[row][col]) {
        result.push([row, col]);
      }
    }
  }
  return result;
}
