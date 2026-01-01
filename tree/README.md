# Binary Tree

- Similar to doubled linked list (left child and right child of a parent node).
- We can't have any cylces in binary trees.
- Child Node / parent Node / Sibling Node
- Leaf Node: A The last child that hasn't any children.
- Root Node: The most top parent node.
- Decendant Nodes: Any nodes beneath of a special node to leaf nodes.
- Ancestor Nodes: Any nodes of parent chain of a special node to root node.
- Height: The number of nodes going down from a special node to a leaf node.
- Depth: The number of nodes going up from a spcial node to root node.

# Binary Search Tree (BST)

- It's kinda sorted.
- Sorted: Every node in left side has less value than the parent value and every node in right side has greater value than the parent value.
- Why we create BST and won't use just array? Because of inserting and deleting that in array are O(n) but in BST are O(logn).

## Time Complexity

- If the tree is not balanced: O(n) -> it's like a simple array.
- If the tree is balanced: O(logn).
- Some people say O(h) (h is the height of the tree).

### Practice

- [search in a binary search tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | E
- [lowest common ancestor of a binary search tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

# Depth-First Search (DFS)

- for search we go deep as we can in DFS.
- We need `HashSet` for this search algorithm.

```js
const output = ["A", "B", "C", "D", "E"];

//        A
//      /  \
//     B   E
//   /  \
//  C    D
```

## Time Complexity

- O(n) (n is number of nodes)

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
