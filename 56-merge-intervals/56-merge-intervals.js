/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {           // [[1,3],[2,6],[8,10],[15,18]]
    intervals.sort((a, b) => a[0] - b[0]);
    
    const output = [intervals[0]];                  // [1, 3]
    
    for (let i = 1; i < intervals.length; i++ ) {
        const [start, end] = intervals[i];                          // [2, 6]
        const [prevStart, prevEnd] = output[output.length - 1];     // [1, 3]
        if (start <= prevEnd && end > prevEnd) {
            output[output.length - 1][1] = end;
        } else if (start > prevEnd) {
            output.push([start, end]);
        }
        
    }
    
    return output;
};