interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function kthSmallestElementInABst(
  root: TreeNode | null,
  k: number,
): number {
  let stack: TreeNode[] | null = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current.left !== null) {
      current = current.left;
      stack.push(current);
    }
    current = stack.pop();
    k -= 1;
    if (k === 0) return current.val;
    current = current.right;
  }
}
