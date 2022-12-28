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

  let map = new Map();

  for (let i = 0; i < N; i++) {
    if (map.has(list[i].length)) {
      map.set(list[i].length, map.get(list[i].length).concat(i));
    } else {
      map.set(list[i].length, [i]);
    }
  }

  for (let i = 2; i <= 20; i++) {
    if (map.has(i)) {
      let head = 0;
      let tail = 1;

      while (tail > head) {
        if (map.get(i)[tail] - map.get(i)[head] <= K) {
          count += 1;
          if (tail < map.get(i).length - 1) tail += 1;
          else head += 1;
        } else {
          head += 1;
          tail = head + 1;
        }
      }
    }
  }

  console.log(count);
};
