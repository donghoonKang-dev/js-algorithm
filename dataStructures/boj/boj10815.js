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
    let N = parseInt(input[0]);
    let nList = input[1].split(" ").map((el) => parseInt(el));
    let M = parseInt(input[2]);
    let mList = input[3].split(" ").map((el) => parseInt(el));
    solution(N, nList, M, mList);
    process.exit();
  });

const solution = (N, nList, M, mList) => {
  let result = [];

  const nSet = new Set(nList);

  mList.forEach((num) => {
    if (nSet.has(num)) result.push(1);
    else result.push(0);
  });

  console.log(result.join(" "));
};
