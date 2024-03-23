"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const GRAPH = new Array(N + 1)
  .fill()
  .map((_) => new Array(N + 1).fill(Infinity));
const PATH = input.slice(1).map((e) => e.split(" ").map(Number));

/** 플로이드-워셜 */
for (let i = 0; i <= N; i++) {
  GRAPH[i][i] = 0;
}

for (let [start, end] of PATH) {
  GRAPH[start][end] = 1;
  GRAPH[end][start] = 1;
}

for (let mid = 1; mid <= N; mid++) {
  for (let start = 1; start <= N; start++) {
    for (let end = 1; end <= N; end++) {
      GRAPH[start][end] = Math.min(
        GRAPH[start][mid] + GRAPH[mid][end],
        GRAPH[start][end]
      );
    }
  }
}

let totalDist = Number.MAX_SAFE_INTEGER;
let firstStore = 0;
let secondStore = 0;

/** 스토어 두 곳 정하기 (브루트포스) */
for (let store1 = 1; store1 < N; store1++) {
  for (let store2 = store1 + 1; store2 <= N; store2++) {
    let dist = 0;

    for (let start = 1; start <= N; start++) {
      dist += Math.min(GRAPH[start][store1], GRAPH[start][store2]) * 2;
    }

    if (dist < totalDist) {
      totalDist = dist;
      firstStore = store1;
      secondStore = store2;
    }
  }
}

console.log(firstStore, secondStore, totalDist);
