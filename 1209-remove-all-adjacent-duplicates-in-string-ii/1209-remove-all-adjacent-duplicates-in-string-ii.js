/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];       //  [[a,1], [b, 1], [c, 1], [d, 1]]
    
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
            stack.push([char, 1])
        }
        
    };
    
    return stack.map(arr => arr[0].repeat(arr[1])).join('')
};