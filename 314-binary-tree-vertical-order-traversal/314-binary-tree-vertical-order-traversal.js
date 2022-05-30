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
    const cols = {};
    
    let min = 0;
    let max = 0;
    const queue = [ [root, 0] ]
    while (queue.length) {
        const [curr, col] = queue.shift();
        if (!(col in cols)) cols[col] = [];
        cols[col].push(curr.val);
        
        min = col < min ? col : min;
        max = col > max ? col : max;
        if (curr.left) queue.push([curr.left, col - 1]);
        if (curr.right) queue.push([curr.right, col + 1]);
        
    }
    
    const output = [];
    for (let i = min; i <= max; i++) {
        output.push(cols[i]);
    }
    return output;
    
};