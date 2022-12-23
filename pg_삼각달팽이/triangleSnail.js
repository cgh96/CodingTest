function maxLength(level) {
    let total = 0;

    for(let i = 1; i <= level; i++) {
        total += i;
    }
    return total + 1;
}

function solution(n) {
    const length = maxLength(n);
    let triangle = new Array(length).fill(0);
    let level = 1;
    let current = 1;
    let value = 1;
    let isfull = false;
    triangle[1] = 1;

    while(!isfull) {

        if(triangle[current + level] !== 0) { isfull = true; }

        while(triangle[current + level] === 0) {
            current += level;
            triangle[current] = ++value;
            level++;
        }
        
        if(triangle[current + 1] !== 0) { isfull = true; }

        while(triangle[current + 1] === 0) {
            triangle[++current] = ++value;
        }
        
        if(triangle[current - level] !== 0) { isfull = true; }

        while(triangle[current - level] === 0) {
            current -= level;
            triangle[current] = ++value;
            level--;
        }

    }
    triangle.splice(0, 1);
    return triangle;
}

solution(5);

/**
 * 10
 * 6
 * 3
 */