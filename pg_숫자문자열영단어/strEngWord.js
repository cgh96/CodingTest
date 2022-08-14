function solution(s) {
    let eng = [ 
        ['zero', 0], 
        ['one', 1], 
        ['two', 2], 
        ['three', 3], 
        ['four', 4], 
        ['five', 5],
        ['six', 6], ['seven', 7],
        ['eight', 8], 
        ['nine', 9] 
    ];

    for(let num of eng) {
        while(s.includes(num[0])) {
            s = s.replace(num[0], num[1]);        
        }
    }
    console.log(s);
    return Number(s);
}


solution("one4sevenoneeight");