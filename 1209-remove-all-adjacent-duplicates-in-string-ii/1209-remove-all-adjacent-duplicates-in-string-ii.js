/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length === 0) {
            stack.push([char, 1]);
            continue;
        }
        
        const [prevChar, prevCount] = stack[stack.length - 1];
        if (char === prevChar) {
            stack[stack.length - 1][1] = prevCount + 1;
            if (stack[stack.length - 1][1] === k) stack.pop();
        } else {
            stack.push([char, 1]);
        }
    }
    
    let res = '';
    for (let [char, count] of stack) res += char.repeat(count);
    return res;
};