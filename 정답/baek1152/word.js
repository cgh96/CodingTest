"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1152/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

if (input[0].length === 0) {
  console.log(0);
  return;
}

console.log(input[0].split(" ").length);
