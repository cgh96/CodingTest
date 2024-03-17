"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const PARENT_IDX_LIST = input[1].split(" ").map(Number);
const DELETE_NODE_IDX = +input[2];
const DELETED = new Array(N).fill(false);

const TREE_INFO = new Array(N).fill().map((_) => []);
let rootNode = null;
let endNodeCnt = 0;

for (let i = 0; i < PARENT_IDX_LIST.length; i++) {
  const parentIdx = PARENT_IDX_LIST[i];
  if (parentIdx >= 0) {
    TREE_INFO[parentIdx].push(i);
  } else {
    rootNode = i;
  }
}

deleteNode(DELETE_NODE_IDX);

if (rootNode === null) {
  console.log(0);
  return;
}
countEndNode(rootNode);
console.log(endNodeCnt);

function deleteNode(targetIdx) {
  DELETED[targetIdx] = true;
  if (targetIdx === rootNode) {
    rootNode = null;
  }
  if (TREE_INFO[targetIdx].length === 0) return;

  for (let child of TREE_INFO[targetIdx]) {
    deleteNode(child);
  }
}

function countEndNode(parentIdx) {
  const children = TREE_INFO[parentIdx].filter((e) => !DELETED[e]);

  if (children.length === 0) {
    endNodeCnt++;
    return;
  }

  for (let child of children) {
    if (!DELETED[child]) {
      countEndNode(child);
    }
  }
}
