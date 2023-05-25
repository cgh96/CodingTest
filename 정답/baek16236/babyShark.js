"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek16236/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const MAP_SIZE = Number(input[0]);
const MAP = input.slice(1).map((e) => e.split(" ").map(Number));
let [curX, curY] = [0, 0];
let fish = [];
let sharkSize = 2;
let exp = sharkSize;
let time = 0;

for (let i = 0; i < MAP_SIZE; i++) {
  for (let j = 0; j < MAP_SIZE; j++) {
    if (MAP[i][j] === 9) {
      [curX, curY] = [i, j];
      MAP[i][j] = 0;
    }
  }
}

BFS(curX, curY);

function BFS(startX, startY) {
  let visited = new Array(MAP_SIZE)
    .fill()
    .map((e) => new Array(MAP_SIZE).fill(false));

  const queue = [[startX, startY, 0]]; // 현재 위치에서 갈 수 있는 곳
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  fish = []; // 아기 상어가 현재 먹을 수 있는 먹이의 위치

  while (queue.length) {
    const [curX, curY, curD] = queue[0];
    visited[curX][curY] = true;
    queue.splice(0, 1);

    for (let i = 0; i < 4; i++) {
      const nextX = curX + directions[i][0];
      const nextY = curY + directions[i][1];
      const nextD = curD + 1;

      if (nextX < 0 || nextY < 0 || nextX >= MAP_SIZE || nextY >= MAP_SIZE) {
        continue;
      }

      if (!visited[nextX][nextY] && MAP[nextX][nextY] <= sharkSize) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, nextD]);

        if (MAP[nextX][nextY] !== 0 && MAP[nextX][nextY] < sharkSize) {
          fish.push([nextX, nextY, nextD]);
        }
      }
    }
  }
}

while (fish.length) {
  if (fish.length === 1) {
    curX = fish[0][0];
    curY = fish[0][1];
    MAP[curX][curY] = 0;
    exp--;

    if (exp === 0) {
      sharkSize++;
      exp = sharkSize;
    }
    time += fish[0][2];
    fish.splice(0, 1);
    BFS(curX, curY);
  } else if (fish.length >= 2) {
    fish.sort((a, b) => {
      let A = a[2];
      let B = b[2];
      if (A < B) return -1;
      else if (A > B) return 1;
      else {
        A = a[0];
        B = b[0];
        if (A < B) return -1;
        else if (A > B) return 1;
        else {
          A = a[1];
          B = b[1];
          if (A < B) return -1;
          else if (A > B) return 1;
          else return 0;
        }
      }
    });

    curX = fish[0][0];
    curY = fish[0][1];
    MAP[curX][curY] = 0;

    exp--;

    if (exp === 0) {
      sharkSize++;
      exp = sharkSize;
    }
    time += fish[0][2];
    fish.splice(0, 1);
    BFS(curX, curY);
  }
}
if (fish.length === 0) return console.log(time);
// 아기상어 initial_size = 2
// [-1, 0] [0, 1], [1, 0], [0, -1]
