# Breadth-First Search (BFS)

- It goes to every node that is close to (traverse the tree layer by layer).
- It can be applied to any tree, sorted or not.
- We need `Queue` data structure for this search algorithm (beacuse of the FIFO behavior).

```js
const output = ["A", "B", "E", "C", "D"];

//        A
//      /  \
//     B   E
//   /  \
//  C    D
```

## Time Complexity

- O(n) (n is number of nodes)

### Practice

- [binary tree level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [binary tree right side view](https://leetcode.com/problems/binary-tree-right-side-view/)
