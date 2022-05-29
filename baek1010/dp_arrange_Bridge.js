"use strict";
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const { resourceLimits } = require('worker_threads');
let input = fs.readFileSync('./baek1010/example.txt').toString().trim().split('\r\n');

const caseNum = Number(input.shift());

const memo = Array.from(Array(30), () => Array(30).fill(0));

for(let i = 1; i < 30; i++){
    for(let j = i; j < 30; j++){
        if(i === j) memo[i][j] = 1;
        else if(i === 1){
            memo[i][j] = j;
        }
        else{
            memo[i][j] = memo[i-1][j-1] + memo[i][j-1];
         
        }
    }
}

for(let cases in input){
    let west = +input[cases].split(' ')[0];
    let east = +input[cases].split(' ')[1];
    console.log(memo[west][east]);
}