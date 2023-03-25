function stepTwo(w) {
    let cnt = 0;
    let prev = "";
    let next = "";

    for(let i = 0; i < w.length; i++) {
        w[i] === "(" ? cnt ++ : cnt --;

        if(i > 0 && cnt === 0) {
            prev = w.slice(0, i + 1);
            next = w.slice(i + 1);
            break;
        }
    }
    return [prev, next];
}

function check(w) {
    let cnt = 0;

    for(let i = 0; i < w.length; i++) {
        w[i] === "(" ? cnt++ : cnt--;
        if(cnt < 0) { return false; }
    }

    return cnt === 0 ? true : false;
}


function solution(p) {

    function order(w) {
        if(w === "") { return "" }  //step 1
        if(check(w)) { return w }

        let [prev, next] = stepTwo(w) // step 2

        if(check(prev)) {
           prev += order(next);
           return prev;
        } else {
            prev = prev.slice(1, prev.length - 1);
            prev = prev.split("").map( elem => elem === ")" ? "(" : ")" ).join("");
            return "(" + order(next) + ")" + prev;
        }
    }

    return order(p);
}

solution("()))((()");

/**
 * ()
 * (())()
 * 
 * ()
 * ()()
 * 
 * ()
 * ()
 * 
 * ()
 * ""
 */