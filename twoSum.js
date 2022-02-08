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
//     Follow - up: Can you come up with an algorithm that is less than O(n2) time complexity ?

// const twoSum = (array, target) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

const twoSum = (array, target) => {
    const seen = {}; // { 3: 0, 2: 1, }
    for (let i = 0; i < array.length; i++) {
        let j = seen[target - array[i]];
        if (j !== undefined) {
            return [i, j]; 
        }
        seen[array[i]] = i
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6))