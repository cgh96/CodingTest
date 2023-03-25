class User {
    constructor() {
        this.reportUser = [],
        this.mailCount = 0;
    }
}

function solution(id_list, report, k) {
    var answer = [];
    let countList = new Map();
    let userList = new Map();
    report = [...new Set(report)];
    
    for(let elem of id_list) {
        userList.set(elem, new User());
    }

    for(let repo of report) {
        countList.set(repo.split(" ")[1], 0);
    }

    for(let repo of report) {
        const repoUser = repo.split(" ")[0];
        const stopUser = repo.split(" ")[1];

        countList.set(stopUser, countList.get(stopUser) + 1);

        const reported = userList.get(repoUser);
        reported.reportUser.push(stopUser);
        
        userList.set(repoUser, reported);
    }

    for(let elem of countList.keys()) {
        const count = countList.get(elem);
        
        if(count >= k) {
            for(let i of userList.keys()) {
                const user = userList.get(i);
                const array = user.reportUser;
                if(array.find(x => x === elem)) {
                    user.mailCount++;
                    userList.set(i, user);
                }
            }
        }
    }

    for(let value of userList.values()) {
        answer.push(value.mailCount);
    }
    console.log(answer);

    return answer;
}


solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
    2
);

//신고 횟수 제한 X
//동일 유저 신고 1회처리
//K번  이상 신고 => 게시판 이용 정지, 해당 유저 신고한 모든 유저에게 메일 발송