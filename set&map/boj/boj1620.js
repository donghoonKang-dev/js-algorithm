let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let result = [];

const pocketmons = new Map();

for (let i = 0; i < N; i++) {
  pocketmons.set(input[i], i + 1);
}

for (let i = N; i < N + M; i++) {
  if (pocketmons.has(input[i])) {
    result.push(pocketmons.get(input[i]));
  } else {
    result.push(input[parseInt(input[i]) - 1]);
  }
}

console.log(result.join("\n"));
