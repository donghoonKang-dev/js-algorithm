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
    let words = input.slice(1);
    solution(N, words);
    process.exit();
  });

const solution = (N, words) => {
  Array.from(
    new Set(words.sort((a, b) => a.length - b.length || a.localeCompare(b)))
  ).forEach((word) => console.log(word));
};
