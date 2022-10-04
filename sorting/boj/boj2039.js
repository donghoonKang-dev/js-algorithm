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
    let list = input.map((el) => parseInt(el));
    solution(list);
    process.exit();
  });

const solution = (list) => {
  let isFound = false;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i === j) continue;

      let extracted = [list[i], list[j]];

      let group = list.filter((item) => !extracted.includes(item));

      if (group.reduce((a, b) => a + b, 0) === 100) {
        group
          .sort((a, b) => a - b)
          .forEach((item) => {
            console.log(item);
          });
        isFound = true;
        break;
      }
    }
    if (isFound) break;
  }
};
