"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, M] = input[0].split(" ").map(Number);
const K = input.pop();
const table = input.splice(1).map((e) => e.split("").map(Number));
let answer = 0;

if (K % 2 === 1) {
  //홀수 일때
  for (let i = 0; i < N; i++) {
    const rowZeroCnt = table[i].filter((e) => e === 0).length;

    if (rowZeroCnt <= K && rowZeroCnt % 2 === 1) {
      // 홀수번 눌러서 불을 켤 수 있는 행을 만나면
      // 얘와 같은게 몇 개 있는지 check
      let sameCnt = 0;
      for (let j = 0; j < N; j++) {
        if (isSameArray(table[i], table[j])) {
          sameCnt++;
        }
      }
      answer = Math.max(answer, sameCnt);
    }
  }
} else {
  for (let i = 0; i < N; i++) {
    const rowZeroCnt = table[i].filter((e) => e === 0).length;

    if (rowZeroCnt <= K && rowZeroCnt % 2 === 0) {
      // 짝수번 눌러서 불을 켤 수 있는 행을 만나면
      // 얘와 같은게 몇 개 있는지 check
      let sameCnt = 0;
      for (let j = 0; j < N; j++) {
        if (isSameArray(table[i], table[j])) {
          sameCnt++;
        }
      }
      answer = Math.max(answer, sameCnt);
    }
  }
}

console.log(answer);

function isSameArray(arr1, arr2) {
  for (let i = 0; i < M; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
