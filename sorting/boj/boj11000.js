let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let list = input.map((line) => line.split(" ").map(Number));

let time = [];
let count = 0;
let answer = 0;

for (const lecture of list) {
  time.push([lecture[0], "start"]);
  time.push([lecture[1], "end"]);
}

time.sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]));

for (let curr of time) {
  if (curr[1] === "start") count++;
  else count--;
  if (count > answer) answer = count;
}

console.log(answer);

// list.sort((a, b) => a[0] - b[0]);

// let roomInfos = [];

// let firstLecture = list.shift();
// roomInfos.push(firstLecture[1]);

// for (const lecture of list) {
//   const roomIndex = roomInfos.findIndex(
//     (finishTime) => finishTime <= lecture[0]
//   );

//   if (roomIndex !== -1) {
//     roomInfos[roomIndex] = lecture[1];
//   } else {
//     roomInfos.push(lecture[1]);
//   }
// }

// console.log(roomInfos.length);
