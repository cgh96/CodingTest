"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek4963/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map((i) => Number(i)));
const result = [];
input.pop();

while (input.length) {
  const [w, h] = input[0];
  const map = input.slice(1, 1 + h);
  let ground = 0;

  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      if (map[x][y] === 1) {
        DFS(x, y, h, w, map);
        ground++;
      }
    }
  }
  result.push(ground);
  input.splice(0, 1 + h);
}

console.log(result.join("\n"));

function DFS(x, y, h, w, map) {
  const stack = [[x, y]];

  const dir = [
    [0, 1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  while (stack.length) {
    const [curX, curY] = stack.pop();

    for (let i = 0; i < 8; i++) {
      const [nextX, nextY] = [curX + dir[i][0], curY + dir[i][1]];
      if (nextX < 0 || nextY < 0 || nextX >= h || nextY >= w) {
        continue;
      }

      if (map[nextX][nextY] === 1) {
        stack.push([nextX, nextY]);
        map[nextX][nextY] = 0;
      }
    }
  }
}
