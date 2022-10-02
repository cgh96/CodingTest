function makeArray(arr) {
    arr = arr.map( (elem, idx) => {
        if(idx === arr.length - 1) { return 0; }
        else {
            elem += arr[idx+1];
            return /[^a-z]/.test(elem) ? 0 : elem;
        }
    });
    arr.pop();
    return [...arr];
}

function solution(str1, str2) {
    let stack = [];
    let zero = 0;
    let intersection = 0;
    let union = 0;

    str1 = makeArray(str1.toLowerCase().split(""));
    str2 = makeArray(str2.toLowerCase().split(""));
    
    zero+=str1.filter(elem => elem === 0).length;
    zero+=str2.filter(elem => elem === 0).length;
    if(zero === str1.length + str2.length) {
        return 65536;
    }
    console.log(str1, str2);
    for(let str of str1) {
        if(!stack.includes(str) && str !== 0) {
            stack.push(str);
        }
    }
    for(let str of str2) {
        if(!stack.includes(str) && str !== 0) {
            stack.push(str);
        }
    }

    for(let elem of stack) {
        intersection += Math.min(
                            str1.filter(str => str === elem).length, 
                            str2.filter(str => str === elem).length
                        );
    }

    if(intersection === 0) { return 0; }
    union = str1.length + str2.length - zero - intersection;
    if(union === 0) { return  65536; }
    return Math.floor(intersection / union * 65536);
}

solution("A+C", "DEF");

//J(A, B)  => 교집합 / 합집합
//A, B 모두 공집합 => 1

//출력 => 65536 * J 정수부

//A+C DEF