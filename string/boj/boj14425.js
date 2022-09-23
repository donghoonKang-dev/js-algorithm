let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let firstLine = input[0].split(" ");
let N = firstLine[0];
let M = firstLine[1];
let inputList = input.slice(1);

const Nlist = inputList.slice(0, N);
const Mlist = inputList.slice(N);

const set = new Set(Nlist);

let result = 0;

Mlist.forEach((item) => {
  if (set.has(item)) result += 1;
});

console.log(result);
