"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCaseList = input.slice(1).map((e) => e.split(" ").map((i) => +i));

for (let [x, y] of testCaseList) {
  let dist = y - x;

  const isDistSquareRoot = Math.sqrt(dist) % 1 === 0;

  if (isDistSquareRoot) {
    console.log(2 * Math.sqrt(dist) - 1);
  } else {
    const lower = Math.floor(Math.sqrt(dist)) ** 2;
    const greater = Math.ceil(Math.sqrt(dist)) ** 2;

    const mid = Math.floor((lower + greater) / 2);

    if (mid >= dist) {
      console.log(Math.sqrt(lower) * 2);
    } else {
      console.log(Math.sqrt(lower) * 2 + 1);
    }
  }
}

/**
 * dist = n의 제곱  ====> 기계 작동 횟수 = 2n - 1
 *
 * dist
 */
