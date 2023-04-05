let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  peek() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = (currentIdx / 2) >> 0;

    while (currentIdx > 1 && this.heap[parentIdx] < this.heap[currentIdx]) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = (currentIdx / 2) >> 0;
    }
  }

  pop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = currentIdx * 2;
    let rightIdx = currentIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[currentIdx]) {
        this.swap(leftIdx, currentIdx);
      }
      return max;
    }

    while (
      this.heap[leftIdx] > this.heap[currentIdx] ||
      this.heap[rightIdx] > this.heap[currentIdx]
    ) {
      const maxIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(maxIdx, currentIdx);
      currentIdx = maxIdx;
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return max;
  }
}

const N = parseInt(input[0]);
const list = input.splice(1, N + 1);

const presentBag = new MaxHeap();

for (let line of list) {
  if (line === "0") {
    if (presentBag.size() === 0) console.log(-1);
    else console.log(presentBag.pop());
  } else {
    const presents = line.split(" ").map((el) => parseInt(el));
    for (let i = 1; i <= presents[0]; i++) {
      presentBag.push(presents[i]);
    }
  }
}
