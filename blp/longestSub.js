// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) { // 'tmmzuxt'
    let longest = 0;
    const charSet = new Set();

    let i = 0;
    let j = 0;

    while (j < s.length) {

        while (charSet.has(s[j])) {
            charSet.delete(s[i]);
            i += 1;
        }

        charSet.add(s[j]);
        longest = Math.max(longest, j - i + 1)
        j += 1;
    }


    return longest;
};




console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"))