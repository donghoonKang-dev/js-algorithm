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
    let T = parseInt(input[0]);
    let inputPointer = 1;

    for (let i = 0; i < T; i++) {
      let N = parseInt(input[inputPointer]);
      let scores = input
        .slice(inputPointer + 1, inputPointer + 1 + N)
        .map((item) => item.split(" ").map((val) => parseInt(val)));

      solution(N, scores);

      inputPointer = inputPointer + N + 1;
    }
    process.exit();
  });

const solution = (N, scores) => {
  let result = 1;
  let sortedScores = scores.concat().sort((a, b) => a[0] - b[0]);
  let standardIndex = 0;

  for (let j = 1; j < sortedScores.length; j++) {
    if (sortedScores[j][1] < sortedScores[standardIndex][1]) {
      result += 1;
      standardIndex = j;
    }
  }

  console.log(result);
};
