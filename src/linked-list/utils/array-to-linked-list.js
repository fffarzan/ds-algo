export function arrayToLinkedList(arr) {
  if (!arr.length) {
    return null;
  }

  const head = { value: arr[0], next: null };
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = { value: arr[i], next: null };
    curr = curr.next;
  }

  return head;
}
