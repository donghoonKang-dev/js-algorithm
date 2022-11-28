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
    let T = parseInt(input[0]);
    for (let i = 0 ; i < T ; i++) {
      let [N, M] = input[2 * i + 1].split(" ").map(el => parseInt(el));
      let list = input[2 * i + 2].split(" ").map(el => parseInt(el));
      solution(N, M, list);
    }
    process.exit();
  });

const solution = (N, M, list) => {
  const mPriority = list[M];

  let count = 0;
  let queues = [];

  for (let i = 0 ; i < N ; i++) {
    if (queues.length === 0) queues.push([list[i], [i]]);
    else {
      let idx = queues.findIndex(v => v[0] === list[i]);
      if (idx === -1) queues.push([list[i], [i]]);
      else queues[idx][1].push(i);
    }
  }

  queues.sort((a,b) => b[0] - a[0]);

  for (let i = 0 ; i < queues.length ; i++) {
    if (queues[i][0] > mPriority) count += queues[i][1].length;
    else if(queues[i][0] === mPriority) {
      for (let j = 0 ; j < queues[i][1].length ; j++) {
        count += 1;
        if(queues[i][1][j] === M) break;
      }
    } else break;
  }

  console.log(count)
};