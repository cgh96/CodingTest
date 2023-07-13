"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = +input[0];
const numArr = input[1].split(" ").map(Number);
let stack = [];

for (let i = 0; i < numArr.length; i++) {
  while (stack.length && numArr[stack[stack.length - 1]] < numArr[i]) {
    numArr[stack.pop()] = numArr[i];
  }

  stack.push(i);
}

while (stack.length) {
  numArr[stack.pop()] = -1;
}

console.log(numArr.join(" "));

/**
 * 5 7 3 7 -1 -1
 *
 * 3 5 2 3 7 3
 *
 * 3
 *
 * 7
 *
 *
 */
