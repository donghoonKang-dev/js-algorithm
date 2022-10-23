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
    let testCase = parseInt(input[0]);
    let inputPointer = 1;

    for (let i = 0; i < testCase; i++) {
      let n = parseInt(input[inputPointer]);
      let clothes = input
        .slice(inputPointer + 1, inputPointer + 1 + n)
        .map((cloth) => cloth.split(" "));

      solution(n, clothes);
      inputPointer = inputPointer + 1 + n;
    }
    process.exit();
  });

const solution = (n, clothes) => {
  let result = 1;
  let clothesDict = {}; //카테고리별 의상 배열을 담는 딕셔너리 형태

  for (const cloth of clothes) {
    let content = cloth[0];
    let category = cloth[1];

    if (Object.keys(clothesDict).includes(category))
      clothesDict[category].push(content);
    else clothesDict[category] = [content];
  }

  for (const clothCategory in clothesDict) {
    result = result * (clothesDict[clothCategory].length + 1);
  }

  console.log(result - 1);
};
