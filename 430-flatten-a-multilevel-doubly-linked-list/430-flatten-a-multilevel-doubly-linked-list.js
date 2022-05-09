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
    let curr = head;
    const stack = [];
    while (curr !== null) {
        if (curr.child) {
            if (curr.next) stack.push(curr.next);
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null;
        }
        if (curr.next === null && stack.length) {
            curr.next = stack.pop();
            curr.next.prev = curr;
        }
        curr = curr.next;
        
    }
    
    return head;
};