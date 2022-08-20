function solution(numbers, hand) {
    let position = [10, 12];
    let handType = [];
    let pad = [
        [ 1, 4, 7, 10 ],
        [ 2, 5, 8, 11 ],
        [ 3, 6, 9, 12 ],
    ]


    for(let num of numbers) {
        if(num === 0) {
            num = 11;
        }

        if(pad[0].find(elem => elem === num)) {
            position[0] = num;
            handType.push("L");
        } else if (pad[2].find(elem => elem === num)) {
            position[1] = num;
            handType.push("R");
        } else {
            let leftDist = Math.abs(num - position[0]);
            let rightDist = Math.abs(num - position[1]);

            if(leftDist === 1 || leftDist === 3) {
                leftDist = 1;
            } else if ([2, 4, 6].find(elem => elem === leftDist)) {
                leftDist = 2;
            } else if(leftDist === 5 || leftDist === 7 || leftDist === 9){
                leftDist = 3;
            } else if(leftDist === 8 || leftDist === 10) {
                leftDist = 4;
            } else {
                leftDist = 0;
            }

            if(rightDist === 1 || rightDist === 3) {
                rightDist = 1;
            } else if ([2, 4, 6].find(elem => elem === rightDist)) {
                rightDist = 2;
            } else if([5, 7, 9].find(elem => elem === rightDist)) {
                rightDist = 3;
            } else if([8, 10].find(elem => elem === rightDist)) {
                rightDist = 4;
            } else {
                rightDist = 0;
            }

            if(leftDist < rightDist) {
                handType.push("L");
                position[0] = num;
            } else if( leftDist > rightDist) {
                handType.push("R");
                position[1] = num;
            } else {
                if(hand === "right") {
                    handType.push("R");
                    position[1] = num;
                }
                if(hand === "left") {
                    handType.push("L");
                    position[0] = num;
                }
            }
        }
    }

    return handType.join("");
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");


/*
1 2 3
4 5 6
7 8 9
* 0 #
*/