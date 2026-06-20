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
