"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, E] = input[0].split(" ").map((e) => +e);

const lineInfo = input.slice(1, E + 1).map((e) => e.split(" ").map((i) => +i));
const [firTarget, secTarget] = input[input.length - 1]
  .split(" ")
  .map((e) => +e);
const graph = createGraph(lineInfo);

const planA =
  dijkstra(1, firTarget) +
  dijkstra(firTarget, secTarget) +
  dijkstra(secTarget, N);

const planB =
  dijkstra(1, secTarget) +
  dijkstra(secTarget, firTarget) +
  dijkstra(firTarget, N);

const minDist = Math.min(planA, planB);

console.log(minDist === Infinity ? -1 : minDist);

function dijkstra(start, target) {
  const VISITED = new Array(N + 1).fill(false);
  const DISTANCE = new Array(N + 1).fill(Infinity);
  DISTANCE[start] = 0;
  const queue = [[start, 0]];

  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    const [curPos, totalDist] = queue.shift();

    if (VISITED[curPos] === true) continue;
    VISITED[curPos] = true;

    for (let [next, nextDist] of graph[curPos]) {
      const dist = totalDist + nextDist;

      if (dist < DISTANCE[next]) {
        queue.push([next, dist]); // start부터 next까지의 총거리
        DISTANCE[next] = dist;
      }
    }
  }

  return DISTANCE[target];
}

function createGraph(lineInfo) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < lineInfo.length; i++) {
    const [start, end, dist] = lineInfo[i];
    graph[start].push([end, dist]);
    graph[end].push([start, dist]);
  }

  return graph;
}

/**
 * 다익스트라 진행
 * start -> firTarget -> secTarget -> end
 * start -> secTarget -> firTarget -> end
 */
