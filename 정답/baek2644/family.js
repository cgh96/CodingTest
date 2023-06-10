"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2644/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input[0]);
const [start, end] = input[1].split(" ").map(Number);
const number_of_relation = Number(input[2]);
input.splice(0, 3);

input = input.map((e) => e.split(" ").map(Number));

const graph = new Array(N + 1).fill().map((e) => []);
const visited = new Array(N + 1).fill(false);
visited[start] = true;
let answer = 0;

for (let p of input) {
  graph[p[0]].push(p[1]);
  graph[p[1]].push(p[0]);
}
DFS(start, end, 0);
console.log(answer !== 0 ? answer : -1);

function DFS(start, end, cnt) {
  if (start === end) {
    answer = cnt;
  }

  for (let i = 0; i < graph[start].length; i++) {
    if (!visited[graph[start][i]]) {
      visited[graph[start][i]] = true;
      DFS(graph[start][i], end, cnt + 1);
    }
  }
}
