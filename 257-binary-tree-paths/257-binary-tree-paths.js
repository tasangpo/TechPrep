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
 * @return {string[]}
 */

const binaryTreePaths = root => {
    const paths = _binaryTreePaths(root);
    
    return paths.map(path => path.join('->'));
}

var _binaryTreePaths = function(root) {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [ [root.val] ];
    
    const paths = [];
    const left = _binaryTreePaths(root.left);
    for (const path of left) {
        paths.push([root.val, ...path])
    }
    
    const right = _binaryTreePaths(root.right);
    for (const path of right) {
        paths.push([root.val, ...path]);
    }
    
    return paths;
};