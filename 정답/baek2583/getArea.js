"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2583/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map((i) => Number(i)));

const [M, N, K] = input[0];
const graph = new Array(M).fill().map((e) => new Array(N).fill(0));
const visited = new Array(M).fill().map((e) => new Array(N).fill(false));
let cnt = 0;
const spaceArr = [];

for (let i = 1; i <= K; i++) {
  const [startX, startY, endX, endY] = input[i];

  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (x >= startX && x < endX && y >= startY && y < endY) {
        graph[y][x] = 1;
      }
    }
  }
}

for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (graph[y][x] === 0 && !visited[y][x]) {
      DFS(y, x);
      cnt++;
    }
  }
}

console.log(cnt);
console.log(spaceArr.sort((a, b) => a - b).join(" "));

function DFS(y, x) {
  let space = 0;
  const stack = [[y, x]];
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  visited[y][x] = true;

  while (stack.length) {
    const [curY, curX] = stack.pop();
    space++;

    for (let i = 0; i < 4; i++) {
      const [nextY, nextX] = [curY + dir[i][0], curX + dir[i][1]];

      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) {
        continue;
      }

      if (!visited[nextY][nextX] && graph[nextY][nextX] === 0) {
        stack.push([nextY, nextX]);
        visited[nextY][nextX] = true;
      }
    }
  }
  spaceArr.push(space);
}
