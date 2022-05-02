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
    let prev = head;
    while (stack.length) {
        const curr = stack.pop();
        if (curr.next) stack.push(curr.next);
        if (curr.child) stack.push(curr.child);
        
        if (curr.child) {
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null;
        }
        if (prev.next === null) {
            prev.next = curr;
            curr.prev = prev;
        }
        
        prev = curr;   
    }
    
    
    return head;
    
};