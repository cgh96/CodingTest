let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

function solution(record) {
    let state = {};
    let final = [];
    for(let i = 0; i<record.length; i++){
        let message = record[i].split(" ");
        let id = message[1];
        let nick = message[2];

       if(nick) { state[id] = nick; }
    }


    for(let i = 0; i<record.length; i++){
        let action = record[i].split(' ')[0];
        if(action === 'Enter'){
            final.push(`${state[record[i].split(' ')[1]]}이 들어왔습니다.`);
        }else if(action === 'Leave'){
            final.push(`${state[record[i].split(' ')[1]]}이 나갔습니다.`)
        }
    }
    return final;
}

solution(record);