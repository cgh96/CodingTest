"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const WORD_CNT = +input[0];
const words = input.slice(1).sort();

let prefixCount = 0;

for (let i = 0; i < WORD_CNT - 1; i++) {
  const current = words[i];
  const next = words[i + 1];

  if (current.length > next.length) continue;

  if (next.slice(0, current.length) === current) prefixCount++;
}

console.log(WORD_CNT - prefixCount);

/**
 * 1. 사전순 정렬 - [접두어]들이 앞으로 감.
 * 2. [앞단어]가 [뒷단어]의 접두어인지 체크
 * 3. [접두어] 개수 구하기
 * 4. 전체 단어 개수 - 접두어 개수
 */
