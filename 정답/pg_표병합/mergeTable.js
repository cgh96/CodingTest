function solution(commands) {
  const answer = [];
  const table = new Array(51)
    .fill()
    .map((e, i) => new Array(51).fill().map((_, j) => ["", [i, j]]));

  for (let cmd of commands) {
    const command = cmd.split(" ");

    if (command[0] === "UPDATE") {
      update(command, table);
      continue;
    }
    if (command[0] === "MERGE") {
      merge(command, table);
      continue;
    }
    if (command[0] === "UNMERGE") {
      unmerge(command, table);
      continue;
    }
    if (command[0] === "PRINT") {
      const value = print(command, table);
      answer.push(value === "" ? "EMPTY" : value);
      continue;
    }
  }
  return answer;
}

function update(command, table) {
  if (command.length === 4) {
    const [cmd, r, c, value] = command;
    const [parentR, parentC] = table[+r][+c][1];

    for (let row of table) {
      row = row.map((e) => {
        if (e[1][0] === parentR && e[1][1] === parentC) {
          e[0] = value.toString();
        }
        return e;
      });
    }
    return;
  }

  const [cmd, prevValue, newValue] = command;
  for (let row of table) {
    row = row.map((e) => {
      if (e[0] === prevValue.toString()) {
        e[0] = newValue.toString();
      }
      return e;
    });
  }
  return;
}

function merge(command, table) {
  const [cmd, r1, c1, r2, c2] = command;
  const [parentR1, parentC1] = table[+r1][+c1][1];
  const [parentR2, parentC2] = table[+r2][+c2][1];

  if (parentR1 === parentR2 && parentC1 === parentC2) return; // 둘이 병합된 상태 혹은 같은 위치
  if (table[+r1][+c1][0] === "" && table[+r2][+c2][0] !== "") {
    // value2 값이 있는 경우
    for (let row of table) {
      row = row.map((e) => {
        if (e[1][0] === parentR1 && e[1][1] === parentC1) {
          e[0] = table[+r2][+c2][0];
          e[1] = table[+r2][+c2][1];
        }
        return e;
      });
    }
    return;
  }

  for (let row of table) {
    // 둘 다 값이 존재하거나 없거나, r1만 존재하거나
    row = row.map((e) => {
      if (e[1][0] === parentR2 && e[1][1] === parentC2) {
        e[0] = table[+r1][+c1][0];
        e[1] = table[+r1][+c1][1];
      }
      return e;
    });
  }
  return;
}

function unmerge(command, table) {
  const [cmd, r, c] = command; // unmerge r c
  const [parentR, parentC] = table[+r][+c][1];
  let currentTargetValue = "";

  if (table[+r][+c][0] !== "") {
    currentTargetValue = table[+r][+c][0];
  }

  for (let row = 1; row < 51; row++) {
    table[row] = table[row].map((e, col) => {
      if (
        table[row][col][1][0] === parentR &&
        table[row][col][1][1] === parentC
      ) {
        table[row][col][0] = "";
        table[row][col][1] = [row, col];
      }
      if (row === +r && col === +c) {
        table[row][col][0] = currentTargetValue;
      }
      return table[row][col];
    });
  }
}

function print(command, table) {
  const [cmd, r, c] = command;
  return table[+r][+c][0];
}
