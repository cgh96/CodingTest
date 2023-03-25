function solution(n, words) {
    let count = new Array(n).fill(0);
    count[0]++;
    let table = [];
    table.push([words[0], words[0].charAt(words[0].length - 1)]);
    let answer =[];
    
    for(let i = 1; i < words.length; i++) {
        count[i % n]++;
        if(table.find(elem => elem[0] === words[i]) || table[i-1][1] !== words[i][0]) {
            answer.push(i % n + 1);
            answer.push(count[i % n]);
            break;
        }
        table.push([ words[i], words[i].charAt(words[i].length - 1) ]);
    }
    return answer.length == 0 ? [0, 0] : answer;
}

solution(4, ["never", "now", "world", "wraw", "wwww", "wase", "esdf", "sdss"]);