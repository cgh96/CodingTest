"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B, C] = input[0].split(" ").map(BigInt);

function getMod(a, b, c) {
  if (b === 0n) return 1n;
  if (b === 1n) return a % c;

  const half = b / 2n;
  const mod = getMod(a, half, c);
  const modSquare = (mod * mod) % c;

  if (b % 2n === 0n) {
    return modSquare;
  } else {
    return (modSquare * a) % c;
  }
}

console.log(parseInt(getMod(A, B, C)));

/**
 * 모듈러 산술
 */
