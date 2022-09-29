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
    let stringList = [];
    for (let i = 1; i <= N; i++) {
      stringList.push(input[i]);
    }
    let K = parseInt(input[N + 1]);
    solution(N, stringList, K);
    process.exit();
  });

//  36진수 string to 10진수 BigInt
const convert36to10fromChar = (val) => BigInt(parseInt(val, 36).toString(10));

//  36진수 string to 10진수 BigInt (입력값이 number 범위보다 클 때)
const convert36to10fromString = (val) => {
  let result = BigInt(0);

  for (let i = val.length - 1; i >= 0; i--) {
    if (i === val.length - 1) {
      result += convert36to10fromChar(val.charAt(i));
    } else {
      result +=
        convert36to10fromChar(val.charAt(i)) *
        BigInt((36).toString()) ** BigInt((val.length - 1 - i).toString());
    }
  }

  return result;
};

//  문자열들에 나타난 문자별로 해당 자리에 'Z'가 있었다면 얼만큼 값이 차이가 날지에 대한 누적을
//  딕셔너리 같은 배열 형태로 생성해 차이가 많이 나는 아이템순으로 정렬
//  ex - [['A', BigInt(43253466722)], ['Y', BigInt(33687)], ...]
const getDistanceFromZs = (stringList) => {
  let distanceFromZs = [];

  for (let i = 0; i < stringList.length; i++) {
    let stringInput = stringList[i];

    for (let j = stringInput.length - 1; j >= 0; j--) {
      let token = stringInput.charAt(j);

      let charDistance = BigInt(
        parseInt(convert36to10fromChar("Z")) -
          parseInt(convert36to10fromChar(token))
      );
      let distance =
        j === stringInput.length - 1
          ? charDistance
          : charDistance * BigInt(36 ** (stringInput.length - 1 - j));

      let foundIndex = distanceFromZs.findIndex((item) => item[0] === token);

      if (foundIndex !== -1) {
        distanceFromZs[foundIndex][1] += distance;
      } else {
        distanceFromZs.push([token, distance]);
      }
    }
  }

  return distanceFromZs.sort((a, b) =>
    a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0
  );
};

//  메인 솔루션 함수
const solution = (N, inputList, K) => {
  let result = BigInt(0);
  let replacedList = []; //'AAY'->'ZZY'

  const distanceFromZdict = getDistanceFromZs(inputList).slice(0, K);

  for (let i = 0; i < N; i++) {
    let inputString = inputList[i];

    let replacedString = inputString
      .split("")
      .map((word) =>
        distanceFromZdict.map((item) => item[0]).includes(word) ? "Z" : word
      )
      .join("");
    replacedList.push(replacedString);
  }

  for (let j = 0; j < replacedList.length; j++) {
    result += convert36to10fromString(replacedList[j]);
  }

  console.log(result.toString(36).toUpperCase());
};
