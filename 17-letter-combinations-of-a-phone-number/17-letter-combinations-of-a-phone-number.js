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
}

var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const combos = [];
    generateCombos(0, digits, combos, curr=[]);
    return combos;
};

const generateCombos = (i, digits, combos, curr) => {
    if (i === digits.length) {
        combos.push(curr.join(''));
        return;
    }
    
    for (const char of phone[digits[i]]) {
        generateCombos(i + 1, digits, combos, [...curr, char])
    }
}

