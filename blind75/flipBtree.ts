/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlip(root) {
  let root_main = root;

  const flip = (current: TreeNode | null) => {
    if (current === null) return null;
    let temp_left = current.left;
    current.left = current.right;
    current.right = temp_left;
    flip(current.left);
    flip(current.right);
    return current;
  };

  flip(root_main);
  return root_main;
}
