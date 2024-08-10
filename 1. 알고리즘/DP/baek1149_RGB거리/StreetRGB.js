"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const question = input.map((line) => line.split(" ").map((str) => +str));
const HOUSE_CNT = question[0];
const houseCosts = question.slice(1);

const dp = Array.from({ length: HOUSE_CNT }, () => new Array(3).fill(0));

dp[0] = houseCosts[0];

for (let i = 1; i < dp.length; i++) {
  for (let color = 0; color < 3; color++) {
    switch (color) {
      case 0:
        dp[i][color] =
          Math.min(dp[i - 1][1], dp[i - 1][2]) + houseCosts[i][color];
        break;
      case 1:
        dp[i][color] =
          Math.min(dp[i - 1][0], dp[i - 1][2]) + houseCosts[i][color];
        break;
      case 2:
        dp[i][color] =
          Math.min(dp[i - 1][0], dp[i - 1][1]) + houseCosts[i][color];
        break;
    }
  }
}

console.log(Math.min(...dp[HOUSE_CNT - 1]));
