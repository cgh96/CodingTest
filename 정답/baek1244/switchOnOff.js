"use strict";
const fs = require('fs');
const { isDeepStrictEqual } = require('util');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./baek1244/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

input = input.map(elem => elem.split(" ").map( n => Number(n)));

const SWITCH_NUMBER = input[0];
const SWITCH_STATE = [null, ...input[1]];

function changeSwitch(number, s) {
    if(s === 1) {
        for(let i = 1; number * i < SWITCH_STATE.length; i++) {
            SWITCH_STATE[number * i] = SWITCH_STATE[number * i] === 1 ? 0 : 1;
        }
    } else {
        let left = number - 1;
        let right = number + 1;
        SWITCH_STATE[number] = SWITCH_STATE[number] === 1 ? 0 : 1;

        while(left >= 1 && right < SWITCH_STATE.length) {
            if(SWITCH_STATE[left] !== SWITCH_STATE[right]) {
                break;
            }
            SWITCH_STATE[left] = SWITCH_STATE[left] === 1 ? 0 : 1;
            SWITCH_STATE[right] = SWITCH_STATE[right] === 1 ? 0 : 1;

            left--;
            right++;
        }
    }
}

for(let i = 3; i < input.length; i++) {
    changeSwitch(input[i][1], input[i][0]);
}

let count = 0;
let str = "";
for(let i = 1; i < SWITCH_STATE.length; i++) {
    str += `${SWITCH_STATE[i]}`;
    count++;
    if(count === 20 || i === SWITCH_STATE.length - 1) {
        count = 0;
        str += "\n";
    } else {
        str += " ";
    }
}

console.log(str)

/**
 * null 0 1 0 1 0 0 0 1
 * null 0 1 1 1 0 1 0 1
 * null 1 0 0 0 1 1 0 1
 * N : 1 ~ 스위치 개수
 * 남 : N * k (k는 자연수) => 스위치 상태 변경
 * 여 :  N => N을 중심으로 대칭구간 스위치 상태 변경
 */