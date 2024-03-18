function solution(n, times) {
  const sorted = times.sort((a, b) => a - b);
  let start = 1;
  let end = sorted[sorted.length - 1] * n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const totalPeople = times.reduce(
      (acc, cur) => acc + Math.floor(mid / cur),
      0
    );

    if (totalPeople < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
