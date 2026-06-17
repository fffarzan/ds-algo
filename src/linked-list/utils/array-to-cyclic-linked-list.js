export function arrayToCyclicLinkedList(arr, index) {
  if (!arr.length) {
    return null;
  }

  const head = {
    value: arr[0],
    next: null,
  };

  let curr = head;
  let cycleNode = index === 0 ? head : null;

  for (let i = 1; i < arr.length; i++) {
    const node = {
      value: arr[i],
      next: null,
    };

    curr.next = node;
    curr = node;

    if (i === index) {
      cycleNode = node;
    }
  }

  if (index >= 0) {
    curr.next = cycleNode;
  }

  return head;
}

export function printCycledLinkedList(head, limit = 10) {
  let curr = head;
  const result = [];

  while (curr && limit > 0) {
    result.push(curr.value);
    curr = current.next;
    limit--;
  }

  console.log(result.join(" -> "));
}
