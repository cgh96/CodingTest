"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2156/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map(Number);

const number_of_glass = input.splice(0, 1)[0];
const glass = input;

if (glass.length === 1) {
  console.log(glass[0]);
  return;
}

if (glass.length === 2) {
  console.log(glass[0] + glass[1]);
  return;
}

const dp = [glass[0], glass[1] + glass[0]];

for (let i = 2; i < glass.length; i++) {
  if (i === 2) {
    dp.push(Math.max(dp[1], dp[0] + glass[2], dp[1] - dp[0] + glass[2]));
    continue;
  }

  dp.push(
    Math.max(
      dp[i - 1],
      dp[i - 2] + glass[i],
      glass[i - 1] + glass[i] + dp[i - 3]
    )
  );
}

console.log(dp.pop());
/**
 * dp[0] = glass[0];
 * dp[1] = glass[0] + glass[1];
 * dp[2] = Max(dp[1], dp[0] + glass[2], dp[1] - dp[0] + glass[2]);
 * dp[3] = Max(dp[2], dp[1] + glass[3], dp[2] - dp[1] + glass[3] + dp[0]);
 */
