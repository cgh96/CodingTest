'user strict'
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const input = fs.readFileSync('./baek1436/example.txt').toString().trim().split('\n');

const seriesNum = Number(input);
let count = 0;
const movieName = '666';
let check = Number(movieName);

do{
    if(check.toString().includes('666')){
        count++;
    }
    check++;
}while(count !== seriesNum)

check--;
console.log(check.toString());