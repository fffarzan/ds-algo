function hasDuplicate(nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 3])); // true
console.log(hasDuplicate([1, 2, 3, 4])); // false
