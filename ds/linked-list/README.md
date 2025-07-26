# Singly Linked List
- has a lot of overlaps with arrays.
- List Node: Object with 2 things: value and next (pointer)
- Next pointer: A reference to another list node. A refernce is enough and we won't the address of the next node to point it.
- Arrays will stor in same way in memory but this isn't true about linled list.
- Haed and Tail
- Stacks can be implemented with linked list just like arrays (but it's not common).

## Time Complexity
- Search random element: O(n)
- Add or Remove at the end: O(1) | Some languages has garbage collector to free up the memory from removed node. | This feature makes it OK for stacks.
- Insert or Remove at the middle: O(1)

### Practice
- [reverse linked list](https://leetcode.com/problems/reverse-linked-list/)
- [merge two sorted lists](https://leetcode.com/problems/merge-two-sorted-lists/)

# Doubly Linked List
- We have double pointers: next and prev

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