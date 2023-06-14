"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek14500/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const [N, M] = input.splice(0, 1)[0];
const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let max = 0;
let visited = new Array(N).fill().map((e) => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = 1;
    DFS(i, j, input[i][j], 1);
    visited[i][j] = 0;
  }
}

console.log(max);

function DFS(x, y, curVal, cnt) {
  if (cnt === 4) {
    max = Math.max(max, curVal);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [nextX, nextY] = [x + direction[i][0], y + direction[i][1]];

    if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) {
      continue;
    }

    if (cnt === 2 && visited[nextX][nextY] === 0) {
      visited[nextX][nextY] = 1;
      DFS(x, y, curVal + input[nextX][nextY], cnt + 1);
      visited[nextX][nextY] = 0;
    }

    if (cnt < 4 && visited[nextX][nextY] === 0) {
      visited[nextX][nextY] = 1;
      DFS(nextX, nextY, curVal + input[nextX][nextY], cnt + 1);
      visited[nextX][nextY] = 0;
    }
  }
}
