"use strict";
const fs = require('fs');
const { isDeepStrictEqual } = require('util');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek10872/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
let factorial = 1;


for(let i = 1; i <= N; i++) {
    factorial *= i;
}

console.log(factorial)

/**
 * N, N-1, N-2, ... 3, 2, 1
 */