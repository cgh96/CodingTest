"use strict";
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const [n, ...arr] = fs.readFileSync("./baek1010/example.txt").toString().trim().split("\n");

arr.map(v => v.split(' ').map(x => +x)).forEach(y => {
  bridge(y[0], y[1]);
})


function bridge(k, n) {

  let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

  dp[0][0] = 1;
  dp[1][0] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        dp[i][j] = 1
      }
      else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]);
    }
  }

  console.log(dp);
  console.log(dp[n][k]);
}