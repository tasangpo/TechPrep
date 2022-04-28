/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }
    
    return Math.min(evenCount, oddCount);
};