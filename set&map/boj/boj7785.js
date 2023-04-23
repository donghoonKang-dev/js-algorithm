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
    let n = parseInt(input.shift());
    let list = input.map((line) => line.split(" "));
    solution(n, list);
    process.exit();
  });

  const solution = (n, list) => {
    let result = [];

    const office = new Map();

    for (const item of list) {
      if (item[1] === "enter") {
        office.set(item[0], true);
      } else if (item[1] === "leave") {
        if (office.has(item[0])) office.set(item[0], false);
      }
    }

    for (const person of office.keys()) {
      if(office.get(person)) result.push(person);
    }

    result.sort().reverse();

    console.log(result.join('\n'));
  };