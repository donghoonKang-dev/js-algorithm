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
    let [N, M] = input[0].split(" ").map((v) => parseInt(v));
    let nList = input.slice(1, N + 1);
    let mList = input.slice(N + 1);
    solution(N, M, nList, mList);
    process.exit();
  });

const solution = (N, M, nList, mList) => {
  let mSet = new Set(mList);
  let newList = nList.filter((nName) => mSet.has(nName));

  newList.sort();

  console.log(newList.length);
  for (const newName of newList) {
    console.log(newName);
  }
};
