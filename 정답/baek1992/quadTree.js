"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input.splice(0, 1)[0]);
const quadTree = input.map((e) => e.split("").map(Number));

let result = "";

QuadTree(quadTree, N);

console.log(result);

function QuadTree(arr, N) {
  let isThereZero = false;
  let isThereOne = false;

  for (let i = 0; i < N; i++) {
    if (arr[i].includes(1)) {
      isThereOne = true;
    }

    if (arr[i].includes(0)) {
      isThereZero = true;
    }

    if (isThereOne && isThereZero) {
      break;
    }
  }

  if (isThereOne && isThereZero) {
    result += "(";
    const lt = arr.slice(0, N / 2).map((e) => e.slice(0, N / 2));
    QuadTree(lt, N / 2);

    const rt = arr.slice(0, N / 2).map((e) => e.slice(N / 2));
    QuadTree(rt, N / 2);

    const lb = arr.slice(N / 2).map((e) => e.slice(0, N / 2));
    QuadTree(lb, N / 2);

    const rb = arr.slice(N / 2).map((e) => e.slice(N / 2));
    QuadTree(rb, N / 2);
    result += ")";
    return;
  }

  if (isThereOne) {
    result += 1;
  }

  if (isThereZero) {
    result += 0;
  }
}

/**
 * 1. 괄호로 감싼다.
 * 2. 0과 1이 섞여있는지 check
 * 3. 섞여있으면 4등분
 * 4. 안섞여있으면 압축 0 or 1
 */
