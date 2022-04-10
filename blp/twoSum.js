// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:
// 2 <= nums.length <= 104
//     - 109 <= nums[i] <= 109
//     - 109 <= target <= 109
// Only one valid answer exists.
// Follow - up: Can you come up with an algorithm that is less than O(n2) time complexity ?

const twoSum = function(nums, target) {
    // Method 1: Nested Loops
    // for (let i = 0; i < nums.length; i++) {
    //     const num1 = nums[i];
    //     for (let j = i + 1; j < nums.length; j++) {
    //         const num2 = nums[j];
    //         if (num1 + num2 === target) return [i, j];
    //     }
    // }

    // Method2: Utilize Objects
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (seen[complement] === undefined) {
            seen[num] = i;
        } else {
            return [seen[complement], i];
        }
    }

}

console.log(twoSum(nums = [2, 7, 11, 15], target = 9));
console.log(twoSum(nums = [3, 2, 4], target = 6));
console.log(twoSum(nums = [3, 3], target = 6));