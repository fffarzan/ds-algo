# Graph

- Created by some nodes (Vertices) and some pointers (Edges) connecting them together.
- In graphs in general we can have any kind of nodes and any kind of edges including cycles.
- E <= V^2
- If every Edge has a direction, the graph is a Directed graph. Trees and likned-lists are directed graphs.

# Matrix

```js
// 0: free space => node
// 1: block
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const r1c2 = grid[1][2]; // it's 0

// the graph based on above matrix:
//    0 - 0 - 0 - 0
//            |   |
//            0 - 0
//            |
//    0 - 0 - 0
//    |       |
//    0       0 - 0
```

# Adjacency Matrix

- In this type, the dimensions represent the nodes.

```js
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];
const adjMatrix[v1][v2] = 1 // an edge exists from v1 rto v2
const adjMatrix[v2][v1] = 1 // an edge exists from v2 rto v1

// the graph based on above matrix:
//           ___
//          |   |
//    0 <-- 1 <-
//          ^
//          |
//    2 --> 3

```

## Space Complexity

- O(V^2) --> can be reduced to O(V + V) --> O(V)

# Adjacency List

- One of the most common graphs.
- We detect neighbours of a vertex with the pointers that go out of the that vertex.
- For undirected graphs, the neighbours will be duplicated overally.
