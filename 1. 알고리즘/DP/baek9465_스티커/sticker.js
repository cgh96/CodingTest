"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input[0];

for (let t = 0; t < T; t++) {
  const n = +input[t * 3 + 1];
  const stickers = parseToNumbers([
    "0 " + input[t * 3 + 2],
    "0 " + input[t * 3 + 3],
  ]);

  /** dp[x][y] : 마지막으로 더한 값이 sticker[x][y]일 때의 최대값 */
  const dp = Array.from({ length: 2 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  dp[0][1] = stickers[0][1];
  dp[1][1] = stickers[1][1];

  for (let col = 2; col <= n; col++) {
    dp[0][col] = Math.max(dp[1][col - 1], dp[1][col - 2]) + stickers[0][col];
    dp[1][col] = Math.max(dp[0][col - 1], dp[0][col - 2]) + stickers[1][col];
  }

  console.log(Math.max(dp[0][n], dp[1][n]));
}

function parseToNumbers(strings) {
  return strings.map((str) => str.split(" ").map(Number));
}
