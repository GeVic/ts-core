/**
 * @param {number} num
 * @param {Array<[number, number]>} edges
 * @return {boolean}
 */
export default function graphIsTree(num, edges) {
  if (edges.length !== num - 1) return false;

  let visited = new Set<number>();
  let adj = createAdj(num, edges);

  let result = dfs(0, -1, adj, visited) && visited.size === num - 1;
  return result;
}

const dfs = (
  current: number,
  parent: number,
  adj: Map<number, number[]>,
  visited: Set<number>,
) => {
  if (visited.has(current)) return false;
  visited.add(current);

  for (const neighbor of adj.get(current)!) {
    if (parent !== neighbor) {
      let result = dfs(neighbor, current, adj, visited);
      if (!result) return false;
    }
  }
  return true;
};

const createAdj = (num: number, edges: Array<[number, number]>) => {
  let adj = new Map<number, number[]>();

  for (let i = 0; i < num; i++) {
    adj.set(i, []);
  }

  for (const edge of edges) {
    adj.get(edge[0])!.push(edge[1]);
    adj.get(edge[1])!.push(edge[0]);
  }

  return adj;
};
