"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek15650/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input[0].split(" ").map(Number);
const N = input[0];
const M = input[1];
let array = [];

function recursion() {
  for (let i = 1; i <= N; i++) {
    if (array.length < M) {
      if (array.length === 0) {
        array.push(i);
      } else {
        if (i > array[array.length - 1]) {
          array.push(i);
        } else {
          continue;
        }
      }
    }

    if (array.length === M) {
      console.log(array.join(" "));
    } else {
      recursion();
    }
    array.pop();
  }
}

recursion();

/*
 1 2
*/
