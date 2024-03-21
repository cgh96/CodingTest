"use strict";
const fs = require("fs");
const { isArrayBufferView } = require("util/types");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S, M] = input[0].split(" ").map(Number);
const VOLUME_SCOPE = [0, ...input[1].split(" ").map(Number)];

const dp = new Array(N + 1).fill().map((_) => new Array(M + 1).fill(-1));

dp[0][S] = S;

let playedSongNum = 1;

for (let song = 1; song <= N; song++) {
  for (let volume = 0; volume <= M; volume++) {
    if (dp[song - 1][volume] === -1) continue;

    const nextDecreaseVolume = volume - VOLUME_SCOPE[song];

    if (nextDecreaseVolume >= 0) {
      dp[song][nextDecreaseVolume] = nextDecreaseVolume;
    }

    const nextIncreaseVolume = volume + VOLUME_SCOPE[song];

    if (nextIncreaseVolume <= M) {
      dp[song][nextIncreaseVolume] = nextIncreaseVolume;
    }
  }
}

console.log(Math.max(...dp[N]));
/**
 * i : 볼륨 범위, j : 곡번호
 * dp[i][j] = 볼륨 i, 곡번호 j일 때 볼륨
 */
