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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    let start;
    const dfs = node => {
        if (!node) retunr;
        if (node.left) {
            node.left.parent = node;
            dfs(node.left);
        }
        if (node.right) {
            node.right.parent = node;
            dfs(node.right);
        }
        if (node.val === startValue) start = node;
    }
    dfs(root);
    
    const queue = [ [start, ''] ];
    while (queue.length) {
        const [node, path] = queue.shift();
        if (node.visited) continue;
        if (node.val === destValue) return path;
        node.visited = true;
        if (node.right && !node.right.visited) queue.push( [node.right, path + 'R'] );
        if (node.left && !node.left.visited) queue.push( [node.left, path + 'L'] );
        if (node.parent && !node.parent.visited) queue.push( [node.parent, path + 'U'] );
    }
    
    
};