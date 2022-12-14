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
    let [N, T, W] = input[0].split(" ").map((el) => parseInt(el));
    let nCustomers = input
      .slice(1, N + 1)
      .map((el) => el.split(" ").map((item) => parseInt(item))); //[[Px,tx], ...]
    let M = parseInt(input[N + 1]);
    let mCustomers = input
      .slice(N + 2, N + 2 + M)
      .map((el) => el.split(" ").map((item) => parseInt(item))); //[[Px,tx, cx], ...]
    solution(N, T, W, nCustomers, M, mCustomers);
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

const solution = (N, T, W, nCustomers, M, mCustomers) => {
  mCustomers.sort((a, b) => a[2] - b[2]);

  const nQueue = new Queue();
  const mQueue = new Queue();

  for (const n of nCustomers) {
    nQueue.enqueue(n);
  }

  for (const m of mCustomers) {
    mQueue.enqueue(m);
  }

  let tick = 0;
  let result = "";
  let leftTime = T;

  while (tick < W) {
    if (mQueue.length > 0 && mQueue.front()[2] === tick) {
      let haveToGoLast = mQueue.dequeue();
      nQueue.enqueue([haveToGoLast[0], haveToGoLast[1]]);
    }

    if (nQueue.length > 0) {
      if (leftTime === 0) {
        let haveToGoLast = nQueue.dequeue();
        nQueue.enqueue(haveToGoLast);
        leftTime = T;
      }
      result += `${nQueue.front()[0]}\n`;
      nQueue.front()[1] -= 1;
      leftTime -= 1;
      if (nQueue.front()[1] === 0) {
        nQueue.dequeue();
        leftTime = T;
      }
    }

    tick += 1;
  }

  console.log(result);
};
