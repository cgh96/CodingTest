"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const numberOfString = Number(input.splice(0, 1)[0]);
let value = 9;

let alphabet = {};

for (let i = 0; i < numberOfString; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (alphabet[input[i][j]]) {
      alphabet[input[i][j]] =
        alphabet[input[i][j]] + 10 ** (input[i].length - j - 1);
      continue;
    }
    alphabet[input[i][j]] = 10 ** (input[i].length - j - 1);
  }
}

alphabet = Object.entries(alphabet)
  .sort((a, b) => b[1] - a[1])
  .map((e) => e[1] * value--);

console.log(alphabet.reduce((acc, cur) => acc + cur));
