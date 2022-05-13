/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) return [[]];
    
    const first = nums[0];
    const withoutFirst = subsets(nums.slice(1));
    const withFirst = [];
    for (const sub of withoutFirst) withFirst.push([first, ...sub]);
    
    return withFirst.concat(withoutFirst);
};