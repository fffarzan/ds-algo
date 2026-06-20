# Union-Find (Disjoint sets)

- It's a kind of tree but mostly applied to generic graphs
- It means with this algorithm we can find how many disjoint sets (connected components) exists in a graph.
- It also is used for cycle detection. Usually DFS can accomplish this duty in the same time complexity, but sometimes union-find is more efficient.
- Union-find is a Forest of Trees (means we have a bunch of trees). We have a tree for every single disjoint set.
- Union by Rank (height): The operation that allows us to just go up as less as possible from target node. We don't like to create linked list (or imbalanced tree) traversing many nodes to the root node. We take the smaller tree and add it as a child of the larger tree.
- Union-find doesn't necessarily represent the accurate graph!
- Example: For `[1, 2]`, the parents of both nodes are themselves, so we can choose one of the nodes as the parent for another. We choosed 1. For `[2, 4]` the parent for 2 is 1 right now and the parent for 4 is itself. We can put 4 as the parent here but we prefer to prevent creating a linked-list like tree (with less perfomant find operation. We need a balance tree for efficient find) and put the 1 as the parent for both 2 and 4 nodes. At the end, for `[4, 1]` the parent for 4 is 1 and the parent for 1 is itself. So the parent is similar and we won't do any thing.

```js
const nodes = [1, 2, 3, 4];
const edges = [
  [1, 2],
  [4, 1],
  [2, 4],
];
// before:
//  1    2    3    4

// after:
//      1           3
//     / \\
//    2  4
```

## Time Complexity

- O(1) for union
- O(logn) for find

### Practices

- [redundant connection](https://leetcode.com/problems/redundant-connection/)
- [accounts merge](https://leetcode.com/problems/accounts-merge/)
- [longest consecutive sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [number of connected components in an undirected graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
