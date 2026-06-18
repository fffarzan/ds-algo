import { arrayToLinkedList } from "../../../utils/array-to-linked-list.js";
import { linkedListToArray } from "../../../utils/linked-list-to-array.js";

function removeNthFromEnd(head, n) {
  // Create a dummy node pointing to the head (helps handle deletion of the first node)
  const dummy = { value: 0, next: head };
  let left = dummy;
  let right = head;

  // Move right forward n steps.
  while (n > 0) {
    right = right.next;
    n--;
  }

  // Move both pointers until right reaches the end.
  while (right !== null) {
    left = left.next;
    right = right.next;
  }

  // left.next is the node to delete
  left.next = left.next.next;

  return dummy.next;
}

console.log(
  linkedListToArray(removeNthFromEnd(arrayToLinkedList([1, 2, 3, 4]), 2)),
); // [1,2,4]
console.log(linkedListToArray(removeNthFromEnd(arrayToLinkedList([5]), 1))); // []
console.log(linkedListToArray(removeNthFromEnd(arrayToLinkedList([1, 2]), 2))); // [2]
