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
    solution(input);
    process.exit();
  });

// "-" 기준으로 식을 나눈 뒤 그것들을 합친 것("+")을 토대로 "-"연산
const solution = (expression) => {
  let finalNums = [];
  let result = 0;

  const minusGroup = expression.split("-");

  minusGroup.forEach((mElement) => {
    const plusGroup = mElement.split("+");

    let plusSum = 0;

    plusGroup.forEach((pElement) => {
      plusSum += parseInt(pElement);
    });

    finalNums.push(plusSum);
  });

  for (let i = 0; i < finalNums.length; i++) {
    if (i === 0) result += finalNums[i];
    else result -= finalNums[i];
  }

  console.log(result);
};
