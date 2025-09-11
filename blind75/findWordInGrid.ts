/**
 * @param {string[][]} grid
 * @param {string} target
 * @return {boolean}
 */
export default function findWordInGrid(grid, target) {
  const cols = grid[0].length;
  const rows = grid.length;

  const backTrackHelper = (row: number, col: number, word: string) => {
    if (word.length === 0) return true;

    if (
      row === rows ||
      col === cols ||
      row < 0 ||
      col < 0 ||
      grid[row][col] !== word.charAt(0)
    )
      return false;

    let ret = false;
    let temp = grid[row][col];
    grid[row][col] = "#";

    const directions = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ];

    for (const [rowOffset, colOffset] of directions) {
      ret = backTrackHelper(row + rowOffset, col + colOffset, word.slice(1));
      if (ret) break;
    }
    grid[row][col] = temp;
    return ret;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (backTrackHelper(row, col, target)) return true;
    }
  }
  return false;
}
