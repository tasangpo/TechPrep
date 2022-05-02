/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const deltas = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, 2], [1, -2], [2, -1], [2, 1]];
    let count = 0;
    const memo = {};
    const mod = (10**9) + 7;
    for (let r= 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
            if (isValid(r, c)) {
                count += countTotal(n, deltas, r, c, n-1, memo);  
            }
        }
    }
    
    return count % mod;
};

const countTotal = (n, deltas, r, c, remain, memo) => {
    const pos = r + ',' + c + ',' + remain;
    if (remain === 0) return 1;
    
    if (pos in memo) return memo[pos];
    
    let count = 0;
    
    for (let [deltaRow, deltaCol] of deltas) {
        if (!isValid(r + deltaRow, c + deltaCol)) {
            continue;
        }
        
        count += countTotal(n, deltas, r + deltaRow, c + deltaCol, remain - 1, memo) % ((10 ** 9) +7);
    }
    
    memo[pos] = count;
    return memo[pos];
}

const isValid = (r, c) => {
    return ((r >= 0 && r < 4 && c >= 0 && c < 3) && !(r === 3 && c === 0) && !(r === 3 && c === 2));
}
