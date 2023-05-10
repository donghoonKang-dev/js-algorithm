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
    let numbers = input
      .shift()
      .split(" ")
      .map((el) => parseInt(el))
      .sort((a, b) => a - b);
    solution(N, numbers);
    process.exit();
  });

const solution = (N, numbers) => {
  let result = 0;

  for (let i = 0; i < N; i++) {
    let leftArr = numbers.slice(0, i);
    let rightArr = numbers.slice(i + 1);
    let totalArr = leftArr.concat(rightArr);

    let left = 0;
    let right = totalArr.length - 1;

    while (left < right) {
      let sum = totalArr[left] + totalArr[right];

      if (sum < numbers[i]) left += 1;
      else if (sum > numbers[i]) right -= 1;
      else {
        result += 1;
        break;
      }
    }
  }

  console.log(result);
};
