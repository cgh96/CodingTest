"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1213/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
let str = input[0].split("");
let alpha = [];
let answer = "";
let odd = "";
let oddCnt = 0;

let A = "A";

for (let i = 0; i < 26; i++) {
  alpha.push(String.fromCharCode(A.charCodeAt() + i));
}

for (let char of alpha) {
  const tmp = str.filter((c) => c === char);
  if (tmp.length % 2 === 0) {
    answer += tmp.slice(0, tmp.length / 2).join("");
  } else {
    if (oddCnt === 1) {
      console.log("I'm Sorry Hansoo");
      return;
    }
    oddCnt++;
    answer += tmp.slice(0, Math.floor(tmp.length / 2)).join("");
    odd = char;
  }
}

answer = answer.split("").join("") + odd + answer.split("").reverse().join("");

console.log(answer);
/**
 * AAABB
 *
 * AABA
 *
 * ABABA
 *
 * CBC
 */
