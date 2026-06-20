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
