"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.splice(0, 1)[0];
const M = +input.splice(0, 1)[0];
const BUS_INFO = input.splice(0, M + 1).map((e) =>
  e.split(" ").map((i, idx) => {
    if (idx === 2) {
      return +i;
    }

    return +i - 1;
  })
);

const GRAPH = new Array(N).fill().map((_) => new Array(N).fill(Infinity));

for (let bus of BUS_INFO) {
  const [start, end, cost] = bus;
  GRAPH[start][end] = Math.min(GRAPH[start][end], cost);
}

for (let i = 0; i < N; i++) {
  GRAPH[i][i] = 0;
}

floydWarshall();

function floydWarshall() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (GRAPH[j][k] > GRAPH[j][i] + GRAPH[i][k]) {
          GRAPH[j][k] = GRAPH[j][i] + GRAPH[i][k];
        }
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (GRAPH[i][j] === Infinity) {
      GRAPH[i][j] = 0;
    }
  }
}

GRAPH.forEach((e) => {
  console.log(e.join(" "));
});
