"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const day = +input[0];
const table = input.slice(1).map((e) => e.split(" ").map((i) => +i));
const dp = new Array(day).fill(0);

for (let i = 0; i < day; i++) {
  const [duration, profit] = table[i];
  if (i + duration > day) continue;
  dp[i] += profit;

  for (let j = i + duration; j < day; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}

console.log(Math.max(...dp));
