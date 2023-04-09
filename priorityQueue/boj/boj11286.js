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
    let list = input.map((el) => parseInt(el));
    solution(N, list);
    process.exit();
  });

//  data : [절댓값, 원래값]
class AbsMinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
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

      if (currentData[0] > parentData[0]) break;
      if (currentData[0] === parentData[0] && currentData[1] > parentData[1]) break;

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

      let smallerIndex;

      if(rightChildData === null) smallerIndex = leftChildIndex;
      else {
        if (rightChildData[0] < leftChildData[0]) smallerIndex = rightChildIndex;
        else if (rightChildData[0] === leftChildData[0] && rightChildData[1] < leftChildData[1]) smallerIndex = rightChildIndex;
        else smallerIndex = leftChildIndex;
      }

      const smallerData = this.heap[smallerIndex];

      if (currentData[0] < smallerData[0]) break;
      if (currentData[0] === smallerData[0] && currentData[1] < smallerData[1]) break;

      this.heap[currentIndex] = smallerData;
      currentIndex = smallerIndex;
    }

    this.heap[currentIndex] = currentData;
  }
}

const solution = (N, list) => {
  let result = [];

  const absMinHeap = new AbsMinHeap();

  for (const item of list) {
    if (item === 0) {
      if (absMinHeap.isEmpty()) result.push(0);
      else result.push(absMinHeap.delete()[1]);
    } else {
      absMinHeap.insert([Math.abs(item), item]);
    }
  }

  console.log(result.join("\n"));
};
