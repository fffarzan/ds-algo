function encode(strs) {
  let result = "";

  for (let i = 0; i < strs.length; i++) {
    // using length of string + # to encode every string inside of the array.
    result = result + strs[i].length + "#" + strs[i];
  }

  return result;
}

function decode(str) {
  let result = [];
  let i = 0;

  while (i < str.length) {
    // get the number of encoded string
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    // creating start-point and end-point of the string
    let length = +str.substring(i, j);
    i = j + 1;
    j = i + length;

    result.push(str.substring(i, j));
    i = j;
  }

  return result;
}

const encoded1 = encode(["Hello", "World"]);
const decoded1 = decode(encoded1);
console.log(decoded1); // ["Hello","World"]

const encoded2 = encode([""]);
const decoded2 = decode(encoded2);
console.log(decoded2); // [""]
