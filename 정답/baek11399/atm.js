"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek11399/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map(Number));

const order = input[1].sort((a, b) => a - b);
const sum = [];
let midValue = 0;

for (let i = 0; i < order.length; i++) {
  midValue += order[i];
  sum.push(midValue);
}

console.log(sum.reduce((acc, cur) => acc + cur));
