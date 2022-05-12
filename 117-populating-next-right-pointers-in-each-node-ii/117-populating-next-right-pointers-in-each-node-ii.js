/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return null;
    
    const stack = [ [root] ];
    while (stack.length) {
        const nodes = stack.pop();
        const newNodes = [];
        
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].next = nodes[i + 1] || null;
            if (nodes[i].left) newNodes.push(nodes[i].left);
            if (nodes[i].right) newNodes.push(nodes[i].right);
        }
        if (newNodes.length) stack.push(newNodes);    
    };
    
    return root;
};