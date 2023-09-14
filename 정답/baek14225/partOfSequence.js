"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((e) => Number(e)));

const [N] = input[0];
const sequence = input[1];
const numberList = new Array(100010 * N).fill(false);

for (let i = 0; i < 1 << N; i++) {
  // 부분 수열의 모든 경우의 수
  let createNumber = 0;
  for (let j = 0; j < N; j++) {
    if (i & (1 << j)) {
      createNumber += sequence[j];
    }
  }
  numberList[createNumber] = true;
}

for (let i = 1; i < numberList.length; i++) {
  if (numberList[i] === false) {
    console.log(i);
    break;
  }
}
