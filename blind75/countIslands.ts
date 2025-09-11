// const dfs = (row: number, col: number, grid: number[][]) => {
//   const rows = grid.length;
//   const cols = grid[0].length;

//   // mark visited and no of island count was already increased before calling it
//   grid[row][col] = 0;

//   if (row - 1 >= 0 && grid[row - 1][col] === 1) {
//     dfs(row - 1, col, grid);
//   }

//   if (row + 1 < rows && grid[row + 1][col] === 1) {
//     dfs(row + 1, col, grid);
//   }

//   if (col - 1 >= 0 && grid[row][col - 1] === 1) {
//     dfs(row, col - 1, grid);
//   }

//   if (col + 1 < cols && grid[row][col + 1] === 1) {
//     dfs(row, col + 1, grid);
//   }
// };

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// export default function countGridIslands(grid): number {
//   // get rows and cols
//   const rows = grid.length;
//   if (rows === 0) return 0;

//   const cols = grid[0].length;
//   let islandCount = 0;

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (grid[row][col] === 1) {
//         ++islandCount;
//         dfs(row, col, grid);
//       }
//     }
//   }

//   return islandCount;
// }

export default function countGridIslands(grid: number[][]): number {
  //   // get rows and cols
  const rows = grid.length;
  if (rows === 0) return 0;

  const cols = grid[0].length;
  let islandCount = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        ++islandCount;
        grid[row][col] = 0;
        let neighbors: [number, number][] = [[row, col]];

        while (neighbors.length > 0) {
          // shift
          const [row, col] = neighbors.shift();

          // Check and visit the cell above the current cell
          if (row - 1 >= 0 && grid[row - 1][col] === 1) {
            neighbors.push([row - 1, col]);
            grid[row - 1][col] = 0;
          }

          // Check and visit the cell below the current cell
          if (row + 1 < rows && grid[row + 1][col] === 1) {
            neighbors.push([row + 1, col]);
            grid[row + 1][col] = 0;
          }

          // Check and visit the cell to the left of the current cell
          if (col - 1 >= 0 && grid[row][col - 1] === 1) {
            neighbors.push([row, col - 1]);
            grid[row][col - 1] = 0;
          }

          // Check and visit the cell to the right of the current cell
          if (col + 1 < cols && grid[row][col + 1] === 1) {
            neighbors.push([row, col + 1]);
            grid[row][col + 1] = 0;
          }
        }
      }
    }
  }

  return islandCount;
}
