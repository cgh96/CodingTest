function solution(expression) {
    let priority = [
        ["+", "-", "*"],
        ["+", "*", "-"],
        ["-", "+", "*"],
        ["-", "*", "+"],
        ["*", "+", "-"],
        ["*", "-", "+"],
    ];

    let numbers = expression.split(/\W/).map(elem => Number(elem));
    let optr = expression.replace(/[0-9]/g, "").split("");
    let answer = 0;

    for(let i = 0; i < priority.length; i++) {
        const copyNum = [...numbers];
        const copyOpt = [...optr];

        for(let j = 0; j < priority[i].length; j++) {
            while(true) {
                const opt = copyOpt.findIndex(elem => elem === priority[i][j]);
                if(opt === -1) { break; }

                if(copyOpt[opt] === "+") {
                    copyNum.splice(opt, 2, copyNum[opt] + copyNum[opt + 1])
                    copyOpt.splice(opt, 1);
                } else if(copyOpt[opt] === "-") {
                    copyNum.splice(opt, 2, copyNum[opt] - copyNum[opt + 1])
                    copyOpt.splice(opt, 1);
                } else {
                    copyNum.splice(opt, 2, copyNum[opt] * copyNum[opt + 1])
                    copyOpt.splice(opt, 1);
                }
            }
        }
        answer = answer < Math.abs(copyNum[0]) ? Math.abs(copyNum[0]) : answer;
    }
    return answer;
}

solution("100-200*300-500+20")

/**
 * 100, 200, 300, 500, 20
 * -, *, -, + 
 * 
 * 100 300 500 20
 * *, -, +
 */