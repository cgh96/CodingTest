"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(BigInt));

const numberOfCity = input.splice(0, 1)[0][0];
let [dist, cost] = input;

if (numberOfCity > 1000n && numberOfCity < 2n) {
  return;
}

if (Math.max(dist) > 10000n || Math.max(cost) > 10000n) {
  return;
}

let currentCost = cost[0];
let totalCost = 0n;

for (let i = 0n; i < BigInt(dist.length); i++) {
  totalCost += currentCost * dist[i];

  if (currentCost > cost[i + 1n]) {
    currentCost = cost[i + 1n];
  }
}

console.log(totalCost.toString());
