"use strict";
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek1049/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

///dev/stdin
input = input.map(elem => elem.split(" "));

let cutLineNumber = Number(input[0][0]);
const BRAND_NUMBER = Number(input[0][1]);

const lineSet = [];
const oneLine = [];

for(let i = 1; i < input.length; i++) {
    lineSet.push(Number(input[i][0]));
    oneLine.push(Number(input[i][1]));
}

let setPrice = Math.min(...lineSet);
let onePrice = Math.min(...oneLine);

if(onePrice * 6 < setPrice ) {
    console.log(Math.min(...oneLine) * cutLineNumber);
} else {
    let setNumNeeds = Math.floor(cutLineNumber / 6);
    let oneNumNeeds = cutLineNumber % 6;

    setNumNeeds *= setPrice;
    oneNumNeeds = (oneNumNeeds * onePrice) < setPrice ? oneNumNeeds * onePrice : setPrice;
    console.log(setNumNeeds + oneNumNeeds)
}
// 끊어진 기타줄 = N
// 기타줄 브랜드 = M

/**
 * 10 3
 * 20 8 => 3.3, 8
 * 40 7  => 
 * 60 4 => 10, 4
 */