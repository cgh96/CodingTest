"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1987/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [R, C] = input[0].split(" ").map(Number);
const map = new Array(R);
for (let i = 0; i < map.length; i++) {
  map[i] = input[i + 1].trim().split("");
}
let visit = new Array(26).fill(false);
visit[map[0][0].charCodeAt() - 65] = true;

let answer = 1;

DFS(0, 0, 1);
console.log(answer);

function DFS(curX, curY, cnt) {
  answer = Math.max(answer, cnt);

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < 4; i++) {
    const [nextX, nextY] = [curX + dir[i][0], curY + dir[i][1]];

    if (nextX < 0 || nextY < 0 || nextX >= R || nextY >= C) {
      continue;
    }

    if (visit[map[nextX][nextY].charCodeAt() - 65] === false) {
      visit[map[nextX][nextY].charCodeAt() - 65] = true;
      DFS(nextX, nextY, cnt + 1);
      visit[map[nextX][nextY].charCodeAt() - 65] = false;
    }
  }
}

/**
 * passed = []
 * stack = [current]
 *
 * 1. current = stack.pop()
 * 2. dir stack.push() cnt++ => current != next, !passed.includes(next)
 * 3. passed.push([current, next]);
 */
