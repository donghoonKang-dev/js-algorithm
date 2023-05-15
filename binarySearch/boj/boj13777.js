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
    let list = input.map(Number);
    solution(list);
    process.exit();
  });

const solution = (list) => {
  for (const number of list) {
    if (number === 0) break;

    let arr = [];
    let start = 1;
    let end = 50;
    let mid = Math.floor((start + end) / 2);
    arr.push(mid);

    while (mid !== number) {
      if (mid > number) end = mid - 1;
      else if (mid < number) start = mid + 1;
      mid = Math.floor((start + end) / 2);
      arr.push(mid);
    }

    console.log(arr.join(" "));
  }
};
