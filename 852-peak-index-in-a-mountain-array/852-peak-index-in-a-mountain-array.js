/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let maxHeight = null;
    
    for (let i = 1; i < arr.length - 1; i++) {
        if (maxHeight === null || arr[i] > arr[maxHeight]) maxHeight = i;
    }
    
    return maxHeight;
};