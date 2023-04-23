"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1515/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
let num = input[0].split("");
let base = 1;
let cursor = 0;

let baseArr = [];

while (cursor < num.length) {
  let arr = String(base);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num[cursor]) {
      cursor++;
    }
    if (cursor === num.length) {
      console.log(base);
      return;
    }
  }
  base++;
}
/**
 * 1. 베이스를 배열로 쪼갠다
 */
