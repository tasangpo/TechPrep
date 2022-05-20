/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const queue = new Queue([[beginWord, 1]])     //  [ ['hit', 1] ]
  const seen = new Set();                   // {}
  wordList = new Set(wordList);               //  {"hot","dot","dog","lot","log","cog"}
  if (!wordList.has(endWord)) return 0
  
  while (!queue.isEmpty()) {
    const [curWord, iterations] = queue.dequeue();          // ['hit', 1 ]
    if (curWord === endWord) return iterations;
    populateQueue(curWord, iterations);
  }
  
  return 0
  
  function populateQueue(word, iterations) {
    const add = 'a'.charCodeAt(0);
    for (let charIdx = 0; charIdx < word.length; charIdx++) {
      for (let alph = 0; alph < 26; alph++) {
        const newWord = word.slice(0,charIdx) + String.fromCharCode(add + alph) + word.slice(charIdx + 1);
        if (wordList.has(newWord)) {
          queue.enqueue([newWord, iterations + 1])
          wordList.delete(newWord)
        }
      }
    } 
  }
};



