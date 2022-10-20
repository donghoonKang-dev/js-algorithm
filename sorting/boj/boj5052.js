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
    let inputPointer = 1;

    for (let i = 0; i < T; i++) {
      let N = parseInt(input[inputPointer]);
      let phoneNumbers = input
        .slice(inputPointer + 1, inputPointer + 1 + N)
        .sort();

      solution(N, phoneNumbers);

      inputPointer = inputPointer + N + 1;
    }
    process.exit();
  });

const solution = (N, phoneNumbers) => {
  let result = true;

  for (let i = 0; i < N - 1; i++) {
    if (
      phoneNumbers[i].length <= phoneNumbers[i + 1].length &&
      phoneNumbers[i + 1].substring(0, phoneNumbers[i].length) ===
        phoneNumbers[i]
    ) {
      result = false;
      break;
    }
  }

  console.log(result ? "YES" : "NO");
};
