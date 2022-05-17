/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let output = 0;
    let i = 0;
    let j = height.length - 1;
    let leftMax = height[0];
    let rightMax = height[j];
    
    while (i < j) {
        if (leftMax < rightMax) {
            i++;
            if (leftMax - height[i] > 0) output += leftMax - height[i];
            leftMax = height[i] > leftMax ? height[i] : leftMax;
        } else {
            j--;
            if (rightMax - height[j] > 0) output += rightMax - height[j];
            rightMax = height[j] > rightMax ? height[j] : rightMax;
        }
    }
    
    
    return output;
};