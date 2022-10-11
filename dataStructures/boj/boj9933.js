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
    let candidates = input.slice(1);
    solution(N, candidates);
    process.exit();
  });

const checkExistPW = (string, candidates) => {
  for (let candidate of candidates) {
    if (string === candidate.split("").reverse().join("")) return true;
  }
  return false;
};

const solution = (N, candidates) => {
  let pw;

  for (let candidate of candidates) {
    if (checkExistPW(candidate, candidates)) {
      pw = candidate;
      break;
    }
  }

  if (pw) console.log(`${pw.length} ${pw.charAt(Math.floor(pw.length / 2))}`);
};
