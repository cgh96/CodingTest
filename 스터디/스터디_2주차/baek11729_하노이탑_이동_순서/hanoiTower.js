"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const path = [];
let count = 0;

moveCircle(N, 1, 1, 2, 3);
console.log(count);
console.log(path.map((e) => e.join(" ")).join("\n"));

/**
 * @param {number} bottomNum - 옮겨야 하는 원판의 가장 바닥
 * @param {number} topNum - 옮겨야 하는 원판의 가장 위
 * @param {number} from
 * @param {number} other
 * @param {number} to
 * @returns
 *
 * @example moveCircle(8, 2, 1, 2, 3) => 8번 ~ 2번 원판을 1번에서 3번 기둥으로 옮겨라
 */

function moveCircle(bottomNum, topNum, from, other, to) {
  if (bottomNum < topNum) {
    return;
  }

  if (bottomNum === topNum) {
    count++;
    path.push([from, to]);
    return;
  }

  moveCircle(bottomNum - 1, topNum, from, to, other);
  moveCircle(bottomNum, bottomNum, from, other, to);
  moveCircle(bottomNum - 1, topNum, other, from, to);
}
