/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const obj = {};
    for (const char of s) {
        if (!(char in obj)) obj[char] = 0;
        obj[char]++;
    }
    for (const char of t) {
        if (obj[char]) {
            obj[char]--;
        }
    }
    
    return Object.values(obj).reduce((acc, el) => acc + el);
};