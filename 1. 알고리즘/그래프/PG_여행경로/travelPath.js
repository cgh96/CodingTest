function solution(tickets) {
  const MAP = {}
  let VISITED = {}
  const PATH = [];
  
  
  for(let [start, end] of tickets) {
      if(!MAP[start]) {
          MAP[start] = [];
          VISITED[start] = [];
      }
      
      if(!MAP[end]) {
          MAP[end] = [];
          VISITED[end] = [false];
      }
      
      MAP[start].push(end);
      VISITED[start].push(false);
      MAP[start].sort();
  }
 

  DFS("ICN", ["ICN"]);
  
  return PATH[0];
  
  function DFS(start, path) {
      if(path.length === tickets.length + 1) {
         PATH.push(path);
         return;  
      }
      const nextDests = MAP[start];
     
      for(let i = 0; i < nextDests.length; i++) {
          const next = nextDests[i];
          if(VISITED[start][i]) continue;
          VISITED[start][i] = true;
          DFS(next, [...path, next]);
          VISITED[start][i] = false;
      }
  }
}

/**
* 1. MAP => 갈 수 있는 모든 경우의 수 파악(DFS)
*   - 종료 조건 => 모두 방문한 경우 path의 길이 => tickets.length + 1
*/