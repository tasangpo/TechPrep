// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them.If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.



//     Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104


var reverseStr = function (s, k) {
    // a    b   c   d   e   f   g
    // 0    1   2   3   4   5   6

    // when index hits start of a (2 * k) like 0, k, 2k, slice from i to k+i to get the first k chars and reverse them, then increment by k - 1;

    if (s.length >= k && s.length <= 2 * k) {
        return s.slice(0, k).split('').reverse().join('') + s.slice(k);
    }

    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (i % (2 * k) === 0) {
            result.push(s.slice(i, i + k).split('').reverse().join(""));
            i += k - 1;
        } else {
            result.push(s[i]);
        }
        console.log(result)
    }

    return result.join('');
};


console.log(reverseStr('abcdefg', 2));