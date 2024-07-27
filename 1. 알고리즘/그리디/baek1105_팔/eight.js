"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, R] = input[0].split(" ").map(Number);

const getDigitCount = (num) => {
  return num.toString().length;
};

const getMinEightCnt = (num1, num2) => {
  const numArr1 = num1.toString().split("");
  const numArr2 = num2.toString().split("");

  let eightCnt = 0;

  for (let i = 0; i < numArr1.length; i++) {
    if (numArr1[i] !== numArr2[i]) break;

    if (numArr1[i] === numArr2[i] && numArr1[i] === "8") {
      eightCnt++;
    }
  }

  return eightCnt;
};

const digitL = getDigitCount(L);
const digitR = getDigitCount(R);

if (digitL < digitR) {
  console.log(0);
  return 0;
}

console.log(getMinEightCnt(L, R));
