/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];           // [3, a, 2, [,  ]
    const numbers = '0123456789'
    
    for (const char of s) {   // 3  [   a   2   [   c   ]   ]
        if (char === ']') {
            let subString = '';
            let ele = stack.pop();
            while (ele !== '[') {
                subString = ele + subString;
                ele = stack.pop();
            }
            let num = '';
            let curr = stack.pop();
            while (numbers.includes(curr)) {
                num = curr + num;
                curr = stack.pop();
            }
            stack.push(curr);
            stack.push(subString.repeat(Number(num)))
                    
        } else {
            stack.push(char);
        }
    }
    return stack.join('')
    
};