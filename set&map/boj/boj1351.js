let fs = require("fs");
let [N, P, Q] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const map = new Map();
map.set(0, 1);

const dp = (n) => {
  if (map.has(n)) return map.get(n);
  map.set(n, dp(Math.floor(n / P)) + dp(Math.floor(n / Q)));
  return map.get(n);
};

console.log(dp(N));
