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
    let coords = input[1].split(" ").map((el) => parseInt(el));
    solution(N, coords);
    process.exit();
  });

const binarySearch = (n, arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === n) return mid;
    else if (arr[mid] < n) start = mid + 1;
    else end = mid - 1;
  }
};

const solution = (N, coords) => {
  let result = [];

  let sortedCoords = Array.from(new Set(coords)).sort((a, b) => a - b);

  coords.forEach((coord) => result.push(binarySearch(coord, sortedCoords)));

  console.log(result.join(" "));
};
