function groupAnagramsWithSorting(strs) {}

console.log(
  groupAnagramsWithSorting(["act", "pots", "tops", "cat", "stop", "hat"]),
); // [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(groupAnagramsWithSorting(["x"])); // [["x"]]
console.log(groupAnagramsWithSorting([""])); // [[""]]

function groupAnagramsWithHashMap(strs) {
  const result = {};

  for (let i = 0; i < strs.length; i++) {
    const count = new Array(26).fill(0);
    const str = strs[i];
    // console.log("str", str);

    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      //   console.log("char", char);
      console.log("char.charCodeAt(0)", char.charCodeAt(0));

      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    // console.log(count);

    const key = count.join(",");
    // console.log("key", key);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(str);
    // console.log("result", result);
  }

  return Object.values(result);
}

console.log(
  groupAnagramsWithHashMap(["act", "pots", "tops", "cat", "stop", "hat"]),
); // [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(groupAnagramsWithHashMap(["x"])); // [["x"]]
console.log(groupAnagramsWithHashMap([""])); // [[""]]
