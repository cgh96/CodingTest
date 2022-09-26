function solution(citations) {
    let h = citations.length;
    while(h > 0) {
        if(h <= citations.filter(elem => elem >= h).length) {
            return h;
        }
        h--;
    }
    return h;
}

solution([1, 1, 1, 1]);

//13 10 9 7 3 1 0
//10 10 10 10