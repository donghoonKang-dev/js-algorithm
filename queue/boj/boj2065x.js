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
    let [M, t, N] = input.shift().split(" ").map(Number);
    let list = input.map((line) =>
      line.split(" ").map((item, index) => index === 0 && Number(item))
    );
    solution(M, t, N, list);
    process.exit();
  });

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }

  front() {
    return this.head && this.head.data;
  }

  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const array = [];
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

const solution = (M, t, N, list) => {
  let paddedList = list.map((item, index) => item.concat(index));
  paddedList.sort((a, b) => a[0] - b[0]);

  const leftMarina = new Queue();
  const rightMarina = new Queue();

  //  passengerInfo : [대기시작시간, 대기위치, 순서]
  for (const passengerInfo of paddedList) {
    if (passengerInfo[1] === "left") leftMarina.enqueue(passengerInfo);
    else rightMarina.enqueue(passengerInfo);
  }

  let time = 0;
  let isLeft = true;
  let boardingPassenger = [];
  let arrivedPassenger = [];

  //  출발지 및 출발 시간 세팅
  if (leftMarina.length !== 0 && rightMarina.length !== 0) {
    if (leftMarina.front()[0] <= rightMarina.front()[0]) {
      time += leftMarina.front()[0];
    } else {
      time += rightMarina.front()[0];
      time += t;
      isLeft = !isLeft;
    }
  } else {
    if (rightMarina.length === 0) {
      time += leftMarina.front()[0];
    } else if (leftMarina.length === 0) {
      time += rightMarina.front()[0];
      time += t;
      isLeft = !isLeft;
    }
  }

  while (arrivedPassenger.length < N) {
    //  탑승
    for (let i = 0; i < M; i++) {
      if (isLeft && leftMarina.length !== 0) {
        if (leftMarina.front()[0] <= time) {
          const passenger = leftMarina.dequeue();
          boardingPassenger.push(passenger);
        } else break;
      } else if (!isLeft && rightMarina.length !== 0) {
        if (rightMarina.front()[0] <= time) {
          const passenger = rightMarina.dequeue();
          boardingPassenger.push(passenger);
        } else break;
      }
    }

    if (boardingPassenger.length !== 0) {
      //  이동
      time += t;
      isLeft = !isLeft;
      //  하선
      boardingPassenger.map((passenger) => passenger.push(time));
      for (const passenger of boardingPassenger) {
        arrivedPassenger.push(passenger);
      }
      boardingPassenger = [];
    }

    //  정박지에 더 이상 손님 없으면 이동
    if (
      (isLeft && rightMarina.length !== 0) ||
      (!isLeft && leftMarina.length !== 0)
    ) {
      time += t;
      isLeft = !isLeft;
    }
  }

  arrivedPassenger.sort((a, b) => a[2] - b[2]);

  console.log(arrivedPassenger.map((passenger) => passenger[3]).join("\n"));
};
