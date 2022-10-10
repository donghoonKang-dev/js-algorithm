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
    let number = parseInt(input[0]);
    let cards = input[1].split(" ").map((el) => parseInt(el));
    solution(number, cards);
    process.exit();
  });

const solution = (number, cards) => {
  let lineUp = [];
  let tempStack = [];

  for (let i = 1; i <= number; i++) {
    if (i === 1) lineUp.push(i);
    else if (cards[i - 1] === 0) lineUp.push(i);
    else {
      for (let j = 0; j < cards[i - 1]; j++) {
        tempStack.push(lineUp.pop());
      }
      lineUp.push(i);
      for (let k = 0; k < cards[i - 1]; k++) {
        lineUp.push(tempStack.pop());
      }
    }
  }

  console.log(lineUp.join(" "));
};
