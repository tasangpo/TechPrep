/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [ [] ];
    
    const first = nums[0];
    const permutations = permute(nums.slice(1));
    
    const all = [];
    for (const perm of permutations) {
        for (let i = 0; i <= perm.length; i++) {
            all.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
    }
    return all;
};