const problemArray = [2, 3, 4, 1, 6];

function quickSort (arr, start = 0, end = arr.length) {
  if (start < end - 1) {
    let pivot = arr[end];
    let left = start;
    
    // elements smaller than pivot on the left side
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        let tmp = arr[left];
        arr[left] = arr[i];
        arr[i] = tmp;
        left++;
      }
    }

    // move pivot in-between left side and right side
    arr[end] = arr[left];
    arr[left] = pivot;

    quickSort(arr, start, left - 1);
    quickSort(arr, left + 1, end);
  }

  return arr;
}

console.log(quickSort(problemArray));
