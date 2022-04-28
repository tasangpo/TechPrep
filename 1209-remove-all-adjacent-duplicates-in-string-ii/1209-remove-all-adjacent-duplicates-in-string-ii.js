/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {  // "deeedbbcccbdaa" => 'aa'
    const stack = [];
    for (let char of s) {               // [[d, 1], [e, 1] ]
        
        if (!stack.length) {    
            stack.push([char, 1]);
            continue;
        }
        
        let [prevChar, prevCount] = stack[stack.length - 1];
        if (prevChar === char) {
            const count = prevCount + 1;
            stack[stack.length - 1][1] = count;
            if (count === k) stack.pop(); 
        } else {
            stack.push([char, 1])
        }
    }
    let res = '';
    for (const [char, count] of stack) res += char.repeat(count);
    return res;
};