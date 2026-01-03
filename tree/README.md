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
- Inorder Traversal: We wanna go "left" to "right". We can go for a sorted order of values with this type. It's based on processing entire subtree of a node.
- We can get a random array, convert it to BST and get the sorted array with this type of traversal. The building a BST will be O(nlogn) (because of inserting every node will be O(logn)). Also the inorder traversal will be O(n). The entire time complexity will be O(n + nlogn) --> O(nlogn).
- Preorder Traversal: We visit the root sooner than the subtree. Then we print the left subtree and finally print the right subtree.
- Postorder Traversal: Prints all the values on the left subtree, then all the values on the right sbutree and finally prints the root.

```js
//           15
//        /     \
//      10       25
//     /  \      /  \
//    7   13   22   27
//   / \       /
//  5   9    17

const inorderTraversalOutput = [5, 7, 9, 10, 13, 15, 17, 22, 25, 27];
const preorderTraversalOutput = [15, 10, 7, 5, 9, 13, 25, 22, 17, 27];
const postorderTraversalOutput = [5, 9, 7, 13, 10, 17, 22, 27, 25, 15];
```

## Time Complexity

- O(n) (n is number of nodes)

### Practices

- [binary tree inorder traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [kth smallest element in a bst](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [construct binary tree from preorder and inorder traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

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

# Trie (Prefix Tree)

- It is used for strings, not other types of values.
- It's a type of DFS.
- We can create a string as a tree:

```js
const apple = "apple";

//    ''
//   /
//  a
//    \\
//     p
//      \\
//       p
//      /
//     l
//    /
//   e
```

## Time Complexity

- Insert word: O(1)
- Search word: O(1)
- Search prefix: O(1)

### Practices

- [implement trie prefix tree](https://leetcode.com/problems/implement-trie-prefix-tree/) | E
- [design add and search words data structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | M
- [word search ii](https://leetcode.com/problems/word-search-ii/)
- [prefix and suffix search](https://leetcode.com/problems/prefix-and-suffix-search/)

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

# Iterative DFS

- Inorder: Instead of recursion, we can use "stack". Af first, we create a stack based on going down in the left side. We push 1, then 2, then 4. When we arrived to null, we pop the values till make the stack empty. We pop 4, 2 and 1. After that, we start to traverse the right side. We push 3 to the stack but becaue the left side of the 3 is null, we pop it immediatelly from the stack and do this this end of the right side.

```js
//        1
//      /  \
//     2   3
//    /     \
//   4      5

const stack = [Node(1), Node(2), Node(4), Node(3), Node(5)];
const result = [4, 2, 1, 3, 5];
```

## Time Complexity

- Inorder: O(n)
- Preorder: O(n)
- Postorder: O(n)

## Space Complexity

- Inorder: O(n)
- Preorder: O(n)
- Postorder: O(n)

### Practices

- [binary search tree iterator](https://leetcode.com/problems/binary-search-tree-iterator/)
- [binary tree preorder traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [binary tree postorder traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
