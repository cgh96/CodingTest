"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" "));

const numberOfNode = Number(input.splice(0, 1)[0][0]);
const tree = {};

for (let i = 0; i < input.length; i++) {
  const [node, left, right] = input[i];
  tree[node] = [left, right];
}

let result = "";
preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);

function preorder(node = "A") {
  if (node === ".") return;
  const [left, right] = tree[node];

  result += node;
  preorder(left);
  preorder(right);
}

function inorder(node = "A") {
  if (node === ".") return;
  const [left, right] = tree[node];

  inorder(left);
  result += node;
  inorder(right);
}

function postorder(node = "A") {
  if (node === ".") return;
  const [left, right] = tree[node];

  postorder(left);
  postorder(right);
  result += node;
}
