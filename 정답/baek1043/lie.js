"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, M] = input[0].split(" ").map((e) => +e);
let [knowingPeoleCnt, ...knowingPeopleList] = input[1]
  .split(" ")
  .map((e) => +e);
const peoplePerParty = input.slice(2).map((e) => e.split(" ").map((e) => +e));
let answer = 0;

// 계속 파티 순회
// knowingPeople에 값이 안들어갈때까지
let isFinished = false;

let canExaggerate = new Array(M).fill(true);

while (!isFinished) {
  let thereIsKnowingTrue = false;
  for (let i = 0; i < M; i++) {
    const [participantCnt, ...participantList] = peoplePerParty[i];

    if (isThereKnowingTrue(knowingPeopleList, participantList)) {
      const newKnowingPeople = participantList.filter(
        (e) => !knowingPeopleList.includes(e)
      );
      const currentKnowingPeopleCnt = knowingPeopleList.length;

      knowingPeopleList = [...knowingPeopleList, ...newKnowingPeople];
      canExaggerate[i] = false;

      if (currentKnowingPeopleCnt !== knowingPeopleList.length) {
        thereIsKnowingTrue = true;
      }
    }
  }

  if (!thereIsKnowingTrue) {
    isFinished = true;
  }
}

console.log(canExaggerate.filter((e) => e).length);

function isThereKnowingTrue(knowingPeopleList, participantList) {
  for (let i = 0; i < knowingPeopleList.length; i++) {
    if (participantList.includes(knowingPeopleList[i])) {
      return true;
    }
  }
  return false;
}
