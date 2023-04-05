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

  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = (currentIndex / 2) >> 0;

    while (
      currentIndex > 1 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = (currentIndex / 2) >> 0;
    }
  }

  pop() {
    const max = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    if (!this.heap[leftChildIndex]) return max;
    if (!this.heap[rightChildIndex]) {
      if (this.heap[leftChildIndex] > this.heap[currentIndex]) {
        this.swap(leftChildIndex, currentIndex);
      }
      return max;
    }

    while (
      this.heap[leftChildIndex] > this.heap[currentIndex] ||
      this.heap[rightChildIndex] > this.heap[currentIndex]
    ) {
      const maxIndex =
        this.heap[leftChildIndex] >= this.heap[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      this.swap(maxIndex, currentIndex);
      currentIndex = maxIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return max;
  }
}
