/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currStreak = -Infinity;
    let maxStreak = -Infinity;
    
    for (const num of nums) {
        currStreak = Math.max(num, currStreak + num);
        maxStreak = Math.max(currStreak, maxStreak);
    }
    
    return maxStreak
};