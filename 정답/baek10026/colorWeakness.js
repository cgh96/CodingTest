"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek10026/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let common = 0;
let weakness = 0;

const N = Number(input.shift());

const graph = input.map((v) => v.split(""));
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      DFS(i, j);
      common++;
    }
  }
}
visited = Array.from(Array(N), () => Array(N).fill(false));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] == "R") graph[i][j] = "G";
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      DFS(i, j);
      weakness++;
    }
  }
}
console.log(common + " " + weakness);

function DFS(i, j) {
  const [curX, curY] = [i, j];
  visited[curX][curY] = true;

  for (let i = 0; i < 4; i++) {
    const [nextX, nextY] = [curX + dir[i][0], curY + dir[i][1]];

    if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < N) {
      if (!visited[nextX][nextY] && graph[nextX][nextY] === graph[curX][curY]) {
        DFS(nextX, nextY);
      }
    }
  }
}
