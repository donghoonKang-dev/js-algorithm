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

    if (!this.head) this.head = node;
    else this.rear.next = node;

    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) return false;

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
