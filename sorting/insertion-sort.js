const problemArray = [2, 3, 4, 1, 6];

function insertionSort (arr) {
  // i is just for configing j!
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    
    while (j >= 0 && arr[j + 1] < arr[j]) {
      // shifting the smaller number
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;

      j--;
    }
  }
  
  return arr;
}

console.log(insertionSort(problemArray));
