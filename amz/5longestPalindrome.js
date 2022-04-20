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
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        const oddPally = expandFromCenter(s, i, i);
        if (oddPally.length > longest.length) longest = oddPally;
        const evenPally = expandFromCenter(s, i-1, i);
        if (evenPally.length > longest.length) longest = evenPally;
    }

    return longest;
};

const expandFromCenter = (s, left, right) => {
    let i = 0;
    while((s[left - i] && s[left - i] === s[right+ i]))  {
        i++;
    }
    i--;
    return s.slice(left - i, right + i + 1);
};