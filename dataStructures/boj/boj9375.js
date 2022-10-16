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
    let testCase = parseInt(input[0]);
    for (let i = 0; i < testCase; i++) {
      let n = parseInt(input[3 * i + 1]);
      solution(n, list);
    }
    process.exit();
  });

const solution = (input) => {
  //이 안에 솔루션 작성
};
