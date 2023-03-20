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
    let list = input.map((el) => parseInt(el));
    solution(list);
    process.exit();
  });

const solution = (list) => {
  list.sort();

  const avg = list.reduce((acc, curr) => acc + curr, 0) / 5;
  const mid = list[2];

  console.log(avg + "\n" + mid);
};
