/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    
    let total = 0;
    const mid = costs.length / 2;
    let i = 0;
    while (i < mid) {
        total += costs[i][0] + costs[i + mid][1];
        i += 1;
    }
    return total;
};