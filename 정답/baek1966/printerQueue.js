"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1966/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));
input.splice(0, 1);

function createTargetCheckArray(docs, targetIdx, targetArr) {
  docs.forEach((e, idx) => {
    if (idx === targetIdx) {
      targetArr[idx] = true;
    } else {
      targetArr[idx] = false;
    }
  });
}

function checkOrder(docs, targetArr) {
  let count = 0;
  while (targetArr.includes(true)) {
    if (docs.find((e) => e > docs[0])) {
      docs.push(docs[0]);
      docs.splice(0, 1);

      targetArr.push(targetArr[0]);
      targetArr.splice(0, 1);
    } else {
      docs.splice(0, 1);
      targetArr.splice(0, 1);
      count++;
    }
  }
  console.log(count);
}

for (let i = 0; i < input.length; i++) {
  let target = [];

  createTargetCheckArray(input[i + 1], input[i][1], target);
  checkOrder(input[i + 1], target);

  i++;
}
