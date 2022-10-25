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
    let N = parseInt(input[0].split(" ")[0]);
    let L = parseInt(input[0].split(" ")[1]);
    let ants = input
      .slice(1)
      .map((ant, index) => [parseInt(ant), index + 1])
      .sort((a, b) => Math.abs(a[0]) - Math.abs(b[0]));
    solution(N, L, ants);
    process.exit();
  });

const solution = (N, L, ants) => {
  const leftFallCount = ants.filter((ant) => ant[0] < 0).length;

  const leftFallTimes = ants
    .filter((ant) => ant[0] < 0)
    .map((val) => Math.abs(val[0]));
  const rightFallTimes = ants
    .filter((ant) => ant[0] > 0)
    .map((val) => L - val[0]);

  const leftFallLast = ants[leftFallCount - 1];
  const rightFallLast = ants[leftFallCount];

  if (leftFallTimes[leftFallTimes.length - 1] > rightFallTimes[0]) {
    console.log(
      leftFallLast[1] + " " + leftFallTimes[leftFallTimes.length - 1]
    );
  } else {
    console.log(rightFallLast[1] + " " + rightFallTimes[0]);
  }
};
