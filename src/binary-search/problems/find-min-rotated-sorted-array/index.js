function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  let res = nums[0];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    let m = Math.floor((l + r) / 2);
    res = Math.min(res, nums[m]);
    if (nums[m] > nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
}

console.log(findMin([3, 4, 5, 6, 1, 2])); // 1
console.log(findMin([4, 5, 0, 1, 2, 3])); // 0
console.log(findMin([4, 5, 6, 7])); // 4
