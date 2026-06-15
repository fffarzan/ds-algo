function minWindow(s, t) {
  if (t === "") {
    return "";
  }

  const countT = {};
  const window = {};
  // filling countT
  for (let i = 0; i < t.length; i++) {
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  let have = 0;
  let need = Object.keys(countT).length; // unique characters in `t`
  let res = [-1, -1];
  let resLength = Infinity;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    window[s[r]] = (window[s[r]] || 0) + 1;

    if (countT[s[r]] && countT[s[r]] === window[s[r]]) {
      have++;
    }

    while (have === need) {
      // update the result
      // r - l + 1: size of the window
      if (r - l + 1 < resLength) {
        resLength = r - l + 1;
        res = [l, r];
      }

      // pop from the left of the window map
      window[s[l]]--;
      if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
        have--;
      }
      s;
      l++;
    }
  }

  return resLength === Infinity ? "" : s.slice(res[0], res[1] + 1);
}

console.log(minWindow("OUZODYXAZV", "XYZ")); // "YXAZ"
console.log(minWindow("xyz", "xyz")); // "xyz"
console.log(minWindow("x", "xy")); // ""
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
