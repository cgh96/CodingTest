"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1012/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

let M = 0;
let N = 0;
let cabbage_cnt = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i].length === 3) {
    let worm = 0;
    [M, N, cabbage_cnt] = input[i];
    let locations = input.slice(i + 1, i + 1 + input[i][2]);

    while (locations.length) {
      BFS(locations, locations[0][0], locations[0][1], M, N);
      worm++;
    }
    console.log(worm);
  }
  i += input[i][2];
}

function BFS(locations, startX, startY, M, N) {
  const queue = [[startX, startY]];
  locations.splice(0, 1);
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (queue.length) {
    const [curX, curY] = queue[0];

    queue.splice(0, 1);
    let cnt = 0;

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [curX + direction[i][0], curY + direction[i][1]];

      if (nextX < 0 || nextY < 0 || nextX >= M || nextY >= N) {
        continue;
      }
      const cabbage_loc = locations.findIndex(
        (e) => e[0] === nextX && e[1] === nextY
      );

      if (
        cabbage_loc !== -1 &&
        !queue.find((e) => e[0] === nextX && e[1] === nextY)
      ) {
        queue.push([nextX, nextY]);
        cnt++;
        locations.splice(cabbage_loc, 1);
      }
    }
  }
}
/**
 * input의 요소 길이가 3이면 [가로, 세로, 배추 개수]
 * input의 요소 길이가 2이면 [x, y] => 배추의 위치
 */
