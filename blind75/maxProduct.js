// Given an integer array nums, find a contiguous non - empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32 - bit integer.
// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: nums = [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product 6.

// Example 2:
// Input: nums = [-2, 0, -1]
// Output: 0
// Explanation: The result cannot be 2, because[-2, -1] is not a subarray.

// Example 3:
// Input: nums = [-2, 3, -4]
// Output: 24
// Explanation: [-2, 3, -4]

const maxProduct = nums => {   
    let currMaxStreak = nums[0];  
    let currMinStreak = nums[0];  
    let result = currMaxStreak;  

    for (let i = 1; i < nums.length; i++) {  
        const num = nums[i];                
        tempMax = Math.max(num, currMaxStreak * num, currMinStreak * num);  
        currMinStreak = Math.min(num, currMaxStreak * num, currMinStreak * num); 
        currMaxStreak = tempMax;
        result = Math.max(result, currMaxStreak); 
    }

    return result;
}

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2, 3, -4]));
// console.log(maxProduct([2, -5, 3, 1, -4, 0, -10, 2, 8]))
console.log(maxProduct([-4, -3, -2]))