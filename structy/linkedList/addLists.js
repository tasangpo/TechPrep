// add lists
// Write a function, addLists, that takes in the head of two linked lists, each representing a number.The nodes of the linked lists contain digits as values.The nodes in the input lists are reversed; this means that the least significant digit of the number is the head.The function should return the head of a new linked listed representing the sum of the input lists.The output list should have its digits reversed as well.

// Say we wanted to compute 621 + 354 normally.The sum is 975:

// 621
//     + 354
// -----
//     975

// Then, the reversed linked list format of this problem would appear as:

// 1 -> 2 -> 6
//     + 4 -> 5 -> 3
// --------------
//     5 -> 7 -> 9
// test_00:
// //   621
// // + 354
// // -----
// //   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3

// addLists(a1, b1);
// // 5 -> 7 -> 9
// test_01:
// //  7541
// // +  32
// // -----
// //  7573

// const a1 = new Node(1);
// const a2 = new Node(4);
// const a3 = new Node(5);
// const a4 = new Node(7);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// // 1 -> 4 -> 5 -> 7

// const b1 = new Node(2);
// const b2 = new Node(3);
// b1.next = b2;
// // 2 -> 3 

// addLists(a1, b1);
// // 3 -> 7 -> 5 -> 7
// test_02:
// //   39
// // + 47
// // ----
// //   86

// const a1 = new Node(9);
// const a2 = new Node(3);
// a1.next = a2;
// // 9 -> 3

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// // 7 -> 4

// addLists(a1, b1);
// // 6 -> 8
// test_03:
// //   89
// // + 47
// // ----
// //  136

// const a1 = new Node(9);
// const a2 = new Node(8);
// a1.next = a2;
// // 9 -> 8

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// // 7 -> 4

// addLists(a1, b1);
// // 6 -> 3 -> 1
// test_04:
// //   999
// //  +  6
// //  ----
// //  1005

// const a1 = new Node(9);
// const a2 = new Node(9);
// const a3 = new Node(9);
// a1.next = a2;
// a2.next = a3;
// // 9 -> 9 -> 9

// const b1 = new Node(6);
// // 6

// addLists(a1, b1);
// // 5 -> 0 -> 0 -> 1

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let curr1 = head1;
    let curr2 = head2;
    let carry = 0;

    while (curr1 !== null || curr2 !== null || carry !== 0) {
        const val1 = curr1 !== null ? curr1.val : 0;
        const val2 = curr2 !== null ? curr2.val : 0;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const value = sum % 10;

        tail.next = new Node(value);
        tail = tail.next;

        if (curr1 !== null) curr1 = curr1.next;
        if (curr2 !== null) curr2 = curr2.next;
    }
    return dummyHead.next;

};
