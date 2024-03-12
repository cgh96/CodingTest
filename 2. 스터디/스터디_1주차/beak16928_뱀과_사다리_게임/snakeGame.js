"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((e) => +e);
const ladderAndSnake = input.slice(1).map((e) => e.split(" ").map((i) => +i));

const BOARD = new Array(101).fill(0).map((_e, i) => i); // BOARD[idx] => 해당 위치에서 이동할 수 있는 곳
const VISITED = new Array(101).fill(100); // VISITED[idx] => 해당 위치에 도달하기 까지 주사위를 던진 최소 횟수

for (let [x, y] of ladderAndSnake) {
  BOARD[x] = y;
}

BFS();

function BFS() {
  const TARGET_INDEX = 100;
  const queue = [];
  queue.push(1);
  VISITED[1] = 0;

  while (queue.length !== 0) {
    const curPosition = queue.shift();

    for (let i = 1; i <= 6; i++) {
      let nextPosition = curPosition + i;

      if (nextPosition > TARGET_INDEX) {
        continue;
      }

      nextPosition = BOARD[nextPosition];
      if (VISITED[nextPosition] > VISITED[curPosition] + 1) {
        VISITED[nextPosition] = VISITED[curPosition] + 1;
        queue.push(nextPosition);
      }
    }
  }

  console.log(VISITED[100]);
}

/**
 * 주사위를 굴려서 100에 도착할 수 있는 모든 경우의 수를 구한다.
 * 그 중에 작은 값이 나올 때마다 minCnt를 업데이트
 *
 * 1. 사다리만 타는 경우
 * 2. 사다리를 탄 다음, 뱀을 타고 내려와서 더 빠른 사다리를 타는 경우
 *  - 사다리 or 뱀을 타고 이동한 곳에 사다리 or 뱀이 있는가? => NO (뱀, 사다리 둘 다 가지는 경우는 존재하지 않는다.)
 * ...
 *
 * 재귀 => stack overflow 발생
 * BFS => queue와 while문
 */
