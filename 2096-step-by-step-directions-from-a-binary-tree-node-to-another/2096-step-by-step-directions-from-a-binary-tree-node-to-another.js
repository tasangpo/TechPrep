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
    const recurse = (currNode, target, str) => {
        if (!currNode) {
            return null;
        }
        if (currNode.val === target) {
            return str;
        }
        
        return recurse(currNode.left, target, str + 'L') ||
            recurse(currNode.right, target, str + 'R');
    };
    
    const start = recurse(root, startValue, '');
    const dest = recurse(root, destValue, '');
	
    let pointer = 0;
    // find the common ancestory
    while (pointer < start.length) {
        if (start[pointer] !== dest[pointer]) {
            break;   
        }
        pointer++;
    }
    
    return 'U'.repeat(start.length - pointer) + dest.substring(pointer);
};