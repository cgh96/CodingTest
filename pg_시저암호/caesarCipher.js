function solution(s, n) {
    s = s
        .split("")
        .map( elem => {
           if(elem.charCodeAt() === 90) {
                return elem = String.fromCharCode(64 + n);
           } else if(elem.charCodeAt() === 122) {
                return elem = String.fromCharCode(96 + n);
           } else if (elem === " ") {
                return elem;
           } else {
                elem = elem.charCodeAt() + n;
                return elem = String.fromCharCode(elem);
           }
        }).join("");
    console.log(s);
    return s;
}

solution("A Bc", 3);