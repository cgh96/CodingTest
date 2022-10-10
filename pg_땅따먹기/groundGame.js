function solution(land) {
    let answer = [land[0], land[1], land[2], land[3]];
    let maxIndex = [0, 1, 2, 3];

    for(let row = 1; i < land.length; i++) {
        for(let col = 0; col < 4; col++) {
            answer[col] += Math.max(...land[row].slice(0, maxIndex[col]),
            ...land[row].slice(maxIndex[col]));
        }
       
    }
}

solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);
//첫번쨰 => 가장 큰거.
//n번째 => index가  

/**
 land[1].slice()
 */