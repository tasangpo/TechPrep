// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.
 

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.
// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]
 

// Constraints:

// 0 <= arr.length <= 105
// -109 <= arr[i] <= 109



var arrayRankTransform = function(arr) {        //    [37, 12, 28, 9, 100, 56, 80, 5, 12] 
                                                //    [5, 9, 12, 12, 28, 37, 56, 80, 100]
    const dup = [...arr];                       //     0  1   2   3   4   5   6   7   8
                                                //   {5: 1, 9: 2, 12: 3, 28: 4, 37: 5, 56: 6, 80: 7, 100: 8}
                                                //.  [5, 3, 4, 2, 8, 6, 7, 1, 3]
    dup.sort((a, b) => a - b);
    
    let curr = 1;
    const obj = {};
    for (let ele of dup) {
        if (!(ele in obj)) {
            obj[ele] = curr;
            curr++;
        }
    }
    return obj
    
    // return arr.map(num =>  obj[num]);
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))