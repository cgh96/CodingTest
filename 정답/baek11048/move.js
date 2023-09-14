"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map((e) => Number(e)));

const [N, M] = input[0];
const maze = input.slice(1);

const dir = [
  [0, 1],
  [1, 1],
  [1, 0],
];

if (M === 1 && N === 1) {
  console.log(maze[0][0]);
  return;
}

const dp = new Array(N).fill().map((_) => new Array(M).fill(1));

dp[0][0] = maze[0][0];

for (let i = 1; i < M; i++) {
  dp[0][i] = maze[0][i] + dp[0][i - 1];
}

for (let j = 1; j < N; j++) {
  dp[j][0] = maze[j][0] + dp[j - 1][0];
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j < M; j++) {
    dp[i][j] =
      Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + maze[i][j];
  }
}

console.log(dp[N - 1][M - 1]);
