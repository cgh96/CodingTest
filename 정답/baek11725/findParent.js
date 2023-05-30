"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek11725/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const V = input[0][0];
const edge_List = input.slice(1);
const graph = new Array(V + 1).fill().map((e) => []);
const visited = new Array(V + 1).fill().map((e) => false);
const parent = new Array(V + 1);

visited[0] = null;

for (let i = 0; i < edge_List.length; i++) {
  const [start, end] = edge_List[i];
  graph[start].push(end);
  graph[end].push(start);
}

BFS();

parent.splice(0, 2);
console.log(parent.join("\n").trim());

function BFS() {
  const queue = [1];

  while (queue.length) {
    const current = queue[0];
    visited[current] = true;
    queue.splice(0, 1);

    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];

      if (!visited[next] && !queue.includes(next)) {
        queue.push(next);
        parent[next] = current;
      }
    }
  }
}
