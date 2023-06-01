"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2468/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input[0]);

input.splice(0, 1);
input = input.map((e) => e.split(" ").map(Number));

let cnt = 1;

for (let height = 0; height <= 100; height++) {
  let graph = input.map((e) => e.map((el) => (el > height ? 1 : 0)));

  let tmp = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1) {
        BFS(i, j, graph);
        tmp++;
      }
    }
  }

  if (tmp === 0) {
    break;
  }

  cnt = cnt < tmp ? tmp : cnt;
}
console.log(cnt);

function BFS(x, y, graph) {
  const queue = [[x, y]];
  graph[x][y] = 0;
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length) {
    const [curX, curY] = queue[0];
    queue.splice(0, 1);

    for (let k = 0; k < 4; k++) {
      const [nextX, nextY] = [curX + direction[k][0], curY + direction[k][1]];

      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < N &&
        nextY < N &&
        graph[nextX][nextY] === 1
      ) {
        queue.push([nextX, nextY]);
        graph[nextX][nextY] = 0;
      }
    }
  }
}
