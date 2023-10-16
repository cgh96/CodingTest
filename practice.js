let a = [1, 2, 3];

let b = changeArr(a);

console.log(a === b);

function changeArr(a) {
  a[0] = 3;
  return a;
}
