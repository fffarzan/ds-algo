function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;

      mergedLists.push(this.mergeList(l1, l2));
    }

    lists = mergedLists;
  }

  return lists[0];
}

function mergeList(l1, l2) {
  const dummy = { value: 0, next: null };
  let tmp = dummy;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      tmp.next = list1;
      list1 = list1.next;
    } else {
      tmp.next = list2;
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
  mergeKLists([
    [1, 2, 4],
    [1, 3, 5],
    [3, 6],
  ]),
); //
console.log(mergeKLists([])); //
console.log(mergeKLists([[]])); //
