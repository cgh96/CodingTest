"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);
const BOARD = input.slice(1).map((e) => e.split(""));

const coins = findCoins(BOARD, N, M);
let cnt = Number.MAX_SAFE_INTEGER;

const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

DFS(coins[0], coins[1], 0);

console.log(cnt === Number.MAX_SAFE_INTEGER ? -1 : cnt);

function DFS(coin1, coin2, buttonPushCnt) {
  if (buttonPushCnt >= cnt) return;
  if (buttonPushCnt > 10) return;
  if (!isThereCoins(coin1) && !isThereCoins(coin2)) return;
  if (
    (!isThereCoins(coin1) && isThereCoins(coin2)) ||
    (isThereCoins(coin1) && !isThereCoins(coin2))
  ) {
    cnt = Math.min(cnt, buttonPushCnt);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [cx1, cy1] = coin1;
    const [cx2, cy2] = coin2;

    const [dx, dy] = dir[i];

    let [nx1, ny1] = [cx1 + dx, cy1 + dy];
    let [nx2, ny2] = [cx2 + dx, cy2 + dy];

    if (isThereCoins([nx1, ny1]) && BOARD[nx1][ny1] === "#") {
      nx1 = cx1;
      ny1 = cy1;
    }

    if (isThereCoins([nx2, ny2]) && BOARD[nx2][ny2] === "#") {
      nx2 = cx2;
      ny2 = cy2;
    }

    DFS([nx1, ny1], [nx2, ny2], buttonPushCnt + 1);
  }
}

function findCoins(board, N, M) {
  const coins = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "o") {
        coins.push([i, j]);
      }

      if (coins.length === 2) {
        break;
      }
    }
  }

  return coins;
}

function isThereCoins(coin) {
  const [x, y] = coin;

  if (x >= 0 && x < N && y >= 0 && y < M) {
    return true;
  }
  return false;
}

/**
 * 1. 코인이 보드에 두개 다 존재하는가? => 존재 안하면 return;
 * 2. 둘 중 하나만 존재 하는가? => return 버튼 누른 횟수 업데이트 (최솟값이라면)
 * 3. coin1, 2가 움직이려는 곳이 벽인가? 벽이면 제자리
 */
