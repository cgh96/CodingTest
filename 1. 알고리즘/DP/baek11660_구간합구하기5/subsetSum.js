"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/** N : 표의 크기, M : 합을 구해야 하는 횟수 */
const [N, M] = input.splice(0, 1)[0].split(" ").map(Number);
const table = input.splice(0, N).map((row) => row.split(" ").map(Number));

const subset = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const scopes = input.map((row) => row.split(" ").map(Number));

table.forEach((row, x) => {
  row.forEach((col, y) => {
    subset[x + 1][y + 1] = col;
  });
});

for (let row = 1; row <= N; row++) {
  for (let col = 1; col <= N; col++) {
    subset[row][col] +=
      subset[row - 1][col] + subset[row][col - 1] - subset[row - 1][col - 1];
  }
}

for (const scope of scopes) {
  const [x1, y1, x2, y2] = scope;

  console.log(
    subset[x2][y2] -
      subset[x1 - 1][y2] -
      subset[x2][y1 - 1] +
      subset[x1 - 1][y1 - 1]
  );
}
