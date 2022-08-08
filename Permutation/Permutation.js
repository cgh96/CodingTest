//Permutation(순열)

function factorial(k) {
    if(k === 1) return 1;

    return k * factorial(k - 1);
}

function permutation(n, r) {
   return factorial(n) / factorial(n - r);
}

console.log(permutation(7, 3));