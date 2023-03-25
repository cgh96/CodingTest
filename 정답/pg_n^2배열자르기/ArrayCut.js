function solution(n, left, right) {
    let array = [];

    for(let i = left; i <= right; i++) {
        array.push(Math.floor(i / n) + 1> i % n ? Math.floor(i / n) + 1 : i % n + 1);
    }
    return array;
}

solution(4, 7, 14)

//    2      5
//1 2 3  2 2 3  3 3 3

//0 1 2 3  4 5 6 7  8 9 10 11  12 13 14 15            14
//1 2 3 4  2 2 3 4  3 3 3  4   4  4  4  4


//Math.floor(index / n) + 1 > index % n  ==> Math.floor(index / n) + 1
//Math.floor(index / n) + 1<= index % n ==> index % n + 1