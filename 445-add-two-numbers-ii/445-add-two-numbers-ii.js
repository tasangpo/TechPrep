/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let reverse1 = reverseList(l1);
    let reverse2 = reverseList(l2);
    
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    
    let carry = 0;
    while (reverse1 !== null || reverse2 !== null || carry !== 0) {
        const val1 = reverse1? reverse1.val : 0;
        const val2 = reverse2? reverse2.val : 0;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const value = sum % 10;
        tail.next = new ListNode(value);
        
        if (reverse1 !== null) reverse1 = reverse1.next;
        if (reverse2 !== null) reverse2 = reverse2.next;
        tail = tail.next;
    }
    
    return reverseList(dummyHead.next);
    
};

const reverseList = head => {
    let curr = head;
    let prev = null;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    };
    return prev;
}