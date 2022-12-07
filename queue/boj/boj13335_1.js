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
    let [n, w, L] = input[0].split(" ").map((el) => parseInt(el));
    let trucks = input[1].split(" ").map((el) => parseInt(el));
    solution(n, w, L, trucks);
    process.exit();
  });

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 큐 클래스
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

const solution = (n, w, L, trucks) => {
  const truckQueue = new Queue();
  const onBridges = new Queue();

  for (const truck of trucks) {
    truckQueue.enqueue(truck);
  }

  let tick = 0;
  let emptyBrigeLength = w;
  let sumOfWeight = 0;

  while (truckQueue.length > 0) {
    if (emptyBrigeLength > 0 && sumOfWeight < L) {
      let truck = truckQueue.dequeue();
    }
  }
};
