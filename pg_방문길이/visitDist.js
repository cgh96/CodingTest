function solution(dirs) {
    let path = [];
    let start = [0, 0];
    let count = 0;

    dirs = dirs.split("");
    for(let elem of dirs) {
        if(elem === "U") {
            if(start[1] === 5) { continue; }
            if(!path.find(e => e[0] === start[0] && e[1] === start[1] + 1 && e[2] === "D") 
            && !path.find(e => e[0] === start[0] && e[1] === start[1] && e[2] === "U")
            ) {
                count++;
                path.push([...start, "U"]);
                start[1]++;
                path.push([...start, "D"]);
            } else {
                start[1]++;
            }
        } else if(elem === "D") {
            if(start[1] === -5) { continue; }
            if(!path.find(e => e[0] === start[0] && e[1] === start[1] - 1 && e[2] === "U")
            && !path.find(e => e[0] === start[0] && e[1] === start[1] && e[2] === "D")
            ) {
                count++;
                path.push([...start, "D"]);
                start[1]--;
                path.push([...start, "U"]);
            } else {
                start[1]--;
            }
        } else if(elem === "R") {
            if( start[0] === 5) { continue; }
            if(!path.find(e => e[0] === start[0] && e[1] === start[1] && e[2] === "R")
            && !path.find(e => e[0] === start[0] + 1 && e[1] === start[1] && e[2] === "L")
            ) {
                count++;
                path.push([...start, "R"]);
                start[0]++;
                path.push([...start, "L"]);
            } else {
                start[0]++;
            }
        } else {
            if(start[0] === -5) { continue; }
            if(!path.find(e => e[0] === start[0] && e[1] === start[1] && e[2] === "L")
            && !path.find(e => e[0] === start[0] - 1 && e[1] === start[1] && e[2] === "R")
            ) {
                count++;
                path.push([...start, "L"]);
                start[0]--;
                path.push([...start, "R"]);
            } else {
                start[0]--;
            }
        }
    };
    return count;
}

solution("LLRR");

/**
 [x, y]
 U: [x, y + 1], D
 D: [x, y - 1], U
 R: [x + 1, y], L
 L: [x - 1, y], R
 */
