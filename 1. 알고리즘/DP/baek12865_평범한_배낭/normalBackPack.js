"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.splice(0, 1)[0].split(" ").map(Number);
const BURDENS = [[0, 0], ...input.map((e) => e.split(" ").map(Number))];

const dp = new Array(N + 1).fill().map((_) => new Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < K + 1; j++) {
    const [weight, value] = BURDENS[i];

    if (weight <= j) {
      dp[i][j] = Math.max(value + dp[i - 1][j - weight], dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[N][K]);
/**
 * dp[i][j] => i : 물건 갯수, j : 배낭 한계
 */
