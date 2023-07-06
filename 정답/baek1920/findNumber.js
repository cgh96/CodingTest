"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

let A = input[1].sort((a, b) => a - b);
let M = input[3];
let result = [];

let start = 0;
let end = A.length - 1;
let mid = Math.floor(end / 2);

for (let i = 0; i < M.length; i++) {
  binarySearch(M[i]);
}

console.log(result.join("\n"));

function binarySearch(target) {
  let start = 0;
  let end = A.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (A[mid] > target) {
      end = mid - 1;
      continue;
    }

    if (A[mid] < target) {
      start = mid + 1;
      continue;
    }

    if (A[mid] === target) {
      return result.push(1);
    }
  }
  return result.push(0);
}
