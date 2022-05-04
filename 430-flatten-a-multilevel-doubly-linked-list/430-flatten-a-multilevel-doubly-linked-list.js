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
        if (curr.next === null && stack.length) {
            const node = stack.pop();
            curr.next = node;
            curr.next.prev = curr;
        }
        
        if (curr.child) {
            if (curr.next) stack.push(curr.next);
            curr.next = curr.child;
            curr.next.prev = curr;
            curr.child = null;
        }
        curr = curr.next;
    }
    return head;
};