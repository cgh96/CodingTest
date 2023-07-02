"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n")[0]
  .split("");

if (!input.includes("0") || !isMultipleOfThree(input)) {
  console.log(-1);
  return;
}

input.sort((a, b) => b - a);
console.log(input.join(""));

function isMultipleOfThree(num) {
  let sum = num.reduce((acc, cur) => acc + Number(cur), 0);
  return sum % 3 === 0;
}
