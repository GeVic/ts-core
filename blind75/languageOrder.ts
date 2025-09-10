/**
 * @param {string[]} words
 * @return {string}
 */
export default function extraterrestrialLanguage(words) {
  let adj: { [key: string]: string[] } = {};
  let indegree: { [key: string]: number } = {};

  // initialize
  for (const word of words) {
    for (const char of word) {
      if (!indegree[char]) {
        indegree[char] = 0;
        adj[char] = [];
      }
    }
  }

  // build adj
  for (let index = 0; index < words.length - 1; index++) {
    let word1 = words[index];
    let word2 = words[index + 1];

    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }

    for (
      let jIndex = 0;
      jIndex < Math.min(word1.length, word2.length);
      jIndex++
    ) {
      if (word1[jIndex] !== word2[jIndex]) {
        adj[word1[jIndex]].push(word2[jIndex]);
        indegree[word2[jIndex]]++;
        break;
      }
    }
  }

  // bfs
  let queue: string[] = [];
  let results: string[] = [];

  for (const char in indegree) {
    if (indegree[char] === 0) {
      queue.push(char);
    }
  }

  while (queue.length > 0) {
    let node = queue.shift()!;
    results.push(node);

    for (const neighbour of adj[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  if (results.length < Object.keys(indegree).length) return "";

  return results.join("");
}
