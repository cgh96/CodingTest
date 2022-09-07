function solution(s) {
    s = s
        .split(" ").map(elem => elem = elem.split(""))
        .map(elem => {
            for(let i = 0; i < elem.length; i++) {
                elem[i] = i % 2 == 0 ? elem[i].toUpperCase() : elem[i].toLowerCase(); 
            }
            return elem.join("");
        })
        .join(" ");

    return s;
}

solution("try hello world");

//각 단어의 짝수번째 => 대문자, 홀수번째 => 소문자