const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", function (line) {
    input = line;
    readline.close();
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  console.log(
    input
      .split(" ")
      .map((v) => parseInt(v))
      .sort((a, b) => a - b)[1]
  );
};
