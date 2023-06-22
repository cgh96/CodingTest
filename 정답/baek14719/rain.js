"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const [H, W] = input[0];
const shape = input[1];
const table = new Array(H).fill().map((e) => new Array(W).fill(0));
let rain = 0;

for (let i = 0; i < shape.length; i++) {
  for (let j = 0; j < shape[i]; j++) {
    table[j][i] = 1;
  }
}

for (let i = 0; i < table.length; i++) {
  let left = false;
  let zeroCnt = 0;
  for (let w of table[i]) {
    if (!left && w === 1) {
      left = true;
      continue;
    }

    if (left && w === 0) {
      zeroCnt++;
      continue;
    }

    if (left && w === 1) {
      rain += zeroCnt;
      zeroCnt = 0;
    }
  }
}

console.log(rain);
