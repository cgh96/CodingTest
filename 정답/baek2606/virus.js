"use strict";
const fs = require("fs");
const { isDeepStrictEqual } = require("util");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./시도중/baek2606/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input.map((e) => e.split(" ").map((l) => Number(l)));

let graph = new Array(input[0][0] + 1).fill().map(() => []);
let visited = new Array(input[0][0] + 1).fill(false);
let table = input.slice(2);
let answer = 0;

visited[1] = true;

const dfs = (start) => {
  graph[start].map((dest) => {
    if (!visited[dest]) {
      visited[dest] = true;
      answer++;
      dfs(dest);
    }
  });
};

table.map((i) => {
  const start = i[0];
  const end = i[1];
  graph[start].push(end);
  graph[end].push(start);
});

dfs(1);

console.log(answer);

// 1 47 48 49 50
