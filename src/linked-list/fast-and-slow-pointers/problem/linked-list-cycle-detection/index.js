import { arrayToCyclicLinkedList } from "../../../utils/array-to-cyclic-linked-list.js";

function hasCycle(head) {
  let fast = head;
  let slow = head;

  // these pointer finally will meet togehter if we continue rotate them inside of the loop. or there is a null at the end of linked list and the loop will be fininshed.
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

console.log(hasCycle(arrayToCyclicLinkedList([1, 2, 3, 4], 1))); // true
console.log(hasCycle(arrayToCyclicLinkedList([1, 2], -1))); // false
