function getBinary(num, n) {
    let arr = [];
    while(num > 2) {
        arr.unshift(num % 2);
        num = Math.floor(num / 2);
    }

    if(num < 2) {
        arr.unshift(num);
    }
    if(num == 2) {
        arr.unshift(num % 2);
        arr.unshift(1);
    }

    while(arr.length < n) {
        arr.unshift(0);
    }
    return [...arr];
}


function solution(n, arr1, arr2) {
    let map1 = [];
    let map2 = [];
    let answer = [];

    arr1.forEach(
        elem => {
            map1.push(getBinary(elem, n));
        }
    )

    arr2.forEach(
        elem => {
            map2.push(getBinary(elem, n));
        }
    )
    for(let i = 0; i < n; i++) {
        let path = "";
        for(let j = 0; j < n; j++) {
            if(map1[i][j] === 0 && map2[i][j] === 0) {
                path += " ";
            } else {
                path += "#";
            }
        }
        answer.push(path);
    }
    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);


//padStart
//정규표현식