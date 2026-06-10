function maxArea(heights) {
  let l = 0;
  let r = heights.length - 1;
  let res = 0;

  while (l < r) {
    const area = Math.min(heights[l], heights[r]) * (r - l);
    res = Math.max(res, area);

    // moves the pointer at the shorter height
    if (heights[l] <= heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6])); // 36
console.log(maxArea([2, 2, 2])); // 4
