function solution(k, tangerine) {
    let count = 0;
    let answer = 0;
    let table = new Map();

    for(let t of tangerine) {
        if(table.get(t)) {
            table.set(t, table.get(t) + 1);
        } else {
            table.set(t, 1);
        }
    }

    table = [...table.entries()]
            .sort( (a, b) => b[1] - a[1]);

    for(let i = 0; i < table.length; i++) {
        count += table[i][1];
        if(count >= k) {
            return answer = i + 1;
        }
    }
}


solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);