"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);
const cnt = input.splice(0, 1)[0];
const stack = [];
const result = [];
let cur = 1;

for (let i = 0; i < cnt; i++) {
  let target = input[i];

  while (cur <= target) {
    stack.push(cur++);
    result.push("+");
  }

  let stackPop = stack.pop();
  result.push("-");

  if (stackPop !== target) {
    console.log("NO");
    return;
  }
}

console.log(result.join("\n"));
