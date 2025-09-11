/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// export default function gridDistinctPaths(m, n) {
//   const grid: number[][] = new Array(m)
//     .fill(0)
//     .map(() => new Array(n).fill(1));

//   for (let row = 1; row < m; row++) {
//     for (let col = 1; col < n; col++) {
//       grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
//     }
//   }
// }

export default function gridDistinctPaths(m: number, n: number): number {
  const grid: number[][] = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(null));

  const traverse = (row: number, col: number): number => {
    // base case
    if (row >= m || col >= n) return 0;
    if (row === m - 1 && col === n - 1) return 1;

    if (grid[row][col] !== null) {
      return grid[row][col];
    }

    const rightPath = traverse(row, col + 1);
    const downPath = traverse(row + 1, col);

    grid[row][col] = rightPath + downPath;
    return grid[row][col];
  };

  return traverse(0, 0);
}
