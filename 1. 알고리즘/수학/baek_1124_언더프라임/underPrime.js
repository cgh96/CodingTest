"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);

const { count, sieve } = getPrimeNumberCountWithSieve(B);
console.log(getMaxCountInPrimeNumberMultiplication(A, B, count, sieve));

function getPrimeNumberCountWithSieve(limit) {
  const count = new Array(limit + 1).fill(0);
  const sieve = new Array(limit + 1).fill(true);

  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= limit; i++) {
    if (!sieve[i]) continue;

    /**
     * 2를 제외하고 4, 6, 8... 제거
     * 3을 제외하고 3, 6, 9... 제거
     * 5를 제외하고 10, 15, 20... 제거
     */
    for (let j = i * 2; j <= limit; j += i) {
      sieve[j] = false;
      let tmp = j;
      while (tmp % i == 0) {
        tmp /= i;
        count[j]++;
      }
    }
  }

  return { count, sieve };
}

function getMaxCountInPrimeNumberMultiplication(min, max, count, sieve) {
  let maxCount = 0;

  for (let i = min; i <= max; i++) {
    if (sieve[count[i]]) maxCount++;
  }

  return maxCount;
}
/**
 * 1. 에라토스테네스의 채로 소수를 구한다.
 * 2. DP리스트를 만들어 해당하는 수가 소수로 나누어지는 확인한다.
 */
