/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target, memo={}) {
    if (target in memo) return memo[target];
    if (target === 0) return 1;
    if (target < 0) return 0;
    
    let count = 0;
    for (const num of nums) {
        count += combinationSum4(nums, target - num, memo);
    }
    memo[target] = count;
    return count;
};