"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1213/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
let str = input[0].split("").sort();

/**

 */
