/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const all = [];
    
    generate(0, 0, n, all, []);
    
    return all;
};

const generate = (i, j, n, all, curr) => {
    if (i === n && j === n) {
        all.push(curr.join(''));
    }
    
    if (j < i) {
        generate(i, j + 1, n, all, [...curr, ')']);
    }
    
    if (i < n) {
        generate(i + 1, j, n, all, [...curr, '(']);
    }
}