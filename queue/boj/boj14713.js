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
    let N = parseInt(input[0]);
    let list = input.slice(1, N + 1).map((sentence) => sentence.split(" "));
    let L = input[N + 1].split(" ");
    solution(N, list, L);
    process.exit();
  });

const solution = (N, list, L) => {
  let result = true;

  for (const word of L) {
    let isExist = false;

    for (let i = 0; i < N; i++) {
      if (list[i].length > 0 && list[i][0] === word) {
        list[i].shift();
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      result = false;
      break;
    }
  }

  list.forEach((sentence) => {
    if (sentence.length !== 0) {
      result = false;
    }
  });

  console.log(result ? "Possible" : "Impossible");
};
