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
    let words = input.slice(1, n + 1);
    let k = parseInt(input[n]);
    solution(n, words, k);
    process.exit();
  });

const kmp = (standard, inputString, k) => {
  let piArr = [];
  for (let x = 0; x < standard.length; x++) {
    piArr.push(0);
  }

  let i = 0;
  for (let j = 1; j < standard.length + 1; j++) {
    while (i > 0 && standard[i] !== standard[j]) {
      i = piArr[i - 1];
    }
    if (standard[i] === standard[j]) {
      i += 1;
      piArr[j] = i;
    }
  }

  let count = -1;
  i = 0;
  for (let j = 0; j < inputString.length; j++) {
    while (i > 0 && standard[i] !== inputString[j]) {
      i = piArr[i - 1];
    }
    if (standard[i] === inputString[j]) {
      i += 1;
      if (i === standard.length) {
        count += 1;
        i = piArr[i - 1];
      }
    }
  }

  return count === k;
};

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result.map((item) => item.join(""));
};

const solution = (n, words, k) => {
  let result = 0;

  let perm = permutator(words);

  for (let i = 0; i < perm.length; i++) {
    result += kmp(perm[i], perm[i] + perm[i], k);
  }

  console.log(result);
};
