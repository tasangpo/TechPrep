// closest carrot
// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column.In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots.The function should return a number representing the length of the shortest path from the starting position to a carrot.You may move up, down, left, or right, but cannot pass through walls(X).If there is no possible path to a carrot, then return -1.

// test_00:
// const grid = [
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['O', 'X', 'C', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['C', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 1, 2); // -> 4
// test_01:
// const grid = [
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['O', 'X', 'C', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['C', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 0, 0); // -> 5
// test_02:
// const grid = [
//     ['O', 'O', 'X', 'X', 'X'],
//     ['O', 'X', 'X', 'X', 'C'],
//     ['O', 'X', 'O', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'C', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 3, 4); // -> 9
// test_03:
// const grid = [
//     ['O', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['O', 'X', 'C', 'C', 'O'],
// ];

// closestCarrot(grid, 1, 4); // -> 2
// test_04:
// const grid = [
//     ['O', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['O', 'X', 'C', 'C', 'O'],
// ];

// closestCarrot(grid, 2, 0); // -> -1
// test_05:
// const grid = [
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
// ];

// closestCarrot(grid, 0, 0); // -> -1

const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set();
    const pos = startRow + "," + startCol;
    visited.add(pos);
    const queue = [[startRow, startCol, 0]];

    while (queue.length) {
        const [row, col, dist] = queue.shift();

        if (grid[row][col] === 'C') return dist;

        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let delta of deltas) {
            const [rowDelta, colDelta] = delta;
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;

            const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
            const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
            if (rowInbounds && colInbounds && grid[neighborRow][neighborCol] !== 'X') {
                const neighborPos = neighborRow + "," + neighborCol;
                if (!visited.has(neighborPos)) queue.push([neighborRow, neighborCol, dist + 1]);
                visited.add(neighborPos);
            }

        }
    }

    return -1;

};