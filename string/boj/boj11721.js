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
  const outputLines = parseInt(input.length / 10) + 1;

  for (let i = 0; i < outputLines; i++) {
    if (i === outputLines - 1) console.log(input.substring(i * 10));
    else console.log(input.substring(i * 10, i * 10 + 10));
  }
};
