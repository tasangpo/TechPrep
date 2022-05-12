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
    
    const map = {};                 // {0: [3, 15], -1: [9], 1: [20], 2: [7]}
    const queue = [ [root, 0] ];        // [ [9, -1], [20, 1] ]
    let min = 0;
    let max = 0;
    
    while (queue.length) {
        const len = queue.length;               // len = 2
        for (let i = 0; i < len; i++) { 
            const [node, col] = queue.shift();      // [20, 1]
            
            min = Math.min(min, col);               // min = -1
            max = Math.max(max, col);               // max = 1;
            
            
            if (!map[col]) {
                map[col] = [node.val];
            } else {
                map[col].push(node.val)
            }
            
            if (node.left) queue.push([node.left, col - 1]);   // [15, 0]     
            if (node.right) queue.push([node.right, col + 1]);       // [7, 2]   
        }
    };
    const output = [];
    for (let i = min; i <= max; i++) {
        if (map[i]) output.push(map[i]);
    }
    return output;
};