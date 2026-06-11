function lengthOfLongestSubstring(str) {
  let count = 0;
  let res = 0;
  let l = 0;
  let r = 1;

  while (r < str.length) {
    if (str[l] === str[r]) {
      res = Math.max(res, count);
      count = 1;
      l = r;
    } else {
      count++;
    }

    r++;
  }

  return res;
}

console.log(lengthOfLongestSubstring("zxyzxyz")); // 3
console.log(lengthOfLongestSubstring("xxxx")); // 1
