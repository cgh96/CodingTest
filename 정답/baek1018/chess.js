'use strict'
const { FORMERR } = require('dns');
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const input = fs.readFileSync('./baek1018/example.txt').toString().trim().split('\r\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let result = [];
const line = ['WBWBWBWB', 'BWBWBWBW'];

for(let i = 0; i <= n-8; i++){
    for(let j = 0; j <= m-8; j++) {
       for(let k = 0; k<2; k++){
            let count = 0;

            for(let x = i; x < i+8; x++){
                for(let y = j; y < j+8; y++){
                    if(input[x][y] !== line[(x+k)%2][y-j]){
                        count++;
                    }    
                }
            }result.push(count);
        }
    }
}
console.log(Math.min(...result));