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
    let finishFlag = false;
    let [N, M] = input[0].split(" ").map(Number);
    let startIndex = 1;

    while (!finishFlag) {
      let sanggeun = input.slice(startIndex, startIndex + N).map(Number);
      let seonyeong = input
        .slice(startIndex + N, startIndex + N + M)
        .map(Number);

      solution(N, M, sanggeun, seonyeong);

      startIndex = startIndex + N + M;

      N = input[startIndex].split(" ").map(Number)[0];
      M = input[startIndex].split(" ").map(Number)[1];

      if (N === 0 && M === 0) finishFlag = true;

      startIndex += 1;
    }

    process.exit();
  });

const binarySearch = (list, target) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (list[mid] === target) {
      return true;
    } else if (list[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};

const solution = (N, M, sanggeun, seonyeong) => {
  let result = 0;

  for (const sy of seonyeong) {
    if (binarySearch(sanggeun, sy)) result += 1;
  }

  console.log(result);
};
