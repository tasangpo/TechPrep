/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[0]-a[1]) - (b[0]-b[1]) );
    const mid = Math.floor(costs.length / 2);
    let cost = 0;
    
    for (let i = 0; i < mid; i++) {
        cost += costs[i][0] + costs[mid + i][1]
    }
    
    return cost;
};