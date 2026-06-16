export function linkedListToArray(head) {
  const res = [];
  let curr = head;

  while (curr) {
    res.push(curr.value);
    curr = curr.next;
  }

  return res;
}
