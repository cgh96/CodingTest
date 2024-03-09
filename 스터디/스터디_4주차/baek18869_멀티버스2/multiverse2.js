"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N] = input[0].split(" ").map((ch) => Number(ch));

  //중복은 피하기 위해 최소 인덱스를 반환
  function find_order(target, sorted) {
    let left = 0;
    let right = sorted.length - 1;
    let ans = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (sorted[mid] >= target) {
        if (sorted[mid] === target) {
          ans = mid;
        }
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }

  const spaces = input.slice(1).map((line) => {
    const pos_arr = line.split(" ").map((ch) => Number(ch));
    const sorted = [...pos_arr].sort((a, b) => a - b);
    return pos_arr.map((num) => find_order(num, sorted)).join("");
  });

  let ans = 0;

  for (let a = 0; a < M - 1; a++) {
    for (let b = a + 1; b < M; b++) {
      const spaceA = spaces[a];
      const spaceB = spaces[b];
      if (spaceA === spaceB) {
        console.log(spaceA, spaceB);
        ans++;
      }
    }
  }

  return ans;
}

console.log(solution(input));

/**
 * @좌표압축 : 크기를 비교해서 idx로 변환
 * 1. 정렬된 배열 sortedSpace, 기본 배열 space
 * 2. space를 순회하면 각 값을 sortedSpace찾는다. 이분탐색
 * 3. ortedSpace의 idx로 교체
 */
