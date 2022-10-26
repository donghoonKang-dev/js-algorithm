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
    let n = parseInt(input[0]);
    let list = input.slice(1).map((val) => parseInt(val));
    console.log(solution(n, list));
    process.exit();
  });

const solution = (n, list) => {
  let sortedList = list.concat().sort((a, b) => b - a);
  let stack = [];
  let result = "";

  for (let i = 0; i < n; i++) {
    if (sortedList.length !== 0) {
      let topNum = sortedList[sortedList.length - 1];

      if (topNum < list[i]) {
        while (topNum < list[i]) {
          let popedNum = sortedList.pop();
          stack.push(popedNum);
          result += "+ ";
          topNum = sortedList[sortedList.length - 1];
        }
      }

      if (topNum === list[i]) {
        let popedNum = sortedList.pop();
        stack.push(popedNum);
        result += "+ ";
        stack.pop();
        result += "- ";
      }

      if (topNum > list[i]) {
        if (stack[stack.length - 1] === list[i]) {
          stack.pop();
          result += "- ";
        } else {
          return "NO";
        }
      }
    } else {
      let top = stack[stack.length - 1];
      if (top === list[i]) {
        stack.pop();
        result += "- ";
      } else {
        return "NO";
      }
    }
  }

  return result.split(" ").join(`\n`);
};
