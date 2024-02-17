"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const visited = new Array(10).fill(false);

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

const curNumber = [];

const INEQUALITY_CNT = +input[0];
const inequalityList = input[1].split(" ");

for (let i = 0; i < 10; i++) {
  visited[i] = true;
  curNumber.push(i);
  backtracking(0, i);
  visited[i] = false;
  curNumber.pop(i);
}

console.log(`${max}\n${min}`);

function backtracking(depth = 0, prev) {
  if (depth >= INEQUALITY_CNT) {
    const curNum = +curNumber.join("");
    min = min > curNum ? curNum : min;
    max = max < curNum ? curNum : max;
    return;
  }

  if (inequalityList[depth] === ">") {
    for (let i = prev - 1; i > -1; i--) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      curNumber.push(i);
      backtracking(depth + 1, i);
      visited[i] = false;
      curNumber.pop(i);
    }
    return;
  }

  if (inequalityList[depth] === "<") {
    for (let i = prev + 1; i < 10; i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      curNumber.push(i);
      backtracking(depth + 1, i);
      visited[i] = false;
      curNumber.pop(i);
    }
    return;
  }
}

/**
 * 1. 0 ~ 9 순서대로 넣는다.
 * 2. 부등호 파악
 *  3 - 1. ">" => 직전 값보다 작은 값부터 넣어본다.
 *  3 - 2. "<" => 직전 값보다 큰 값부터 넣어본다.
 */
