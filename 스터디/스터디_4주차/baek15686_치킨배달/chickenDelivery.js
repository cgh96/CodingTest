"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const MAP = input.slice(1).map((e) => e.split(" ").map(Number));
const [homes, chickens] = makeChickenAndHomeList(MAP);

let CITY_CHICKEN_DISTANCE = Number.MAX_SAFE_INTEGER;
const SELECTED = new Array(chickens.length).fill(false);

pickChickens([], chickens, M);
console.log(CITY_CHICKEN_DISTANCE);

function pickChickens(select, chickens, M) {
  if (select.length === M) {
    let cityChickenDist = 0;

    for (let home of homes) {
      const minChickenDist = getMinChickenDistance(home, select);
      cityChickenDist += minChickenDist;
    }

    CITY_CHICKEN_DISTANCE = Math.min(CITY_CHICKEN_DISTANCE, cityChickenDist);
    return;
  }

  const lastSelect = select.length === 0 ? -1 : select[select.length - 1];

  for (let i = lastSelect + 1; i < chickens.length; i++) {
    if (SELECTED[i]) continue;
    SELECTED[i] = true;
    pickChickens([...select, i], chickens, M);
    SELECTED[i] = false;
  }
}

function getMinChickenDistance(homePos, select) {
  let minDist = Number.MAX_SAFE_INTEGER;

  for (let i of select) {
    minDist = Math.min(minDist, calculateChickenDistance(homePos, chickens[i]));
  }

  return minDist;
}

function calculateChickenDistance(homePos, chickenPos) {
  const [hx, hy] = homePos;
  const [cx, cy] = chickenPos;

  return Math.abs(hx - cx) + Math.abs(hy - cy);
}

function makeChickenAndHomeList(map) {
  const homes = [];
  const chickens = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        homes.push([i, j]);
      }

      if (map[i][j] === 2) {
        chickens.push([i, j]);
      }
    }
  }

  return [homes, chickens];
}

/**
 * 0 : 빈칸
 * 1 : 집
 * 2 : 치킨
 *
 * 1. 지도 순회
 * 2. 집 리스트 만들기
 * 3. 치킨집 리스트 만들기
 * 4. 치킨집 M개를 뽑는다.
 * 5. 각 집마다 치킨 거리를 구한다.
 * 6. 최소값이면 업데이트
 */
