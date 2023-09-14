"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((e) => Number(e)));

const [N] = input[0];
const sequence = input[1];
const increaseDp = new Array(N).fill(1);
const decreaseDp = new Array(N).fill(1);
let answer = 0;

if (N === 1) {
  console.log(1);
  return;
}

for (let i = 0; i < N; i++) {
  let sequenceCnt = 1;

  for (let j = 0; j < i; j++) {
    if (sequence[j] < sequence[i]) {
      sequenceCnt = Math.max(sequenceCnt, increaseDp[j] + 1);
    }
  }

  increaseDp[i] = sequenceCnt;
}

for (let i = N - 1; i >= 0; i--) {
  let sequenceCnt = 1;
  for (let j = i + 1; j < N; j++) {
    if (sequence[j] < sequence[i]) {
      sequenceCnt = Math.max(sequenceCnt, decreaseDp[j] + 1);
    }
  }

  decreaseDp[i] = sequenceCnt;
}

for (let i = 0; i < N - 1; i++) {
  answer = Math.max(decreaseDp[i] + increaseDp[i], answer);
}

console.log(answer - 1);
