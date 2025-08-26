interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function binarySearchTreeValidate(
  root: TreeNode | null,
): boolean {
  const checkIsValid = (node: TreeNode | null, min: number, max: number) => {
    if (node === null) return true;

    if (node.val >= max || node.val <= min) {
      return false;
    }

    let isLeftValid = checkIsValid(node.left, min, node.val);
    let isRightValid = checkIsValid(node.right, node.val, max);

    return isLeftValid && isRightValid;
  };
  return checkIsValid(root, -Infinity, Infinity);
}
