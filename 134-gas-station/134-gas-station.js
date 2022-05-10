/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function(gas, cost) {
//     let totalTank = 0;
//     let currentTank = 0;
//     let startStation = 0;
    
//     for (let i = 0; i < gas.length; i++) {
//         const net = gas[i] - cost[i];
//         currentTank += net;
//         totalTank += net;
//         if (currentTank < 0) {
//             startingStation = i + 1;
//             currentTank = 0;
//         }
//     }
    
//     return totalTank < 0 ? -1 : startingStation;
// };


var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0;
    let currentTank = 0;
    let startingStation = 0;
    for (let i = 0; i < gas.length; i++) {
        const netCost = gas[i] - cost[i];
        totalTank += netCost;
        currentTank += netCost;
        if (currentTank < 0) {
            startingStation = i+1;
            currentTank = 0;
        }
    }
    return totalTank < 0 ? -1 : startingStation;
};