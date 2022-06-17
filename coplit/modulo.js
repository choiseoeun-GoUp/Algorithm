function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  // for문으로 돌아서 num1만큼돌고 그안에서 num2를 지속적으로 빼준다 더이상 안빠질때의 값을 반환
  let result = 0;
  if(num2 === 0) return 'Error: cannot divide by zero'
  for(let i = 0;i < num1;i++ ){
    result = num1-(num2 * i)
    if(result < num2) break;
  }
  return result;
}
