/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
  // Memo
  this.memo = new Map();
  
  // Modulo
  this.mod = (10 ** 9) + 7;
  
  // All valid knight's directions and valid keypad numeric's coordinates
  let directions = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];
  let numericCoord = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2], [3, 1]];
  
  let count = 0;
  
  // Starting coordinate of every valid key in the keypad
  for (let [r, c] of numericCoord) {
    count += dp(n, directions, r, c, n - 1);
  }
  
  // Return result with modulo
  return count % this.mod;
};

var dp = function(n, directions, r, c, remain) {
  let key = `${r}_${c}_${remain}`;
  
  // Base case
  if (remain === 0) {
    return 1;
  }
  
  // Return from memo
  if (this.memo.has(key) === true) {
    return this.memo.get(key);
  }
  
  let count = 0;
  
  // Try to go every valid directions a knight can go
  for (let [nextR, nextC] of directions) {
    // If the next direction is invalid, try another direction
    if (isValid(r + nextR, c + nextC) === false) {
      continue;
    }
    
    // Next direction is valid, result could be huge so we perform modulo
    count += dp(n, directions, r + nextR, c + nextC, remain - 1) % this.mod;
  }
  
  // Set memo
  this.memo.set(key, count);
  
  return count;
};

var isValid = function(r, c) {
  // Check if coordinate is in keypad coordinate boundary, except the asterisk (3, 0) and hashtag (3, 2)
  return (r >= 0 && r < 4 && c >= 0 && c < 3) &&
    !(r === 3 && c === 0) &&
    !(r === 3 && c === 2);
};