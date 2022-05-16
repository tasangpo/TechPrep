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
var verticalOrder = function(root) {
    if (root === null) return [];
    const queue = [ [root, 0] ];
    const map = {};
    
    let min = 0;
    let max = 0;
    
    while (queue.length) {
        const [node, col] = queue.shift();
        if (!(col in map)) map[col] = [];
        map[col].push(node.val);
        
        min = col < min ? col : min;
        max = col > max ? col : max;
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
    }
    
    const output = [];
    for (let i = min; i <= max; i++) {
        if (i in map) output.push(map[i]);
    }
    return output;
    
};