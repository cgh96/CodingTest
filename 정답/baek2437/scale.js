"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const n = input.splice(0, 1)[0][0];
let scaleType = input[0].sort((a, b) => a - b);
let ans = 0;
for (let i = 0; i < n; i++) {
  if (scaleType[i] > ans + 1) {
    break;
  }
  ans += scaleType[i];
}

console.log(ans + 1);
