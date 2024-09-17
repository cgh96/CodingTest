"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const MOD = 1000000000;
const N = +input[0];

// dp[i][j] => 길이가 j인 수 중, i로 끝나는 계단 수의 개수
const dp = Array.from({ length: 10 }, () => new Array(N + 1).fill(0));

initializeDP();

for (let j = 2; j <= N; j++) {
  dp[0][j] = dp[1][j - 1] % MOD;
  dp[9][j] = dp[8][j - 1] % MOD;

  for (let i = 1; i <= 8; i++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i + 1][j - 1]) % MOD;
  }
}

console.log(getSumOfLastColumnOfDP());

function initializeDP() {
  for (let i = 1; i <= 9; i++) {
    dp[i][1] = 1;
  }
}

function getSumOfLastColumnOfDP() {
  let value = 0;

  for (let i = 0; i <= 9; i++) {
    value += dp[i][N];
  }

  return value % MOD;
}
