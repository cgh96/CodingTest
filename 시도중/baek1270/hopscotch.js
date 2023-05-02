"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1270/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const NUMBER_OF_LAND = Number(input[0]);
const CONFLICT = "SYJKGW";

for (let i = 1; i <= NUMBER_OF_LAND; i++) {
  const TABLE = new Array(200).fill(0);
  let line = input[i].split(" ");
  let standard = Math.floor(Number(line[0]) / 2);
  for (let j = 1; j <= Number(line[0]); j++) {
    TABLE[Number(line[j])]++;

    if (TABLE[Number(line[j])] > standard) {
      console.log(line[j]);
      break;
    }

    if (j === Number(line[0])) {
      console.log(CONFLICT);
    }
  }
}
