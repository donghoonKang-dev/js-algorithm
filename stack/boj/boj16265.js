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
    let t = parseInt(input.shift());
    for (let i = 0; i < t; i++) {
      let k = parseInt(input.shift());
      solution(k);
    }
    process.exit();
  });

const solution = (k) => {
  let result = [];

  while (k > 0) {
    let remainder = k % 26;

    if (remainder === 0) {
      result.push("Z");
      k = Math.floor(k / 26) - 1;
    } else {
      result.push(String.fromCharCode(remainder + 64));
      k = Math.floor(k / 26);
    }
  }

  console.log(result.reverse().join(""));
};
