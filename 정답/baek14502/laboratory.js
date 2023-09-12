"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((e) => Number(e)));

const [N, M] = input[0];
const graph = input.splice(1);

let safeZone = 0;

makeWalls(0, graph);
console.log(safeZone);

function makeWalls(depth, graph) {
  if (depth === 3) {
    return spreadVirus(graph);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        makeWalls(depth + 1, graph);
        graph[i][j] = 0;
      }
    }
  }
}

function spreadVirus(graph) {
  const copyGraph = graph.map((e) => [...e]);
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const virusLocation = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (copyGraph[i][j] === 2) {
        virusLocation.push([i, j]);
      }
    }
  }

  while (virusLocation.length) {
    const [cx, cy] = virusLocation.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dir[i][0], cy + dir[i][1]];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && copyGraph[nx][ny] === 0) {
        copyGraph[nx][ny] = 2;
        virusLocation.push([nx, ny]);
      }
    }
  }

  countingSafeZone(copyGraph);
}

function countingSafeZone(graph) {
  let tmp = 0;

  for (let i = 0; i < N; i++) {
    tmp += graph[i].filter((e) => e === 0).length;
  }

  safeZone = Math.max(tmp, safeZone);
}
