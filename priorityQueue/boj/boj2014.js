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
    let [K, N] = input.shift().split(" ").map(el => parseInt(el));
    let list = input.shift().split(" ").map(el => parseInt(el));
    solution(K, N, list);
    process.exit();
  });

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(data) {
    this.heap.push(data);

    this.heapifyUp();
  }

  delete() {
    const data = this.heap[0];

    if (this.heap.length > 1) {
      const last = this.heap.length - 1;
      [this.heap[0], this.heap[last]] = [this.heap[last], this.heap[0]];
      this.heap.pop();

      this.heapifyDown();
    } else {
      this.heap.pop();
    }

    return data;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    const currentData = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentData = this.heap[parentIndex];

      if (currentData > parentData) break;

      this.heap[currentIndex] = parentData;
      currentIndex = parentIndex;
    }

    this.heap[currentIndex] = currentData;
  }

  heapifyDown() {
    let currentIndex = 0;
    const currentData = this.heap[currentIndex];

    while (currentIndex < this.heap.length) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;

      if (leftChildIndex >= this.heap.length) break;

      const leftChildData = this.heap[leftChildIndex];
      const rightChildData =
        rightChildIndex < this.heap.length ? this.heap[rightChildIndex] : null;

      const smallerIndex =
        rightChildData !== null && rightChildData < leftChildData
          ? rightChildIndex
          : leftChildIndex;
      const smallerData = this.heap[smallerIndex];

      if (currentData <= smallerData) break;

      this.heap[currentIndex] = smallerData;
      currentIndex = smallerIndex;
    }

    this.heap[currentIndex] = currentData;
  }
}

const solution = (K, N, list) => {
  let top;

  const minHeap = new MinHeap();

  for (const item of list) {
    minHeap.insert(item);
  }

  for (let i = 0 ; i < N ; i++) {
    top = minHeap.delete();

    for (const item of list) {
      minHeap.insert(item * top);

      if(top % item === 0) break;
    }
  }

  console.log(top);
};

