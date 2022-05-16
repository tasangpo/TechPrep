/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const all = [];
    
    findPaths(0, graph, all, []);
    
    return all;
};


const findPaths = (i, graph, all, curr) => {
    curr.push(i);
    if (i === graph.length - 1) {
        all.push(curr);
        return;
    }
    
    for (const neighbor of graph[i]) {
        findPaths(neighbor, graph, all, [...curr])
    }
    
    
    return all;
}