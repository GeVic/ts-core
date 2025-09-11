class TrieNode {
  children: Map<string, TrieNode>;
  word: string = "";

  constructor() {}
}

const backtrack = (
  row: number,
  col: number,
  grid: string[][],
  parent: TrieNode,
  result: string[],
): void => {
  let currentNode = parent.children.get(grid[row][col]);

  if (currentNode?.word !== "") {
    result.push(currentNode!.word);
    currentNode!.children.clear();
  }

  // add a visited mark
  grid[row][col] = "#";

  const rowDirections = [0, 1, 0, -1];
  const colDirections = [-1, 0, 1, 0];

  for (let directions = 0; directions < 4; directions++) {
    row = row + rowDirections[directions];
    col = col + rowDirections[directions];

    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "#"
    )
      continue;
    if (!currentNode?.children.has(grid[row][col])) continue;

    backtrack(row, col, grid, currentNode!, result);
  }
};

export default function findWordsInGrid(
  grid: string[][],
  words: string[],
): string[] {
  // create the trie
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.word = word;
  }

  const results: string[] = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (root.children.has(grid[row][col])) {
        backtrack(row, col, grid, root, results);
      }
    }
  }
  return results;
}
