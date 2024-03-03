"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const TABLE = input.slice(1).map((e) => e.split(" ").map((i) => +i));

const dp = new Array(N + 1).fill(0);

for (let today = 0; today < N; today++) {
  const [time, pay] = TABLE[today];

  if (today > 1) {
    dp[today] = Math.max(dp[today - 1], dp[today]);
  }

  if (today + time <= N) {
    dp[today + time] = Math.max(dp[today + time], dp[today] + pay);
  }

  console.log(`DAY ${today + 1} : ${dp}`);
}

console.log(Math.max(...dp));

/**
 * dp[i] = i - 1일까지 일했을 때 얻을 수 있는 최대 수익
 *
 *
 * dp[today + time] = Max(dp[today + time], dp[today] + pay)
 * 위 점화식만 실행할 경우 중간에 수익이 업데이트 되지 않는 구간이 생김. (내가 정의한 dp[i]와 부합하지 않음)
 * Max(dp[i - 1], dp[i])업데이트를 먼저 해주고 점화식 실행
 */
