function solution(s) {
    let answer = [];
    s = s.replace(/{{2}/g, "")
    .replace(/}{2}/g, "")
    .split("},{")
    .sort( (a, b) => a.length - b.length)
    .map(elem => elem.split(",") );

    for(let i = 0; i < s.length; i++ ) {
        if(i === 0) { answer.push(Number(s[i][0])); } 
        else {
            answer.forEach(elem => {
                s[i].splice(s[i].findIndex(e => e === elem.toString() ), 1)
            })
            answer.push(Number(s[i][0]));
        }
    }
    return answer;
}

solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");