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
        if (curr.next === null && stack.length !== 0) {
            const newNext = stack.pop();
            curr.next = newNext;
            if (newNext !== null) newNext.prev = curr;
        }
        
        if (curr.child) {
            stack.push(curr.next);
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }
        
        curr = curr.next;
    }
    
    return head;
};