"use strict";
const { dir } = require('console');
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek1063/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const location = input[0].split(" ");
const King = location[0].split("");
const Stone = location[1].split("");
let direction = input.slice(1);

let king = {
  x: King[0].charCodeAt(),
  y: Number(King[1]),
};

let stone = {
  x: Stone[0].charCodeAt(),
  y: Number(Stone[1]),
}

const A = 'A'.charCodeAt();
const H = 'H'.charCodeAt();

direction = direction.map(d => d.split(""));

for(let d of direction) {
  let x1 = king.x;
  let y1 = king.y;
  let x2 = stone.x;
  let y2 = stone.y;

  for(let s of d) {
    if(s === 'R') {
        x1 += 1;
    } else if(s === 'L') {
        x1 -= 1;
    } else if(s === 'T') {
        y1 += 1;
    } else if(s === 'B') {
        y1 -= 1;
    }
  }

  if(x1 === x2 && y1 === y2) {
    x2 += (x1 - king.x);
    y2 += (y1 - king.y);
  }

  if(
    x1 >= A && x1 <= H && y1 >= 1 && y1 <= 8 &&
    x2 >= A && x2 <= H && y2 >= 1 && y2 <= 8
  ) {
    king.x = x1;
    king.y = y1;
    stone.x = x2;
    stone.y = y2;
  }
}

console.log(String.fromCharCode(king.x) + king.y);
console.log(String.fromCharCode(stone.x) + stone.y);