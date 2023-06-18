"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1931/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const numberOfMeeting = input.splice(0, 1)[0][0];
const meetings = input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = 0;
let endTime = 0;
for (let time of meetings) {
  if (time[0] >= endTime) {
    answer++;
    endTime = time[1];
  }
}
console.log(answer);
