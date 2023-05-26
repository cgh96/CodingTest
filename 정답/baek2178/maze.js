"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2178/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [targetX, targetY] = input[0].split(" ").map(Number);
input.splice(0, 1);

const MAZE = input.map((e) => e.split("").map(Number));

BFS();

function BFS() {
  const queue = [[0, 0, 1]];
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (queue.length) {
    const [curX, curY, curD] = queue[0];
    queue.splice(0, 1);

    if (curX === targetX - 1 && curY === targetY - 1) {
      console.log(curD);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY, nextD] = [
        curX + directions[i][0],
        curY + directions[i][1],
        curD + 1,
      ];

      if (nextX < 0 || nextY < 0 || nextX >= targetX || nextY >= targetY) {
        continue;
      }

      if (
        MAZE[nextX][nextY] &&
        !queue.find((e) => e[0] === nextX && e[1] === nextY)
      ) {
        MAZE[curX][curY] = 0;
        queue.push([nextX, nextY, nextD]);
      }
    }
  }
}
