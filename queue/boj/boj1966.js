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
    for (let i = 0; i < T; i++) {
      let [N, M] = input[2 * i + 1].split(" ").map((el) => parseInt(el));
      let list = input[2 * i + 2].split(" ").map((el) => parseInt(el));
      solution(N, M, list);
    }
    process.exit();
  });

const solution = (N, M, list) => {
  let count = 0;

  let queue = list.map((el, idx) => [el, idx === M]);

  while (queue.length > 0) {
    let max = Math.max(...queue.map((el) => el[0]));

    let token = queue.shift();

    if (token[0] === max) {
      count += 1;
      if (token[1]) break;
    } else {
      queue.push(token);
    }
  }

  console.log(count);
};
