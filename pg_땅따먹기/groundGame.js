function solution(land) {
    for(let row = 1; row < land.length; row++) {
        for(let col = 0; col < 4; col++) {
            land[row][col] += Math.max(
                ...land[row - 1].slice(0, col),
                ...land[row - 1].slice(col + 1)
            )
        }
    }
    return Math.max(...land[land.length - 1]);
}

solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);
//첫번쨰 => 가장 큰거.
//n번째 => index가  

/**
 land[1].slice()
 */