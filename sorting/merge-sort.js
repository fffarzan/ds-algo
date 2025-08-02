const problemArray = [2, 3, 4, 1, 6];

function mergeSort (arr, start = 0, end = arr.length) {
  if (start < end - 1) {
    // divide to smaller sub arrays
    let middle = Math.floor((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    merge(arr, start, middle, end);
  }

  return arr;
}

function merge(arr, start, middle, end) {
  let leftArrLength = middle - start + 1;
  let rightArrLength = end - middle;
  let leftArr = new Array(leftArrLength);
  let rightArr = new Array(rightArrLength);

  for (let i = 0; i < leftArrLength; ++i) {
    leftArr[i] = arr[start + i];
  }
  for (let i = 0; i < rightArrLength; ++i) {
    rightArr[i] = arr[middle + 1 + i];
  }

  // console.log('leftArr', leftArr, 'rightArr', rightArr);
    
  let i = 0; // index of left sub-array
  let j = 0; // index of right sub-array
  let k = start; // index of merged array

  while (i < leftArrLength && j < rightArrLength) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
    
  // if one of the halfs will have elements remaining
  while (i < leftArrLength) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < rightArrLength) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

console.log(mergeSort(problemArray));
