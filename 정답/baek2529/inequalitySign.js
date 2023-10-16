"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const cnt = +input[0];
const inEquality = input[1].split(" ");
const visited = new Array(10).fill(false);

let max = String(Number.MIN_SAFE_INTEGER);
let min = String(Number.MAX_SAFE_INTEGER);

function dfs(layer, prev, result) {
  if (layer === cnt) {
    max = result > max ? result : max;
    min = result < min ? result : min;
    return;
  }

  if (inEquality[layer] === "<") {
    for (let i = prev + 1; i < 10; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(layer + 1, i, result + i);
      visited[i] = false;
    }
  } else {
    for (let i = prev - 1; i >= 0; i--) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(layer + 1, i, result + i);
      visited[i] = false;
    }
  }
}

for (let i = 0; i < 10; i++) {
  // 첫 숫자가 0~9까지 모두 조회하면 된다.
  visited[i] = 1;
  dfs(0, i, `${i}`);
  visited[i] = 0;
}

console.log(`${max}\n${min}`);
