"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let answer = 0;

const queenPosition = []; // queenPosition[i] => i번째 열 queen의 위치

placeQueen(0);
console.log(answer);

function placeQueen(y) {
  if (y === N) {
    answer++;
    return;
  }

  for (let x = 0; x < N; x++) {
    if (!isPossible(y, x)) continue;
    queenPosition.push(x);
    placeQueen(y + 1);
    queenPosition.pop(x);
  }
}

function isPossible(curY, curX) {
  for (let y = 0; y < queenPosition.length; y++) {
    const x = queenPosition[y];

    if (x === curX || y === curY || Math.abs(x - curX) === Math.abs(y - curY)) {
      return false;
    }
  }

  return true;
}

/**
 * 다음과 같은 경우는 퀸을 놓을 수 없다.
 * 1. x열이 같은 경우
 * 2. y열이 같은 경우
 * 3. [x - i, y - i], [x - i, y + i], [x + i, y + i], [x + i, y - i]
 */
