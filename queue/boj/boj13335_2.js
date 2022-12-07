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
  let count = 0;
  let onBridges = []; //[무게, 진입시간]
  let doneTrucks = [];

  while (doneTrucks.length < n) {
    let sumOfOnBridges =
      onBridges.length !== 0
        ? onBridges
            .map((el) => el[0])
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )
        : 0;

    count += 1;

    if (onBridges.length < w && sumOfOnBridges + trucks[0] < L) {
      let truck = trucks.shift();
      onBridges.push([truck, count]);
    }

    let doneTruck;

    if (onBridges.length !== 0 && onBridges[0][1] === w + count) {
      doneTruck = onBridges.shift();
    }

    if (doneTruck) doneTrucks.push(doneTruck);
  }

  console.log(count);
};
