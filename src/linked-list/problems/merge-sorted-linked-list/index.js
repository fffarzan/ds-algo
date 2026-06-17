import { arrayToLinkedList } from "../../utils/array-to-linked-list.js";
import { linkedListToArray } from "../../utils/linked-list-to-array.js";

function mergeTwoLists(list1, list2) {
  const dummy = { value: 0, next: null };
  let tmp = dummy;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      tmp.next = list1;
      // move ahead towrad list1
      list1 = list1.next;
    } else {
      tmp.next = list2;
      // move ahead towrad l2
      list2 = list2.next;
    }

    tmp = tmp.next;
  }

  if (list1) {
    tmp.next = list1;
  } else {
    tmp.next = list2;
  }

  return dummy.next;
}

console.log(
  linkedListToArray(
    mergeTwoLists(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 5])),
  ),
); // [1,1,2,3,4,5]
console.log(
  linkedListToArray(
    mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([1, 2])),
  ),
); // [1,2]
console.log(
  linkedListToArray(
    mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([])),
  ),
); // []
