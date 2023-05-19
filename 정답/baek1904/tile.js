"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1904/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input[0]);
const dp = [0, 1, 2];

for (let i = 3; i <= N; i++) {
  dp.push((dp[i - 1] + dp[i - 2]) % 15746);
}

console.log(dp[N]);

/**
 * 1
 * 00 11
 * 111 001 100
 * 0011 1100 1001 1111 0000
 * 11100 11111 00100 00111 10000 10011 11001 00001
 */
