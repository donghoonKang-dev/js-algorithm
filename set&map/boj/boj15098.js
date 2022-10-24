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
    solution(input.split(" "));
    process.exit();
  });

const solution = (words) => {
  let isDuplicated = false;
  let wordMap = new Map();

  for (const word of words) {
    if (wordMap.has(word)) {
      isDuplicated = true;
      break;
    } else {
      wordMap.set(word, 1);
    }
  }

  console.log(isDuplicated ? "no" : "yes");
};
