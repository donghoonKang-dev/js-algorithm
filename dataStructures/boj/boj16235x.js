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
    let [N, M, K] = input[0].split(" ").map((el) => parseInt(el));

    //  추가양분 Board 세팅
    let A = Array.from(Array(N), () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        A[i][j] = parseInt(input[1 + i].split(" ")[j]);
      }
    }

    //  나무 Board 세팅 (각 요소 : [나이])
    let trees = Array.from(Array(N), () => Array(N).fill([]));
    for (let i = 0; i < M; i++) {
      let [x, y, z] = input[N + 1 + i].split(" ").map((el) => parseInt(el));
      if (trees[x - 1][y - 1].length === 0) trees[x - 1][y - 1] = [z];
      else trees[x - 1][y - 1].push(z);
    }

    //  기본양분 Board 세팅
    let basics = Array.from(Array(N), () => Array(N).fill(5));

    //  나무 심기
    const setTree = (x, y) => {
      if (trees[x][y].length === 0) trees[x][y] = [1];
      else trees[x][y].push(1);
    };

    //<-----풀이 시작----->
    for (let i = 0; i < K; i++) {
      //봄
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
          if (trees[j][k].length === 0) continue;
          else if (trees[j][k].length === 1) {
            //나무가 한 그루일 때
            if (trees[j][k][0] > 0) {
              if (basics[j][k] >= trees[j][k][0]) {
                //나무가 양분을 먹음
                basics[j][k] -= trees[j][k][0];
                trees[j][k][0] += 1;
              } else {
                //나무가 양분을 먹지 못하고 죽음
                trees[j][k][0] -= trees[j][k][0] * 2;
              }
            }
          } else {
            //나무가 한 그루 이상일 때
            trees[j][k]
              .sort((a, b) => a - b)
              .forEach((tree) => {
                if (tree > 0) {
                  if (basics[j][k] >= tree) {
                    //나무가 양분을 먹음
                    basics[j][k] -= tree;
                    tree += 1;
                  } else {
                    //나무가 양분을 먹지 못하고 죽음
                    tree -= tree * 2;
                  }
                }
              });
          }
        }
      }
      //여름
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
          if (trees[j][k].length === 0) continue;
          else {
            trees[j][k].forEach((tree) => {
              //  죽은 나무의 나이 절반만큼 땅에 양분 추가
              if (tree < 0) {
                basics[j][k] += Math.floor(Math.abs(tree) / 2);
                trees[j][k].shift();
              }
            });
          }
        }
      }
      //가을
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
          if (trees[j][k].length === 0) continue;
          else {
            trees[j][k].forEach((tree) => {
              if (tree > 0 && tree % 5 === 0) {
                if (j > 0 && k > 0) setTree(j - 1, k - 1);
                if (j > 0) setTree(j - 1, k);
                if (j > 0 && k < N - 1) setTree(j - 1, k + 1);
                if (k > 0) setTree(j, k - 1);
                if (k < N - 1) setTree(j, k + 1);
                if (j < N - 1 && k > 0) setTree(j + 1, k - 1);
                if (j < N - 1) setTree(j + 1, k);
                if (j < N - 1 && k < N - 1) setTree(j + 1, k + 1);
              }
            });
          }
        }
      }
      //겨울
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
          basics[j][k] += A[j][k];
        }
      }
    }

    let count = 0;

    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (trees[j][k].length === 0) continue;
        else {
          trees[j][k].forEach((tree) => {
            if (tree > 0) count += 1;
          });
        }
      }
    }

    console.log(count);

    process.exit();
  });
