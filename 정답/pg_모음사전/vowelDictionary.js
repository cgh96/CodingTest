function solution(word) {
    let char = [ 'A', 'E', 'I', 'O', 'U', '' ];
    let dictionary = [];

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 6; j++) {
            for(let k = 0; k < 6; k++) {
                for(let l = 0; l < 6; l++) {
                    for(let m = 0; m < 6; m++) {
                        let str = char[i] + char[j] + char[k] + char[l] + char[m];
                        if(!dictionary.find(elem => elem === str)) {
                            dictionary.push(str);
                        }
                    }
                }
            }
        }
    }
    dictionary = dictionary.sort();
    return dictionary.findIndex(elem => elem === word) + 1;
}

solution("I");

/** 
  A E I O U
  A
*/