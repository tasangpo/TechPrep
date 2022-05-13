/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    const combinations = [];
    
    generateCombos(0, digits, combinations, []);
    
    return combinations;
};


const generateCombos = (i, digits, combinations, curr) => {
    if (i === digits.length) {
        combinations.push(curr.join(''));
        return;
    }
    const phone = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'};
    
    for (const char of phone[digits[i]]) {
        generateCombos(i + 1, digits, combinations, [...curr, char])   
    }
}