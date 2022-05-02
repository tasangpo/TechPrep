/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);     // -1, -1, 0, 1
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;      -1

        const num = nums[i];                // -1
        const target = 0 - num;             // 1
        let start = i + 1;
        let end = nums.length - 1;
        
        while (start < end) {
            if (nums[end] + nums[start] === target) {
                results.push([num, nums[start], nums[end]]);
                while (nums[start] === nums[start + 1]) start++;
                while (nums[end] === nums[end - 1]) end--;
                start++;
                end--;
            }
            else if (nums[end] + nums[start] > target) {
                end--
            } else {
                start++
            }
        }      
    }
    return results;    
};

// var threeSum = function(nums) {
//     nums.sort((a,b) => a - b);
//     const result = [];
    
//     for (let i = 0; i < nums.length; i++) {    // -4, -1, -1, 0, 1, 2
//         if (nums[i] === nums[i - 1]) continue

//         const num = nums[i];                    // -4
//         const target = 0 - num;                 // 4
//         let start = i + 1;                      // 1
//         let end = nums.length - 1;              // 5

        
//         while (start < end) {
//             const sum = nums[start] + nums[end];
//             if (sum > target) {
//                 end--;
//             } else if (sum < target) {
//                 start++;
//             } else {
//                 result.push([num, nums[start], nums[end]]);
//                 while (nums[start] === nums[start + 1]) start++;
//                 while (nums[end] === nums[end - 1]) end--;
//                 start++;
//                 end--;
//             }
            
            
//         }
        
//     }
    
//     return result;
// };