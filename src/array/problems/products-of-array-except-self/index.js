function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  // creating prefix array into result
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  // adding postfix array into result
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = postfix * result[i];
    postfix = postfix * nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 4, 6])); // [48,24,12,8]
console.log(productExceptSelf([-1, 0, 1, 2, 3])); // [0,-6,0,0,0]
