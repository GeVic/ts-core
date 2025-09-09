/**
 * @param {TreeNode | null} root
 * @return {number[][]}
 */
export default function binaryTreeLevelOrderTraversal(root) {
  let result: [][] = [];

  let current: TreeNode | null = root;
  let queue = [current];

  if (!current) return result;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let temp = queue.shift();
      currentLevel.append(temp.val);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    result.append(currentLevel);
  }
  return result;
}
