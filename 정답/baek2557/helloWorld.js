"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2557/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ");
console.log(a / b);
