// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.


var countCharacters = function(words, chars) {
    const goodWords = [];
    for (let word of words) {
        if (isValid(word, chars)) goodWords.push(word);
    }
    return goodWords;
}

const isValid = (word, chars) => {  // {, , , h}
    const set = new Set(chars);
    for (let char of word) {
        if (set.has(char)) {
            set.delete(char);
        } else {
            return false;
        }
    }
    
    return true;
}

// console.log(countCharacters(["cat","bt","hat","tree"],'atach' ))
console.log(countCharacters(words = ["hello","world","leetcode"], chars = "welldonehoneyr"))