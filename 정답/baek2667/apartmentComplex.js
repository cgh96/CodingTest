"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2667/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const MAP_SIZE = Number(input[0]);
const APARTMENT_COMPLEX = [];
let count = 0;
input.splice(0, 1);

const map = input.map((e) => e.split("").map(Number));
let queue = [];
console.log(map.map((e) => e.join("")));

while (true) {
  queue = [];
  count = 0;

  for (let i = 0; i < MAP_SIZE; i++) {
    for (let j = 0; j < MAP_SIZE; j++) {
      if (map[i][j] === 1) {
        queue.push([i, j]);
        count++;
        break;
      }

      if (i === MAP_SIZE - 1 && j === MAP_SIZE - 1) {
        console.log(APARTMENT_COMPLEX.length);
        if (APARTMENT_COMPLEX.length === 0) {
          return;
        }

        APARTMENT_COMPLEX.sort((a, b) => a - b).forEach((e) => {
          console.log(e);
        });
        return;
      }
    }

    if (queue.length) {
      break;
    }
  }

  BFS();
  console.log(map.map((e) => e.join("")));
}

function BFS() {
  const direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [cx, cy] = queue[0];
    map[cx][cy] = 0;
    queue.splice(0, 1);

    for (let i = 0; i < 4; i++) {
      const tx = cx + direction[i][0];
      const ty = cy + direction[i][1];

      if (tx < 0 || ty < 0 || tx >= MAP_SIZE || ty >= MAP_SIZE) {
        continue;
      }

      if (map[tx][ty] === 1 && !queue.find((e) => e[0] === tx && e[1] === ty)) {
        queue.push([tx, ty]);
        count++;
      }
    }
  }
  APARTMENT_COMPLEX.push(count);
}

/**
 * 1.map을 처음부터 돌면서 1을 만나면 STOP
 * 2.BFS
 * 2-1. 현재 위치에서 1인곳들을 queue에 push
 * 2-2. 현재 위치는 queue에서 제거 하고, 현재 위치의 값을 1에서 true로 변경, "집의 수" 카운팅
 *
 */
