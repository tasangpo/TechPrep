/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    let pally = '';
    
    for (let i = 0; i < s.length; i++)  {
        let odd = expandCenter(s, i, i);
        if (odd.length > pally.length) pally = odd;
        let even = expandCenter(s, i, i + 1);
        if (even.length > pally.length) pally = even;
    }
        
    return pally;
}

const expandCenter = (s, left, right) => {
    let i = 0;
    while (s[left - i] && s[left - i] === s[right + i]) {
        i++;
    }
    i--;
    return s.slice(left - i, right + i + 1);
}