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
    let firstString = input[0];
    let secondString = input[1];
    solution(firstString, secondString);
    process.exit();
  });

const solution = (stringA, stringB) => {
  //  LCS 배열 생성 및 초기화
  let LCS = new Array(stringA.length + 1);
  for (let i = 0; i < LCS.length; i++) {
    LCS[i] = new Array(stringB.length + 1);
  }

  //  LCS 배열 값 할당
  for (let i = 0; i <= stringA.length; i++) {
    for (let j = 0; j <= stringB.length; j++) {
      if (i === 0 || j === 0) {
        LCS[i][j] = 0;
      } else if (stringA.charAt(i - 1) === stringB.charAt(j - 1)) {
        LCS[i][j] = LCS[i - 1][j - 1] + 1;
      } else {
        LCS[i][j] =
          LCS[i - 1][j] > LCS[i][j - 1] ? LCS[i - 1][j] : LCS[i][j - 1];
      }
    }
  }

  console.log(LCS[stringA.length][stringB.length]);
};
