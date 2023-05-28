"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1753/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((e) => Number(e)));

const [V, E] = input[0];
const start = input[1][0];
const graph = new Array(V + 1).fill().map((e) => new Array());

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
      this.heap[parentIdx].cost > this.heap[currentIdx].cost
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

    while (true) {
      if (leftChildIdx >= this.heap.length) {
        // 자식 노드가 없는 경우
        return min;
      }

      if (
        leftChildIdx < this.heap.length &&
        rightChildIdx >= this.heap.length
      ) {
        // 왼쪽 자식만 있는 경우
        if (this.heap[leftChildIdx].cost < this.heap[currentIdx].cost) {
          let tmp = this.heap[leftChildIdx];
          this.heap[leftChildIdx] = this.heap[currentIdx];
          this.heap[currentIdx] = tmp;
        }
        return min;
      }

      if (rightChildIdx < this.heap.length) {
        // 양쪽 자식 모두 있는 경우
        if (this.heap[leftChildIdx].cost < this.heap[rightChildIdx].cost) {
          let tmp = this.heap[leftChildIdx];
          this.heap[leftChildIdx] = this.heap[currentIdx];
          this.heap[currentIdx] = tmp;
          currentIdx = leftChildIdx;
        } else {
          let tmp = this.heap[rightChildIdx];
          this.heap[rightChildIdx] = this.heap[currentIdx];
          this.heap[currentIdx] = tmp;
          currentIdx = rightChildIdx;
        }
        leftChildIdx = currentIdx * 2;
        rightChildIdx = currentIdx * 2 + 1;
      }
    }
  }
}

function dijkstra(graph) {
  const cost = new Array(V + 1).fill(Infinity); // 시작점에서 목표 idx까지 cost

  cost[start] = 0;
  const heap = new MinHeap();

  heap.insert({ vertex: start, cost: 0 });

  while (heap.heap.length > 1) {
    const current = heap.delete(); // 현재 최소값 추출(root Node)

    if (graph[start] === undefined) continue;
    if (cost[start] < cost) continue;
    for (let i = 0; i < graph[current.vertex].length; i++) {
      const [nextV, nextC] = graph[current.vertex][i];
      if (cost[nextV] > current.cost + nextC) {
        cost[nextV] = current.cost + nextC;
        heap.insert({ vertex: nextV, cost: cost[nextV] });
      }
    }
  }

  return cost;
}

const result = dijkstra(graph);
const answer = [];

for (let i = 1; i <= V; i++) {
  if (result[i] === Infinity) answer.push("INF");
  else answer.push(result[i]);
}
console.log(answer.join("\n"));
