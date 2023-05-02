"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek1347/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const length = Number(input[0]);
let location = { x: 0, y: 0 };
const route = input[1].split("");
let direction = 0;
/**
 * 0 => 아래
 * 1 => 오른쪽
 * 2 => 위
 * 3 => 왼쪽
 */
let stack = [{ x: 0, y: 0 }];

const goUp = () => {
  location = { ...location, x: location.x - 1 };
};
const goDown = () => {
  location = { ...location, x: location.x + 1 };
};
const goLeft = () => {
  location = { ...location, y: location.y - 1 };
};
const goRight = () => {
  location = { ...location, y: location.y + 1 };
};

for (let i of route) {
  if (i === "L") {
    direction = (direction + 1) % 4;
  } else if (i === "R") {
    direction = (direction + 3) % 4;
  } else if (i === "F") {
    if (direction === 0) {
      goDown();
    } else if (direction === 1) {
      goRight();
    } else if (direction === 2) {
      goUp();
    } else if (direction === 3) {
      goLeft();
    }

    stack.push({ ...location });
  }
}

stack.sort((a, b) => a.x - b.x);
let minX = stack[0].x;
let maxX = stack[stack.length - 1].x + Math.abs(minX);

stack.sort((a, b) => a.y - b.y);
let minY = stack[0].y;
let maxY = stack[stack.length - 1].y + Math.abs(minY);

stack = stack.map((e) => ({
  x: e.x + Math.abs(minX),
  y: e.y + Math.abs(minY),
}));

let maze = new Array(maxX + 1).fill().map((e) => new Array(maxY + 1).fill("#"));

stack.forEach((e) => {
  maze[e.x][e.y] = ".";
});

for (let i of maze) {
  console.log(i.join().replace(/\,/g, ""));
}
