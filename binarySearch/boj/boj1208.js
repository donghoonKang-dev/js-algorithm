const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    let [N, S] = input[0].split(" ").map(Number);
    let list = input[1].split(" ").map(Number);
    solution(N, S, list);
    process.exit();
  });

const solution = (N, S, list) => {
  let result = 0;

  const leftList = list.slice(0, Math.floor(N / 2));
  const rightList = list.slice(Math.floor(N / 2));

  const leftMap = new Map();
  const rightMap = new Map();

  const leftRecursion = (i, sum) => {
    if (i === leftList.length) return;

    sum += leftList[i];

    if (leftMap.has(sum)) leftMap.set(sum, leftMap.get(sum) + 1);
    else leftMap.set(sum, 1);

    leftRecursion(i + 1, sum);
    leftRecursion(i + 1, sum - leftList[i]);
  };

  leftRecursion(0, 0);

  const rightRecursion = (i, sum) => {
    if (i === rightList.length) return;

    sum += rightList[i];

    if (rightMap.has(sum)) rightMap.set(sum, rightMap.get(sum) + 1);
    else rightMap.set(sum, 1);

    rightRecursion(i + 1, sum);
    rightRecursion(i + 1, sum - rightList[i]);
  };

  rightRecursion(0, 0);

  for (const leftKey of leftMap.keys()) {
    if (rightMap.has(S - leftKey)) {
      let count = leftMap.get(leftKey) * rightMap.get(S - leftKey);
      result += count;
    }
  }

  if (leftMap.has(S)) result += leftMap.get(S);
  if (rightMap.has(S)) result += rightMap.get(S);

  console.log(result);
};
