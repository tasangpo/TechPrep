/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    const meetingEnd = [intervals[0][1]];
    
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const earliestEnd = Math.min(...meetingEnd);
        if (start < earliestEnd) {
            meetingEnd.push(end);
        } else {
            meetingEnd[meetingEnd.indexOf(earliestEnd)] = end;
        }
    }
    
    return meetingEnd.length;
};