"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek11724/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, E] = input[0].split(" ").map(Number);
const Node_List = input.slice(1).map((e) => e.split(" ").map(Number));
const table = new Array(N + 1).fill().map((e) => []);

let cnt = 0;
const visited = [0];

for (let i = 1; i <= N; i++) {
  visited.push(false); // 방문표 만들기
}

for (let i = 0; i < Node_List.length; i++) {
  // graph만들기
  const start = Node_List[i][0];
  const end = Node_List[i][1];

  table[start].push(end);
  table[end].push(start);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    BFS(i);
  }
}
console.log(cnt);
function BFS(start) {
  const queue = [start];

  while (queue.length) {
    start = queue[0];
    visited[start] = true;
    queue.splice(0, 1);

    for (let i = 0; i < table[start].length; i++) {
      if (!visited[table[start][i]] && !queue.includes(table[start][i])) {
        queue.push(table[start][i]);
      }
    }
  }
  cnt++;
}

/**
 * 1 => 2
 * 2 => 5
 * 5 => 1
 *
 */
