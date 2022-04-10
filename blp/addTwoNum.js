// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// Output: [8, 9, 9, 9, 0, 0, 0, 1]

// Constraints:
// The number of nodes in each linked list is in the range[1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 

const addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    
    let carry = 0;
    let curr1 = l1;
    let curr2 = l2;

    while (curr1 !== null || curr2 !== null || carry !== 0) {
        const val1 = curr1 !== null ? curr1.val : 0;
        const val2 = curr2 !== null ? curr2.val : 0;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const value = sum % 10;

        tail.next = new ListNode(value);
        tail = tail.next;
        
        if (curr1 !== null) curr1 = curr1.next;
        if (curr2 !== null) curr2 = curr2.next;
    }
    
    return dummyHead.next;
}


