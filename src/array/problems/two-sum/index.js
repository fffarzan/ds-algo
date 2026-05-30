function twoSum(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (Object.hasOwn(hash, diff)) {
      return [hash[diff], i];
    }

    hash[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([3, 4, 5, 6], 7)); // [0,1]
console.log(twoSum([4, 5, 6], 10)); // [0,2]
console.log(twoSum([5, 5], 10)); // [0,1]
