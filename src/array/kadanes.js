// KADANE'S ALGORITHM
// Problem: Find a non-empty subarray with the largest sum

const problemArray =  [4, -1, 2, -7, 3, 4];

// =================================================================

// First Solution: Brute Force => O(n^2)
// Description: It's like looking to previous elements as an array, not individual varaibles.
function bruteForceSolution (arr) {
  let maxSum = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    currSum = 0;
    
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];
      
      if (currSum > maxSum) {
        maxSum = currSum;
      }
      
      // console.log(
      //   'arr_i:', arr[i], 
      //   'arr_j:', arr[j], 
      //   'current sum:', currSum, 
      //   'max sum:', maxSum,
      // );
    }
  }
  
  return maxSum;
} 

console.log(bruteForceSolution(problemArray));

// =================================================================

// Second Solution: Kadane's => O(n)
// Description: We should just eliminate nagative sums from the array.
function kadanesSolution (arr) {
  let maxSum  = arr[0];
  let currSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    
    currSum = currSum + arr[i];
    
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    
    // console.log(
    //   'arr_i:', arr[i],
    //   'currSum:', currSum,
    //   'maxSum:', maxSum,
    // );
  }
  
  return maxSum;
}

console.log(kadanesSolution(problemArray));

// =================================================================

// Third Solution: Kadane's Sliding Window
function kadaneSlidingWindowSolutinon (arr) {
  let maxSum = arr[0]
  return maxSum
}

console.log(kadaneSlidingWindowSolutinon(problemArray));

// =================================================================

// Practice
// https://leetcode.com/problems/maximum-subarray/
// https://leetcode.com/problems/maximum-sum-circular-subarray/
// https://leetcode.com/problems/longest-turbulent-subarray/