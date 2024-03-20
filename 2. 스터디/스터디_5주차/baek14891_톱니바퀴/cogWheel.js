"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n");

const WHEELS = [[], ...input.splice(0, 4).map((e) => e.split("").map(Number))];
const K = +input.splice(0, 1);
const ROTATE_INFO = input.map((e) => e.split(" ").map(Number));

const LEFT_IDX = 6;
const RIGHT_IDX = 2;

for (let i = 0; i < K; i++) {
  const [wNum, dir] = ROTATE_INFO[i];

  const WHEEL_ROTATION_CHECK = new Array(5).fill(0);
  WHEEL_ROTATION_CHECK[0] = null;
  WHEEL_ROTATION_CHECK[wNum] = dir;

  checkLeftWheel(wNum, WHEELS, WHEEL_ROTATION_CHECK, dir);
  checkRightWheel(wNum, WHEELS, WHEEL_ROTATION_CHECK, dir);

  for (let wheelNum = 1; wheelNum < WHEEL_ROTATION_CHECK.length; wheelNum++) {
    const rotateDirection = WHEEL_ROTATION_CHECK[wheelNum];

    if (rotateDirection === 0) continue;
    if (rotateDirection === 1) {
      WHEELS[wheelNum] = rotateClockDirection(WHEELS[wheelNum]);
    }
    if (rotateDirection === -1) {
      WHEELS[wheelNum] = rotateCounterClockDirection(WHEELS[wheelNum]);
    }
  }
}

console.log(calculatePoints(WHEELS));

function calculatePoints(WHEELS) {
  let point = 0;

  for (let i = 1; i < WHEELS.length; i++) {
    const twelveClock = WHEELS[i][0];
    if (twelveClock === 1) {
      point += 2 ** (i - 1);
    }
  }

  return point;
}

function checkLeftWheel(wheelNum, WHEELS, WHEEL_ROTATION_CHECK, dir) {
  if (wheelNum === 1) {
    return WHEEL_ROTATION_CHECK;
  }

  if (WHEELS[wheelNum][LEFT_IDX] === WHEELS[wheelNum - 1][RIGHT_IDX]) {
    WHEEL_ROTATION_CHECK[wheelNum - 1] = 0;
    return WHEEL_ROTATION_CHECK;
  }

  WHEEL_ROTATION_CHECK[wheelNum - 1] = -dir;
  return checkLeftWheel(wheelNum - 1, WHEELS, WHEEL_ROTATION_CHECK, -dir);
}

function checkRightWheel(wheelNum, WHEELS, WHEEL_ROTATION_CHECK, dir) {
  if (wheelNum === 4) {
    return WHEEL_ROTATION_CHECK;
  }

  if (WHEELS[wheelNum][RIGHT_IDX] === WHEELS[wheelNum + 1][LEFT_IDX]) {
    WHEEL_ROTATION_CHECK[wheelNum + 1] = 0;
    return WHEEL_ROTATION_CHECK;
  }

  WHEEL_ROTATION_CHECK[wheelNum + 1] = -dir;
  return checkRightWheel(wheelNum + 1, WHEELS, WHEEL_ROTATION_CHECK, -dir);
}

function rotateClockDirection(wheel) {
  return [wheel[wheel.length - 1], ...wheel.slice(0, 7)];
}
function rotateCounterClockDirection(wheel) {
  return [...wheel.slice(1), wheel[0]];
}

/**
 * -1 : 반시계, 1 : 시계
 * N : 0
 * S : 1
 * -- 맞닿는 부분
 * 1번 : 2
 * 2번 : 2, 5
 * 3번 : 2, 5
 * 4번 : 2
 */
