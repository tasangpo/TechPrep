// shortest path
// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB).The function should return the length of the shortest path between A and B.Consider the length as the number of edges in the path, not the number of nodes.If there is no path between A and B, then return -1.

// test_00:
// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ];

// shortestPath(edges, 'w', 'z'); // -> 2
// test_01:
// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ];

// shortestPath(edges, 'y', 'x'); // -> 1
// test_02:
// const edges = [
//     ['a', 'c'],
//     ['a', 'b'],
//     ['c', 'b'],
//     ['c', 'd'],
//     ['b', 'd'],
//     ['e', 'd'],
//     ['g', 'f']
// ];

// shortestPath(edges, 'a', 'e'); // -> 3
// test_03:
// const edges = [
//     ['a', 'c'],
//     ['a', 'b'],
//     ['c', 'b'],
//     ['c', 'd'],
//     ['b', 'd'],
//     ['e', 'd'],
//     ['g', 'f']
// ];

// shortestPath(edges, 'e', 'c'); // -> 2
// test_04:
// const edges = [
//     ['a', 'c'],
//     ['a', 'b'],
//     ['c', 'b'],
//     ['c', 'd'],
//     ['b', 'd'],
//     ['e', 'd'],
//     ['g', 'f']
// ];

// shortestPath(edges, 'b', 'g'); // -> -1
// test_05:
// const edges = [
//     ['c', 'n'],
//     ['c', 'e'],
//     ['c', 's'],
//     ['c', 'w'],
//     ['w', 'e'],
// ];

// shortestPath(edges, 'w', 'e'); // -> 1
// test_06:
// const edges = [
//     ['c', 'n'],
//     ['c', 'e'],
//     ['c', 's'],
//     ['c', 'w'],
//     ['w', 'e'],
// ];

// shortestPath(edges, 'n', 'e'); // -> 2
// test_07:
// const edges = [
//     ['m', 'n'],
//     ['n', 'o'],
//     ['o', 'p'],
//     ['p', 'q'],
//     ['t', 'o'],
//     ['r', 'q'],
//     ['r', 's']
// ];

// shortestPath(edges, 'm', 's'); // -> 6


// if we use queue and BFS, we are bound to find the shortest path;

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = makeGraph(edges);
    const queue = [{ node: nodeA, dist: 0 }];
    const visited = new Set([nodeA])

    while (queue.length) {
        const curr = queue.shift();
        if (curr.node === nodeB) return curr.dist;

        for (let neighbor of graph[curr.node]) {
            if (!(visited.has(neighbor))) {
                visited.add(neighbor);
                queue.push({ node: neighbor, dist: curr.dist + 1 });
            }
        }
    }
    return -1;
};

const makeGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}
