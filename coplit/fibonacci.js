 function fibonacci(n) {
  // if (n <= 1) return n;
  // return fibonacci(n - 1) + fibonacci(n - 2); 
  const memo = [0, 1];
  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
}
//fibonacci(0)=== 0
  //fibonacci(1)=== 1
  //fibonacci(2)=== 0 + 1 === 1
  //fibonacci(3)=== 1 + 1 === 2
  //fibonacci(4)=== 1 + 2 === 3
  //fibonacci(5)=== 2 + 3 === 5
  
