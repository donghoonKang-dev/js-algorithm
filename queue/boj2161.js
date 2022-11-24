const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", function (line) {
    input = line;
    readline.close();
  })
  .on("close", function () {
    solution(parseInt(input));
    process.exit();
  });

const solution = (N) => {
  let result = [];
  let queue = [];

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.length > 0) {
    result.push(queue.shift());
    if (queue.length > 1) {
      let shifted = queue.shift();
      queue.push(shifted);
    }
  }

  console.log(result.join(" "));
};
