"use strict";
const fs = require('fs');
const input = fs.readFileSync('./baek1316/example.txt').toString().trim().split('\n');

const count = Number(input[0]);
let wordCounter = 0;

for(let i = 1; i<=count; i++){
    const temp = input[i];
    const arr = [];
    let check=true;

    for(let j = 0; j<temp.length; j++){

        if(arr.indexOf(temp[j]) === -1){ //지정된 요소를 찾을 수 있는 첫 번째 인덱스 반환 
            arr.push(temp[j]);           ////or -1반환 (indexOf)
        }
        else{
            if(arr.indexOf(temp[j]) !== arr.length-1){
                check = false;
                break;
            }
        }
    }
    if(check===true){
        wordCounter++;
    }
}

console.log(wordCounter);