function solution(sizes) {
    let width = [];
    let height = [];

    for(let [w, h] of sizes) {
        if( w < h ) { [w, h] = [h, w]; }
        width.push(w);
        height.push(h);
    }

    return Math.max(...width) * Math.max(...height);
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]]);
