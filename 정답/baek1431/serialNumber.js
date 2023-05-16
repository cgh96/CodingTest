"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1431/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.slice(1);

input.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    if (compareByNumber(a, b) > 0) {
      return 1;
    } else if (compareByNumber(a, b) < 0) {
      return -1;
    } else {
      return a.localeCompare(b);
    }
  }
});

function compareByNumber(a, b) {
  const A = a.split("");
  const B = b.split("");
  let aSum = 0;
  let bSum = 0;

  A.forEach((e) => {
    if (Number(e)) {
      aSum += Number(e);
    }
  });
  B.forEach((e) => {
    if (Number(e)) {
      bSum += Number(e);
    }
  });
  return aSum - bSum;
}

for (let i of input) {
  console.log(i);
}
