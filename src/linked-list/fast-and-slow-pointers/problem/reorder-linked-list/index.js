import { arrayToLinkedList } from "../../../utils/array-to-linked-list.js";
import { linkedListToArray } from "../../../utils/linked-list-to-array.js";

function reorderList(head) {
  // Find the middle
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half
  let secondHalf = slow.next;
  slow.next = null;
  let reversed = null;
  while (secondHalf !== null) {
    const tmp = secondHalf.next;
    secondHalf.next = reversed;
    reversed = secondHalf;
    secondHalf = tmp;
  }

  // Merge the two lists
  let first = head;
  secondHalf = reversed;
  while (secondHalf !== null) {
    const tmp1 = first.next;
    const tmp2 = secondHalf.next;
    first.next = secondHalf;
    secondHalf.next = tmp1;
    first = tmp1;
    secondHalf = tmp2;
  }

  return head;
}

// console.log(linkedListToArray(reorderList(arrayToLinkedList([2, 4, 6, 8])))); // [2,8,4,6]
console.log(
  linkedListToArray(reorderList(arrayToLinkedList([2, 4, 6, 8, 10]))),
); // [2,10,4,8,6]
