"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const numberOfCommand = Number(input.splice(0, 1)[0]);
const commands = input;
const result = [];

class Stack {
  stack = [];

  getSize = () => {
    return this.stack.length;
  };
  isEmpty = () => {
    return this.stack.length === 0 ? 1 : 0;
  };
  top = () => {
    return this.stack.length === 0 ? -1 : this.stack[this.stack.length - 1];
  };
  push = (X) => {
    this.stack.push(X);
  };
  pop = () => {
    return this.stack.length === 0 ? -1 : this.stack.pop();
  };
}

const stack = new Stack();

for (let c of commands) {
  if (new RegExp(/push/).test(c)) {
    stack.push(Number(c.split(" ")[1]));
  } else if (new RegExp(/pop/).test(c)) {
    result.push(stack.pop());
  } else if (new RegExp(/top/).test(c)) {
    result.push(stack.top());
  } else if (new RegExp(/size/).test(c)) {
    result.push(stack.getSize());
  } else if (new RegExp(/empty/).test(c)) {
    result.push(stack.isEmpty());
  }
}

console.log(result.join("\n"));
