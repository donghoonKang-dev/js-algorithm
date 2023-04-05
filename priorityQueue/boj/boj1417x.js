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
    let dasom = parseInt(input.shift());
    let list = input.map((el) => parseInt(el));
    solution(N, dasom, list);
    process.exit();
  });

class MaxHeap {
  constructor() {
    this.data = [];
  }

  getParentIndex(i) {
    return Math.floor(i - 1 / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  heapifyUp() {
    let currentIndex = this.data.length - 1;

    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] < this.data[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  push(key) {
    this.data[this.data.length] = key;
    this.heapifyUp();
  }

  poll() {
    const maxValue = this.data[0];

    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();

    return maxValue;
  }

  getLength() {
    return this.data.length;
  }

  peek() {
    return this.getLength() ? this.data[0] : false;
  }
}

const solution = (N, dasom, list) => {
  let result = 0;

  const maxHeap = new MaxHeap();

  for (const item of list) {
    maxHeap.push(item);
  }

  while (maxHeap.getLength() !== 0) {
    let primary = maxHeap.poll();

    if (dasom <= primary) {
      result += 1;
      dasom += 1;
      primary -= 1;
      maxHeap.push(primary);
    } else break;
  }

  console.log(result);
};
