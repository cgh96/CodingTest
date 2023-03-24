"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./baek1463/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let x = Number(input);
let countArray = new Array(10 ** 6 + 1).fill(0);
countArray[2] = 1;
countArray[3] = 1;

for (let i = 4; i <= countArray.length; i++) {
  if (x < i) {
    break;
  }

  if (i % 3 === 0 && i % 2 === 0) {
    countArray[i] =
      countArray[i / 3] > countArray[i / 2]
        ? countArray[i / 2] + 1
        : countArray[i / 3] + 1;
    continue;
  }

  if (i % 3 === 0) {
    countArray[i] =
      countArray[i / 3] > countArray[i - 1]
        ? countArray[i - 1] + 1
        : countArray[i / 3] + 1;
  } else if (i % 2 === 0) {
    countArray[i] =
      countArray[i / 2] > countArray[i - 1]
        ? countArray[i - 1] + 1
        : countArray[i / 2] + 1;
  } else {
    countArray[i] = countArray[i - 1] + 1;
  }
}

console.log(countArray[x]);
/**
 * if (x % 3 === 0) { x / 3 }
 * if (x % 2 === 0) { x / 2 }
 * x - 1
 *
 * f(x) => 1에 위의 세 가지 연산을 하여 x가 되는 총 횟수
 * f(1) = 0
 * f(2) = 1
 * f(3) = 1
 * f(4) = 2
 * f(5) = 3
 * f(6) = 2
 * f(7) = 3
 * f(8) = 3
 * f(9) = 2
 * f(10) = 3
 * f(11) = 3
 * f(12) = 3
 * f(13) = 4
 * f(14) = 4
 * f(15) = 4
 * f(16) = 4
 * f(17) = 5
 * f(18) =
 *
 * x가 3의 배수인가? 3으로 나눈다 => 3으로 나눈 index가 배열에 존재하는가? 존재하는 index + 1 정답
 *
 * */
