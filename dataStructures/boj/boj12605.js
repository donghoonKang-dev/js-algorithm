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
    let sentences = input.slice(1);
    solution(N, sentences);
    process.exit();
  });

const solution = (N, sentences) => {
  for (let i = 1; i <= N; i++) {
    console.log(
      `Case #${i}: ${sentences[i - 1].split(" ").reverse().join(" ")}`
    );
  }
};
