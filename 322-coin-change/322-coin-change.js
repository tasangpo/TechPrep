/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = (coins, amount) => {
    const ans = _coinChange(coins, amount);
    return ans === Infinity ? -1 : ans;
}

var _coinChange = function(coins, amount, memo={}) {
    if (amount in memo) return memo[amount]
    if (amount < 0) return Infinity;
    if (amount === 0) return 0;
    
    let min = Infinity;
    for (const coin of coins) {
        const num = 1 + _coinChange(coins, amount - coin, memo);
        min = num < min ? num : min;
    }
    
    memo[amount] = min;
    return memo[amount]
};