"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.splice(0, 1)[0].split(" ").map(Number);
const BOX = [];
let queue = [];
let days = -1;

for (let x = 0; x < N; x++) {
  const tmp = input[x].split(" ").map((e, y) => {
    if (e === "1") {
      queue.push([x, y]);
    }
    return +e;
  });

  BOX.push(tmp);
}

getDays();
console.log(isThereUnRipeTomato(BOX) ? -1 : days);
function getDays() {
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length) {
    const todayQueue = [...queue];
    queue = [];
    days++;

    let idx = 0;
    while (todayQueue.length != idx) {
      const [cx, cy] = todayQueue[idx];
      idx++;
      for (let i = 0; i < 4; i++) {
        const [dx, dy] = DIRECTIONS[i];
        const [nx, ny] = [cx + dx, cy + dy];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (BOX[nx][ny] === -1) continue;
        if (BOX[nx][ny] === 1) continue;
        queue.push([nx, ny]);
        BOX[nx][ny] = 1;
      }
    }
  }
}

function isThereUnRipeTomato(box) {
  for (let i = 0; i < N; i++) {
    if (box[i].includes(0)) {
      return true;
    }
  }
  return false;
}
