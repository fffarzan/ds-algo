// SLIDING WINDOW ALGORITHM
// Problem: Given an array, return true if there are two elements whithin a window of size k that are equal.

const problemArray = [1, 2, 3, 2, 3, 3];

// =================================================================

// First Solution: Brute Force => O(n.k)
// Description: Look at every sliding window with size k.
function bruteForceSolution (arr, k) {
  if (k <= 1 || k > arr.length) {
    return 'error';
  }
  
  for (let lPointer = 0; lPointer < arr.length; lPointer++) {
    for (let rPointer = lPointer + (k - 1); rPointer < arr.length; rPointer++) {
      if (arr[lPointer] === arr[rPointer]) {
        return true;
      }
    }
  }
  return false;
}

// bruteForceSolution(problemArray, 2);

// =================================================================

// Second Solution: Sliding Window => O(n)
function SlidingWindowSolution(arr, k) {
  const sw = [];
  let lPointer = 0
  
  for (let rPointer = lPointer + (k - 1); rPointer < arr.length; rPointer++) {
    if (rPosition - lPosition > k - 1) {
      sw.shift(arr[lPosition]);
      lPointer++;
    }
    
    if (arr.includes(arr[rPointer])) {
      return true;
    }
    
    sw.push(arr[rPointer]);
  }
  
  return false
}

SlidingWindowSolution(problemArray, 2);

// =================================================================

