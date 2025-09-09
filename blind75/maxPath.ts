/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumPathSum(root) {
  let maxSum = -Infinity;
  const recursiveTravel = (node: TreeNode | null): number => {
    if (!node) return 0;

    // whats the max from left
    let fromLeft = Math.max(recursiveTravel(node.left), 0);
    let fromRight = Math.max(recursiveTravel(node.right), 0);

    maxSum = Math.max(maxSum, fromLeft + fromRight + node.val);
    return Math.max(fromLeft, fromRight) + node.val;
  };
  recursiveTravel(root);
  return maxSum;
}
