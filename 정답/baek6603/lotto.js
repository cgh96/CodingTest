"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") return;

  const S = input[i].split(" ").map(Number); // 1 2 3 4 5 6 7
  const k = S.splice(0, 1)[0]; // 7

  Pick(0, [], k, S);
  console.log("");
}

function Pick(cnt, arr, k, S) {
  if (cnt === 6) {
    console.log(arr.join(" "));
  }

  for (let n = cnt; n < k; n++) {
    if (!arr.includes(S[n])) {
      if (arr.length > 0) {
        if (arr[arr.length - 1] < S[n]) {
          Pick(cnt + 1, [...arr, S[n]], k, S);
        }
      } else {
        if (0 < S[n]) {
          Pick(cnt + 1, [...arr, S[n]], k, S);
        }
      }
    }
  }
}
