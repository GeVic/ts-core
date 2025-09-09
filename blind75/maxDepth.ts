/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumDepth(root) {
  let current: TreeNode | null = root;
  let queue = [current];
  let level = 0;

  if (!current) return 0;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let temp = queue.shift();
      currentLevel.append(temp.val);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    level += 1;
  }
  return level;
}
