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
    let n = parseInt(input.shift());
    let list = input.map((item) => [item.split(" ")[0], item.split(" ")[1]]);
    solution(n, list);
    process.exit();
  });

const solution = (n, list) => {
  list.sort((a, b) => a[0] - b[0]);

  for (const item of list) {
    console.log(item.join(" "));
  }
};
