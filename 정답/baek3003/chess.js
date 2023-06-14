"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek3003/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number))[0];

const prop_num = [1, 1, 2, 2, 2, 8];
const result = [];

for (let i = 0; i < prop_num.length; i++) {
  result.push(prop_num[i] - input[i]);
}

console.log(result.join(" "));
