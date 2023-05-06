"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2108/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((i) => Number(i)).slice(1);

if (input.length === 1) {
  console.log(input[0]);
  console.log(input[0]);
  console.log(input[0]);
  console.log(0);
  return;
}

const avg = input.reduce((acc, cur) => acc + cur, 0) / input.length;
console.log(Math.round(avg) === -0 ? 0 : Math.round(avg));

const mid = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];
console.log(mid);

const count = [];

for (let i = 0; i < input.length; i++) {
  if (i === 0 || input[i - 1] !== input[i]) {
    count.push({ num: input[i], count: 1 });
  } else if (input[i - 1] === input[i]) {
    count[count.length - 1].count++;
  }
}

const freq = count
  .sort((a, b) => a.count - b.count)
  .filter((n) => n.count === count[count.length - 1].count);

freq.length > 1 ? console.log(freq[1].num) : console.log(freq[0].num);

const scope = input[input.length - 1] - input[0];
console.log(scope);

// 1 1 2 3 3 5 6 6 7
