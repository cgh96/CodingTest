function solution(elements) {
    let table = [[0]];
    let array = [];
    let answer = 0;

    for(let i = 1; i <= elements.length; i++) {
      if(i === 1) {
        table.push([...elements]);
      } else if(i === elements.length) {
        table.push([ elements.reduce( (acc, cur) => acc + cur) ]);
      } else {
        table.push(makeSumOfSeqOfNum (table, i));
      }
    }
    table.forEach(elem => {
        array.push(...elem);
    })
    array = [...new Set(array)];
    return array.length - 1;
}

function makeSumOfSeqOfNum (table, i) {;
    let sum = [];
    for(let index = 0; index < table[i - 1].length; index++) {
        sum.push(table[i - 1][index] + table[1][ (index + i - 1) % table[i - 1].length ]);
    }
    return [...sum];
}
//i = 3         index=0 ~ elements.length - 1   
solution([7, 9, 1, 1, 4]);

/**
  7 9 1 1 4

F(1) = [7, 9, 1, 1, 4]
F(2) = [16, 10, 2, 5]      =>       F(1)[index] + F(1)[index + 1] 
F(3) = [17, 11, 6, 12]     =>       F(2)[index] + F(1)[index + 2]
F(4) = [18, 15, 13, 21]     =>      F(3)[index] + F(1)[index + 3]
F(5) = [22, 22, ]
i개를 뽑을 때
F(i - 1)[index] + F(1)[index + i - 1]
 */ 