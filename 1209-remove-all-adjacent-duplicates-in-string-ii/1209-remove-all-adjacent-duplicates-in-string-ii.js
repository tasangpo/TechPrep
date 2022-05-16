/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {  // "deeedbbcccbdaa", k = 3
    const stack = [];                   //  [ ['a',2] ]
    for (const char of s) {
        if (!stack.length) {
            stack.push([char, 1]);
            continue;
        }
        
        const [prevChar, count] = stack[stack.length - 1];
        if (char === prevChar) {
            const newCount = count + 1;
            if (newCount === k) {
                stack.pop();
            } else {
                stack[stack.length - 1][1] = newCount;
            }
        } else {
            stack.push([char, 1]);
        }
        
    }
    
    let res = '';
    
    for (const [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
};