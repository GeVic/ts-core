interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function BSTLowestCommonAncestor(
  root: TreeNode | null,
  a: TreeNode | null,
  b: TreeNode | null,
): TreeNode | null {
  if (!root) return null;

  let current = root.val;
  let aVal = a.val;
  let bVal = b.val;

  if (
    (aVal <= current && current <= bVal) ||
    (bVal <= current && current <= aVal)
  )
    return root;
  if (aVal < current && bVal < current)
    return BSTLowestCommonAncestor(root.left, a, b);
  if (aVal > current && bVal > current)
    return BSTLowestCommonAncestor(root.right, a, b);
}
