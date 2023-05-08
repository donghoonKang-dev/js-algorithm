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
    let N = parseInt(input.shift());
    let before = input.slice(0, N);
    let after = input.slice(N);
    solution(N, before, after);
    process.exit();
  });

const solution = (N, before, after) => {
  let result = 0;

  const cars = new Map();

  for (let i = 0; i < N; i++) {
    cars.set(before[i], i);
  }

  for (let i = 0; i < N; i++) {
    if (cars.get(after[i]) > i) {
      result += 1;
      for (const car of cars.keys()) {
        if (cars.get(car) >= i && cars.get(after[i]) > cars.get(car))
          cars.set(car, cars.get(car) + 1);
      }
      cars.set(after[i], i);
    }
  }

  console.log(result);
};
