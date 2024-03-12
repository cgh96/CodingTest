"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let BIDS = input[1].split(" ").map(Number);

let maxEnergy = 0;

pickBid(N, 0);
console.log(maxEnergy);

function pickBid(bidCnt, energy) {
  if (bidCnt === 2) {
    maxEnergy = Math.max(maxEnergy, energy);
    return;
  }

  for (let i = 1; i < bidCnt - 1; i++) {
    const getEnergy = BIDS[i - 1] * BIDS[i + 1];
    const target = BIDS[i];
    const left = BIDS.slice(0, i);
    const right = BIDS.slice(i + 1);
    BIDS = [...left, ...right];
    pickBid(bidCnt - 1, energy + getEnergy);
    BIDS = [...left, target, ...right];
  }
}
