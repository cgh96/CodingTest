"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1929/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const min = Number(input[0].split(" ")[0]);
const max = Number(input[0].split(" ")[1]);
let isPrime = true;

for (let i = min; i <= max; i++) {
  if (i === 1) {
    isPrime = false;
  }

  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
  isPrime = true;
}
