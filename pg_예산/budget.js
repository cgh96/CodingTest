function solution(d, budget) {
    let cost = 0;
    d = d.sort((a, b) => a - b);
    
    for(let i = 0; i < d.length; i++) {
        if(d[i] + cost <= budget) {
            cost += d[i];
        } else {
            return i;
        }
    }
    return d.length;
}

solution([1,3,2,5,4], 9);

//1 2 5 6 