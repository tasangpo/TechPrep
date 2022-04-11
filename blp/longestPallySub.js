// Given a string s, return the longest palindromic substring in s.
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function (s) {
    if (s.length < 1 || s === null) return '';

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandFromCenter(s, i, i);
        let evenPalindrome = expandFromCenter(s, i - 1, i);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome
        }

        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;

};

function expandFromCenter(s, left, right) {
    let i = 0;
    while (s[left - i] && s[left - i] === s[right + i]) {
        i++;
    }
    i--;

    return s.slice(left - i, right + i + 1)
}

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));