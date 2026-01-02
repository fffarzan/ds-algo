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
