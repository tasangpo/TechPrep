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
    let curr1 = l1;
    let curr2 = l2;
    let dummy = new ListNode(null);
    let tail = dummy;
    let carry = 0;
    
    while (curr1 !== null || curr2 !== null || carry !== 0) {
        let val1 = curr1 === null ? 0 : curr1.val;
        let val2 = curr2 === null ? 0 : curr2.val;
        
        let sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        let digit = sum % 10;
        
        if (curr1 !== null) curr1 = curr1.next;
        if (curr2 !== null) curr2 = curr2.next;
        
        tail.next = new ListNode(digit);
        tail = tail.next;   
    }
    
    
    return dummy.next;
};