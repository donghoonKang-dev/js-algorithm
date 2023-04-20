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
    let N = parseInt(input.shift());
    let list = input.map((line) => line.split(" "));
    solution(N, list);
    process.exit();
  });

const solution = (N, list) => {
  const workSums = new Map();

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < 7; j++) {
      if (list[i][j] !== "-") {
        let workTime;

        if (i % 4 === 0 || i % 4 === 2) workTime = 4;
        if (i % 4 === 1) workTime = 6;
        if (i % 4 === 3) workTime = 10;

        if (workSums.has(list[i][j])) {
          workSums.set(list[i][j], workSums.get(list[i][j]) + workTime);
        } else {
          workSums.set(list[i][j], workTime);
        }
      }
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (const value of workSums.values()) {
    if (max < value) max = value;
  }

  for (const value of workSums.values()) {
    if (min > value) min = value;
  }

  if (workSums.size === 0) console.log("Yes");
  else console.log(max - min <= 12 ? "Yes" : "No");
};
