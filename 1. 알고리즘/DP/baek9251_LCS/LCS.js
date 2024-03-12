"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A_STRING = [0, ...input[0].split("")];
const B_STRING = [0, ...input[1].split("")];

const TABLE = new Array(A_STRING.length)
  .fill()
  .map((_) => new Array(B_STRING.length).fill(0));

for (let i = 1; i < A_STRING.length; i++) {
  for (let j = 1; j < B_STRING.length; j++) {
    const a_char = A_STRING[i];
    const b_char = B_STRING[j];

    if (a_char === b_char) {
      TABLE[i][j] = TABLE[i - 1][j - 1] + 1;
    } else {
      TABLE[i][j] = Math.max(TABLE[i - 1][j], TABLE[i][j - 1]);
    }
  }
}

console.log(TABLE[A_STRING.length - 1][B_STRING.length - 1]);
