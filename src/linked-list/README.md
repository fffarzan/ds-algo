# (Singly) Linked List

- Has a lot of overlaps with arrays.
- It does not store in RAM in the way that we use them inside of our program.
- List Node: Object with 2 things: value and next (pointer)
- Next pointer: A reference to another list node. A refernce is enough and we won't the address of the next node to point it.
- Arrays will store in same way in memory but this isn't true about linled list.
- Haed
- Tail
- Use case in compare to Array: We can add or remove nodes at begining and end of the linked list in constant time.

```js
// search:
let cur = Node1;
while (cur !== null) {
  cur = cur.next;
}

// update tail (insert at the end):
tail.next = Node4;
tail = Node4;
// or
tail = tail.next;

// remove node:
head.next = head.next.next;
```

## Time Complexity

- Search random element: O(n)
- Add or Remove at the end: O(1) | Some languages has garbage collector to free up the memory from removed node. | This feature makes it OK for stacks.
- Insert or Remove at the middle: O(1)

### Practice

- [reverse linked list](https://leetcode.com/problems/reverse-linked-list/)
- [merge two sorted lists](https://leetcode.com/problems/merge-two-sorted-lists/)

# Doubly Linked List

- We have double pointers: next and prev.
- Stacks can be implemented with linked list just like arrays (but it's not common).

```js
// add new tail:
tail.next = N4;
N4.prev = tail;
tail = tail.next;

// remove tail:
tmp = tail.prev;
tmp.next = null;
tail = tmp;
```

## Time Complexity

- Search random element: O(n)
- Add or Remove at the end: O(1)
- Insert or Remove at the middle: O(1)

### Practice

- [design linked list](https://leetcode.com/problems/design-linked-list/)
- [design browser history](https://leetcode.com/problems/design-browser-history/)

# Queues

- FIFO
- Enqueue: Pushing to the end.
- Dequeue: Remove from the first.
- It's much more simple to implement them in a linked list than array.

## Time Complexity

- Enqueue: O(1).
- Dequeue: O(1).

### Practice

- [number of students unable to eat lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/)
- [implement stack using queues](https://leetcode.com/problems/implement-stack-using-queues/)

# Array VS Linked List


| Operation                      | Array O | Linked List O                   |
| ------------------------------ | ------- | ------------------------------- |
| Access i-th element            | O(1)    | O(n)                            |
| Insert or remove at the end    | O(1)    | O(1)                            |
| Insert or remove at the middle | O(n)    | O(1) if we know the node / O(n) |


# Fast & Slow Pointers (Floyd's Tortoise & Hare)

Q: Find the middle of a linked list

- Fast: It will be shifted by two spaces.
- Slow: It will be shifted by one space.
- We keep moving the pointers untill one of them reaches the end of the linked list.
- 

