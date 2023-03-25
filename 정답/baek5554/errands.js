"use strict";

const fs = require('fs');
const input = fs.readFileSync('./baek5554/example.txt').toString().trim().split('\n');

const time = input.map(elem => parseInt(elem, 10));//why is parseInt instead of Number incorrect?
time.forEach(element => console.log(typeof element, element));
let total = time.reduce((acc, curr) => acc + curr, 0);

let min = parseInt(total/60);
let sec = total%60;

console.log(`${min}\n${sec}`);

/*
because map passes three arguments into parseInt() on each iteration. 
The second argument index is passed into parseInt as a radix parameter.
*/ 