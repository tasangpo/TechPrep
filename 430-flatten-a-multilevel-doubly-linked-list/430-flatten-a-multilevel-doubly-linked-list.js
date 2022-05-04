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
    const stack = [head];
    let previous = head;
    
    while (stack.length) {
        const current = stack.pop();
        if (current.next) stack.push(current.next);
        if (current.child) stack.push(current.child);
        
        if (current.child) {
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
        
        if (previous.next === null) {
            previous.next = current;
            current.prev = previous;
        }
        
        
        previous = current;
    }
    
    return head;
};