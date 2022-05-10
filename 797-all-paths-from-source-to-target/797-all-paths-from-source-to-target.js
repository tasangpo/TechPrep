/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph, i = 0) {
    const paths = [];
    traverse(i, graph, paths, []);
    return paths;
};

const traverse = (i, graph, paths, path) => {
    path.push(i);
    if (i === graph.length - 1) {
        paths.push(path);
        return;
    }
    
    for (let neighbor of graph[i]) {
        traverse(neighbor, graph, paths, [...path])
    }
    
    return paths;
}