function solution(n,a,b) {
    let round = 1;
    if(a > b) { [a, b] = [b, a]; }
   
    while(b - a > 1 || b % 2 !== 0) {
        a = Math.floor(a / 2) + a % 2;
        b = Math.floor(b / 2) + b % 2;
        round++;
    }

    return round;
}

solution(8, 4, 7);

//1    8  4  7
//2    4  2  4
//3    2  1  2


//1    8  5  7
//2    4  3  4

//나머지 1 ==> 몫 + 1
//1    8  3  7
//2    4  2  4
//3    2  1  2

//1    8  2  3