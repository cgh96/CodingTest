"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, S] = input[0].split(" ").map((e) => +e);
const sequence = input[1].split(" ").map((e) => +e);
const isPicked = new Array(N).fill(false);
let sameValue = 0;

getPartialSequence(0, 0);

console.log(sameValue);

function getPartialSequence(pickCnt, startPick) {
  if (pickCnt > 0) {
    sameValue = getTotalValue() === S ? sameValue + 1 : sameValue;
  }

  if (pickCnt === N) {
    return;
  }

  for (let i = startPick; i < N; i++) {
    isPicked[i] = true;
    getPartialSequence(pickCnt + 1, i + 1);
    isPicked[i] = false;
  }
}

function getTotalValue() {
  let sum = 0;

  for (let i = 0; i < isPicked.length; i++) {
    if (isPicked[i]) {
      sum += sequence[i];
    }
  }

  return sum;
}
