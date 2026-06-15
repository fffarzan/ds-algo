function characterReplacement(str, k) {
  let res = 0;
  const count = new Map();
  let l = 0;
  let maxf = 0;

  for (let r = 0; r < str.length; r++) {
    count.set(str[r], (count.get(str[r]) || 0) + 1);
    maxf = Math.max(maxf, count.get(str[r]));

    // r - l + 1: size of the window
    while (r - l + 1 - maxf > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
}

console.log(characterReplacement("XYYX", 2)); // 4
console.log(characterReplacement("AAABABB", 1)); // 5
