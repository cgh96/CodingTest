function solution(skill, skill_trees) {
    let count = 0;
    let str = new RegExp(`[^${skill}]`, "g");

    skill = skill.split("");
    skill_trees = skill_trees.map( elem => {
        return elem.replace(str, "");
    })


    for(let s of skill_trees) {
        let check = 0;
        s.split("").forEach( (elem, index) => elem === skill[index] ? check++ : 0);
        check === s.split("").length ? count++ : 0;
    }
    return count;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])
//C B D
//B A C D E
//2 0 3