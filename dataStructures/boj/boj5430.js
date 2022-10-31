let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input.shift());
let answer = "";

for (let i = 0; i < T; i++) {
  let p = input[3 * i];
  let n = Number(input[3 * i + 1]);
  let arr = input[3 * i + 2].split(/\D/g).filter((v) => v !== "");

  let left = 0;
  let right = n;
  let isReversed = false;

  if (p.includes("D") && p.match(/[D]/g).length > right) {
    answer += "error\n";
    continue;
  }

  p.split("").forEach((item) => {
    if (item === "R") isReversed = !isReversed;
    else {
      if (isReversed) right--;
      else left++;
    }
  });

  if (left >= right) {
    answer += "[]\n";
    continue;
  }

  if (isReversed) {
    answer += "[";
    for (let j = right - 1; j > left; j--) answer += `${arr[j]},`;
    answer += `${arr[left]}]\n`;
  } else {
    answer += "[";
    for (let j = left; j < right - 1; j++) answer += `${arr[j]},`;
    answer += `${arr[right - 1]}]\n`;
  }
}

console.log(answer.trim());

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// readline
//   .on("line", function (line) {
//     input.push(line);
//   })
//   .on("close", function () {
//     let T = parseInt(input[0]);
//     for (let i = 0; i < T; i++) {
//       let p = input[3 * i + 1].split("");
//       let n = parseInt(input[3 * i + 2]);
//       let arr = input[3 * i + 3]
//         .slice(1, -1)
//         .split(",")
//         .map((el) => parseInt(el));
//       solution(p, n, arr);
//     }
//     process.exit();
//   });

// const solution = (p, n, arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let isReversed = false;
//   let isError = false;

//   for (let i = 0; i < p.length; i++) {
//     if (p[i] === "R") {
//       if (i < p.length - 1 && p[i + 1] === "R") i += 1;
//       else isReversed = !isReversed;
//     } else if (p[i] === "D") {
//       if (left > right || n === 0) {
//         isError = true;
//         break;
//       } else {
//         if (!isReversed) left += 1;
//         else right -= 1;
//       }
//     }
//   }

//   if (isError) console.log("error");
//   else {
//     if (!isReversed)
//       console.log("[" + arr.slice(left, right + 1).join(",") + "]");
//     else
//       console.log(
//         "[" +
//           arr
//             .slice(left, right + 1)
//             .reverse()
//             .join(",") +
//           "]"
//       );
//   }
// };
