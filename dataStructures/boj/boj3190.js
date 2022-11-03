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
    //보드 초기 세팅
    let N = parseInt(input[0]);
    let board = Array.from(Array(N + 2), () => Array(N + 2).fill(0));

    //벽 세팅
    for (let i = 0; i < N + 1; i++) {
      board[i][0] = 1;
      board[0][i] = 1;
      board[i][N + 1] = 1;
      board[N + 1][i] = 1;
    }

    //사과세팅
    let K = parseInt(input[1]);
    let applePositions = input
      .slice(2, 2 + K)
      .map((item) => [
        parseInt(item.split(" ")[0]),
        parseInt(item.split(" ")[1]),
      ]);
    for (let i = 0; i < K; i++) {
      let x = applePositions[i][0];
      let y = applePositions[i][1];
      board[x][y] = 2;
    }

    //뱀의 방향 변환 맵 생성
    let L = parseInt(input[2 + K]);
    const directions = new Map();
    for (let i = 0; i < L; i++) {
      directions.set(
        parseInt(input[3 + K + i].split(" ")[0]),
        input[3 + K + i].split(" ")[1]
      );
    }

    //풀이 시작
    const horizontal = [-1, 0, 1, 0];
    const vertical = [0, 1, 0, -1];

    let snakesDirection = 1;
    let snake = [[1, 1]];
    let time = 0;
    let isEnd = false;

    while (snake.length) {
      if (directions.has(time)) {
        if (directions.get(time) === "D")
          snakesDirection = (snakesDirection + 1) % 4;
        else snakesDirection = (snakesDirection + 3) % 4;
      }

      time += 1;

      let snakeX = snake[0][0] + horizontal[snakesDirection];
      let snakeY = snake[0][1] + vertical[snakesDirection];

      let head = board[snakeX][snakeY];

      if (head === 1) break;
      else {
        snake.unshift([snakeX, snakeY]);

        if (head === 2) board[snakeX][snakeY] = 0;
        if (head !== 2) {
          for (let i = snake.length - 1; i >= 1; i--) {
            let [tmpx, tmpy] = snake[i];
            if (tmpx === snakeX && tmpy === snakeY) {
              isEnd = true;
              break;
            }
          }
          snake.pop();
        }
      }
      if (isEnd) break;
    }

    console.log(time);

    process.exit();
  });
