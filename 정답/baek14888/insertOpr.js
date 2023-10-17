"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const numCnt = +input[0];
const numList = input[1].split(" ").map((e) => +e);
const oprCnt = input[2].split(" ").map((e) => +e);
const oprList = ["+", "-", "*", "/"];

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

calculate(0, numList[0], [...oprCnt]);
console.log(`${max}\n${min}`);

function calculate(position, curVal, oprCnt) {
  if (position === numCnt - 1) {
    min = Math.min(min, curVal);
    max = Math.max(max, curVal);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let nextVal = numList[position + 1];

    switch (i) {
      case 0:
        if (oprCnt[i] > 0) {
          const resultOpr = oprCnt.map((e, idx) => (idx === i ? --e : e));
          calculate(position + 1, sum(curVal, nextVal), resultOpr);
          break;
        }
      case 1:
        if (oprCnt[i] > 0) {
          const resultOpr = oprCnt.map((e, idx) => (idx === i ? --e : e));
          calculate(position + 1, minus(curVal, nextVal), resultOpr);
          break;
        }
      case 2:
        if (oprCnt[i] > 0) {
          const resultOpr = oprCnt.map((e, idx) => (idx === i ? --e : e));
          calculate(position + 1, multiply(curVal, nextVal), resultOpr);
          break;
        }
      case 3:
        if (oprCnt[i] > 0) {
          const resultOpr = oprCnt.map((e, idx) => (idx === i ? --e : e));
          calculate(position + 1, division(curVal, nextVal), resultOpr);
          break;
        }
    }
  }
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  if (a < 0) {
    return -Math.floor(-a / b);
  }

  return Math.floor(a / b);
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}
