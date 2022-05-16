/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {                         
    const startTimes = intervals.map(int => int[0]).sort((a, b) => a - b);      // [0, 5, 15]
    const endTimes = intervals.map(int => int[1]).sort((a, b) => a - b);        // [10, 20, 30]
    
    let startIdx = 0;
    let endIdx = 0;
    let count = 0;
    
    while (startIdx < intervals.length) {
        if (startTimes[startIdx] < endTimes[endIdx]) {
            count++;
        } else {
            endIdx++;
        }
        
        startIdx++;
    }
    
    return count;
};