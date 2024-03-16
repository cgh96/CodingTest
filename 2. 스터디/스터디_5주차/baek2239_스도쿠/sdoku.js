"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n");

const SUDOKU = input.map((e) => e.split(""));
const EMPTY_LIST = [];
let answer = "";

updateEmptyList();
backtracking(0);

function updateEmptyList() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (SUDOKU[i][j] === "0") {
        EMPTY_LIST.push([i, j]);
      }
    }
  }
}

/** @FUNC : backtracking 관련 함수들 */
function backtracking(emptyIdx) {
  if (emptyIdx === EMPTY_LIST.length) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        answer += SUDOKU[i][j];
      }

      if (i !== 9) {
        answer += "\n";
      }
    }
    console.log(answer);
    process.exit(0);
  }

  const [row, col] = EMPTY_LIST[emptyIdx];

  for (let i = 1; i <= 9; i++) {
    if (isPossible(row, col, i)) {
      SUDOKU[row][col] = i;
      backtracking(emptyIdx + 1);
      SUDOKU[row][col] = 0;
    }
  }

  return;
}

function isPossible(row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (+SUDOKU[row][i] === num) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (+SUDOKU[i][col] === num) {
      return false;
    }
  }

  let sRow = Math.floor(row / 3) * 3;
  let sCol = Math.floor(col / 3) * 3;

  for (let i = sRow; i < sRow + 3; i++) {
    for (let j = sCol; j < sCol + 3; j++) {
      if (+SUDOKU[i][j] === num) return false;
    }
  }

  return true;
}
