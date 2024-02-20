"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((e) => +e);
const COIN_LIST = input.slice(1).map((e) => +e);

let targetMoney = K;
let coinNum = 0;

for (let i = COIN_LIST.length - 1; i >= 0; i--) {
  if (COIN_LIST[i] <= targetMoney) {
    const addCoinCnt = Math.floor(targetMoney / COIN_LIST[i]);
    coinNum += addCoinCnt;
    targetMoney -= COIN_LIST[i] * addCoinCnt;
  }
}

console.log(coinNum);
