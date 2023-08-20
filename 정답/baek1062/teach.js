"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, K] = input[0].split(" ").map(Number);
const words = input.slice(1);

let maxLearningCharsCnt = 0;
const aCharCodeAt = "a".charCodeAt();
const learningChars = new Array(26).fill(false);

if (K < 5) {
  console.log(0);
  return;
}

learningChars["a".charCodeAt() - aCharCodeAt] = true;
learningChars["c".charCodeAt() - aCharCodeAt] = true;
learningChars["n".charCodeAt() - aCharCodeAt] = true;
learningChars["t".charCodeAt() - aCharCodeAt] = true;
learningChars["i".charCodeAt() - aCharCodeAt] = true;

backTracking(0, 5);
console.log(maxLearningCharsCnt);

function backTracking(idx, learningCharsCnt) {
  if (learningCharsCnt === K) {
    let count = N;

    for (let i = 0; i < N; i++) {
      const word = words[i];

      for (let j = 0; j < word.length; j++) {
        if (!learningChars[word[j].charCodeAt() - aCharCodeAt]) {
          count--;
          break;
        }
      }
    }

    maxLearningCharsCnt = Math.max(maxLearningCharsCnt, count);
    return;
  }

  for (let i = idx; i < 26; i++) {
    if (!learningChars[i]) {
      learningChars[i] = true;
      backTracking(i + 1, learningCharsCnt + 1);
      learningChars[i] = false;
    }
  }
}
