"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [T, W] = input.splice(0, 1)[0].split(" ").map(Number);

const dp = new Array(T + 1).fill().map((_) => new Array(W + 1).fill(0));

for (let time = 1; time <= T; time++) {
  for (let move = 0; move <= W; move++) {
    const curPos = move % 2 === 0 ? 1 : 2;
    const curTree = +input[time - 1];
    if (curPos === curTree) {
      if (move === 0) {
        dp[time][move] = dp[time - 1][move] + 1;
      } else {
        dp[time][move] =
          Math.max(dp[time - 1][move - 1], dp[time - 1][move]) + 1;
      }
    } else {
      if (move === 0) {
        dp[time][move] = dp[time - 1][move];
      } else {
        dp[time][move] = Math.max(dp[time - 1][move - 1], dp[time - 1][move]);
      }
    }
  }
}

console.log(Math.max(...dp[T]));

/**
 *  dp[시간][이동 횟수] => 최대 먹은 갯수
 *
 */
