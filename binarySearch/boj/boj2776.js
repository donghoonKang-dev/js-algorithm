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
    let testCase = parseInt(input.shift());

    for (let i = 0; i < testCase; i++) {
      let N = parseInt(input.shift());
      let note1 = input.shift().split(" ").map(Number);
      let M = parseInt(input.shift());
      let note2 = input.shift().split(" ").map(Number);
      solution(N, note1, M, note2);
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

const solution = (N, note1, M, note2) => {
  let result = [];

  note1.sort((a, b) => a - b);

  for (const target of note2) {
    if (binarySearch(note1, target)) result.push(1);
    else result.push(0);
  }

  console.log(result.join("\n"));
};
