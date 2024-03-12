"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.splice(0, 1)[0];
const K = +input.splice(0, 1)[0];
const APPLE_POSITIONS = input.splice(0, K).map((e) => e.split(" ").map(Number));
const L = +input.splice(0, 1)[0];
const MOVE_INFO = input.map((e) => e.split(" ")).map((i) => [+i[0], i[1]]);

const BOARD = new Array(N + 2).fill().map((_) => new Array(N + 2).fill(0));
for (let i = 0; i <= N; i++) {
  BOARD[0][i] = 1;
  BOARD[i][0] = 1;
  BOARD[N + 1][i] = 1;
  BOARD[i][N + 1] = 1;
}

for (let i = 0; i < K; i++) {
  const [ax, ay] = APPLE_POSITIONS[i];
  BOARD[ax][ay] = 2;
}

const SNAKE = [[1, 1]];

let aliveTime = 0;
let curDir = 1; // DIRECTIONS[curDir] => 머리 방향, L => curDir--, D => curDir++
let isDead = false;

for (let moveInfo of MOVE_INFO) {
  const [secs, dir] = moveInfo;

  if (moveSnake(secs, curDir) === -1) {
    isDead = true;
    break;
  }

  if (dir === "L") {
    // 왼쪽
    curDir = (curDir + 3) % 4;
  }

  if (dir === "D") {
    // 오른쪽
    curDir = (curDir + 1) % 4;
  }
}

if (!isDead) {
  moveSnake(N ** 2, curDir);
}

console.log(aliveTime);

function moveSnake(secs, curDir) {
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (aliveTime < secs) {
    aliveTime++;

    const [headX, headY] = SNAKE[0];
    const [dx, dy] = DIRECTIONS[curDir];

    const [nx, ny] = [headX + dx, headY + dy];

    if (isThereWall(nx, ny) || isThereSnake(nx, ny)) {
      return -1;
    }

    if (isThereApple(nx, ny)) {
      SNAKE.unshift([nx, ny]);
      BOARD[nx][ny] = 0;
    } else {
      SNAKE.unshift([nx, ny]);
      SNAKE.pop();
    }
  }

  return 1;
}

function isThereApple(nx, ny) {
  return BOARD[nx][ny] === 2;
}

function isThereSnake(nx, ny) {
  for (let i = 0; i < SNAKE.length; i++) {
    const [bx, by] = SNAKE[i];

    if (nx === bx && ny === by) {
      return true;
    }
  }

  return false;
}

function isThereWall(nx, ny) {
  return BOARD[nx][ny] === 1;
}
/**
 * 벽 => x === 0 || x === N - 1 || y === 0 || y === N - 1
 */
