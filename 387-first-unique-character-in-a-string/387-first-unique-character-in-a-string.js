/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counter = {};
    for (const char of s) {
        if (!(char in counter)) counter[char] = 0;
        counter[char]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (counter[char] === 1) return i;
    }
    return -1;
};