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
    let N = parseInt(input.shift());
    let list = input.shift().split(" ").map(Number);
    solution(N, list);
    process.exit();
  });

const lowerBound = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }

  return left;
};

const solution = (N, list) => {
  let arr = [];

  for (const item of list) {
    if (arr.length === 0) arr.push(item);
    else {
      if (arr[arr.length - 1] < item) arr.push(item);
      else {
        let index = lowerBound(arr, item);
        arr[index] = item;
      }
    }
  }

  console.log(arr.length);
};
  