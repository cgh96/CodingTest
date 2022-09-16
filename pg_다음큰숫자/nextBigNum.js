function oneCount (n) {
    return n.toString(2).split("").filter(elem => elem === "1").length;
}

function solution(n) {
    let binaryN = oneCount(n);
    
    while(true) {
        n++;
        if(binaryN === oneCount(n)) { return n; }
    }
}

solution(78);