let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
let sum = 0;

const trees = new Map();

for (const tree of input) {
  if (trees.has(tree)) {
    trees.set(tree, trees.get(tree) + 1);
  } else {
    trees.set(tree, 1);
  }
}

const sortedTrees = new Map([...trees].sort());

for (const num of sortedTrees.values()) {
  sum += num;
}

for (const tree of sortedTrees.keys()) {
  result.push(tree + ' ' + (trees.get(tree) * 100 / sum).toFixed(4));
}

console.log(result.join('\n'));