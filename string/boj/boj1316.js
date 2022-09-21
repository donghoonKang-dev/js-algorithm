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
    let n = parseInt(input[0]);
    let list = input.slice(1);
    solution(n, list);
    process.exit();
  });

const solution = (N, inputList) => {
  let result = 0;

  for (let i = 0; i < N; i++) {
    const inputString = inputList[i];

    let wordArr = [];
    let prevWord = "";
    let isGroupWord = true;

    for (let j = 0; j < inputString.length; j++) {
      const word = inputString.charAt(j);

      if (wordArr.includes(word)) {
        if (prevWord === word) continue;
        else {
          isGroupWord = false;
          break;
        }
      } else {
        wordArr.push(word);
        prevWord = word;
      }
    }

    if (isGroupWord) result += 1;
  }
  console.log(result);
};
