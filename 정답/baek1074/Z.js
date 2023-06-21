"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));
const [N, r, c] = input[0];

let order = 0;

divide(0, 0, 2 ** N);

function divide(row, col, size) {
  if (row === r && col === c) {
    console.log(order);
    return;
  }

  if (row === r && col === c) {
    console.log(order - 1);
    return;
  }

  if (r >= row && r < row + size && c >= col && c < col + size) {
    size /= 2;

    divide(row, col, size);
    divide(row, col + size, size);
    divide(row + size, col, size);
    divide(row + size, col + size, size);
  } else {
    order += size * size;
  }
}
