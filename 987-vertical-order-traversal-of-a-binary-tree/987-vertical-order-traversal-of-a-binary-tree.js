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
var verticalTraversal = function(root) {
    if (root === null) return [];
    let min = 0;
    let max = 0;
    const map = {}; // {0: {0:[1]}, 2: [5, 6]}, -1: {1: [2]}, -2: {2: [4]}, 1: {2: [3]} 3: {2: [7]} }
    
    const queue = [ [root, 0, 0] ];
    while (queue.length) {
        const [node, col, level] = queue.shift();
        min = col < min ? col : min;
        max = col > max ? col : max;
        
        if (!(col in map)) map[col] = {};
        if (!(level in map[col])) map[col][level] = [];
        map[col][level].push(node.val);
        
        if (node.left) queue.push([node.left, col - 1, level + 1]);
        if (node.right) queue.push([node.right, col + 1, level + 1]);
    }
    
    const output = [];
    
    for (let i = min; i <= max; i++) {
        const sub = [] // [1]
        if (i in map) {
            for (const key in map[i]) {
                const arr = map[i][key].sort((a, b) => a - b)
                sub.push(...arr)
            }
            output.push(sub);
        }
    }
    
    return output;
};