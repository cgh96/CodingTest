//Combination(조합)

function factorial(k) {
    if(k === 1) return 1;

    return k * factorial(k - 1);
}

function Combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n-r));
}

console.log(Combination(7, 3));