
var UndergroundSystem = function() {
    this.current = {};
    this.trips = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.current[id] = [stationName, t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startingStation, startTime] = this.current[id];
    const trip = startingStation + '->' + stationName;
    if (!(trip in this.trips)) this.trips[trip] = [];
    this.trips[trip].push(t - startTime);
    delete this.current[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const trip = startStation + '->' + endStation;
    let sum = 0;
    for (const time of this.trips[trip]) {
        sum += time;
    }
    return sum/this.trips[trip].length;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */