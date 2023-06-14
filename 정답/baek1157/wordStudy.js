"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1157/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input[0].toUpperCase().split("");
const alphabet = new Array(26).fill(0);
let max = 0;
let idx = 0;

for (let ch of input) {
  alphabet[ch.charCodeAt(0) - 65]++;
  if (alphabet[ch.charCodeAt(0) - 65] > max) {
    max = alphabet[ch.charCodeAt(0) - 65];
    idx = ch.charCodeAt(0) - 65;
  }
}

if (alphabet.filter((e) => e === max).length === 1) {
  console.log(String.fromCharCode(idx + 65));
  return;
}

console.log("?");
return;
