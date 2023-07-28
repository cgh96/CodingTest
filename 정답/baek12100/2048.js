"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));

let result = 0;
const size = input.splice(0, 1)[0][0];

DFS(0, input);
console.log(result);

function DFS(cnt, table) {
  if (cnt === 5) {
    table.forEach((e) => {
      result = Math.max(...e, result);
    });
    return;
  }
  let arr = table.map((e) => [...e]);
  let left = moveBlock("L", arr);
  DFS(cnt + 1, left);

  arr = table.map((e) => [...e]);
  let right = moveBlock("R", arr);
  DFS(cnt + 1, right);

  arr = table.map((e) => [...e]);
  let top = moveBlock("T", arr);
  DFS(cnt + 1, top);

  arr = table.map((e) => [...e]);
  let bottom = moveBlock("B", arr);
  DFS(cnt + 1, bottom);
}

function moveBlock(dir, table) {
  for (let i = 0; i < size; i++) {
    const arr = [];

    if (dir === "L") {
      for (let j = 0; j < size; j++) {
        if (table[i][j] !== 0) {
          arr.push(table[i][j]);
          table[i][j] = 0;
        }
      }

      if (arr.length > 0) {
        const result = getMovedBlockLine(arr);

        for (let j = 0; j < result.length; j++) {
          table[i][j] = result[j];
        }
      }
    }

    if (dir === "R") {
      for (let j = size - 1; j >= 0; j--) {
        if (table[i][j] !== 0) {
          arr.push(table[i][j]);
          table[i][j] = 0;
        }
      }

      if (arr.length > 0) {
        const result = getMovedBlockLine(arr);

        for (let j = 0; j < result.length; j++) {
          table[i][size - 1 - j] = result[j];
        }
      }
    }

    if (dir === "T") {
      for (let j = 0; j < size; j++) {
        if (table[j][i] !== 0) {
          arr.push(table[j][i]);
          table[j][i] = 0;
        }
      }
      if (arr.length > 0) {
        const result = getMovedBlockLine(arr);

        for (let j = 0; j < result.length; j++) {
          table[j][i] = result[j];
        }
      }
    }

    if (dir === "B") {
      for (let j = size - 1; j >= 0; j--) {
        if (table[j][i] !== 0) {
          arr.push(table[j][i]);
          table[j][i] = 0;
        }
      }
      if (arr.length > 0) {
        const result = getMovedBlockLine(arr);

        for (let j = 0; j < result.length; j++) {
          table[size - 1 - j][i] = result[j];
        }
      }
    }
  }
  return table;
}

function getMovedBlockLine(blocks) {
  const result = [];

  for (let i = 0; i < blocks.length - 1; i++) {
    if (blocks[i] === 0) continue;

    if (blocks[i] === blocks[i + 1]) {
      result.push(blocks[i] * 2);
      blocks[i + 1] = 0;
      continue;
    }
    result.push(blocks[i]);
  }

  if (blocks[blocks.length - 1] !== 0) {
    result.push(blocks[blocks.length - 1]);
  }

  return result;
}
