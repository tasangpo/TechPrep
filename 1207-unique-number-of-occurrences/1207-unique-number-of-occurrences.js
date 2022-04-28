/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counter = {};
    for (let num of arr) {
        if (!(num in counter)) counter[num] = 0;
        counter[num] += 1;
    }
    
    const seen = new Set();
    for (let key in counter) {
        if (seen.has(counter[key])) return false;
        seen.add(counter[key]);
    }
    
    return true;
};