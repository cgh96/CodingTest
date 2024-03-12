"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const EGGS = input.slice(1).map((e) => e.split(" ").map((i) => +i));

let pick = 0; // 처음 뽑는 계란 번호
let maxDestroyed = 0;

pickAndHitEggs(pick);
console.log(maxDestroyed);

function pickAndHitEggs(pick) {
  if (pick === N) {
    const destroyedEggs = EGGS.filter((egg) => egg[0] <= 0).length;
    maxDestroyed = Math.max(maxDestroyed, destroyedEggs);
    return;
  }

  let isHitEgg = false;
  for (let target = 0; target < N; target++) {
    if (target === pick || EGGS[pick][0] <= 0 || EGGS[target][0] <= 0) continue;
    isHitEgg = true;
    hitEgg(pick, target);
    pickAndHitEggs(pick + 1);
    recoverEgg(pick, target);
  }

  if (!isHitEgg) {
    pickAndHitEggs(pick + 1);
  }
}

function hitEgg(pick, target) {
  EGGS[pick][0] -= EGGS[target][1];
  EGGS[target][0] -= EGGS[pick][1];
}

function recoverEgg(pick, target) {
  EGGS[pick][0] += EGGS[target][1];
  EGGS[target][0] += EGGS[pick][1];
}

/**
 * 계란 => 내구도, 무게
 * 내구도 => 상대 계란 무게 만큼 까인다.
 *
 * 계란을 왼쪽 부터 뽑는다. => pick
 * 0번을 들어서 1 ~ N - 1번을 깬 모든 경우의 수를 구해야 한다.
 * 가장 오른쪽에 갔을 때, destroy가 최대 인 값으로 업데이트
 */
