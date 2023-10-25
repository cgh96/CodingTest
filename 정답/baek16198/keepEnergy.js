"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = +input[0];
const energyList = input[1].split(" ").map((e) => +e);
let max = Number.MIN_SAFE_INTEGER;

getEnergy(energyList, 0);
console.log(max);

function getEnergy(energyList, energy) {
  if (energyList.length === 2) {
    max = Math.max(max, energy);
    return;
  }

  for (let i = 1; i < energyList.length - 1; i++) {
    getEnergy(
      [...energyList.slice(0, i), ...energyList.slice(i + 1)],
      energyList[i - 1] * energyList[i + 1] + energy
    );
  }
}
