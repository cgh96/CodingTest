function solution(arr1, arr2) {
    let arr = arr1.map( (el, idx) => {
        return el.map( (_el, _idx) =>
                     _el += arr2[idx][_idx]
                );
    })
    return arr;
}

solution([[1,2], [2,3], [3,4]], [[3,4], [5,6], [6,7]]);