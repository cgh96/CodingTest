"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const targetCards = input[1]
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);
const M = +input[2];
const compareCards = input[3].split(" ").map((e) => +e);

const answer = [];

for (let card of compareCards) {
  answer.push(binarySearch(card, 0, targetCards.length - 1));
}

console.log(answer.join(" "));

function binarySearch(compare, left, right) {
  if (left > right) return 0;

  const mid = Math.floor((left + right) / 2);
  if (targetCards[mid] === compare) {
    return 1;
  }

  if (targetCards[mid] > compare) {
    return binarySearch(compare, left, mid - 1);
  }

  if (targetCards[mid] < compare) {
    return binarySearch(compare, mid + 1, right);
  }
}

/**
 * 정렬: sort => O(nlogn)
 * 브루트 포스:
 *   연산수: 50만 * 50만 = 2500억   1억 => 1초
 * 이진 탐색: O(logN)
 */

/**
 * -10 2 3 5 6 10
 * 0 1 2 3 4 5 6
 */
