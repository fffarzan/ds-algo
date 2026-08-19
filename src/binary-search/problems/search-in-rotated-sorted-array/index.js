function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[l] <= nums[m]) {
      // check if target is not in the range
      if (target > nums[m] || target < nums[l]) {
        l = m + 1; // remove left section
      } else {
        r = m - 1; // remove right section
      }
    } else {
      // check if target is not in the range
      if (target < nums[m] || target > nums[r]) {
        r = m - 1; // remove right section
      } else {
        l = m + 1; // remove left section
      }
    }
  }

  return -1;
}

console.log(search([3, 4, 5, 6, 1, 2], 1)); // 4
console.log(search([3, 5, 6, 0, 1, 2], 4)); // -1
