"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((e) => Number(e)));

let [N, K] = input[0];

let totalNumCnt = 0;
let digits = 1; // 자리수
let numCnt = 9;
let target = 0;

while (K > numCnt * digits) {
  K -= digits * numCnt;
  totalNumCnt += numCnt;
  digits++;
  numCnt *= 10;
}

target = totalNumCnt + 1 + Math.floor((K - 1) / digits);

if (target > N) {
  console.log(-1);
  return;
}

let idx = (K - 1) % digits;
console.log(target.toString().charAt(idx));

/**
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
 * 100 101 102 103 104 105 106 107 108 109
 *
 * 1 ~ 9 => 9개
 * 10 ~ 99 => 180개
 * 100 ~ 999 => 2700개
 * 1000 ~ 9999 => 36000개
 *
 * 9 * (square + 1) * 10 ** square
 */
