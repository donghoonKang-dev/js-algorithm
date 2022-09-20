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

const solution = (inputString) => {
  let collection = {};

  //문자열 순회하며 collection에 문자별 카운트 저장
  for (let i = 0; i < inputString.length; i++) {
    const upperToken = inputString.charAt(i).toUpperCase();
    if (collection[upperToken]) {
      collection[upperToken] += 1;
    } else {
      collection[upperToken] = 1;
    }
  }

  const maxCount = Math.max(...Object.values(collection));
  let duplicatedCount = 0;
  let maxIndex = -1;

  //카운트 중복 검사
  Object.values(collection).forEach((value, index) => {
    if (maxCount === value) {
      duplicatedCount += 1;
      maxIndex = index;
    }
  });

  // 결과 출력
  if (duplicatedCount > 1) {
    console.log("?");
  } else {
    console.log(Object.keys(collection)[maxIndex]);
  }
};
