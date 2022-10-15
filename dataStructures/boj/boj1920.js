const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, nList, M, mList] = input.map((val) => val.split(" "));

const nSet = new Set(nList);

const result = mList.map((m) => (nSet.has(m) ? 1 : 0));

console.log(result.join("\n"));
