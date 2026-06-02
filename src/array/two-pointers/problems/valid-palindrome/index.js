function checkIsPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    while (l < r && !checkIsAlphaNum(str[l])) {
      l++;
    }

    while (r > l && !checkIsAlphaNum(str[r])) {
      r--;
    }

    if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

// checks if the character is alphanumeral
function checkIsAlphaNum(char) {
  return (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
}

console.log(checkIsPalindrome("Was it a car or a cat I saw?")); // true
console.log(checkIsPalindrome("tab a cat")); // false
