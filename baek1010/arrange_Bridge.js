"use strict";
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
let input = fs.readFileSync('./baek1010/example.txt').toString().trim().split('\r\n');

const caseNum = Number(input.shift());

let west;
let east;

function factorial(n) {
    if( n <= 1) return 1;
    return n * factorial(n-1);
};

function Combination (w, e) {
    return factorial(e) / (factorial(e - w) * factorial(w));
}

input = input.map( elem => elem.split(' '));


for(let i = 0; i<caseNum; i++){
    west = +input[i][0];
    east = +input[i][1];
    console.log(Math.round(Combination(west, east)) );
}