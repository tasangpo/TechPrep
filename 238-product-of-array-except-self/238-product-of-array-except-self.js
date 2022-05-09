/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    let rightProduct = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= rightProduct;
        rightProduct *= nums[j];
    }
    
    
    return result;
};