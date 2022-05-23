/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  if (grid.length === 1 && grid[0].length === 1) {
    return 0;
  }
  
  let queue = [[0, 0, k]];
  let nextQueue = [];
  let steps = 0;
  
  // set makes sure that we don't visit a state (coordinates + k) multiple times
  let seen = new Set(`0-0-${k}`);
  
  // all directions - right, left, bottom, top
  let nextMoves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  while(queue.length) {
    let [currentX, currentY, remainingK] = queue.shift();
    
    // if we have reached the target, return the number of steps
    if (currentX === grid.length - 1 && currentY === grid[0].length - 1) {
      return steps;
    }
    
    // get all valid neighbors
    for(let [deltaX, deltaY] of nextMoves) {
      let nextX = currentX + deltaX;
      let nextY = currentY + deltaY;
      
      // discard if it is outside the grid bounary
      if (!isValid(nextX, nextY, grid)) {
        continue;
      }
      
      // discard if it is an obstacle and we can't eliminate it anymore
      if (grid[nextX][nextY] === 1 && remainingK === 0) {
        continue;
      }
      
      // if it is an obstacle, decrease k by 1, otherwise it stays the same
      let nextK = grid[nextX][nextY] === 1 ? remainingK - 1 : remainingK;

      // key for the next state
      let key = `${nextX}-${nextY}-${nextK}`
      
      // make sure that the state hasn't been visited already
      if (!seen.has(key)) {
        nextQueue.push([nextX, nextY, nextK]);
        seen.add(key)
      }
    }
    
    // all neighbors have been visited, next step in BFS order
    if (queue.length === 0) {
      queue = nextQueue;
      nextQueue = [];
      steps++;
    }
  }
  
  // target isn't reachable, return 1
  return -1;
};

function isValid(i, j, grid) {
  if (i < 0 || i > grid.length - 1) {
    return false;
  }
  if (j < 0 || j > grid[0].length - 1) {
    return false;
  }
  return true;
}

