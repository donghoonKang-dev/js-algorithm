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
    let thirdString = input[2];
    solution(firstString, secondString, thirdString);
    process.exit();
  });

const solution = (stringA, stringB, stringC) => {
  //  LCS 배열 생성 및 초기화
  let LCS = new Array(stringA.length + 1);
  for (let i = 0; i < LCS.length; i++) {
    LCS[i] = new Array(stringB.length + 1);
    for (let j = 0; j < LCS[i].length; j++) {
      LCS[i][j] = new Array(stringC.length + 1);
    }
  }

  //  LCS 배열 값 할당
  for (let i = 0; i <= stringA.length; i++) {
    for (let j = 0; j <= stringB.length; j++) {
      for (let k = 0; k <= stringC.length; k++) {
        if (i === 0 || j === 0 || k === 0) {
          LCS[i][j][k] = 0;
        } else if (
          stringA.charAt(i - 1) === stringB.charAt(j - 1) &&
          stringB.charAt(j - 1) === stringC.charAt(k - 1)
        ) {
          LCS[i][j][k] = LCS[i - 1][j - 1][k - 1] + 1;
        } else {
          LCS[i][j][k] = Math.max(
            LCS[i - 1][j][k],
            LCS[i][j - 1][k],
            LCS[i][j][k - 1]
          );
        }
      }
    }
  }

  //  결과 출력
  console.log(LCS[stringA.length][stringB.length][stringC.length]);
};
