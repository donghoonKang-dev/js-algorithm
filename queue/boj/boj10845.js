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
    let N = parseInt(input.shift());
    solution(N, input);
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

const solution = (N, input) => {
  const queue = new Queue();

  let result = "";

  input.forEach((command, index) => {
    const alpha = command.split(" ")[0];

    switch (alpha) {
      case "push":
        queue.enqueue(parseInt(command.split(" ")[1]));
        break;
      case "pop":
        if (queue.length === 0) result += -1;
        else result += queue.dequeue();
        break;
      case "size":
        result += queue.length;
        break;
      case "empty":
        result += queue.length === 0 ? 1 : 0;
        break;
      case "front":
        if (queue.length === 0) result += -1;
        else result += queue.head.data;
        break;
      case "back":
        if (queue.length === 0) result += -1;
        else result += queue.rear.data;
        break;
      default:
        break;
    }

    if (index !== input.length - 1 && alpha !== "push") result += "\n";
  });

  console.log(result);
};
