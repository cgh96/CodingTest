"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const MAZE = input[1].split(" ").map((i) => +i);

const jumpCnt = new Array(N).fill(Number.MAX_SAFE_INTEGER);
jumpCnt[0] = 0;

for (let curIdx = 0; curIdx < N - 1; curIdx++) {
  const maxTargetIdx = Math.min(curIdx + MAZE[curIdx], N - 1);

  updateMinValueInJumpCntScope(curIdx + 1, maxTargetIdx);
}

console.log(jumpCnt[N - 1] === Number.MAX_SAFE_INTEGER ? -1 : jumpCnt[N - 1]);

function updateMinValueInJumpCntScope(start, end) {
  for (let i = start; i <= end; i++) {
    jumpCnt[i] = Math.min(jumpCnt[start - 1] + 1, jumpCnt[i]);
  }
}

/**
 * 1 2 0 1 3 2 1 5 4 2
 * jumpCnt[i] : 재환이가 i번째 칸에 도착하기까지 최소 몇번 점프해서 도착했는지
 *
 * 1. 현재 위치에서 움직일 수 있는 범위(최고 먼 거리)를 구한다.
 * 2. [다음 위치(현재 위치 + 1) ~ 이동할 수 있는 최고 거리]의 최소 점프 횟수 = 현재 위치 점프 횟수  + 1
 *
 */
