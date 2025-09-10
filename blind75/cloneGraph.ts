interface GraphNode {
  val: number;
  neighbors: GraphNode[];
}

class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number, neighbors?: GraphNode[]) {
    this.val = val;
    this.neighbors = [];
  }
}

/**
 * @param {GraphNode | null} node
 * @return {GraphNode | null}
 */
// export default function graphClone(node) {
//   if (!node) return null;

//   // if visited
//   let visited = new Map<GraphNode, GraphNode>();
//   const dfs = (node: GraphNode) => {
//     // check if visited already
//     if (visited.has(node)) return visited.get(node);

//     let clonedNode = new GraphNode(node.val, []);
//     visited.set(node, clonedNode);

//     for (const neighbor of node.neighbors) {
//       clonedNode.neighbors.push(dfs(neighbor));
//     }

//     return clonedNode;
//   };
//   return dfs(node);
// }

export default function graphClone(node) {
  if (!node) return null;
  let visited = new Map<GraphNode, GraphNode>();

  // level queue
  let queue: GraphNode[] = [];
  queue.push(node);

  visited.set(node, new GraphNode(node.val, []));

  while (queue.length > 0) {
    let poppedNode: GraphNode = queue.shift()!;

    for (const neighbor of poppedNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new GraphNode(neighbor.val, []));
        queue.push(neighbor);
      }
      visited
        .get(poppedNode)
        ?.neighbors.push(visited.get(neighbor) as GraphNode);
    }
  }
  return visited.get(node) ?? null;
}
