/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let count = 0;
    const obj = {};
    for (const char of s) {
        obj[char] = obj[char] ? obj[char] + 1 : 1;
    }
    for (const char of t) {
        if (obj[char]) obj[char]--;
    }
    
    for (const key in obj) count += obj[key];
    return count;
};