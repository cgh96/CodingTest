"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

const NUMBERS = new Array(10).fill(false);
const answer = [];

for (let i = 0; i <= 9; i++) {
  answer.push(i);
  getDecNum(i, i);
}

function getDecNum(now, prev) {
  for (let i = 0; i < prev; i++) {
    answer.push(now * 10 + i);
    getDecNum(now * 10 + i, i);
  }
}
answer.sort((a, b) => a - b);

console.log(N < 1023 ? answer[N] : -1);

/**
 * 1. 0 ~ 987654321 사이에 '감소하는 수' 모두 구해서 배열에 넣기
 * 2. 오름차순으로 정렬
 * 3. answer[N]
 */
