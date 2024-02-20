"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input[0].split(" ");

console.log(getNumberOfKth(K));

function getNumberOfKth(K) {
  let digit = 1;

  while (K > digit * 9 * 10 ** (digit - 1)) {
    K -= digit * 9 * 10 ** (digit - 1);
    digit++;
  }

  let add = Math.ceil(K / digit);
  let left = K % digit;
  let target = 10 ** (digit - 1) + add - 1;

  if (target > N) {
    return -1;
  }

  return String(target)[left - 1 < 0 ? digit - 1 : left - 1];
}

/**
 * 194번째
 *
 * 99
 *       V
 * 100  101
 *     [120]
 */

/**
 * 한자리 수 1 * 9 * 1       9
 * 두자리 수 2 * 9 * 10      180       K = 201 - 189 = 12    100 101 102 103
 * 세자리 수 3 * 9 * 100
 * 네자리 수 4 * 9 * 1000
 * i자리 수 i * 9 * 10^(i - 1)
 *
 *
 *
 * 1. K번째 수를 가지고 있는 실제 자연수 T를 찾는다.
 * 2. T > N 이면 -1
 * 3. T <= N 이면
 *      T속에 K번째 수를 찾는다.
 *
 *
 * 1 2 3 4 5 6 7 8 9 ][ 10 11 12 13 14 15 16 17 18 19 20 21
 */
