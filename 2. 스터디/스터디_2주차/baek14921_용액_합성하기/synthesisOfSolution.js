"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const SOLUTION_CNT = +input[0];
const SOLUTION_LIST = input.slice(1).map((e) => e.split(" ").map((i) => +i))[0];

let start = 0;
let end = SOLUTION_CNT - 1;
let min = Number.MAX_SAFE_INTEGER;

while (start < end) {
  const sum = SOLUTION_LIST[start] + SOLUTION_LIST[end];
  min = Math.abs(min) > Math.abs(sum) ? sum : min;
  if (sum > 0) {
    end--;
  }

  if (sum < 0) {
    start++;
  }

  if (sum === 0) {
    break;
  }
}

console.log(min);

/**
 * 용액 특성 값 : -1억 <= K <= 1억
 * 용액 개수 : 2 ≤ N ≤ 10만
 * 브루트 포스 : 연산횟수 => 10만 ** 2 = 100억 O(N**2)
 * 투 포인터 => 시작값, 끝값
 */
