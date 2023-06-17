"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2480/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const number_of_dice_value = new Array(7).fill(0);
input = input[0].split(" ").map(Number);

for (let dice of input) {
  number_of_dice_value[dice]++;
}

const three_same_value = number_of_dice_value.findIndex((e) => e === 3);
if (three_same_value !== -1) {
  console.log(10000 + three_same_value * 1000);
  return;
}

const two_same_value = number_of_dice_value.findIndex((e) => e === 2);
if (two_same_value !== -1) {
  console.log(1000 + two_same_value * 100);
  return;
}

console.log(Math.max(...input) * 100);
