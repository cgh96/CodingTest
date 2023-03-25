const fs = require('fs');
let input = fs.readFileSync('./baek1002/example.txt').toString().split('\n');
const numOfInput = parseInt(input[0]);


for(let i=1; i<=numOfInput; i++){
    const array = input[i].split(" ").map(elem => parseInt(elem));

    const turret1 = { x1: array[0], y1: array[1], r1: array[2] }
    const turret2 = { x2: array[3], y2: array[4], r2: array[5] }
    const d = Math.sqrt((turret2.x2-turret1.x1)**2 + (turret2.y2-turret1.y1)**2);

    if(turret1.r1 === turret2.r2 && d === 0){
        console.log(-1);
    }
    else if(d < Math.abs(turret2.r2-turret1.r1) || d > turret2.r2+turret1.r1){
        console.log(0);
    }
    else if(d === turret1.r1 + turret2.r2 || d === Math.abs(turret2.r2-turret1.r1)){
        console.log(1);
    }
    else{
        console.log(2);
    }
}

