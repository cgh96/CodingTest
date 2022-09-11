function solution(x) {
    let num = x.toString()
                .split("")
                .map(elem => Number(elem))
                .reduce( (acc, cur) => acc + cur );
    
    return x % num == 0 ? true : false;
}

solution(20);