"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const CHARS = input[1].split(" ");
const VOWEL = ["a", "e", "i", "o", "u"];
const password = [];
const answer = [];

createPassword(password, 0, 0);
console.log(answer.sort().join("\n"));

function createPassword(password, vowel, consonat) {
  if (password.length === L) {
    if (vowel >= 1 && consonat >= 2) {
      answer.push(password.join(""));
    }
    return;
  }

  for (let i = 0; i < C; i++) {
    if (password[password.length - 1] >= CHARS[i]) continue;

    password.push(CHARS[i]);
    VOWEL.includes(CHARS[i])
      ? createPassword(password, vowel + 1, consonat)
      : createPassword(password, vowel, consonat + 1);
    password.pop(CHARS[i]);
  }
}

/**
 * a t c i s w
 * 1. a ~ w 중 하나를 고르는 과정을 길이가 C가 될 때까지
 * 2. 앞에 것과 순서가 안맞는 알파벳이면 취손
 */
