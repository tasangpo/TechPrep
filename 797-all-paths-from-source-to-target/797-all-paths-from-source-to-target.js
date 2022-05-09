/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    const paths = [];
    
    traverse(0, graph, paths, []);
    
    return paths;
    
};


const traverse = (vert, graph, paths, path) => {
    
    path.push(vert);
    
    if(vert === graph.length -1){
        paths.push(path)
        return;
    }
    
    graph[vert].forEach( (v) =>{
        traverse(v, graph, paths, [...path])
    })
}