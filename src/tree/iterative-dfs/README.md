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
