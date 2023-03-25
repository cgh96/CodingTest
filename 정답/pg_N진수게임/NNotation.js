function solution(n, t, m, p) {
    let num = [];
    let answer = [];
    let i = 0
    while(true) {
        num.push(...i.toString(n).split(""));
        if( num.length >= (t - 1) * m + p ) { break; }
        i++;
    }

    for(let j = 0; j < t; j++) {
        answer.push( num.find( (elem, index) => j * m + p - 1 === index ) );
    }
    
    return answer = answer.map( elem => elem.replace(/[a-z]/, ch => ch.toUpperCase()) ).join("");
}

solution(16, 16, 2, 1);

//n진법
//t미리 구할 숫자 개수
//인원 m
//튜브의 순서 p


//1번째 : 0 X m + p
//2번째 : 1 X m + p
//3번째 : 2 X m + p
//...
//t번째 : (t - 1) X m + p

// 0 2 4 6 8 A C E 1 1 1 1 1