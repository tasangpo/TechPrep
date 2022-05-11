/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (head === null) return null
    const stack = [ head ];
    let prev = null;
    while (stack.length) {
        let curr = stack.pop();
        if (curr.next) stack.push(curr.next);
        if (curr.child) stack.push(curr.child);
        
        if (curr.child) {
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        } else {
            if (prev) prev.next = curr;
            curr.prev = prev;
        }
        
        prev = curr;
        curr = curr.next;
        
    }
    
    return head;
};