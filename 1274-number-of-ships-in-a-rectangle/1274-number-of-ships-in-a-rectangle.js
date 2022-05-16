/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
    if (!sea.hasShips(topRight, bottomLeft)) return 0;
    if (topRight[0] === bottomLeft[0] && topRight[1] === bottomLeft[1]) return 1;
    
    const midX = Math.floor((topRight[0] + bottomLeft[0]) / 2);
    const midY = Math.floor((topRight[1] + bottomLeft[1]) / 2);
    
    
    const bottomLeftQuad = countShips(sea, [midX, midY], bottomLeft);
    const bottomRightQuad = countShips(sea, [topRight[0], midY], [midX + 1, bottomLeft[1]] );
    const topLeftQuad = countShips(sea, [midX, topRight[1]], [bottomLeft[0], midY + 1]);
    const topRightQuad = countShips(sea, topRight, [midX + 1, midY + 1]);
    
    return bottomLeftQuad + bottomRightQuad + topLeftQuad + topRightQuad;
};


    
    // return  countShips(sea, [topRight[0], midY], [midX + 1, bottomLeft[1]]) + countShips(sea, [midX, topRight[1]], [bottomLeft[0], midY + 1]) + countShips(sea, topRight, [midX + 1, midY + 1]);