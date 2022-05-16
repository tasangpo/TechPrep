/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const visited = new Set();
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited) === true) count++;
        }
    }
    
    return count;
};

const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    
    if (!rowInbounds || !colInbounds || grid[r][c] === '0') return false;
    const pos = r + ',' + c;
    if (visited.has(pos)) return false; 
    visited.add(pos);
    
    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);
    
    return true;
}
