"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek11659/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map(Number));

const [N, M] = input[0];
const seq = input[1];
const ranges = input.slice(2);

const sumList = [0, seq[0]];
const answer = [];

for (let i = 1; i < N; i++) {
  sumList.push(seq[i] + sumList[i]);
}

for (let i = 0; i < M; i++) {
  const [start, end] = ranges[i];
  answer.push(sumList[end] - sumList[start - 1]);
}

console.log(answer.join("\n"));
