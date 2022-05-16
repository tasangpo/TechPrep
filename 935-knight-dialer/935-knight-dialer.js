/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    let count = 0;
    const mod = 10**9 + 7;
    const memo = new Set();
    
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
            count += explore(n, r, c, memo);
        }
    }
    
    return count % mod;
};

const explore = (n, r, c, memo) => {
    if (!isValidPos(r, c)) return 0;
    if (n === 1) return 1;  
    
    const key = r + ',' + c + ',' + n;
    if (key in memo) return memo[key];
    
    const deltas = [[2, 1], [2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
    let count = 0;
    for (const [deltaRow, deltaCol] of deltas) {
        const neighborRow = r + deltaRow;
        const neighborCol = c + deltaCol;
        count += explore(n - 1, neighborRow, neighborCol, memo);
    }
    const mod = 10**9 + 7;
    memo[key] = count % mod;
     return memo[key];
};


const isValidPos = (r, c) => {
    const rowInbound = 0 <= r && r < 4;
    const colInbound = 0 <= c && c < 3;
    const validPos = !((r == 3 && c === 0) || (r === 3 && c === 2));
    
    return rowInbound && colInbound && validPos;
}

