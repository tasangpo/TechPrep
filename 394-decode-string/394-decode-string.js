/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []; 
    const numbers = '0123456789';
    
    for (let char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }
        
        let str = '';
        let ele = stack.pop();
        while (ele !== '[') {
            str = ele + str;
            ele = stack.pop();
        }
        
        let count = '';
        let num = stack.pop();
        while (numbers.includes(num)) {
            count = num + count;
            num = stack.pop();
        }
        
        stack.push(num);
        stack.push(str.repeat(count));
    };
    
    return stack.join('');
};