/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    const meetings = [intervals[0][1]]; // [30, 20];
    
    for (let i = 1; i < intervals.length; i++) {
        const earliestEnd = Math.min(...meetings);  // 10
        const [start, end] = intervals[i];      // 15, 20
        
        if (start < earliestEnd) {
            meetings.push(end);
        } else {
            meetings[meetings.indexOf(earliestEnd)] = end;
        }   
    }
    
    return meetings.length;
};