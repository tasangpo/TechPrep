// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

const threeSum = nums => {
    nums.sort((a,b) => a - b);
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length- 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                results.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left+1])left++;
                while(nums[right] === nums[right-1]) right--;
                left++;
                right--;
            }
        }
    }

    return results;
}



console.log(threeSum([-1, 0, 1,  2, -1, -4]));
// console.log(threeSum([]));
// console.log(threeSum([0]));
console.log(threeSum([0, 0, 0, 0]))