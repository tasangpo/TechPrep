// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls.W represents water and L represents land.The function should return the number of islands on the grid.An island is a vertically or horizontally connected region of land.

//     test_00:
// const grid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
// ];

// islandCount(grid); // -> 3
// test_01:
// const grid = [
//     ['L', 'W', 'W', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['W', 'L', 'W', 'L', 'W'],
//     ['W', 'W', 'W', 'W', 'W'],
//     ['W', 'W', 'L', 'L', 'L'],
// ];

// islandCount(grid); // -> 4
// test_02:
// const grid = [
//     ['L', 'L', 'L'],
//     ['L', 'L', 'L'],
//     ['L', 'L', 'L'],
// ];

// islandCount(grid); // -> 1
// test_03:
// const grid = [
//     ['W', 'W'],
//     ['W', 'W'],
//     ['W', 'W'],
// ];

// islandCount(grid); // -> 0


const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (explore(grid, row, col, visited) === true) {
                count += 1;
            }
        }
    }
    return count;
};

const explore = (grid, row, col, visited) => {
    if (row < 0 || row > grid.length - 1) return false;
    if (col < 0 || col > grid[0].length - 1) return false;
    if (grid[row][col] === 'W') return false;

    const pos = row + "," + col;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, row - 1, col, visited);
    explore(grid, row + 1, col, visited);
    explore(grid, row, col - 1, visited);
    explore(grid, row, col + 1, visited);

    return true;
}

