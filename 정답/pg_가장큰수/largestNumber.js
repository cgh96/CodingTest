function solution(numbers) { 
    let maxLength = 0;

    if(!numbers.find(elem => elem !== 0)) {
        return "0";
    }

    numbers = numbers.map( num => num.toString());
    numbers.sort( (a, b) => {
        return (b + a) - (a + b);
    })
    numbers = numbers.join("");
    return numbers;
}

solution([3, 30, 34, 5, 9]);


/**
 * 3 30
 * 11
 * 111
 * 110
 */