"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1260/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const [N, M, V] = input.splice(0, 1)[0];
let graph = new Array(N + 1).fill().map((e) => []);

for (let i = 0; i < input.length; i++) {
  const [start, end] = input[i];
  graph[start].push(end);
  graph[end].push(start);
}

graph = graph.map((e) => e.sort((a, b) => a - b));

const visited = new Array(N + 1).fill(false);
const path = [V];
visited[0] = true;
visited[V] = true;

function DFS(current) {
  for (let i = 0; i < graph[current].length; i++) {
    const next = graph[current][i];

    if (!visited[next]) {
      visited[next] = true;
      path.push(next);
      DFS(next);
    }
  }
}

DFS(V);
console.log(path.join(" "));
BFS();

function BFS() {
  const visited = new Array(N + 1).fill(false);
  visited[V] = true;
  visited[0] = true;
  const queue = [...graph[V]];
  const path = [V];

  while (queue.length) {
    const current = queue[0];
    queue.splice(0, 1);
    visited[current] = true;
    path.push(current);

    for (let i = 0; i < graph[current].length; i++) {
      if (!visited[graph[current][i]] && !queue.includes(graph[current][i])) {
        queue.push(graph[current][i]);
      }
    }
  }

  console.log(path.join(" "));
}
