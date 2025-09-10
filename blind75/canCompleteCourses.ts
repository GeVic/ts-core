/**
 * @param {number[]} courses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export default function canCompleteCourse(courses, prerequisites) {
  // create a inorder list
  let indegree: number[] = new Array(courses).fill(0);
  // adj list
  let adj = new Array(courses).fill(0).map(() => []);

  for (const prerequisite of prerequisites) {
    adj[prerequisite[1]].push(prerequisite[0]);
    indegree[prerequisite[0]]++;
  }

  // queue to travel at this time of level
  let queue: number[] = [];

  // Push all the nodes with indegree zero into the queue.
  for (let i = 0; i < courses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  // nodes visited
  let nodeVisited = 0;
  while (queue.length > 0) {
    // process the first in
    let node = queue.shift()!;
    nodeVisited++;

    for (const neighbour of adj[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }
  return nodeVisited === courses;
}
