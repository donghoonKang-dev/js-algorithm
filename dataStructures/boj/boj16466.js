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
    let tickets = input[1]
      .split(" ")
      .map((el) => parseInt(el))
      .sort((a, b) => a - b);
    solution(N, tickets);
    process.exit();
  });

const solution = (N, tickets) => {
  if (tickets[0] !== 1) console.log(1);
  else {
    let i = 0;

    while (i < N - 1) {
      if (tickets[i] + 1 < tickets[i + 1]) {
        console.log(tickets[i] + 1);
        break;
      } else {
        i += 1;
      }
    }

    if (i === N - 1) console.log(tickets[N - 1] + 1);
  }
};
