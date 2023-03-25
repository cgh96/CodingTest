"use strict";
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek11729/input.txt";
let input = fs.readFileSync(filePath).toString();
let n = Number(input);
let order = [];

function hanoi(from, other, to, n) {
    if(n === 0) return;
    hanoi(from, to, other, n - 1);
    order.push([from, to]);
    hanoi(other, from, to, n - 1);
}

hanoi(1, 2, 3, n)

console.log(order.length);
console.log(order.map(elem => elem.join(" ")).join("\n"))
/**
 * n은 바닥에서부터 n번째
 * n 홀수 : 1 => 3
 * n 짝수 : 1 => 2
 * 
 */
