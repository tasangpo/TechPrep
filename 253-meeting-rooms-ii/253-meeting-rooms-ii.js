/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const startTimes = intervals.map(interval => interval[0]).sort((a,b) => a - b); // [1,13]
    const endTimes = intervals.map(interval => interval[1]).sort((a,b) => a - b);   // [13,15]
    
    let startIdx = 0;
    let endIdx = 0;
    let count = 0;
    
    
    while (startIdx < intervals.length) {
        if (startTimes[startIdx] < endTimes[endIdx]) {
            count++;
        } else if (startTimes[startIdx] > endTimes[endIdx]) {
            endIdx++;
        } else {
            endIdx++;
        }
        startIdx++;
    }
    return count;
};