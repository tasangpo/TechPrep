/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function (root) {
  let result = [];
  dfs(root, result);
  return result;
};

function dfs(node, arr = []) {
  if (node === null) return -1;

  const leftHeight = dfs(node.left, arr);
  const rightHeight = dfs(node.right, arr);

  const height = 1 + Math.max(leftHeight, rightHeight);
  if (!arr[height]) {
    arr[height] = [];
  }
  arr[height] = [...arr[height], node.val];
  return height;
}