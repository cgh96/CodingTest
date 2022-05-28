"use strict";
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
let input = fs.readFileSync('./baek1010/example.txt').toString().trim().split('\r\n');

const caseNum = Number(input.shift());
const result = new Array(caseNum);

let west;
let east;

let save = [];

function factorial(n) {
    if( n > 1) return n * factorial( n - 1 );
    return 1;
};

function Combination (w, e) {
    return factorial(e) / factorial(e - w);
}

input = input.map( elem => elem.split(' '));


for(let i in input){
    west = +input[i][0];
    east = +input[i][1];

    result.push(Math.round(Combination(west, east) / factorial(west)) );
}

result.forEach( x => console.log(x) );