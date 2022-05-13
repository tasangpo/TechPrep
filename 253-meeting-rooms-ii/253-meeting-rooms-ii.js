/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    const times = [intervals[0][1]];
    for (let i = 1; i < intervals.length; i++)  {
        const [start, end] = intervals[i];
        const earliestEnd = Math.min(...times);
        if (start < earliestEnd) {
            times.push(end);
        } else {
            times[times.indexOf(earliestEnd)] = end;
        }
    }
    return times.length;
};