/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const mod = 10 ** 9 + 7;
    let count = 0;
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
            if (validPos(r, c)) count +=  checkMove(n, r, c, n-1)
        }
    }
    return count % mod;
    
};

const validPos = (r, c) => {
    const rowInbound = 0 <= r && r < 4;
    const colInbound = 0 <= c && c < 3;
    
    return (rowInbound && colInbound && !(r === 3 && c == 0) && !(r === 3 && c === 2))
}

const checkMove = (n, r, c, remain, memo={}) => {
    const key = r + ',' + 'c' + remain;
    if (key in memo) return memo[key];
    if (remain === 0) return 1;
    const deltas = [ [1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1] ];
    const mod = 10 ** 9 + 7;

    let count = 0;
    for (let [deltaRow, deltaCol] of deltas) {
        const neighborRow = r + deltaRow;
        const neighborCol = c + deltaCol;
        if (!validPos(neighborRow, neighborCol)) continue;
        
        count += checkMove(n, neighborRow, neighborCol, remain - 1, memo);
    }
    
    memo[key] = count % mod;
    return memo[key];
}