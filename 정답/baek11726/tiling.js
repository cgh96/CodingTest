"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek11726/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const WIDTH = input.map(Number)[0];
const dp = [0, 1, 2];

for (let i = 3; i <= WIDTH; i++) {
  dp.push((dp[i - 1] + dp[i - 2]) % 10007);
}

console.log(dp[WIDTH]);

/**
 * f(1) = 1
 * f(2) = 2
 * f(3) = 3
 * f(4) = 5
 * f(5) = 8
 */
