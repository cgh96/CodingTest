function solution(numbers) {
    numbers = numbers.map(num => {
        let str = ("0" + num.toString(2)).split("");

        let zeroIndex = str.lastIndexOf("0");
        
        if(zeroIndex === str.length - 1) {
            str[str.length - 1] = "1";     
        } else {
            str[zeroIndex] = "1";
            str[zeroIndex + 1] = "0";
        }
        return parseInt(str.join(""), 2);
    })
    return numbers;
}

solution([2,7]);

// x < numbers

/**
 * 1000
 * 0100
 * 10111 11011
 * 0111 => 1011
 * 11011
 * 
 */