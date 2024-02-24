"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(BFS());

function BFS() {
  const TABLE_SIZE = +input[0];
  const [startX, startY, endX, endY] = input[1].split(" ").map((e) => +e);
  const VISITED = new Array(200).fill().map((_) => new Array(200).fill(false));

  const dir = [
    [-2, -1],
    [-2, 1],
    [0, -2],
    [0, 2],
    [2, -1],
    [2, 1],
  ];

  const queue = [[startX, startY, 0]];
  VISITED[startX][startY] = true;

  while (queue.length > 0) {
    const [curX, curY, curMoveCnt] = queue.shift();

    if (curX === endX && curY === endY) {
      return curMoveCnt;
    }

    for (let i = 0; i < 6; i++) {
      const [nextX, nextY, nextMoveCnt] = [
        curX + dir[i][0],
        curY + dir[i][1],
        curMoveCnt + 1,
      ];

      if (
        nextX < 0 ||
        nextX >= TABLE_SIZE ||
        nextY < 0 ||
        nextY >= TABLE_SIZE ||
        VISITED[nextX][nextY]
      ) {
        continue;
      }
      queue.push([nextX, nextY, nextMoveCnt]);
      VISITED[nextX][nextY] = true;
    }
  }

  return -1;
}
