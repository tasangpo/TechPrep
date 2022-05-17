/**
 * @param {string} digits
 * @return {string[]}
 */
const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl', 
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};


var letterCombinations = function(digits) {
    if (!digits.length) return [];
    const all = [];
    
    generateComb(0, digits, all, []);
    
    return all;
};


const generateComb = (i, digits, all, curr) => {
    if (i === digits.length) {
        all.push(curr.join(''));
        return;
    }
    
    for (const char of phone[digits[i]]) {
        generateComb(i + 1, digits, all, [...curr, char]);
    }
    
    
}