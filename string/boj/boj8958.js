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
  for(let i = 0 ; i < N ; i++) {
    const inputString = inputList[i];
    let prevScore = 0;
    let totalScore = 0;
    for(let j = 0 ; j < inputString.length ; j++) {
      const token = inputString[j];
      if(token === 'X') {
        prevScore = 0;
      } else {
        prevScore = prevScore + 1;
        totalScore = totalScore + prevScore;
      }
    }
    console.log(totalScore)
  }
};