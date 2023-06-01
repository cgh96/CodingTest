"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1260/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((e) => e.split(" ").map(Number));

const [N, M, V] = input.splice(0, 1)[0];
let graph = new Array(N + 1).fill().map((e) => []);

for (let i = 0; i < input.length; i++) {
  const [start, end] = input[i];
  graph[start].push(end);
  graph[end].push(start);
}

graph = graph.map((e) => e.sort((a, b) => a - b));

DFS();
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

function DFS() {
  const visited = new Array(N + 1).fill(false);
  visited[0] = true;
  const stack = [V];
  let answer = "";

  while (stack.length) {
    let current = stack.pop();
    if (!visited[current]) {
      visited[current] = true;
      answer += current + " ";

      for (let i = 0; i < graph[current].length; i++) {
        if (!visited[graph[current][i]]) {
          stack.push(graph[current][i]);
          break;
        }
      }
    }
  }
  console.log(answer);
}
