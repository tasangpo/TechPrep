// 3. Longest Substring Without Repeating Characters

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

const longestSubstring = s => { // '"abcabcbb"'
    let stack = [];
    let currSteak = 0;
    let maxStreak = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!stack.includes(char)) {
            currSteak += 1;
        } else {
            currSteak = 0;
            stack.unshift();
        }
        stack.push(char)
        
        if (currSteak > maxStreak) {
            maxStreak = currSteak
        }
    }
    return maxStreak
}

console.log(longestSubstring('abcabcbb'));
console.log(longestSubstring('bbbbb'));
console.log(longestSubstring('pwwkew'));