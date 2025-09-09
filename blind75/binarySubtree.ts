class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
export default function binaryTreeSubtree(root, subRoot) {
  const isSame = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (!a && !b) return true;

    if (!a || !b) return false;

    return (
      a.val === b.val &&
      binaryTreeSubtree(a.right, b.right) &&
      binaryTreeSubtree(a.left, b.left)
    );
  };

  if (!root) return false;

  if (isSame(root, subRoot)) {
    return true;
  }

  return isSame(root.left, subRoot) || isSame(root.right, subRoot);
}
