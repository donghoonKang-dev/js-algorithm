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
    let numbers = input.map((el) => parseInt(el));
    solution(N, numbers);
    process.exit();
  });

const solution = (N, numbers) => {
  let sortedNumbers = numbers.sort((a, b) => a - b);

  let minusNumbers = sortedNumbers.filter((val) => val < 0);
  let zeroNumbers = sortedNumbers.filter((val) => val === 0);
  let plusNumbers = sortedNumbers.filter((val) => val > 0);

  let sum = 0;

  // 0이 있고 음수가 홀수개이면 제일 절댓값 작은 음수 0과 함께 자폭처리, 나머지 0은 무시(버림)
  if (zeroNumbers.length > 0 && minusNumbers.length % 2 === 1) {
    minusNumbers.pop();
    zeroNumbers.pop();
  }

  //  음수가 홀수개이고 -1이 있다면 sum += -1
  if (minusNumbers.length % 2 === 1 && minusNumbers.includes(-1)) {
    sum -= 1;
    minusNumbers.pop();
  }

  //  1은 갯수만큼 무조건 더하기
  if (plusNumbers.includes(1)) {
    sum += plusNumbers.filter((val) => val === 1).length;
    plusNumbers = plusNumbers.filter((val) => val !== 1);
  }

  //  음수의 갯수가 짝수면 절댓값 큰 애들끼리 곱하고 홀수면 나머지 하나 더하기
  while (minusNumbers.length > 0) {
    if (minusNumbers.length % 2 === 1) {
      sum += minusNumbers.pop();
    } else {
      let left = minusNumbers.shift();
      let right = minusNumbers.shift();

      sum += left * right;
    }
  }

  //  양수의 갯수가 짝수면 절댓값 큰 애들끼리 곱하고 홀수면 나머지 하나 더하기
  while (plusNumbers.length > 0) {
    if (plusNumbers.length % 2 === 1) {
      sum += plusNumbers.shift();
    } else {
      let right = plusNumbers.pop();
      let left = plusNumbers.pop();

      sum += right * left;
    }
  }

  console.log(sum);
};

