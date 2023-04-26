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
  const wordSet = new Set();

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      if (j !== input.length) wordSet.add(input.substring(i, j));
      else wordSet.add(input.substring(i));
    }
  }

  console.log(wordSet.size);
};
