function longestConsecutive(nums) {
  const hashSet = new Set(nums);
  let longestSequence = 0;

  for (let i = 0; i < nums.length; i++) {
    // check if it's start of a squence
    if (!hashSet.has([nums[i] - 1])) {
      let count = 1;

      // check if next number of sequence is exist inside of array
      while (hashSet.has(nums[i] + count)) {
        count++;
      }

      longestSequence = Math.max(longestSequence, count);
    }
  }

  return longestSequence;
}

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5])); // 4 (Explanation: The longest consecutive sequence is [2, 3, 4, 5])
console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])); // 7
