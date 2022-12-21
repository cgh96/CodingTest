"use strict";
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek1158/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(elem => elem.split(" "))[0]

const circle = [...new Array(Number(input[0]))].map( (elem, index) => index + 1);
const position = Number(input[1]) - 1;
let index = position;
const arr = [];

while(circle.length > 0) {
    arr.push(circle.splice(index, 1)[0]);
    index += position;
    index = (index >= circle.length) ? index % circle.length : index;
}

const answer = "<" + arr.join(", ") + ">";

console.log(answer)


/**
 * 1 ~ N  (K <= N)
 * 
 * 원에서 사람들이 제거되는 순서 (N, K)
 * 
 * 1 2 3 4 5 6 7 => 3
 * 1 2 4 5 6 7 => 6
 * 1 2 4 5 7 => 2
 * 1 4 5 7 => 7
 * 1 4 5 => 5
 * 1 4 => 1
 * 4 => 4
 * 
 */