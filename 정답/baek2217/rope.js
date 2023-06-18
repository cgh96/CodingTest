"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((e) => e.split(" ").map((e) => Number(e)));

const numberOfRope = input.splice(0, 1)[0][0];
const ropes = input.map((e) => e[0]).sort((a, b) => a - b);
const maxWeights = [];

for (let i = 0; i < ropes.length; i++) {
  maxWeights.push(ropes[i] * (ropes.length - i));
}

console.log(Math.max(...maxWeights));
