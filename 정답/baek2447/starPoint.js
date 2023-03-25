"use strict";
const fs = require('fs');
const { isDeepStrictEqual } = require('util');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek2447/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');


const N = +input[0];
let star = "";

function starPoint(i, j) {
        if(i % 3 === 2 && j % 3 === 2) {
                star += " ";
        } else {
                if(i / 3 <= 1 && j / 3 <= 1) {
                        star += "*";
                } else {
                        starPoint(Math.ceil(i / 3), Math.ceil(j / 3));
                }
        }
}

for(let i = 1; i <= N; i++) {
        for(let j = 1; j <= N; j++) {
                starPoint(i, j);
        }

        if(i !== N) {
                star += "\n";
        }
}

console.log(star)



/*
4,1     4,2     4,3     4,4     4,5     4,6     4,7     4,8     4,9
5,1     5,2     5,3     5,4     5,5     5,6     5,7     5,8     5,9
6,1     6,2     6,3     6,4     6,5     6,6     6,7     6,8     6,9
*/