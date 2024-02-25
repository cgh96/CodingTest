"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const TIME_TABLE = input
  .slice(1)
  .map((e) => e.split(" ").map((i) => +i))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

let COMPLETED_CNT = 1;
let curEndTime = TIME_TABLE[0][1];

for (let i = 1; i < TIME_TABLE.length; i++) {
  const nextStartTime = TIME_TABLE[i][0];

  if (nextStartTime >= curEndTime) {
    curEndTime = TIME_TABLE[i][1];
    COMPLETED_CNT++;
  }
}

console.log(COMPLETED_CNT);

/**
 * 1. 가장 먼저 끝나는 회의 A를 찾는다.
 *  - 빨리 끝나는 회의 부터 오도록 정렬
 *  - 끝나는 시간이 같다면, 시작 시간이 빠른 것 부터 오도록 정렬
 * 2. 시작 시간이 A의 종료 시간보다 뒤면서 가장 먼저 끝나는 회의를 찾는다.
 */
