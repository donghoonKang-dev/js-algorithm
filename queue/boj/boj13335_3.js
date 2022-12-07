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
    let [n, w, L] = input[0].split(" ").map((el) => parseInt(el));
    let trucks = input[1].split(" ").map((el) => parseInt(el));
    solution(n, w, L, trucks);
    process.exit();
  });

const solution = (n, w, L, trucks) => {
  let bridge = new Array(w).fill(0);
  let doneTrucks = [];
  let tick = 0;

  while (doneTrucks.length < n) {
    const sum = bridge.reduce((acc, curr) => acc + curr, 0);
    const count = bridge.filter((item) => item > 0).length;

    tick += 1;

    if (bridge.length > 0) {
      let comeOut = bridge.shift();
      if (comeOut !== 0) doneTrucks.push(comeOut);
    }

    if (sum + trucks[0] < L && count < w) {
      let comeIn = trucks.shift();
      bridge.push(comeIn);
    } else {
      bridge.push(0);
    }

    console.log(bridge);
  }

  console.log(tick);
};
