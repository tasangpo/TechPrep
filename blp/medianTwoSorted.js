// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log(m + n)).

// Example 1:
// Input: nums1 = [1, 3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1, 2, 3] and median is 2.

// Example 2:
// Input: nums1 = [1, 2], nums2 = [3, 4]
// Output: 2.50000
// Explanation: merged array = [1, 2, 3, 4] and median is(2 + 3) / 2 = 2.5.


// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// - 106 <= nums1[i], nums2[i] <= 106

var findMedianSortedArrays = function (nums1, nums2) {
    const sorted = [];
    const total = nums1.length + nums2.length;
    const mid = Math.floor(total/2);

    let i = 0;
    let j = 0;
    while (sorted.length < mid + 1) {
        if (nums1[i] !== undefined && nums1[i] < nums2[j] || nums2[j] === undefined) {
            sorted.push(nums1[i]);
            i += 1;
        } else {
            sorted.push(nums2[j]);
            j += 1;
        }
    }

    if (total % 2 === 0) {
        return (sorted[mid] + sorted[mid - 1])/2;
    } else {
        return sorted[mid];
    }
};


console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
console.log(findMedianSortedArrays([0,0], [0,0]))
console.log(findMedianSortedArrays([3], [-2, -1]))
