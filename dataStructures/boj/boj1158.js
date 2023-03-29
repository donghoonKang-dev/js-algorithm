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
    const [N, K] = input.split(" ");
    solution(N, K);
    process.exit();
  });

const solution = (N, K) => {
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  let result = "<";

  let index = 1;

  while (queue.length > 0) {
    const token = queue.shift();

    if (index % K === 0) {
      result += token;
      result += queue.length !== 0 ? ", " : ">";
      index = 1;
    } else {
      queue.push(token);
      index += 1;
    }
  }

  console.log(result);
};
