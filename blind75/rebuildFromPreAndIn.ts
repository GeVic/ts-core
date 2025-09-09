/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode | null}
 */
export default function binaryTreeRebuildingFromTraversals(preorder, inorder) {
  let preorderIndex = 0;
  let inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  const buildTree = (left: number, right: number): TreeNode | null => {
    if (left > right) {
      return null;
    }

    let rootValue = preorder[preorderIndex++];
    let root = new TreeNode(rootValue);

    const root.left = buildTree(left, inorderMap.get(rootValue) - 1);
    const root.right = buildTree(inorderMap.get(rootValue) + 1, right);

    return root;
  };

  buildTree(0, preorder.length - 1)
}
