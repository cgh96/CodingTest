"use strict";
const fs = require('fs');
const { isDeepStrictEqual } = require('util');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek1003/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const array = [
  {
    zero: 1,
    one: 0,
  },
  {
    zero: 0,
    one: 1,
  }
];

input.forEach((elem, index) => {
  if(index >= 1) {
    getNumber(Number(elem));
  }
})

function getNumber(n) {
  let copyArray = [...array];

  if(n === 0) {
    console.log(`${copyArray[0].zero} ${copyArray[0].one}`);
    return;
  } else if(n === 1) {
    console.log(`${copyArray[1].zero} ${copyArray[1].one}`);
    return;
  }

  for(let i = 2; i <= n; i++) {
    copyArray.push({
      zero: copyArray[i - 2].zero + copyArray[i - 1].zero,
      one: copyArray[i - 2].one + copyArray[i - 1].one,
    });
  }
  console.log(`${copyArray[n].zero} ${copyArray[n].one}`);
}

/**
 g0 
 g1
 g2 = g1 + g0
 g3 = g2 + g1
 g4 = g3 + g2
 f(4) = f(3) + f(2) = f(2) + f(1) + f(1) + f(0) = f(1) + f(0) + f(1) + f(1) + f(0) = 3f(1) + 2f(0)
 f(5) = 3f(1) + 2f(0) + f(4) + f(3)
 */