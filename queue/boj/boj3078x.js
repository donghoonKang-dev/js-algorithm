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
    let [N, K] = input[0].split(" ").map((el) => parseInt(el));
    let list = input.slice(1);
    solution(N, K, list);
    process.exit();
  });

const solution = (N, K, list) => {
  let count = 0;

  for (let i = 1; i <= 20; i++) {
    const filtered = list
      .map((el, idx) => [el, idx])
      .filter((el) => el[0].length === i);

    if (filtered.length <= 1) continue;

    let arr = filtered.map((el) => el[1]);

    while (arr.length > 1) {
      const poped = arr.shift();
      for (const tmp of arr) {
        if (tmp - poped <= K) count += 1;
      }
    }
  }

  console.log(count);
};
