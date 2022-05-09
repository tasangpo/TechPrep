/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const obj = {};
    
    let i = 0;
    while (i < nums2.length) {
        if (i === nums2.length - 1) {
            obj[nums2[i]] = -1;
             break;
        } 
        let j = i + 1;
        while (nums2[i] > nums2[j]) {
            if (j === nums2.length - 1) break;
            j++;
        }
        obj[nums2[i]] = nums2[j] > nums2[i] ? nums2[j] : -1;
        i++;
    }
    
    return nums1.map(num => obj[num]);
};