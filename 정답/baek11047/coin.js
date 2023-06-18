"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek11047/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

let [N, K] = input.splice(0, 1)[0];

const sort_of_coin = input.map((e) => e[0]).sort((a, b) => b - a);
let number_of_coin = 0;

for (let coin of sort_of_coin) {
  if (coin <= K) {
    number_of_coin += Math.floor(K / coin);
    K -= Math.floor(K / coin) * coin;
  }

  if (K === 0) {
    break;
  }
}

console.log(number_of_coin);
