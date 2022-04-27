'user strict'
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const input = fs.readFileSync('./baek1427/example.txt').toString().trim().split('\n');
let arr = input.toString().split('').map(Number);

const mergeSort = function (args) {
    if(args.length === 1) return args;
    const mid = Math.floor(args.length/2);
    const left = mergeSort(args.slice(0, mid));
    const right = mergeSort(args.slice(mid));
    
    return merge(left, right);
   
}

const merge = function (left, right) {
    const result = [];

    while(left.length !== 0 && right.length !== 0){
        left[0] >= right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    if(left.length === 0){
        result.push(...right);
    }
    if(right.length === 0){
        result.push(...left);
    }
    return result; //[...result, ...left, ...right]
}

console.log(mergeSort(arr).join(''));