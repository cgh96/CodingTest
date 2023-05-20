"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek7562/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map(Number));

for (let i = 1; i < input.length; i += 3) {
  const size = input[i][0];
  const [x, y] = input[i + 1];
  const [targetX, targetY] = input[i + 2];
  const queue = [];
  queue.push([x, y]);
  const visit = new Array(size).fill().map((e) => new Array(size).fill(0));
  visit[x][y] = 0;

  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  while (queue.length) {
    const [cx, cy] = queue[0];
    queue.splice(0, 1);
    if (cx === targetX && cy === targetY) {
      console.log(visit[cx][cy]);
      break;
    }

    for (let j = 0; j < 8; j++) {
      const nx = cx + dx[j];
      const ny = cy + dy[j];
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) {
        continue;
      }

      if (!visit[nx][ny]) {
        visit[nx][ny] = visit[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}
