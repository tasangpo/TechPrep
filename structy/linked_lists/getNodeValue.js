// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index.The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

//     test_00:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 2); // 'c'
// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 3); // 'd'
// test_02:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// getNodeValue(a, 7); // null
// test_03:
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 0); // 'banana'
// test_04:
// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// getNodeValue(node1, 1); // 'mango'


// RECURSIVE METHOD:
const getNodeValue1 = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;

    return getNodeValue(head.next, index - 1);
};

// ITERATIVE:
const getNodeValue2 = (head, index) => {
    let count = 0;
    let current = head;

    while (current !== null) {
        if (index === count) return current.val;
        current = current.next;
        count += 1;
    }

    return null;
};