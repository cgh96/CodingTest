"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const buildngs = +input[0];
const heights = input[1].split(" ").map((e) => +e);

let answer = 0;

for (let i = 0; i < heights.length; i++) {
  let backVisible = getBackVisible(i, heights[i]);
  let frontVisible = getFrontVisible(i, heights[i]);
  const totalVisible = backVisible + frontVisible;

  answer = answer < totalVisible ? totalVisible : answer;
}

console.log(answer);

function getBackVisible(curIdx, curH) {
  if (curIdx === 0) {
    return 0;
  }

  const back = heights.slice(0, curIdx);
  let visibleCnt = 1;
  let slope = curH - back[curIdx - 1];

  for (let i = curIdx - 2; i >= 0; i--) {
    let newSlope = (curH - back[i]) / (curIdx - i);
    if (slope > newSlope) {
      slope = newSlope;
      visibleCnt++;
    }
  }
  return visibleCnt;
}
function getFrontVisible(curIdx, curH) {
  if (curIdx === heights.length - 1) {
    return 0;
  }
  const front = heights.slice(curIdx + 1);
  let visibleCnt = 1;
  let slope = front[0] - curH;

  for (let i = 1; i < front.length; i++) {
    let newSlope = (front[i] - curH) / (i + 1);
    if (newSlope > slope) {
      visibleCnt++;
      slope = newSlope;
    }
  }
  return visibleCnt;
}
