"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

const [N, M, R] = input.splice(0, 1)[0];
const array = new Array(N).fill().map((e, i) => input[i]);

for (let cnt = 0; cnt < R; cnt++) {
  for (let i = 0; i < Math.min(N, M) / 2; i++) {
    let lt = array[i][i];
    for (let x = i; x < M - i - 1; x++) {
      array[i][x] = array[i][x + 1];
    }
    array[i][M - i - 1] = array[i + 1][M - i - 1];

    let lb = array[N - i - 1][i];
    for (let y = N - i - 1; y > i; y--) {
      array[y][i] = array[y - 1][i];
    }
    array[i + 1][i] = lt;

    let rb = array[N - i - 1][M - i - 1];
    for (let x = M - i - 1; x > i; x--) {
      array[N - i - 1][x] = array[N - i - 1][x - 1];
    }
    array[N - i - 1][i + 1] = lb;

    for (let y = i + 1; y < N - i - 1; y++) {
      array[y][M - i - 1] = array[y + 1][M - i - 1];
    }
    array[N - i - 2][M - i - 1] = rb;
  }
}
console.log(array.map((e) => e.join(" ")).join("\n"), "\n\n");
/**
 * x0 => 0 ~ N - 1, y0 => 0 ~ M - 1;
 * x1 => 1 ~ N - 1 - 1, y0 = > 1 ~ M - 1 - 1
 * x2 =>
 *
 * xn <=  Math.floor((N - 1) / 2)
 * ym <= Math.floor((M - 1) / 2)
 */
