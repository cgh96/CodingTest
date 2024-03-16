"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.splice(0, 1)[0].split(" ").map(Number);
const BOARD = input.map((e) => e.split("").map(Number));

let largestSquareNumber = -1;

for (let rowIdx = 0; rowIdx < N; rowIdx++) {
  for (let colIdx = 0; colIdx < M; colIdx++) {
    for (let rSub = -N; rSub <= N; rSub++) {
      for (let colSub = -M; colSub <= M; colSub++) {
        updateLargestSquareNumber(rowIdx, colIdx, rSub, colSub);
      }
    }
  }
}

console.log(largestSquareNumber);

function updateLargestSquareNumber(rowIdx, colIdx, rSub, colSub) {
  let row = rowIdx;
  let col = colIdx;

  let connectedNum = 0;

  if (rSub === 0 && colSub === 0) {
    if (isSqaureNumber(BOARD[row][col])) {
      largestSquareNumber = Math.max(largestSquareNumber, connectedNum);
    }
    return;
  }

  while (row >= 0 && row < N && col >= 0 && col < M) {
    connectedNum = connectedNum * 10 + BOARD[row][col];

    if (isSqaureNumber(connectedNum)) {
      largestSquareNumber = Math.max(largestSquareNumber, connectedNum);
    }
    row += rSub;
    col += colSub;
  }
}
function isSqaureNumber(num) {
  return Math.sqrt(num) % 1 === 0;
}

/**
 * row 차 : -N ... N
 * column 차 : -M...M
 *
 * rowIdx : 0 ~ N - 1
 * colIDx : 0 ~ M - 1
 *
 * 표의 모든 위치에 대해서 등차수열로 뽑았을 경우에 대해 전수조사
 */
