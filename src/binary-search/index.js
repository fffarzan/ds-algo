function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2); // or we can use "l + ((r - l) / 2)" to prevent overflow for very big numbers

    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }

  return -1;
}

console.log(binarySearch([-1, 0, 2, 4, 6, 8], 4)); // 3

console.log(binarySearch([-1, 0, 2, 4, 6, 8], 3)); // -1
