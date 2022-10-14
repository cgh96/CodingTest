function solution(files) {
    files = files.map(elem => elem.replace(/[0-9]{1,}/, ch => `+${ch}+`).split("+") )
    .sort( (a, b) => {
        if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
        if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
        if(a[0].toLowerCase() === b[0].toLowerCase()) {
            if(Number(a[1]) > Number(b[1])) return 1;
            if(Number(a[1]) < Number(b[1])) return -1;
            if(Number(a[1]) === Number(b[1])) return 0;
        }
    }).map(elem => elem.join(""));
    return files;
}

solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]);
/**
 F-     5       Freedom Fighter
 B-     50      Superfortress
 A-     10      Thunderbolt II
 F-     14      Tomcat
 */