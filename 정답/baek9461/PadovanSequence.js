"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./baek9461/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.slice(1).map((e) => Number(e));

const dp = [1, 1, 1, 2, 2];

for (let N of input) {
  while (N > dp.length) {
    dp.push(dp[dp.length - 1] + dp[dp.length - 5]);
  }
  console.log(dp[N - 1]);
}

/**
 * 1 3
 * 1 5
 * 2 6
 * 3 7
 * 4 8
 * 5 9
 * 6 10
 */
