function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    const k = Math.floor((l + r) / 2);
    let hours = 0;

    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / k);
    }

    if (hours <= h) {
      res = k;
      r = k - 1;
    } else {
      l = k + 1;
    }
  }

  return res;
}

console.log(minEatingSpeed([1, 4, 3, 2], 9)); // 2
console.log(minEatingSpeed([25, 10, 23, 4], 4)); // 25
