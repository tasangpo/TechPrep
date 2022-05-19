/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const queue = [];
    for (let i = 1; i <= n; i++)  queue.push(i);
    
    // [2, 3, 4, 5, 1];
    while (queue.length > 1) {
        let count = k - 1;      // 1
        while (count > 0) {
            queue.push(queue.shift());
            count--;
        }
        queue.shift();
    } 
    return queue[0];
};