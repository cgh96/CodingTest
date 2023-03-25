"use strict";
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const input = fs.readFileSync('./baek1021/example.txt').toString().trim().replace('\r', '').split('\n');

let size = input[0].split(' ').map(x => Number(x))[0];
const pickCount = input[0].split(' ').map(x => Number(x))[1];
let targetIndex = input[1].split(' ').map(x => Number(x)-1);

let operatorCnt = 0;

function left(arr) {
    operatorCnt += arr[0];
    for(let i = 1; i < arr.length; i++){
      arr[i] -= arr[0];
      if(arr[i] < 0){
          arr[i] = size + arr[i];
      }
    }
    arr[0] = 0;
    return [...arr];
}

function right(arr){
    operatorCnt += size - arr[0];
    for(let i = 1; i < arr.length; i++){
        arr[i] += size - arr[0];
        if(arr[i] >= size){
            arr[i] -= size;
        }
    }
    arr[0] = 0;
    return [...arr];
}

function pickTarget(){
  targetIndex.shift();
  targetIndex = targetIndex.map( idx => idx - 1);
  size -= 1;
}


console.log(targetIndex);
while(targetIndex.length > 0){
    if(targetIndex[0] <= size - targetIndex[0]){
        left(targetIndex);
    }else{
        right(targetIndex);
    }
    pickTarget();
}

console.log(operatorCnt);