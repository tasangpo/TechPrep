/**
 * @param {number[][]} intervals
 * @return {number}
 */

    
var minMeetingRooms = function(intervals) {
    if(intervals.length<2) return 1;
    intervals.sort((a,b) => a[0]-b[0]);     //[[0,30],[5,10],[15,20]]
    
    let roomTime = [intervals[0][1]];       // [30]
    
    for(let i = 1; i<intervals.length; i++){    
        let [start,end] = intervals[i];             // [5, 10]
        let earliest = Math.min(...roomTime);   
        if(start<earliest)
            roomTime.push(end);
        else
            roomTime[roomTime.indexOf(earliest)] = end
    }
    
    return roomTime.length;
};