/**
 * @param {number[][]} intervals
 * @return {number}
 */

    
var minMeetingRooms = function(intervals) {         //  intervals = [[0,30],[5,10],[15,20]]
    intervals.sort((a,b) => a[0] - b[0])            // sorting by start times
    const meetingTimes = [intervals[0][1]];         // [ 30 ] there is one meeting going on until 30
    
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const earliest = Math.min(...meetingTimes);   // the earliest meeting that ends is at 30, that means 5 - 10 needs a new room
        if (start < earliest) {
            meetingTimes.push(end);     // [30, 10] this means there are two meetings going on that end at 10 and 30;
        } else {
            meetingTimes[meetingTimes.indexOf(earliest)] = end;  // this means a meeting started after the earliest one has ended. so you can replace the times
        }
    }
    
    return meetingTimes.length;
};