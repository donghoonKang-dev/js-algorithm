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
    let n = input.shift();

    let strawberrys = 0;
    let bananas = 0;
    let limes = 0;
    let plums = 0;

    input.forEach((line) => {
      const [name, num] = line.split(" ");

      switch (name) {
        case "STRAWBERRY":
          strawberrys += parseInt(num);
          break;
        case "BANANA":
          bananas += parseInt(num);
          break;
        case "LIME":
          limes += parseInt(num);
          break;
        case "PLUM":
          plums += parseInt(num);
          break;
        default:
          break;
      }
    });

    if (strawberrys === 5) console.log("YES");
    else if (bananas === 5) console.log("YES");
    else if (limes === 5) console.log("YES");
    else if (plums === 5) console.log("YES");
    else console.log("NO");

    process.exit();
  });
