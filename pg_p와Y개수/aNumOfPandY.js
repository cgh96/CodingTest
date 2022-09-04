function solution(s){
    s = s.toLowerCase();
    let pNum = s.split("").filter(elem => elem === "p").length;
    let yNum = s.split("").filter(elem => elem === "y").length;

    return pNum === yNum ? true : false;
}

solution("pPoooyY");