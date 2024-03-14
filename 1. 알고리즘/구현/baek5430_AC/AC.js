"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.splice(0, 1)[0];
const ERROR = "error";
const answer = [];

for (let i = 0; i < input.length; i += 3) {
  const FUNC_LIST = input[i].split("");
  let ARRAY = JSON.parse(input[i + 2]);
  let startIdx = 0;
  let endIdx = ARRAY.length;
  let isReversed = false;
  let isError = false;

  for (let func of FUNC_LIST) {
    if (func === "R") {
      isReversed = !isReversed;
    }

    if (func === "D") {
      if (startIdx >= endIdx) {
        isError = true;
        break;
      }
      !isReversed ? startIdx++ : endIdx--;
    }
  }

  if (isError) {
    answer.push(ERROR);
  } else {
    const sliced = ARRAY.slice(startIdx, endIdx);
    answer.push(JSON.stringify(isReversed ? sliced.reverse() : sliced));
  }
}

console.log(answer.join("\n"));
