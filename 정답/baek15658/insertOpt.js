"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = +input[0];
const numberList = input[1].split(" ").map((e) => +e);
const optList = input[2].split(" ").map((e) => +e);

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

locateOpt(0, numberList[0]);

console.log(`${max}\n${min}`);

function locateOpt(optCnt, curValue) {
  if (optCnt === N - 1) {
    min = Math.min(min, curValue);
    max = Math.max(max, curValue);
    return;
  }

  for (let i = 0; i < optList.length; i++) {
    if (optList[i] > 0) {
      optList[i]--;
      if (i === 0) {
        locateOpt(optCnt + 1, curValue + numberList[optCnt + 1]);
      } else if (i === 1) {
        locateOpt(optCnt + 1, curValue - numberList[optCnt + 1]);
      } else if (i === 2) {
        locateOpt(optCnt + 1, curValue * numberList[optCnt + 1]);
      } else if (i === 3) {
        locateOpt(optCnt + 1, division(curValue, numberList[optCnt + 1]));
      }
      optList[i]++;
    }
  }
}

function division(a, b) {
  if (a < 0) {
    return -Math.floor(-a / b);
  }

  return Math.floor(a / b);
}
