"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
let testCases = input.splice(0, 1);

let idx = 0;

for (let i = 0; i < testCases; i++) {
  const people = Number(input[idx]);
  let answer = 1;
  let standard = 0;
  let results = input
    .slice(idx + 1, idx + 1 + people)
    .map((e) => e.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  standard = results[0][1];

  for (let p = 0; p < results.length - 1; p++) {
    if (standard > results[p + 1][1]) {
      answer++;
      standard = results[p + 1][1];
    }
  }

  console.log(answer);
  idx = idx + 1 + people;
}
