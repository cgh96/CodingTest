function isPrimeNumber(num) {
    if(num <= 1) return false;
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) { return false; }
    }
    return true;
}

function solution(n, k) {
    let count = 0;

    n = n.toString(k).split(/0{1,}/);
    n.forEach( elem => {
        if( isPrimeNumber(Number(elem)) ){ count++; }
    })
    return count;
}

solution(100000, 10);