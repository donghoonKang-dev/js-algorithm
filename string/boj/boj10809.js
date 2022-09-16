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

const solution = (S) => {
  const ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  console.log(ALPHABET.map((word) => S.indexOf(word)).join(" "));
};

//다른사람 풀이 (ASCII, String의 fromCharCode() 사용)
// const result = [];

// for (let i = 97; i <= 122; i++) {
//   result.push(input.indexOf(String.fromCharCode(i)));
// }

// console.log(result.join(" "));
