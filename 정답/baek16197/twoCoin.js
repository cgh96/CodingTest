"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, M] = input[0].split(" ").map((e) => +e);
const graph = input.slice(1).map((e) => e.split(""));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let min = Number.MAX_SAFE_INTEGER;

const [coin1, coin2] = getCoinPositions();
moveCoins(0, coin1, coin2);
console.log(min === Number.MAX_SAFE_INTEGER ? -1 : min);

function moveCoins(cnt, coin1, coin2) {
  if (cnt > min) {
    return;
  }

  if (cnt > 10) {
    return;
  }
  if (!isInside(...coin1) && !isInside(...coin2)) {
    return;
  }
  if (!isInside(...coin1) || !isInside(...coin2)) {
    min = Math.min(min, cnt);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let [dx1, dy1] = [coin1[0] + dir[i][0], coin1[1] + dir[i][1]];
    let [dx2, dy2] = [coin2[0] + dir[i][0], coin2[1] + dir[i][1]];

    if (isInside(dx1, dy1) && graph[dx1][dy1] === "#") {
      dx1 -= dir[i][0];
      dy1 -= dir[i][1];
    }

    if (isInside(dx2, dy2) && graph[dx2][dy2] === "#") {
      dx2 -= dir[i][0];
      dy2 -= dir[i][1];
    }

    moveCoins(cnt + 1, [dx1, dy1], [dx2, dy2]);
  }
}

function getCoinPositions() {
  const positions = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === "o") {
        positions.push([i, j]);
      }
    }
  }

  return positions;
}

function isInside(x, y) {
  if (x >= 0 && x < N && y >= 0 && y < M) {
    return true;
  }

  return false;
}
