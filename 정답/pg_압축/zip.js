const Index = [
    { char: 'A', index: 1 },
    { char: 'B', index: 2 },
    { char: 'C', index: 3 },
    { char: 'D', index: 4 },
    { char: 'E', index: 5 },
    { char: 'F', index: 6 },
    { char: 'G', index: 7 },
    { char: 'H', index: 8 },
    { char: 'I', index: 9 },
    { char: 'J', index: 10 },
    { char: 'K', index: 11 },
    { char: 'L', index: 12 },
    { char: 'M', index: 13 },
    { char: 'N', index: 14 },
    { char: 'O', index: 15 },
    { char: 'P', index: 16 },
    { char: 'Q', index: 17 },
    { char: 'R', index: 18 },
    { char: 'S', index: 19 },
    { char: 'T', index: 20 },
    { char: 'U', index: 21 },
    { char: 'V', index: 22 },
    { char: 'W', index: 23 },
    { char: 'X', index: 24 },
    { char: 'Y', index: 25 },
    { char: 'Z', index: 26 },
]

function findW (msg, Index) {  //일치하는 가장 긴 문자열 index
    for(let i = Index.length - 1; i >= 0; i--) {
        if(msg.indexOf(Index[i].char) === 0) return Index[i];
    }
}

function solution(msg) {    
    let answer = [];
    let w, c;
    let index = 27;

    let start = end = 0;
    while(msg.length > 0) {  
        w = findW(msg, Index);
        answer.push(w.index);
        msg = msg.replace(w.char, "");
        c = msg[0];
        c ? Index.push({ char: w.char + c, index: index++ }) : 0;
    }
    return answer;
}

solution("THATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITIS");

//KAKAO와 일치하는 가장 긴 문자열 => K