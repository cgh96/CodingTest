function solution(new_id) {
    let answer = new_id
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\.\-\_]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15).replace(/\.$/g, '');

    console.log(answer);
    return answer.length > 2 ? answer : answer + answer.charAt(answer.lenth - 1).repeat(3 - answer.length);
}

solution("...!@BaT#*..y.abcdefghijklm");