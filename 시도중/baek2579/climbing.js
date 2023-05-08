"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2579/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => Number(e));

const dp = new Array(input[0] + 1).fill(0);

if (input.length === 2) {
  console.log(input[1]);
  return;
} else if (input.length === 3) {
  console.log(input[1] + input[2]);
  return;
} else if (input.length === 4) {
  console.log(Math.max(input[1], input[2]) + input[3]);
  return;
}

dp[1] = input[1];
dp[2] = input[1] + input[2];
dp[3] = Math.max(input[1], input[2]) + input[3];

for (let i = 4; i < input.length; i++) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i] + input[i - 1]);
}
console.log(dp[dp.length - 1]);
