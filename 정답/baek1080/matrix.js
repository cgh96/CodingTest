"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);
input = input.slice(1).map((e) => e.split("").map((i) => +i));
const matrix1 = input.slice(0, N);
const matrix2 = input.slice(N);
let flipCnt = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = 0; j < M - 2; j++) {
    if (matrix1[i][j] !== matrix2[i][j]) {
      reverseMatrix(i, j);
      flipCnt++;
    }
  }
}

isSameMatrix();

console.log(!isSameMatrix() ? -1 : flipCnt);

function isSameMatrix() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function reverseMatrix(curX, curY) {
  for (let i = curX; i < curX + 3; i++) {
    for (let j = curY; j < curY + 3; j++) {
      if (matrix1[i][j] === 1) {
        matrix1[i][j] = 0;
      } else {
        matrix1[i][j] = 1;
      }
    }
  }
}
