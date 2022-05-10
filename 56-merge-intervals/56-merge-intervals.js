/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    
    for (const [start, end] of intervals) {
        if (!result.length) {
            result.push([start, end]);
            continue;
        }
        
        const [prevStart, prevEnd] = result[result.length - 1];
        if (start <= prevEnd) {
            if (end > prevEnd) result[result.length - 1][1] = end;

        } else {
            result.push([start, end]);
        }
    }
    
    return result;
};