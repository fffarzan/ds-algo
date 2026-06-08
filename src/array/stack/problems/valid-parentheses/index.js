function isValidParenthese(str) {
  const stack = [];

  for (let char of str) {
    if (
      (char === ")" && stack[stack.length - 1] === "(") ||
      (char === "]" && stack[stack.length - 1] === "[") ||
      (char === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValidParenthese("[]")); // true
console.log(isValidParenthese("([{}])")); // true
console.log(isValidParenthese("[(])")); // false
