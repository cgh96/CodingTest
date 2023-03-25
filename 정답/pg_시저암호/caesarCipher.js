function solution(s, n) {
    s = s
        .split("")
        .map( elem => {
            if(elem.charCodeAt() >= 65 && elem.charCodeAt() <= 90) { //대문자
                if(elem.charCodeAt() + n > 90) {
                    elem = elem.charCodeAt() + n - 26;
                    return String.fromCharCode(elem);
                }
                elem = elem.charCodeAt() + n;
                return String.fromCharCode(elem);
            } else if(elem === " "){
                return elem;
            }else {
                //소문자
                if(elem.charCodeAt() + n > 122) {
                    elem = elem.charCodeAt() + n -26;
                    return String.fromCharCode(elem);
                }
                elem = elem.charCodeAt() + n;
                return String.fromCharCode(elem);
            }
        }).join("");
    return s;
}

solution("A Bc", 3);