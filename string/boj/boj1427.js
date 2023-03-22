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
    solution(input.split("").map((char) => parseInt(char)));
    process.exit();
  });

const solution = (list) => {
  let result = [];
  let numArr = Array.from({ length: 10 }, () => 0);

  for (const num of list) {
    numArr[num] += 1;
  }

  numArr.forEach((count, index) => {
    if (count !== 0) {
      for (let i = 0; i < count; i++) {
        result.push(index);
      }
    }
  });

  console.log(result.reverse().join(""));
};
