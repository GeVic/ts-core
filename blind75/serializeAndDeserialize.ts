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
 * @return {string}
 */
export function serializeBinaryTree(root) {
  let result: Array = [];
  let current: TreeNode | null = root;
  let queue: [] = [current];
  if (!current) return null;

  while (queue.length > 0) {
    let root = queue.shift();
    if (root) {
      result.push(root.val);
      queue.push(root.left);
      queue.push(root.right);
    } else {
      result.push(null);
    }
  }
  return JSON.stringify(result);
}

/**
 * @param {string} data
 * @return {TreeNode | null}
 */
export function deserializeBinaryTree(data) {
  let array = JSON.parse(data);
  let root = new TreeNode(array[0]);
  let queue = [root];
  let i = 1;
  while (i < array.length && queue.length > 0) {
    let current = queue.shift();
    if (array[i] != null) {
      current.left = new TreeNode(array[i]);
      queue.push(current.left);
    }
    i += 1;
    if (i < array.length && array[i] != null) {
      current.right = new TreeNode(array[i]);
      queue.push(current.right);
    }
    i += 1;
  }
  return root;
}
