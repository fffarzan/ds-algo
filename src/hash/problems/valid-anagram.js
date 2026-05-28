// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

function checkIsAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hashS = {};
  const hashT = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashS[s[i]]) {
      hashS[s[i]] = 1;
    } else {
      hashS[s[i]]++;
    }

    if (!hashT[t[i]]) {
      hashT[t[i]] = 1;
    } else {
      hashT[t[i]]++;
    }
  }

  for (const key in hashS) {
    if (hashS[key] !== hashT[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkIsAnagram("racecar", "carrace")); // true
console.log(checkIsAnagram("jar", "jam")); // false
