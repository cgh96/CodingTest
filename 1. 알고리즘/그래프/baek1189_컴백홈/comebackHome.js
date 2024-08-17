"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C, K] = input[0].split(" ").map(Number);
const road = input
  .slice(1)
  .reverse()
  .map((row) => row.split(""));
const visited = Array.from({ length: R }, () => new Array(C).fill(false));

visited[0][0] = true;
updateVisitedByTValue(road, visited, R, C);

let answer = 0;

const [targetX, targetY] = [R - 1, C - 1];
const dirctions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

DFS(0, 0, 1);

console.log(answer);

function DFS(curX, curY, distance) {
  if (distance > K) return 0;
  if (distance < K && curX === targetX && curY === targetY) return 0;
  if (distance === K && curX === targetX && curY === targetY) return answer++;

  for (let i = 0; i < dirctions.length; i++) {
    const [dirX, dirY] = dirctions[i];
    const [nextX, nextY] = [curX + dirX, curY + dirY];

    // 범위를 벗어난 경우
    if (nextX < 0 || nextX >= R || nextY < 0 || nextY >= C) continue;

    // 이미 방문한 경우
    if (visited[nextX][nextY]) continue;

    visited[nextX][nextY] = true;
    DFS(nextX, nextY, distance + 1);
    visited[nextX][nextY] = false;
  }

  return 0;
}

/** road의 T를 찾아서 방문 처리 */
function updateVisitedByTValue(road, visited, row, col) {
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      if (road[x][y] === "T") {
        visited[x][y] = true;
      }
    }
  }
}
