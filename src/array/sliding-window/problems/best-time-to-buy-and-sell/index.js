function maxProfit(prices) {
  let res = 0;
  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      const profit = prices[r] - prices[l];
      res = Math.max(res, profit);
    } else {
      l = r;
    }

    r++;
  }

  return res;
}

console.log(maxProfit([10, 1, 5, 6, 7, 1])); // 6
console.log(maxProfit([10, 8, 7, 5, 2])); // 0
