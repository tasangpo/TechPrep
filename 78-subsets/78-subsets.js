/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) return [[]];
    
    const first = nums[0];
    const without = subsets(nums.slice(1));
    const withFirst = without.map(arr => [first, ...arr]);
    
    return withFirst.concat(without);
};