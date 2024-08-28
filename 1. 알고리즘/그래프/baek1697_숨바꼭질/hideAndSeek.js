"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [subin, sister] = input[0].split(" ").map(Number);

const MIN_SCOPE = 0;
const MAX_SCOPE = 100000;

console.log(BFS());

function BFS() {
  let target = sister;
  let seconds = 0;

  if (target === subin) return seconds;

  const queue = [[subin]];
  const visited = Array.from({ length: MAX_SCOPE + 1 }, () => false);
  visited[subin] = true;

  while (queue[queue.length - 1].length) {
    const currentLocations = queue.shift();
    const nextLocations = [];

    for (let loc of currentLocations) {
      const options = createOptions(loc);

      for (let option of options) {
        if (option < MIN_SCOPE || option > MAX_SCOPE) continue;

        if (visited[option]) continue;

        if (option === target) return seconds + 1;
        nextLocations.push(option);
        visited[option] = true;
      }
    }

    seconds++;
    queue.push(nextLocations);
  }
}

function createOptions(loc) {
  return [loc + 1, loc - 1, loc * 2];
}
/**
 * X + 1
 * X - 1
 * X * 2
 */
