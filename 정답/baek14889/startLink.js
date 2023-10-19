"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const peopleCnt = +input[0];
const halfCnt = peopleCnt / 2;
const table = input.slice(1).map((e) => e.split(" ").map((i) => +i));
const isPicked = new Array(peopleCnt).fill(0);

let minDiff = Number.MAX_SAFE_INTEGER;

pickPerson(0, 0);

console.log(minDiff);

function pickPerson(pickCnt, picked) {
  if (pickCnt === halfCnt) {
    const { teamA, teamB } = divideTeam();
    const { scoreA, scoreB } = getScore(teamA, teamB);

    minDiff = Math.min(minDiff, Math.abs(scoreA - scoreB));
    return;
  }

  for (let i = picked; i < peopleCnt; i++) {
    isPicked[i] = 1;
    pickPerson(pickCnt + 1, i + 1);
    isPicked[i] = 0;
  }
}

function divideTeam() {
  const teamA = [];
  const teamB = [];

  for (let i = 0; i < peopleCnt; i++) {
    if (isPicked[i]) {
      teamA.push(i);
    } else {
      teamB.push(i);
    }
  }

  return { teamA, teamB };
}

function getScore(teamA, teamB) {
  let scoreA = 0;
  let scoreB = 0;

  for (let i = 0; i < halfCnt; i++) {
    for (let j = i + 1; j < halfCnt; j++) {
      scoreA += table[teamA[i]][teamA[j]] + table[teamA[j]][teamA[i]];
      scoreB += table[teamB[i]][teamB[j]] + table[teamB[j]][teamB[i]];
    }
  }

  return { scoreA, scoreB };
}
