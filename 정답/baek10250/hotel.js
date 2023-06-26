"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input = input.map((e) => e.split(" ").map(Number));
const numberOfTestCase = input.splice(0, 1)[0];

for (let i = 0; i < numberOfTestCase; i++) {
  const [H, W, N] = input[i];
  const hotel = new Array(H + 1).fill().map((e) => new Array(W + 1).fill(0));

  console.log(assignGuest(N, H, W, hotel));
}

function assignGuest(order, H, W, hotel) {
  let count = 1;

  for (let w = 1; w <= W; w++) {
    for (let h = 1; h <= H; h++) {
      let XX = w < 10 ? `0${w}` : `${w}`;
      hotel[h][w] = `${h}${XX}`;
      count++;

      if (count > order) {
        return hotel[h][w];
      }
    }
  }
}

/**
 * 1. 정문으로 부터 거리가 가장 가까워야 한다.
 * 2. 거리가 같을 경우 아래층 선호 (층수 무시 => 높이 무시)
 * 3. N번째 손님의 방번호 계산
 */
