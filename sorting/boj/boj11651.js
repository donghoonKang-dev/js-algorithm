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
    let n = parseInt(input.shift());
    let list = input.map((line) => line.split(" ").map((val) => parseInt(val)));
    solution(n, list);
    process.exit();
  });

const solution = (n, list) => {
  let result = "";

  list.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  list.forEach((item, index) => {
    if (index === list.length - 1) {
      result += item.join(" ");
    } else {
      result += item.join(" ") + "\n";
    }
  });

  console.log(result);
};
