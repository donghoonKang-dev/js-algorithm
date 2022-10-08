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
    let numbers = input
      .slice(1)
      .map((el) => parseInt(el))
      .sort((a, b) => a - b);
    solution(N, numbers);
    process.exit();
  });

const solution = (N, numbers) => {
  let sum = numbers.reduce((a, b) => a + b, 0);

  let numMap = new Map();
  for (num of numbers) {
    if (numMap.has(num)) numMap.set(num, numMap.get(num) + 1);
    else numMap.set(num, 1);
  }

  //산술평균
  let arithmeticMean = Math.round(sum / N);

  //중앙값
  let median = numbers[Math.floor(N / 2)];

  //최빈값
  let mode;
  let maxFrequency = Math.max(...numMap.values());
  let modeArr = [];

  numMap.forEach((value, key) => value === maxFrequency && modeArr.push(key));

  if (modeArr.length > 1) {
    mode = [...modeArr].sort((a, b) => a - b)[1];
  } else {
    mode = modeArr[0];
  }

  //범위
  let range = numbers[N - 1] - numbers[0];

  console.log(arithmeticMean === -0 ? 0 : arithmeticMean);
  console.log(median);
  console.log(mode);
  console.log(range);
};
