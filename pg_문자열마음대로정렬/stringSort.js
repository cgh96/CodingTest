function solution(strings, n) {
    strings = strings.sort( (a, b) => {
            if(a[n] < b[n]) return -1;
            if(a[n] > b[n]) return 1;
            if(a[n] === b[n]) {
                if(a <= b) return -1;
            }
        }
    )
   
    return strings;
}

solution(["sun", "bed", "car"], 1);