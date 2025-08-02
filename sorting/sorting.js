// SORTING ALGORITHM
// DESCRIPTION:
//  It breaks the problem into several sub problems. For example, solve first two elements of the array sorted, then first three elements sorted and so on.
//  We can solve it using recursion.
//  Stable Sorting: Preserve the original order of elements. For example if you have two 7 in your array, it will arrange it 7s as the order of original
//  Unstable Sorting: There is no garantee to keep original order. (opposite of above)



// INSERTION SORTING
//  DESCRIPTION:
//  Time Complexity => Best Case: O(n) | Worst Case: O((n^2)/2)

const problemArray = [2, 3, 4, 1, 6];

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    
    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  
  return arr
}

insertionSort(problemArray);

