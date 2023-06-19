"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((e) => Number(e)));

const [V, E] = input[0];
const start = input[1][0];
const graph = new Array(V + 1).fill().map((e) => new Array());
const cost = new Array(V + 1).fill(Infinity); // 시작점에서 목표 idx까지 cost
const visited = new Array(V + 1).fill(false);

for (let i = 2; i < input.length; i++) {
  const [start, end, weight] = input[i];
  graph[start].push([end, weight]);
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);
    currentIdx / 2;
    while (
      currentIdx > 1 &&
      this.heap[parentIdx][1] > this.heap[currentIdx][1]
    ) {
      const tmp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[currentIdx];
      this.heap[currentIdx] = tmp;

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  delete() {
    let min = this.heap[1];
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) {
      this.heap.pop();
      return min;
    }

    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftChildIdx = currentIdx * 2;
    let rightChildIdx = currentIdx * 2 + 1;

    if (!this.heap[leftChildIdx]) return min;
    // 왼쪽 자식이 없다는 것은 오른쪽 자식도 없는, 즉 루트만 있는 상태이므로 바로 반환
    if (!this.heap[rightChildIdx]) {
      if (this.heap[leftChildIdx][1] < this.heap[currentIdx][1]) {
        [this.heap[leftChildIdx], this.heap[currentIdx]] = [
          this.heap[currentIdx],
          this.heap[leftChildIdx],
        ];
        // 오른쪽 자식이 없다면 왼쪽 자식하나만 있다는 것을 의미한다.
      }
      return min;
    }

    while (
      this.heap[leftChildIdx][1] < this.heap[currentIdx][1] ||
      this.heap[rightChildIdx][1] < this.heap[currentIdx][1]
    ) {
      const minIdx =
        this.heap[leftChildIdx][1] > this.heap[rightChildIdx][1]
          ? rightChildIdx
          : leftChildIdx;
      [this.heap[minIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[minIdx],
      ];

      currentIdx = minIdx;
      leftChildIdx = currentIdx * 2;
      rightChildIdx = currentIdx * 2 + 1;
    }
    return min;
  }
}

function dijkstra(graph) {
  cost[start] = 0;
  const heap = new MinHeap();

  heap.insert([start, 0]);

  while (heap.heap.length > 1) {
    const [vertex, costs] = heap.delete(); // 현재 최소값 추출(root Node)
    if (visited[vertex]) continue;
    visited[vertex] = true;

    for (let i = 0; i < graph[vertex].length; i++) {
      const [nextV, nextC] = graph[vertex][i];
      if (cost[nextV] > costs + nextC) {
        cost[nextV] = costs + nextC;
        heap.insert([nextV, cost[nextV]]);
      }
    }
  }

  return cost;
}

dijkstra(graph);

console.log(
  cost
    .map((i) => (i === Infinity ? "INF" : i))
    .slice(1)
    .join("\n")
);
