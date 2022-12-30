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
    let [N, K] = input
      .shift()
      .split(" ")
      .map((el) => parseInt(el));
    solution(N, K, input);
    process.exit();
  });

const solution = (N, K, list) => {
  let count = 0;

  const queues = Array.from(new Array(21), () => new Array());

  for (let i = 0; i < N; i++) {
    const len = list[i].length;

    while (i - queues[len][0] > K) {
      queues[len].shift();
    }
    count += queues[len].length;
    queues[len].push(i);
  }

  console.log(count);
};
