"use strict";
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek1059/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

let size = Number(input[0]);
let numbers = input[1].split(" ").map( num => Number(num)).sort( (a, b) => a - b);
let n = Number(input[2])
let start, end;

if(size === 1) {
    if(numbers[0] === n) { console.log(0); }
    else if(numbers[0] > n) {
        start = n - 1;
        end = numbers[0] - n - 1;
    }
} else {
    for(let i = 0; i < numbers.length - 1; i++) {
        if(i === 0 && numbers[i] > n) {
            start = n - 1;
            end = numbers[i] - n - 1;
            break;
        }

        if(numbers[i] === n || numbers[i + 1] === n) {
            console.log(0);
            return;
        }
    
        if(numbers[i] < n && numbers[i + 1] > n) {
            start = n - numbers[i] - 1;
            end = numbers[i + 1] - n - 1
        }
    }
}

console.log(start * end + start * 1 + end * 1);



/**
 * 13
 * 14
 * 15
 * 16 ~ 1000
 */