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
    let n = parseInt(input[1]);
    let nArr = input[2].split(" ").map(Number);
    let m = parseInt(input[3]);
    let mArr = input[4].split(" ").map(Number);
    solution(T, n, nArr, m, mArr);
    process.exit();
  });

const binaryLeftSearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }

  return left;
};

const binaryRightSearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }

  return right - 1;
};

const solution = (T, n, nArr, m, mArr) => {
  let count = 0;
  let nSum = [];
  let mSum = [];

  for (let i = 0; i < n; i++) {
    let sum = nArr[i];
    nSum.push(sum);
    for (let j = i + 1; j < n; j++) {
      sum += nArr[j];
      nSum.push(sum);
    }
  }

  for (let i = 0; i < m; i++) {
    let sum = mArr[i];
    mSum.push(sum);
    for (let j = i + 1; j < m; j++) {
      sum += mArr[j];
      mSum.push(sum);
    }
  }

  nSum.sort((a, b) => a - b);
  mSum.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let left = binaryLeftSearch(mSum, T - nSum[i]);
    let right = binaryRightSearch(mSum, T - nSum[i]);

    let tot = right - left;

    count += tot;
  }

  console.log(count);
};
