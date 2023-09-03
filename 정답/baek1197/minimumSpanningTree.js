"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

class MinHeap {
  constructor() {
    this.minHeap = [0];
  }

  length() {
    return this.heap.length - 1;
  }

  swap(idx1, idx2) {
    [this.minHeap[idx1], this.minHeap[idx2]] = [
      this.minHeap[idx2],
      this.minHeap[idx1],
    ];
  }

  push(start, end, cost) {
    this.minHeap.push([start, end, cost]);
    let curIdx = this.minHeap.length - 1;
    let parentIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.minHeap[parentIdx][2] > this.minHeap[curIdx][2]) {
      this.swap(parentIdx, curIdx);
      curIdx = parentIdx;
      parentIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    let root = this.minHeap[1];

    if (this.minHeap.length === 2) {
      this.minHeap = [0];
      return root;
    }

    this.minHeap[1] = this.minHeap.pop();

    let curIdx = 1;
    let leftChildIdx = curIdx * 2;
    let rightChildIdx = curIdx * 2 + 1;

    if (this.minHeap.length - 1 < leftChildIdx) {
      return root;
    }

    if (this.minHeap.length - 1 < rightChildIdx) {
      if (this.minHeap[curIdx][2] > this.minHeap[leftChildIdx][2]) {
        this.swap(leftChildIdx, curIdx);
        return root;
      }
    }

    while (
      this.minHeap.length - 1 >= rightChildIdx &&
      (this.minHeap[leftChildIdx][2] < this.minHeap[curIdx][2] ||
        this.minHeap[rightChildIdx][2] < this.minHeap[curIdx][2])
    ) {
      let minIdx =
        this.minHeap[leftChildIdx][2] < this.minHeap[rightChildIdx][2]
          ? leftChildIdx
          : rightChildIdx;
      this.swap(minIdx, curIdx);

      curIdx = minIdx;
      leftChildIdx = curIdx * 2;
      rightChildIdx = curIdx * 2 + 1;
    }

    return root;
  }
}

function isSameParent(a, b, parentTable) {
  let A = findParent(a, parentTable);
  let B = findParent(b, parentTable);

  if (A === B) return true;
  return false;
}

function findParent(x, parentTable) {
  if (parentTable[x] !== x) {
    return (parentTable[x] = findParent(parentTable[x], parentTable));
  } else {
    return x;
  }
}

function unionParent(a, b, parentTable) {
  let A = findParent(a, parentTable);
  let B = findParent(b, parentTable);

  if (A < B) {
    parentTable[B] = A;
  } else {
    parentTable[A] = B;
  }
}

const [V, E] = input[0].split(" ").map(Number);
input = input.slice(1).map((e) => e.split(" ").map(Number));

const graph = new MinHeap();
let parentTable = new Array(V + 1).fill(0).map((_, i) => i);
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const [start, end, cost] = input[i];
  graph.push(start, end, cost);
}

while (graph.minHeap.length > 1) {
  let cur = graph.pop();
  let [start, end, cost] = cur;

  if (!isSameParent(start, end, parentTable)) {
    unionParent(start, end, parentTable);
    answer += cost;
  }
}

console.log(answer);
