import { linkedListToArray } from "../../utils/linked-list-to-array.js";
import { arrayToLinkedList } from "../../utils/array-to-linked-list.js";

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    // shifting our pointers
    prev = curr;
    curr = temp;
  }

  return prev;
}

console.log(linkedListToArray(reverseList(arrayToLinkedList([0, 1, 2, 3])))); // [3,2,1,0]
console.log(linkedListToArray(reverseList(arrayToLinkedList([])))); // []
