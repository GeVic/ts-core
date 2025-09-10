/**
 * @param {number} n
 * @param {Array<[number, number]>} edges
 */
export default function graphCountConnectedComponents(n, edges) {
  if (n === 0) return 0;

  let components = 0;
  let visited: number[] = new Array(n).fill(0);
  const adj: number[][] = new Array(n).fill(null).map(() => []);

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // dfs
  for (let index = 0; index < n; index++) {
    if (visited[index] === 0) {
      components++;
      dfs(index, visited, adj);
    }
  }
}

const dfs = (index: number, visited: number[], adj) => {
  visited[index] = 1;

  for (const neighbors of adj[index]) {
    if (visited[neighbors] === 0) {
      dfs(neighbors, visited, adj);
    }
  }
};
